---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.tanned-or-dressed-furskins
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鞣制或整饰毛皮

## 1. 范围与适用性

本 PCR 适用于带毛毛皮经鞣制或整饰后作为可销售材料的生产。边界从保藏后的生毛皮开始，至鞣整场址门口的验收成品结束。明矾或其他已申报鞣制路线及加油工序应按真实投料和工序建模。产品保留毛被；未整饰生毛皮、去毛皮革、人造毛皮、毛皮服装与制品，以及仅提供受托加工的服务产品均不属于本产品身份。CPC 28310 与毛皮制品 28320 和人造毛皮 28330 分列 [cpc30]。工艺依据见 [fur-quality-2022]、[fur-activated-water]、[fur-tanning-2020]。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.tanned-or-dressed-furskins |
| classification_refs | CPC 3.0: 28310 [cpc30] |
| covered_products | 鞣制、明矾鞣整或其他整饰后销售的带毛动物毛皮。 |
| excluded_products | 未整饰生毛皮；去毛皮革；人造毛皮；服装和其他拼制毛皮制品；不拥有毛皮的受托鞣整服务。 |
| representative_product | 鞣整场址门口经调湿验收、可销售的带毛毛皮。 |
| production_route | 声明实际保藏、浸泡、刮肉、鞣制或明矾鞣整、干燥和整理工序；染色按条件纳入。 |
| market_state | 成衣加工前的带毛、已调湿成品毛皮。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 可用于后续加工的成品带毛鞣整毛皮材料。 |
| How much | 验收成品 1 千克。 |
| How well | 保留毛被，皮板达到声明的整饰规格与含水状态。 |
| How long or cycle | 一个完成的鞣整批次；不声称使用阶段寿命。 |
| reference_flow_link | `finished_furskin` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 成品带毛鞣整毛皮 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 动物种类；带毛状态；鞣整路线；来料保藏状态；染色状态；验收成品含水状态；场址和生产期间 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_furskin` | 质量 | kg | 按 `cp_output` 测量调湿验收成品净质量；排除运输包装。 |
| `batch_normalization` | 所有清单行 | 各行对应属性 | 各行单位/千克 | 同一批次可归属的交换量除以验收成品千克数；保存原始表计和称重记录。 |
| `electricity_conversion` | `electricity` | 净热值 | MJ | 按物理恒等式 1 kWh = 3.6 MJ 将电表 kWh 换算为 MJ；不使用燃料热值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 鞣整场址收到的保藏带毛生毛皮；声明种类及保藏状态。 |
| starting_condition_role | 作为采购或转入的原料，其上游生产另行建模。 |
| product_classification_scope | 仅鞣整毛皮产品，不含拼制品或加工服务交易。 |
| recursive_input_rule | 如采购已整饰毛皮再加工，应作为单独投入并携带上游负担；不得冒充生毛皮或与成品净额抵消。 |
| upstream_dataset_requirement | 为生毛皮、采购化学品、水、电、天然气和废物处理链接适合状态与地区的上游数据集。 |
| disclosure | 声明场址门口、路线、纳入工序、外包环节、染色状态、直接燃料燃烧和处理边界。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_included` | 前景鞣整 | 纳入使带毛生毛皮转化为验收成品的接收、浸泡、刮肉、鞣制或明矾鞣整、干燥及整理。 | `fur-quality-2022`; `fur-tanning-2020` |
| `boundary_conditional` | 路线特定工序 | 仅在实际实施时纳入染色、加油、滚筒清洁及现场燃料燃烧；披露遗漏或外包工序。 | `fur-quality-2022`; `fur-activated-water`; `fur-tanning-2020` |
| `boundary_upstream` | 生毛皮及辅料投入 | 将生毛皮生产及供应过程链接为背景数据，不把这些活动当作所测量的鞣整前景。 | `cpc30` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `dress_furskin` | 毛皮准备、鞣制或明矾鞣整、干燥与整理的一体化过程 | required | 每一验收成品批次；条件性材料仅在实际使用时记录。 | 前景转化 | 1 千克验收成品毛皮 |

### Process: 毛皮综合鞣整 (`dress_furskin`)

本过程涵盖从生毛皮接收到调湿成品的场址操作。可取得分工序表计时分别记录；共用表计只能按有记录的物理驱动因素分摊。各化学路线按实际批次配方取舍，并非所有化学品都必须投加 [fur-quality-2022; fur-activated-water; fur-tanning-2020]。

