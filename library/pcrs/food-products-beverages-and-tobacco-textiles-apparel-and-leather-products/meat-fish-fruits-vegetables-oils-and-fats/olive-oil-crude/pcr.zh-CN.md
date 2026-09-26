---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.olive-oil-crude
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 粗制橄榄油

## 1. 范围与适用性

本规则适用于橄榄果在榨油厂通过机械或其他物理方法直接提取的未精炼橄榄油。前景边界从橄榄果到达榨油厂门口开始，到油经分离及实际采用的物理沉降、离心或过滤后，以散装状态交付为止。须声明产品为可食用初榨等级还是灯用初榨等级；本 PCR 不凭清单数据判定等级。精炼、从橄榄果渣提油、与精炼油调和、零售包装、果园种植及下游使用均不属于此前景。产品边界依据 `cxs33-2015`、`ioc-trade-standard-2026` 和 `turkey-olive-lca-2023`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.olive-oil-crude |
| classification_refs | CPC 3.0 21671，Olive oil, crude（`unsd-cpc3-2025`） |
| covered_products | 从橄榄果以机械或物理方式提取的散装未精炼橄榄油，包括在精炼前已声明的初榨及灯用初榨等级。 |
| excluded_products | 精炼橄榄油、橄榄渣油、与精炼橄榄油调和的产品、溶剂提取油、零售包装产品。 |
| representative_product | 榨油厂出厂、尚未经精炼的散装粗制橄榄油。 |
| production_route | 橄榄果接收、适用时清洗、破碎、揉合、相分离及适用时物理澄清；声明压榨、两相或三相分离。 |
| market_state | 厂门口散装未精炼油；声明等级和过滤状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 榨油厂门口交付的散装未精炼橄榄果油。 |
| How much | 1 kg 验收合格的粗制橄榄油。 |
| How well | 依据实际产品记录声明等级、分离工艺、过滤状态及水分／杂质规格。 |
| How long or cycle | 一个完整生产批期；清单按该批期验收油产量归一化。 |
| reference_flow_link | `crude_oil_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 粗制橄榄油（UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 橄榄果来源与批期；机械提取工艺；等级；过滤状态；散装交付点；验收油净质量计量方法。 |

参考产品 UUID 尚未解决。发布带 UUID 的产品流声明前，须取得准确的公开粗制橄榄油产品流；不能以精炼油或橄榄渣油流替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `crude_oil_output` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用 `cp_oil_mass` 在所声明的厂门口交付点称量或核对验收散装油净质量；排除容器皮重、拒收油及送往后续精炼的油。 |
| `campaign_normalization` | 所有清单行 | 质量或各行特定能量／体积属性 | 每 1 kg 参考流对应的各行单位 | 所有纳入的交换使用同一批期及验收油质量分母；保留原始表计单位和有记录的换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 橄榄果已到达榨油厂门口，并记录来源、质量、状态和批期。 |
| starting_condition_role | 榨油厂前景的上游农业投入。 |
| product_classification_scope | 仅限从果实提取的粗制橄榄油；不含精炼、橄榄渣油提取或调和油生产。 |
| recursive_input_rule | 若场址投入外购粗制橄榄油，应单独记录，不得算作本批接收橄榄果所产的油。 |
| upstream_dataset_requirement | 请求从摇篮到厂门口结果时，将橄榄果投入连接到适当的上游橄榄果数据集；另行披露运输及果园覆盖范围。 |
| disclosure | 声明果实来源、分离工艺、清洗、油澄清、果渣去向、废水处理及处理系统边界。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_mill_gate` | foreground_scope | 纳入果实接收、适用时清洗、破碎、揉合、相分离及直至散装交付的物理澄清；排除精炼和橄榄渣油提取。 | `cxs33-2015`, `turkey-olive-lca-2023` |
| `boundary_route_outputs` | route_outputs | 按已声明的压榨、两相或三相工艺记录果渣及独立收集的废水；认定没有独立废水流须有工艺证据。 | `turkey-olive-lca-2023`, `argentina-water-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `olive_milling` | 橄榄果综合破碎与物理榨油 | required | 所有纳入的榨油路线；记录实际分离技术及调质步骤。 | 从果实接收到散装粗制油交付的前景生产。 | 每 1 kg 参考流 |

### 过程：橄榄果综合破碎与物理榨油（`olive_milling`）

#### 输入

##### 产品流

###### 接收的橄榄果（`olives_input`）

验收橄榄果跨越榨油厂边界，是所记录提取批期的实物原料。
- 选定流：橄榄 `b07470dd-3947-4e02-8058-11967225f927`
- 流属性/单位：Mass / kg
- 数量规则：根据地磅单或入厂记录登记本批期验收果实净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_olive_intake`

