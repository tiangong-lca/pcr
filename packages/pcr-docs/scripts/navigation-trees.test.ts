import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {Agent,createServer,request as httpRequest,type IncomingHttpHeaders} from 'node:http';
import {AsyncLocalStorage} from 'node:async_hooks';
import {pathToFileURL} from 'node:url';
import {gzipSync} from 'node:zlib';
import {createProviderMiddleware} from '../../../middleware.ts';
import {prepareStaticRouteAliases} from './static-route-aliases.ts';
import {PROVIDER_RUNTIME_PATHS,NAVIGATION_RUNTIME_PATHS,providerRuntimeSourceRoot} from './provider-runtime.ts';
import {verifyNavigationTrees,planNavigationTrees,applyNavigationPlan,navigationFiles,navigationWebProof,navigationProbeFiles} from './navigation-tree-export.ts';
import {createNavigationHandler,readNavigationBody,readNavigationBinding,readNavigationManifest,readNavigationPack,verifyNavigationRow,treeRequestPath,PREFETCH_NAME,prefetchRequestPath} from '../lib/navigation-trees.ts';
const hash=(bytes:string|Uint8Array)=>createHash('sha256').update(bytes).digest('hex');
const source='a'.repeat(40),url='/en/docs/pcr/a/b/c/__next._tree.txt',body=Buffer.from('0:{"tree":"完整😀"}\n');
function fixture(){
 const bucket=hash(url)[0]!,pack=Buffer.from(JSON.stringify({schemaVersion:1,sourceCommit:source,bucket,rows:[{path:url,bytes:body.length,sha256:hash(body),data:body.toString('base64')}]}));
 const descriptor={bucket,url:'/generated/navigation/pack-'+hash(pack)+'.json',bytes:pack.length,sha256:hash(pack),rows:1};
 const manifest=Buffer.from(JSON.stringify({schemaVersion:1,sourceCommit:source,packs:[descriptor]}));
 const binding={schemaVersion:1,sourceCommit:source,manifest:{url:'/generated/navigation/manifest-'+hash(manifest)+'.json',bytes:manifest.length,sha256:hash(manifest)}};
 const assets=new Map([[descriptor.url,pack],[binding.manifest.url,manifest]]);const calls:string[]=[];
 const loader:typeof fetch=async(input)=>{const path=new URL(String(input)).pathname;calls.push(path);const bytes=assets.get(path);return bytes?new Response(bytes,{headers:{'content-type':'application/json'}}):new Response(null,{status:404});};
 return{bucket,pack,descriptor,manifest,binding,assets,calls,loader};
}
function chunkStream(chunks:readonly unknown[]):ReadableStream<unknown>{
 let index=0;
 return new ReadableStream<unknown>({pull(controller){
  if(index===chunks.length)controller.close();
  else controller.enqueue(chunks[index++]);
 }});
}
async function providerFixture(){
 const f=fixture(),root=fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(),'provider-request-binding-')));
 const sourceRoot=providerRuntimeSourceRoot(import.meta.url),close=()=>fs.rmSync(root,{recursive:true,force:true});
 try{
  for(const relative of [...PROVIDER_RUNTIME_PATHS,...NAVIGATION_RUNTIME_PATHS]){
   const target=path.join(root,relative);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(sourceRoot,relative),target);
  }
  const binding=path.join(root,'packages/pcr-docs/out/generated/navigation-binding.json');
  fs.mkdirSync(path.dirname(binding),{recursive:true});fs.writeFileSync(binding,JSON.stringify(f.binding));
  const provider:typeof import('../../../middleware.ts')=await import(pathToFileURL(path.join(root,'middleware.ts')).href);
  const respond=(request:Request,fallback?:(request:Request)=>Response)=>provider.middleware({request,next(){if(fallback)return fallback(this.request);assert.fail('Unexpected static fallthrough');},rewrite(){assert.fail('Unexpected chapter rewrite');}});
  const request=async(origin:string)=>{
   const response=await respond(new Request(origin+url));
   assert.equal(response.status,200);
   assert.deepEqual(Buffer.from(await response.arrayBuffer()),body);
  };
  return{...f,request,respond,close};
 }catch(error){close();throw error;}
}
test('bounded navigation reads preserve Unicode across every string and binary boundary',async()=>{
 const text='前😀后💧終\ud800末',expected=Buffer.from(text);
 for(let boundary=0;boundary<=text.length;boundary++){
  const actual=await readNavigationBody(chunkStream([text.slice(0,boundary),'',text.slice(boundary)]),expected.length);
  assert.deepEqual(Buffer.from(actual),expected,'UTF-16 boundary '+boundary);
 }
 const units=Array.from({length:text.length},(_,index)=>text[index]);
 assert.deepEqual(Buffer.from(await readNavigationBody(chunkStream(units),expected.length)),expected);
 const byteChunks=Array.from(expected,byte=>Uint8Array.of(byte).buffer);
 assert.deepEqual(Buffer.from(await readNavigationBody(chunkStream(byteChunks),expected.length)),expected);
 const mixed=['前',Uint8Array.from(Buffer.from('😀')).buffer,'后\ud83d',new ArrayBuffer(0),'\udca7終\ud800末'];
 assert.deepEqual(Buffer.from(await readNavigationBody(chunkStream(mixed),expected.length)),expected);
 const dangling='尾\ud83d',danglingBytes=Buffer.from(dangling);
 assert.deepEqual(Buffer.from(await readNavigationBody(chunkStream(['尾','\ud83d']),danglingBytes.length)),danglingBytes);
 const separated=Buffer.concat([Buffer.from('\ud83d'),Buffer.from('中'),Buffer.from('\udca7')]);
 assert.deepEqual(Buffer.from(await readNavigationBody(chunkStream(['\ud83d',Buffer.from('中'),'\udca7']),separated.length)),separated);
});
test('bounded navigation reads preserve view offsets and reject malformed or oversized chunks',async()=>{
 const padded=Uint8Array.from([9,9,1,2,3,4,9]);
 const views=[new DataView(padded.buffer,2,2),padded.subarray(4,6)];
 assert.deepEqual([...await readNavigationBody(chunkStream(views),4)],[1,2,3,4]);
 for(const [chunks,size] of [
  [[Uint8Array.of(1)],2],[[Uint8Array.of(1,2)],1],[['😀'],3],[['abc'],1],[[{}],1],[[null],1],[[1],1],
 ] as const)await assert.rejects(readNavigationBody(chunkStream(chunks),size));
 await assert.rejects(readNavigationBody(chunkStream(['x']),1_000_001));
});
for(const kind of ['uint8array','arraybuffer','view','string'] as const){
 test('handler authenticates '+kind+' provider chunks through documented fetch inputs',async()=>{
  const f=fixture();
  const loader:typeof fetch=async(input,init)=>{
   assert.equal(typeof input,'string');
   assert.equal(new Headers(init?.headers).get('accept-encoding'),'identity');
   assert.equal(init?.redirect,'error');
   const pathname=new URL(String(input)).pathname,bytes=f.assets.get(pathname);
   assert.ok(bytes);
   const padded=Buffer.concat([Buffer.from([9,9,9]),bytes,Buffer.from([9])]);
   const value=kind==='arraybuffer'?Uint8Array.from(bytes).buffer
    :kind==='view'?new DataView(padded.buffer,padded.byteOffset+3,bytes.length)
    :kind==='string'?bytes.toString('utf8'):Uint8Array.from(bytes);
   const response=new Response(chunkStream([value]),{headers:{'content-type':'application/json','content-length':String(bytes.length)}});
   Object.defineProperty(response,'url',{value:null});
   return response;
  };
  const handler=createNavigationHandler(f.binding,loader);
  const response=await handler(new Request('https://example.test'+url+'?_rsc=normal'));
  assert.equal(response?.status,200);
  assert.deepEqual(Buffer.from(await response!.arrayBuffer()),body);
  const head=await handler(new Request('https://example.test'+url,{method:'HEAD'}));
  assert.equal(head?.status,200);assert.equal((await head!.arrayBuffer()).byteLength,0);
  assert.equal(head?.headers.get('content-length'),String(body.length));
 });
}
test('cached provider middleware uses the active native fetch binding and retains authenticated data',async()=>{
 const f=fixture(),originalFetch=globalThis.fetch,calls:number[]=[];
 let activeRequest=0;
 const activate=(request:number)=>{
  activeRequest=request;
  globalThis.fetch=async(input,init)=>{
   assert.equal(activeRequest,request,'A native fetch hook belongs to its active request');
   calls.push(request);
   return f.loader(input,init);
  };
 };
 try{
  activate(1);
  const handler=createProviderMiddleware(f.binding);
  const request=async(origin:string)=>{
   const response=await handler({request:new Request(origin+url),next(){assert.fail('Unexpected static fallthrough');},rewrite(){assert.fail('Unexpected chapter rewrite');}});
   assert.equal(response.status,200);
   assert.deepEqual(Buffer.from(await response.arrayBuffer()),body);
  };
  await request('https://one.test');
  activate(2);await request('https://two.test');
  activate(3);await request('https://one.test');
  assert.deepEqual(calls,[1,1,2,2],'A later request reuses the source-bound cached data');
 }finally{globalThis.fetch=originalFetch;}
});
test('real middleware snapshots request fetch before lazy binding and interleaved awaits',{timeout:10_000},async()=>{
 const f=await providerFixture(),originalFetch=globalThis.fetch,scope=new AsyncLocalStorage<number>(),calls:number[]=[];
 let release=()=>{},started=()=>{},rejectFailure:(reason:unknown)=>void=()=>{};
 const gate=new Promise<void>(resolve=>{release=resolve;}),bothStarted=new Promise<void>(resolve=>{started=resolve;});
 const failed=new Promise<never>((_resolve,reject)=>{rejectFailure=reject;}),manifestOwners=new Set<number>();
 const pending:Promise<void>[]=[];
 const activate=(owner:number)=>{
  globalThis.fetch=async(input,init)=>{
   assert.equal(scope.getStore(),owner,'The native hook must belong to the invocation performing I/O');
   calls.push(owner);
   if(new URL(String(input)).pathname===f.binding.manifest.url){manifestOwners.add(owner);if(manifestOwners.size===2)started();await gate;}
   return f.loader(input,init);
  };
 };
 try{
  activate(1);pending.push(scope.run(1,()=>f.request('https://one.test')));
  activate(2);pending.push(scope.run(2,()=>f.request('https://two.test')));
  for(const operation of pending)void operation.catch(rejectFailure);
  await Promise.race([bothStarted,failed]);release();await Promise.all(pending);
  activate(3);await scope.run(3,()=>f.request('https://one.test'));
  assert.deepEqual(calls.sort(),[1,1,2,2]);
 }finally{release();await Promise.allSettled(pending);globalThis.fetch=originalFetch;f.close();}
});
test('real middleware coalesces request-owned pending work into authenticated shared data',{timeout:10_000},async()=>{
 const f=await providerFixture(),originalFetch=globalThis.fetch,scope=new AsyncLocalStorage<number>(),calls:number[]=[];
 let release=()=>{},started=()=>{};
 const gate=new Promise<void>(resolve=>{release=resolve;}),manifestStarted=new Promise<void>(resolve=>{started=resolve;});
 const pending:Promise<void>[]=[];
 const activate=(owner:number)=>{
  globalThis.fetch=async(input,init)=>{
   assert.equal(scope.getStore(),owner,'Pending I/O retains the initiating request hook');
   calls.push(owner);
   if(new URL(String(input)).pathname===f.binding.manifest.url){started();await gate;}
   return f.loader(input,init);
  };
 };
 try{
  activate(1);pending.push(scope.run(1,()=>f.request('https://one.test')));
  await manifestStarted;
  activate(2);pending.push(scope.run(2,()=>f.request('https://one.test')));
  release();await Promise.all(pending);
  assert.deepEqual(calls,[1,1]);
 }finally{release();await Promise.allSettled(pending);globalThis.fetch=originalFetch;f.close();}
});
test('native HEAD egress retains representation metadata and keep-alive framing',{timeout:10_000},async()=>{
 const f=await providerFixture(),originalFetch=globalThis.fetch,agent=new Agent({keepAlive:true,maxSockets:1});
 const nativeHeadBodies:Buffer[]=[],errors:unknown[]=[];
 let origin='';
 const server=createServer((message,reply)=>{
  void(async()=>{
   const headers=new Headers();
   for(const [name,value] of Object.entries(message.headers))if(value!==undefined)headers.set(name,Array.isArray(value)?value.join(','):value);
   const response=await f.respond(new Request(origin+(message.url??'/'),{method:message.method??'GET',headers}));
   const representation=Buffer.from(await response.arrayBuffer());
   if(message.method==='HEAD'&&response.status===200)nativeHeadBodies.push(representation);
   reply.writeHead(response.status,Object.fromEntries(response.headers));reply.end(representation);
  })().catch(error=>{errors.push(error);reply.destroy(error);});
 });
 try{
  globalThis.fetch=f.loader;
  await new Promise<void>(resolve=>server.listen(0,'127.0.0.1',resolve));
  const address=server.address();assert.ok(address&&typeof address==='object');origin=`http://127.0.0.1:${address.port}`;
  const wire=(method:string,headers:Record<string,string>={}):Promise<{status:number|undefined;headers:IncomingHttpHeaders;body:Buffer;socket:unknown}>=>new Promise((resolve,reject)=>{
   let socket:unknown;
   const request=httpRequest(origin+url,{method,headers,agent},response=>{
    const chunks:Buffer[]=[];response.on('data',(chunk:Buffer)=>chunks.push(chunk));response.on('error',reject);
    response.on('end',()=>resolve({status:response.statusCode,headers:response.headers,body:Buffer.concat(chunks),socket}));
   });
   request.on('socket',value=>{socket=value;});request.on('error',reject);request.end();
  });
  const head=await wire('HEAD');
  assert.equal(head.status,200);assert.equal(head.body.length,0);assert.equal(head.headers['content-length'],String(body.length));assert.ok(head.socket);
  assert.deepEqual(nativeHeadBodies,[body]);
  const get=await wire('GET');assert.equal(get.socket,head.socket);assert.deepEqual(get.body,body);assert.equal(get.headers.etag,head.headers.etag);
  assert.equal(get.headers['content-type'],'text/plain; charset=utf-8');assert.equal(get.headers['x-content-type-options'],'nosniff');
  assert.equal(get.headers['cache-control'],'public, max-age=0, must-revalidate');
  assert.equal(typeof head.headers.etag,'string');
  const conditional=await wire('HEAD',{'if-none-match':String(head.headers.etag)});
  assert.equal(conditional.status,304);assert.equal(conditional.body.length,0);assert.equal(conditional.headers.etag,head.headers.etag);
  const next=await wire('GET');assert.equal(next.socket,head.socket);assert.deepEqual(next.body,body);
  const direct=await createProviderMiddleware(f.binding,f.loader)({request:new Request(origin+url,{method:'HEAD'}),next(){assert.fail('Unexpected fallthrough');},rewrite(){assert.fail('Unexpected rewrite');}});
  assert.equal((await direct.arrayBuffer()).byteLength,0);assert.equal(direct.headers.get('content-length'),String(body.length));
  let fallbackMethod='';
  const fallback=await f.respond(new Request(origin+'/en/docs/pcr/a/b/c/'+PREFETCH_NAME,{method:'HEAD'}),request=>{fallbackMethod=request.method;return new Response('fallback');});
  assert.equal(fallbackMethod,'HEAD');assert.equal(await fallback.text(),'fallback');assert.deepEqual(errors,[]);
 }finally{agent.destroy();server.closeAllConnections();await new Promise<void>(resolve=>server.close(()=>resolve()));globalThis.fetch=originalFetch;f.close();}
});
test('compiled binding restores original GET/HEAD/query bytes and leaves unknown routes alone',async()=>{
 const f=fixture(),handler=createNavigationHandler(f.binding,f.loader);
 for(const suffix of ['', '?_rsc=abc&q=a+b&q=%2F']){const response=await handler(new Request('https://example.test'+url+suffix));assert.ok(response);assert.equal(response.status,200);assert.deepEqual(Buffer.from(await response.arrayBuffer()),body);assert.equal(response.headers.get('content-type'),'text/plain; charset=utf-8');assert.equal(response.headers.get('x-content-type-options'),'nosniff');assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');}
 const head=await handler(new Request('https://example.test'+url,{method:'HEAD'}));assert.ok(head);assert.equal((await head.arrayBuffer()).byteLength,0);assert.equal(head.headers.get('content-length'),String(body.length));
 assert.equal(await handler(new Request('https://example.test/missing/__next._tree.txt')),undefined);
 assert.equal(await handler(new Request('https://example.test'+url,{method:'POST'})),undefined);
 assert.deepEqual(f.calls,[f.binding.manifest.url,f.descriptor.url]);
});
test('physical hashes are checked before JSON and a failed fetch can retry',async()=>{
 const f=fixture(),handler=createNavigationHandler(f.binding,f.loader);f.assets.set(f.descriptor.url,Buffer.from('corrupt'));
 assert.equal((await handler(new Request('https://example.test'+url)))?.status,503);
 f.assets.set(f.descriptor.url,f.pack);assert.equal((await handler(new Request('https://example.test'+url)))?.status,200);
});
test('binding and request paths reject foreign URLs, noncanonical paths and unbounded descriptors',()=>{
 const f=fixture();for(const change of [{sourceCommit:'bad'},{manifest:{...f.binding.manifest,url:'https://foreign.test/pack.json'}},{manifest:{...f.binding.manifest,bytes:1000000}},{extra:true}])assert.throws(()=>readNavigationBinding({...f.binding,...change}));
 for(const value of ['/generated/raw/__next._tree.txt','/_next/__next._tree.txt','/a%2fb/__next._tree.txt','/a/../__next._tree.txt','//__next._tree.txt','/__next._tree.txt?x=1','/__next._full.txt'])assert.equal(treeRequestPath(value),undefined);
});
test('preparation restores every original tree and independently checks physical route coverage',()=>{
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'navigation-export-'));
 const put=(name:string,body:string|Buffer)=>{const file=path.join(out,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,body);};
 try{
  put('generated/provider-runtime.json',JSON.stringify({schemaVersion:2,sourceCommit:source,navigationBinding:null}));
  for(const route of ['', 'en/docs/pcr', 'zh/docs/pcr']){const prefix=route?route+'/':'';put(prefix+'index.txt','complete '+route);put(prefix+'__next._full.txt','complete '+route);put(prefix+'__next._tree.txt',body);put(prefix+'index.html','<h1>Unchanged</h1>');}
  prepareStaticRouteAliases(out,source);const verified=verifyNavigationTrees(out,source,true)!;assert.equal(verified.rows.size,3);assert.deepEqual(Buffer.from(verified.rows.get('/en/docs/pcr/__next._tree.txt')!.body),body);assert.equal(fs.existsSync(path.join(out,'en/docs/pcr/__next._tree.txt')),false);
  put('extra/index.txt','unaccounted');assert.throws(()=>verifyNavigationTrees(out,source,true),/route inventory/);
 }finally{fs.rmSync(out,{recursive:true,force:true});}
});
test('real gzip fetch retains compressed Content-Length while restoring bounded decoded JSON',async()=>{
 const f=fixture(),server=createServer((request,response)=>{const body=f.assets.get(request.url??'');if(!body){response.writeHead(404);response.end();return;}const gzip=gzipSync(body);response.writeHead(200,{'content-type':'application/json','content-encoding':'gzip','content-length':gzip.length});response.end(gzip);});
 await new Promise<void>(resolve=>server.listen(0,'127.0.0.1',resolve));
 try{const address=server.address();assert.ok(address&&typeof address==='object');const response=await createNavigationHandler(f.binding)(new Request(`http://127.0.0.1:${address.port}`+url));assert.equal(response?.status,200);assert.deepEqual(Buffer.from(await response!.arrayBuffer()),body);}finally{server.closeAllConnections();await new Promise<void>(resolve=>server.close(()=>resolve()));}
});
test('a changed original cannot be removed or rebound after planning',()=>{
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'navigation-cas-'));fs.mkdirSync(path.join(out,'generated'));
 try{fs.writeFileSync(path.join(out,'generated/provider-runtime.json'),JSON.stringify({schemaVersion:2,sourceCommit:source,navigationBinding:null}));fs.writeFileSync(path.join(out,'index.txt'),'index');fs.writeFileSync(path.join(out,'__next._tree.txt'),'ORIGINAL');
  const plan=planNavigationTrees(out,source,navigationFiles(out))!;fs.writeFileSync(path.join(out,'__next._tree.txt'),'MODIFIED');
  assert.throws(()=>applyNavigationPlan(out,plan),/changed/);assert.equal(fs.readFileSync(path.join(out,'__next._tree.txt'),'utf8'),'MODIFIED');assert.equal(fs.existsSync(path.join(out,'generated/navigation-binding.json')),false);
 }finally{fs.rmSync(out,{recursive:true,force:true});}
});