#### 输入

##### 产品流

###### 经保藏的带毛生毛皮（`raw_pelt`）

所有批次；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：经保藏的带毛生毛皮
- 流属性/单位：质量 / kg
- 数量规则：记录进入批次的已验收保藏毛皮质量，并注明保藏方式及含水状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 工艺用水（`process_water`）

所有湿法加工批次；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量浸泡、漂洗和鞣整所加水量，并分摊可追溯的批次总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

###### 氯化钠（`sodium_chloride`）

使用氯化钠时；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：氯化钠 `a413ea86-0887-42c8-be77-3bee86d5863b`
- 流属性/单位：质量 / kg
- 数量规则：称量实际加入保藏、浸泡或酸浸工序的氯化钠。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 硫酸铝钾（`potassium_alum`）

仅明矾鞣整路线；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：硫酸铝钾
- 流属性/单位：质量 / kg
- 数量规则：称量明矾鞣整路线实际投加的硫酸铝钾配方量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 鱼油（`fish_oil`）

仅使用鱼油时；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：鱼油 `dacba994-e061-44ed-940e-61f7820422c6`
- 流属性/单位：质量 / kg
- 数量规则：称量油鞣或加脂实际加入的鱼油；其他油脂另行识别，不计入本流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 交流电（`electricity`）

使用外购电力时；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：净热值 / MJ
- 数量规则：记录可归属于毛皮鞣整的交流电表读数；按 3.6 MJ/kWh 将 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

###### 气态天然气（`natural_gas`）

仅现场使用天然气时；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：记录现场工艺供热或干燥使用的气态天然气表计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

###### 散装阔叶木锯末（`hardwood_sawdust`）

仅采用锯末滚筒清洁时；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：散装阔叶木锯末
- 流属性/单位：质量 / kg
- 数量规则：称量滚筒清洁新加入的锯末；循环使用部分仅在补充时计入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

#### 输出

##### 产品流

###### 成品带毛鞣整毛皮（`finished_furskin`）