###### 榨油工艺用水（`mill_water`）

清洗或分油工序用水时，供应水跨越榨油厂边界。
- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：记录用于果实清洗、橄榄糊调质或油分离的供水；仅在表计和工艺记录证明未用水时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`

###### 外购榨油电力（`mill_electricity`）

外购交流电跨越场址边界，为综合榨油过程供电。
- 选定流：交流电（UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：记录本批期可归属的计量电力，包括清洗、破碎、揉合、分离和物理澄清。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收粗制橄榄油（`crude_oil_output`）

验收未精炼油以散装形式离开榨油厂，构成参考产出。
- 选定流：粗制橄榄油（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_oil_mass`

###### 作为产品转出的橄榄果渣（`pomace_product`）

有生产性用途凭证的残余橄榄糊作为物料产品离开榨油厂。
- 选定流：橄榄果渣，橄榄油厂固体残渣 `95c56835-2417-4ffa-8375-d0df138fd887`
- 流属性/单位：Mass / kg 湿果渣
- 数量规则：记录有凭证用于生产性用途的湿果渣转出量；同一物料不得再计入 `pomace_waste`。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pomace_transfer`

##### 废物流

###### 作为废物转出的橄榄果渣（`pomace_waste`）

残余橄榄糊无生产性产品去向时，作为废物离开榨油厂。
- 选定流：橄榄果渣 `d93812f9-63c9-4f5f-a3c2-adcd88482a5e`
- 流属性/单位：Mass / kg 湿果渣
- 数量规则：记录送往废物管理的湿果渣；同一物料不得再计入 `pomace_product`。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pomace_transfer`

###### 单独收集的未处理橄榄油厂废水（`mill_wastewater`）