test('authenticated manifest rejects malformed fields, ordering, bounds and source substitution',()=>{
 const f=fixture();
 const invalid=[{sourceCommit:'b'.repeat(40)},{schemaVersion:2},{packs:[]},{packs:Array(17).fill(f.descriptor)},{packs:[f.descriptor,f.descriptor]},{packs:[{...f.descriptor,rows:513}]},{packs:[{...f.descriptor,bytes:1_000_001}]},{packs:[{...f.descriptor,url:'/foreign.json'}]},{extra:true}];
 for(const change of invalid){const bytes=Buffer.from(JSON.stringify({...JSON.parse(f.manifest.toString()),...change}));const binding=readNavigationBinding({...f.binding,manifest:{url:'/generated/navigation/manifest-'+hash(bytes)+'.json',bytes:bytes.length,sha256:hash(bytes)}});assert.throws(()=>readNavigationManifest(bytes,binding,hash(bytes)));}
 assert.throws(()=>readNavigationManifest(f.manifest,readNavigationBinding(f.binding),'0'.repeat(64)));
});
test('authenticated packs reject malformed rows, canonical encodings and wrong identities',()=>{
 const f=fixture(),original=JSON.parse(f.pack.toString()),row=original.rows[0];
 for(const change of [{path:'/a/../__next._tree.txt'},{bytes:body.length+1},{data:row.data+'='},{sha256:'bad'},{extra:true}]){const bytes=Buffer.from(JSON.stringify({...original,rows:[{...row,...change}]}));assert.throws(()=>readNavigationPack(bytes,{...f.descriptor,bytes:bytes.length,sha256:hash(bytes)},source,hash(bytes)));}
 for(const change of [{sourceCommit:'b'.repeat(40)},{bucket:'z'},{rows:[row,row]},{extra:true}]){const bytes=Buffer.from(JSON.stringify({...original,...change}));assert.throws(()=>readNavigationPack(bytes,{...f.descriptor,bytes:bytes.length,sha256:hash(bytes)},source,hash(bytes)));}
 const decoded=readNavigationPack(f.pack,f.descriptor,source,hash(f.pack))[0]!;
 assert.throws(()=>verifyNavigationRow(decoded,'0'.repeat(64),hash(url),f.bucket));assert.throws(()=>verifyNavigationRow(decoded,hash(body),hash(url),'z'));
});
test('parallel requests share authenticated fetches, isolate origins and support ETag revalidation',async()=>{
 const f=fixture(),calls:string[]=[],loader:typeof fetch=async(input,init)=>{calls.push(new URL(String(input)).origin);await new Promise(resolve=>setTimeout(resolve,5));return f.loader(input,init);},handler=createNavigationHandler(f.binding,loader);
 const results=await Promise.all(Array.from({length:20},()=>handler(new Request('https://one.test'+url))));assert(results.every(result=>result?.status===200));assert.equal(calls.length,2);
 const etag=results[0]!.headers.get('etag')!;const revalidated=await handler(new Request('https://one.test'+url,{headers:{'if-none-match':etag}}));assert.equal(revalidated?.status,304);assert.equal(revalidated?.headers.has('content-length'),false);
 for(const origin of ['https://two.test','https://three.test','https://one.test'])assert.equal((await handler(new Request(origin+url)))?.status,200);
 assert.equal(calls.length,8);
});
test('failed manifest and hostile network responses fail closed and permit retry',async()=>{
 for(const mode of ['status','mime','length','oversize','truncated','redirect'] as const){const f=fixture();let invalid=true;const loader:typeof fetch=async(input,init)=>{if(!invalid)return f.loader(input,init);if(mode==='redirect')throw new Error('redirect refused');return new Response(mode==='oversize'?Buffer.concat([f.manifest,Buffer.from('x')]):mode==='truncated'?f.manifest.subarray(1):f.manifest,{status:mode==='status'?500:200,headers:{'content-type':mode==='mime'?'text/html':'application/json',...(mode==='length'?{'content-length':'1'}:{})}});};const handler=createNavigationHandler(f.binding,loader);const failed=await handler(new Request('https://example.test'+url));assert.equal(failed?.status,503);assert.equal(failed?.headers.get('cache-control'),'no-store');invalid=false;assert.equal((await handler(new Request('https://example.test'+url)))?.status,200);}
});
test('complete namespace and bounded product proofs reject missing, extra and substituted artifacts',()=>{
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'navigation-proof-'));const put=(name:string,value:string)=>{const file=path.join(out,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,value);};
 try{put('generated/provider-runtime.json',JSON.stringify({schemaVersion:2,sourceCommit:source,navigationBinding:null}));for(const prefix of ['','en/docs/pcr/','zh/docs/pcr/']){put(prefix+'index.txt','full');put(prefix+'__next._full.txt','full');put(prefix+'__next._tree.txt','tree');}
  prepareStaticRouteAliases(out,source);const verified=verifyNavigationTrees(out,source,true)!,proof=navigationWebProof(verified);assert.equal(navigationProbeFiles(proof).length,verified.manifest.packs.length+2);
  assert.throws(()=>navigationProbeFiles({...proof,binding:{...proof.binding,path:'/foreign'}}));assert.throws(()=>navigationProbeFiles({...proof,packs:Array(17).fill(proof.packs[0])}));assert.throws(()=>navigationProbeFiles({...proof,samples:[]}));assert.throws(()=>verifyNavigationTrees(out,'b'.repeat(40),true));
  put('generated/navigation/extra.json','{}');assert.throws(()=>verifyNavigationTrees(out,source,true));fs.unlinkSync(path.join(out,'generated/navigation/extra.json'));
  put('__next._tree.txt','shadow');assert.throws(()=>verifyNavigationTrees(out,source,true));fs.unlinkSync(path.join(out,'__next._tree.txt'));
  const pack=path.join(out,verified.manifest.packs[0]!.url.slice(1));fs.unlinkSync(pack);assert.throws(()=>verifyNavigationTrees(out,source,true));
 }finally{fs.rmSync(out,{recursive:true,force:true});}
});