所有验收成品；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：成品带毛鞣整毛皮
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`

##### 废物流

###### 毛皮刮肉和脂肪边角料（`fleshing_waste`）

刮肉产生组织废料时；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：毛皮刮肉和脂肪边角料
- 流属性/单位：质量 / kg
- 数量规则：称量单独收集并离开前景场址的皮板刮肉及脂肪边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 毛皮鞣整废液（`spent_liquor`）

湿法工序排放废液时；按批次记录，除成品行外最终均归一至每 1 千克验收成品。

- 选定流：毛皮鞣整废液
- 流属性/单位：质量 / kg
- 数量规则：计量现场处理前排出的水性废液，不与污泥合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用工序 | 优先按独立表计或称量数据拆分工序；批次记录足以辨别归属时避免分配。 | `ghg-product` |
| `allocation_shared` | 不可避免的共用公用工程 | 无法拆分时，按工序运行时长与额定负荷等有记录的因果驱动因素分摊共用电、燃料和水；披露驱动因素、分子、分母及残差。若按成品质量分配会掩盖路线能耗差异，则不应采用。 | `ghg-product` |
| `allocation_outputs` | 可回收共产品 | 将有销售价值的回收物与废物分开；记录采用的物理或经济分配方式，同时展示总交换量及已分配负担。 | `ghg-product` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `dress_furskin` | 成品输出 | 批次称重记录 | 批次号；种类；路线；验收净质量；含水状态 | 用经校准的秤称量调湿验收毛皮，排除包装。 | kg | 每批 | 代表性生产期间 | 鞣整场址 | 每 1 kg 参考流 | 校准与验收记录 |
| `cp_material` | `dress_furskin` | 毛皮和化学品 | 入库及批次领料记录 | 批次号；物料身份；来料状态；领用质量；退料 | 将供应商记录和批次领料与经校准的称量核对。 | kg | 每批 | 代表性生产期间 | 鞣整场址 | 每 1 kg 参考流 | 发票、库存核对及秤检记录 |
| `cp_water` | `dress_furskin` | 工艺用水 | 水表记录 | 批次号；期初末读数；共用分摊驱动因素 | 读取经校准的水表，并记录批次分摊依据。 | kg | 每批或表计周期 | 代表性生产期间 | 鞣整场址 | 每 1 kg 参考流 | 水表校准及核对记录 |
| `cp_energy` | `dress_furskin` | 电和天然气 | 表计及燃料记录 | 批次号；kWh；天然气 m3；运行时长；共用分摊驱动因素 | 分别读取电表与天然气表，记录批次归属及 kWh 至 MJ 换算。 | MJ; m3 | 每批或表计周期 | 代表性生产期间 | 鞣整场址 | 每 1 kg 参考流 | 表计账单及分摊工作表 |
| `cp_waste` | `dress_furskin` | 组织废物和废液 | 移交或处理记录 | 批次号；物料身份；测得质量；处理路线 | 在现场处理或外运前分别称量或计量不同废物流。 | kg | 每批 | 代表性生产期间 | 鞣整场址 | 每 1 kg 参考流 | 转移单、表计和处理日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch` | all inventory rows | q_ref = q_batch / m_finished; q_batch 为该行单位下可归属于批次的交换量；m_finished 为同批验收成品质量（kg）。 | q_batch; m_finished; cp_output | 每 1 kg 验收成品毛皮的交换量 |  |
| `convert_electricity` | `electricity` | MJ = kWh × 3.6。 | kWh; cp_energy | 电力投入 MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每批 | 声明动物种类、带毛状态、实际路线、保藏及成品含水状态；不混淆生毛皮与成品。 | 批次流转卡及验收记录 |
| `dq_completeness` | 每批 | 核对投入、验收成品、次品及分别识别的废物；说明缺失流及共用表计。 | 质量平衡表及公用工程核对 |
| `dq_time` | 报告期间 | 报告场址、期间、批次覆盖、外包环节和分摊驱动因素。 | 生产台账及供应商或承包商记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 成品输出 | 确认 `finished_furskin` 为带毛、已整饰、经调湿的净质量 kg 成品；不得以生毛皮或未经限定的蓝湿中间品代替。 | `cpc30`; `fur-activated-water` |
| `validate_inventory` | 清单行 | 检查每项交换具有原子物料身份、适用路线、可归属数量、单位和采集证据；未解决 UUID 明示。 | `fur-quality-2022`; `fur-tanning-2020` |
| `validate_mass` | 批次记录 | 确认所有按批归一化的行均使用同批验收成品质量作分母，废物流不从投入量中净额扣减。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 鞣整毛皮生产前景数据集。 |
| downstream_use | 经审查发布后可作 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 声明场址和期间、路线及商品状态的带毛毛皮。 |
| excluded_use | 生毛皮、去毛皮革、人造毛皮、服装和未经核实的替代流。 |
| required_metadata | 动物种类；保藏状态；路线；染色状态；含水状态；场址；期间；产量；分配依据。 |
| required_quality_disclosure | 数据缺口、未解决 UUID、条件工序、表计覆盖、批次收率、废物处理及来源年代。 |
| update_trigger | 路线、种类结构、来料状态、能源供应或产品规格发生实质变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc30` | official_guidance | 联合国统计司，CPC 第 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品身份及相邻类别排除 |
| `fur-quality-2022` | literature | Gaidău、Amanatidou 和 Tonea，Fur Skin – A Valuable Material, Considerations on Quality Assessment，Leather and Footwear Journal 22(2)，2022 年，https://revistapielarieincaltaminte.ro/revistapielarieincaltaminteresurse/en/fisiere/full/vol22-nr2/article5_vol22_issue2.pdf | 图 1 给出初步处理、工业湿加工、鞣制、染色和整理工序；仅作定性依据 |
| `fur-activated-water` | literature | Danylkovych、Lishchuk 和 Romaniuk，Use of electrochemically activated aqueous solutions in the manufacture of fur materials，SpringerPlus 5:214，2016 年，https://pmc.ncbi.nlm.nih.gov/articles/PMC4771650/ | 兔皮和海狸鼠皮的浸泡、脱脂、明矾及铬鞣、加油和干燥；仅限实验路线 |
| `fur-tanning-2020` | literature | Yefimchuk 等，Multicriteria Compromise Optimization for Leather and Fur Skin Materials Tanning Technology，Leather and Footwear Journal 20(2)，2020 年，https://lib.lntu.edu.ua/sites/default/files/2021-01/article9_vol20_issue2.pdf | 兔皮的润湿、浸酸、鞣制、加油及干燥顺序；仅限实验路线 |
| `ghg-product` | standard | 温室气体核算体系，Product Life Cycle Accounting and Reporting Standard，2011 年，https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 避免分配和披露的方法；本产品适用性由作者判断 |