所声明工艺产生独立水相时，单独收集的水性废液在处理前离开榨油厂。
- 选定流：未处理橄榄油厂废水（UUID 未解决）
- 流属性/单位：Volume / m3
- 数量规则：处理前计量单独收集的果实清洗废水或水相分离废液；只有不存在独立水流且有工艺证据时才填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_meter`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_disposition` | pomace_output | 根据转运凭证区分作为产品出售的果渣与作为废物管理的果渣。同一湿质量不得同时计入两个输出行。 | `turkey-olive-lca-2023` |
| `allocation_method` | shared_milling_burdens | 首先细分独立计量的作业。油与作为产品的果渣共用不可分离的负荷时，声明研究采用的分配方法、质量基准及敏感性；不得使用未经核实的固定比例。 | `turkey-olive-lca-2023` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_olive_intake` | `olive_milling` | 验收果实投入 | 地磅单 | 日期；批号；来源；毛重；皮重；拒收量 | 核对同一批期的入厂凭证和剔除量。 | kg | 每次交货 | 所声明的完整批期 | 榨油厂门口 | 每 1 kg 参考流 | 已校准地磅；凭证核对 |
| `cp_water_meter` | `olive_milling` | 工艺用水 | 表计或发票 | 起读数；末读数；共用分摊；水源 | 使用已校准的质量表计记录用水质量，或用实测水密度换算体积表计读数；记录共用供水的归属方法。 | kg | 每批期 | 所声明的完整批期 | 厂内供水点 | 每 1 kg 参考流 | 表计校准；供水记录 |
| `cp_electricity_meter` | `olive_milling` | 外购电力 | 表计或发票 | kWh 起读数；末读数；共用分摊；电压 | 读取电表并核对共用负荷。 | kWh | 每批期 | 所声明的完整批期 | 厂内供电点 | 每 1 kg 参考流 | 表计记录；发票核对 |
| `cp_oil_mass` | `olive_milling` | 验收粗制油产出 | 已校准油罐或秤 | 油罐起量；末量；按体积计量时的密度；皮重；拒收；等级；工艺 | 称量验收散装油净质量，或在交付点用已校准油罐量及实测密度核对。 | kg | 每批及每批期 | 所声明的完整批期 | 厂门口交付点 | 每 1 kg 参考流 | 校准记录；交付记录；等级记录 |
| `cp_pomace_transfer` | `olive_milling` | 果渣产品或废物 | 转运凭证 | 湿质量；接收方；用途；工艺；含水率 | 称量湿果渣，并根据有凭证的去向逐笔分类。 | kg | 每次转运 | 所声明的完整批期 | 榨油厂门口 | 每 1 kg 参考流 | 转运单；接收方记录；不重复计算 |
| `cp_effluent_meter` | `olive_milling` | 单独收集的未处理废液 | 表计或油罐记录 | 水流来源；起读数；末读数；工艺；处理交接 | 在转交处理前计量各独立收集的未处理水流。 | m3 | 每批期 | 所声明的完整批期 | 厂内废水出口 | 每 1 kg 参考流 | 表计校准；处理接收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_campaign` | 所有清单行 | 各批期交换量除以同一批期验收粗制橄榄油质量；按每 1 kg 参考流报告。 | 批期交换量；验收油质量；对应采集协议 | 归一化交换量 |  |
| `pomace_exclusivity` | `pomace_product`; `pomace_waste` | 汇总两个输出行前，依据有凭证的去向对每笔果渣转运只分类一次。 | 转运单；接收方；去向 | 分列的产品及废物湿质量 | `turkey-olive-lca-2023` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | 批期 | 披露分离器类型、清洗、过滤、等级及果渣去向；不得从笼统的“两相”标签推断没有废水。 | 设备日志；批次记录；废水记录 |
| `dq_balance` | 批期 | 核对投入果实、油、湿果渣及水相流；披露未测含水量或损失，不强求虚假的封闭物料平衡。 | 地磅；油罐；转运及废水记录 |
| `dq_temporal` | 所有清单行 | 分子记录与同一声明批期相匹配，并报告表计或转运记录的缺失范围。 | 带日期的原始记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_product | 验收油质量须大于零，须披露未精炼状态；发布带 UUID 的产品流前须确认准确的公开粗制油流。 | `cxs33-2015`, `ioc-trade-standard-2026` |
| `validate_denominator` | inventory | 所有纳入的交换使用同一验收油批期分母；核对原始单位，并避免产品／废物果渣重复计算。 | `turkey-olive-lca-2023` |
| `validate_route` | process_outputs | 确认声明的分离工艺及实测水、果渣和废水流；无依据的零废水条目不能通过审查。 | `turkey-olive-lca-2023`, `argentina-water-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以未精炼橄榄果油为产出的厂门口前景数据包。 |
| downstream_use | `secondary_dataset`；经审查并记录上游连接后可为 `background_dataset`。 |
| allowed_use | 根据实测批期投入与产出建模已声明的榨油工艺和等级。 |
| excluded_use | 不得代表精炼油、橄榄渣油、零售包装油或普适橄榄油生产强度。 |
| required_metadata | 场址与时期；果实来源；提取及澄清工艺；油等级；验收油净质量；果渣去向；水与废水处理边界。 |
| required_quality_disclosure | 表计和质量计量校准；批期完整性；缺失流；分配方法；未解决 UUID 与范围证据。 |
| update_trigger | 提取工艺、产品状态、处理边界、数据时期或经核实的流身份发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | 联合国统计司，CPC 3.0 结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅用于分类名称，不作为方法学来源。 |
| `cxs33-2015` | standard | 国际食品法典委员会，《橄榄油和橄榄果渣油标准》，CXS 33-1981，2015 年修订，https://www.fao.org/input/download/standards/88/CXS_033e_2015.pdf | 果实初榨油与果渣油的身份边界。 |
| `ioc-trade-standard-2026` | official_guidance | 国际橄榄油理事会，《适用于橄榄油及橄榄果渣油的贸易标准》，COI/T.15/NC No. 3/Rev. 22（2026 年 6 月），https://www.internationaloliveoil.org/wp-content/uploads/2026/09/TRADE-STANDARD-REV-22_EN.pdf | 初榨、灯用、精炼及果渣油的区别。 |
| `turkey-olive-lca-2023` | literature | Agriculture 2023, 13(6), 1192，《土耳其橄榄油生产的生命周期评价：集约化生产项目地区案例》，https://res.mdpi.com/d_attachment/agriculture/agriculture-13-01192/article_deploy/agriculture-13-01192.pdf | 土耳其案例：榨油步骤、两相／三相工艺、果渣及废水身份；不采用案例强度数值。 |
| `argentina-water-2024` | literature | Water 2024, 16(11), 1612，《阿根廷西北部橄榄油生产过程的废水与灰水足迹评估》，https://res.mdpi.com/d_attachment/water/water-16-01612/article_deploy/water-16-01612.pdf | 反证：两相榨油也可能有独立废水。 |