test('early rejected HTTP responses release their bodies and abort fetch signals',async()=>{
 for(const mode of ['status','mime','length'] as const){const f=fixture();let cancelled=false,signal:AbortSignal|null|undefined;const loader:typeof fetch=async(_input,init)=>{signal=init?.signal;return new Response(new ReadableStream({cancel(){cancelled=true;}}),{status:mode==='status'?500:200,headers:{'content-type':mode==='mime'?'text/html':'application/json',...(mode==='length'?{'content-length':'1'}:{})}});};
 assert.equal((await createNavigationHandler(f.binding,loader)(new Request('https://example.test'+url)))?.status,503);assert.equal(cancelled,true);assert.equal(signal?.aborted,true);}
});

test('capacity fallback restores only the designated page prefetches with the original URL spelling',async()=>{
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'navigation-prefetch-'));
 function put(name:string,body:string|Buffer){
  const file=path.join(out,name);
  fs.mkdirSync(path.dirname(file),{recursive:true});
  fs.writeFileSync(file,body);
 }
 const prefixes=['','en/docs/pcr/','zh/docs/pcr/','en/docs/pcr/physical/'];
 const name='en/docs/pcr/'+PREFETCH_NAME,physical='en/docs/pcr/physical/'+PREFETCH_NAME;
 try{
  put('generated/provider-runtime.json',JSON.stringify({schemaVersion:2,sourceCommit:source,navigationBinding:null}));
  for(const prefix of prefixes){put(prefix+'index.txt','complete');put(prefix+'__next._tree.txt','tree:'+prefix);}
  put(name,body);
  put('zh/docs/pcr/'+PREFETCH_NAME,'zh page');
  put(physical,Buffer.alloc(1_000_001));
  put('en/docs/pcr/__next._head.txt','untouched');
  const plan=planNavigationTrees(out,source,navigationFiles(out),true)!;
  assert.equal(plan.binding.schemaVersion,2);
  assert(!plan.removed.includes(physical));
  applyNavigationPlan(out,plan);
  const checked=verifyNavigationTrees(out,source,true)!;
  const proof=navigationWebProof(checked);
  assert.equal(proof.samples.length,5);
  assert.equal(navigationProbeFiles(proof).length,plan.added.length);
  assert.equal(fs.existsSync(path.join(out,name)),false);
  assert.equal(fs.statSync(path.join(out,physical)).size,1_000_001);
  assert.equal(fs.readFileSync(path.join(out,'en/docs/pcr/__next._head.txt'),'utf8'),'untouched');
  const calls:string[]=[];
  const handler=createNavigationHandler(checked.binding,async input=>{
   const pathname=new URL(String(input)).pathname;
   calls.push(pathname);
   return new Response(fs.readFileSync(path.join(out,pathname)),{headers:{'content-type':'application/json'}});
  });
  const origin='https://example.test/';
  assert.equal(await handler(new Request(origin+physical)),undefined);
  assert.deepEqual(calls,[]);
  for(const url of [origin+name,origin+'en/docs/pcr/'+encodeURIComponent(PREFETCH_NAME)+'?_rsc=a']){
   const response=await handler(new Request(url));assert.ok(response);
   assert.equal(response.status,200);assert.deepEqual(Buffer.from(await response.arrayBuffer()),body);
  }
  const head=await handler(new Request(origin+name,{method:'HEAD'}));
  assert.equal(head?.headers.get('content-length'),String(body.length));
  assert.equal((await head?.arrayBuffer())?.byteLength,0);
  assert.equal(calls.length,2);
  assert.equal(prefetchRequestPath('/generated/raw/'+PREFETCH_NAME),undefined);
  assert.equal(prefetchRequestPath('/en/docs/pcr/__next._head.txt'),undefined);
  put(name,'shadow');
  assert.throws(()=>verifyNavigationTrees(out,source,true),/Page prefetch inventory/);
  fs.unlinkSync(path.join(out,name));fs.unlinkSync(path.join(out,physical));
  assert.throws(()=>verifyNavigationTrees(out,source,true),/Page prefetch inventory/);
 }finally{fs.rmSync(out,{recursive:true,force:true});}
});

test('identity-only version two skips navigation planning while combined version three requires binding',()=>{
 const out=fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(),'navigation-capability-')));fs.mkdirSync(path.join(out,'generated'));
 try{const provider=path.join(out,'generated/provider-runtime.json'),identity={sourceCommit:source,identityMoves:[{from:'/en/docs/pcr/a/b/old/',to:'/en/docs/pcr/a/b/current/'}]};
  fs.writeFileSync(provider,JSON.stringify({schemaVersion:2,...identity}));
  assert.equal(planNavigationTrees(out,source,navigationFiles(out)),undefined);
  fs.writeFileSync(provider,JSON.stringify({schemaVersion:2,sourceCommit:source}));
  assert.throws(()=>planNavigationTrees(out,source,navigationFiles(out)),/fresh unbound profile/);
  fs.writeFileSync(provider,JSON.stringify({schemaVersion:3,...identity}));
  assert.throws(()=>planNavigationTrees(out,source,navigationFiles(out)),/fresh unbound profile/);
 }finally{fs.rmSync(out,{recursive:true,force:true});}
});
