---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.tapioca-and-substitutes-therefor-prepared-from-starch-in-the-form-of-flakes-grains-sift-d4017625
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 珍粉及淀粉制成的珍粉代用品（片状、粒状、筛下物或类似形态）

## 1. 范围与适用性

本规则涵盖将食品级淀粉调湿、成形、部分糊化、干燥并分级为片状、粒状、筛下物或类似形态的珍粉及代用品，直到无包装合格成品出厂。销售的食品级筛下物属于产品；不可销售的收集粉尘属于废物。原淀粉制造、块根种植、包装、配送、烹饪和消费均在前景边界之外；购入原料和能源的上游负荷仍须通过相应背景数据集计入。该方法不适用于未加工淀粉、粉丝、面粉、饼干或木薯根。产品可以采用木薯、马铃薯或玉米淀粉；其他来源必须另列明确的原子原料流并审查其适用性。Tokimura 等人发表的出版社全文试验记载了以淀粉调湿、颗粒成形、表层蒸汽糊化及空气干燥制作珍粉珠的路线；类别和产品形态表述据联合国 CPC 3.0。该试验不构成工业投入强度证据，也不证明所有所列形态采用相同路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.tapioca-and-substitutes-therefor-prepared-from-starch-in-the-form-of-flakes-grains-sift-d4017625 |
| classification_refs | CPC 3.0: 23230（分类语境；不等于已接受映射） |
| covered_products | 食品级淀粉制珍粉片、粒、珍珠及可销售筛下物和同类代用品 |
| excluded_products | 未加工淀粉、根茎、粉丝、面包糕点、非食品粒料及不可销售粉尘 |
| representative_product | 干燥、无包装的木薯淀粉珍粉颗粒 |
| production_route | 食品级淀粉接收与调湿；成形与表层糊化；最终干燥；筛分分级 |
| market_state | 无包装、食品级、按申报含水率验收的干燥成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可用于食品加工的淀粉制珍粉或代用品 |
| How much | 1 kg 合格无包装干燥成品 |
| How well | 符合申报的淀粉来源、形态及成品含水率规范 |
| How long or cycle | 一个成品批次的出厂门槛；不计使用期限 |
| reference_flow_link | grade_tapioca_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 淀粉制成的成品珍粉片、粒或筛下物 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 淀粉来源；成品形态；合格成品含水率；生产地区与技术；热源；是否包含可销售筛下物；无包装出厂门槛 |

构建前景数据包时，必需限定信息应写入产品说明或数据集元数据；不得把原淀粉流当作成品珍粉流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 合格干燥成品质量以 kg 计量；所有清单行按同一批次合格成品每 1 kg 归一化。 |
| `energy_unit` | cook_electricity | Energy | MJ | 记录原始电表 kWh 和换算；1 kWh = 3.6 MJ。 |
| `gas_volume` | cook_natural_gas | Volume | m3 | 记录天然气体积计量的参比温压，避免将不同参比状态的 m3 合并。 |

## 5. 系统边界

无包装合格成品出厂为终点；淀粉、用水、购入能源及废物处置需要相应上游或下游数据集。场内直接燃烧与购入蒸汽不得对同一热量重复计算。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入食品级淀粉，记录淀粉植物来源、干湿状态和供应商边界 |
| starting_condition_role | 将原淀粉制备作为上游供应链，与珍粉前景成形工序区分 |
| product_classification_scope | CPC 3.0 23230 的淀粉制珍粉及代用品 |
| recursive_input_rule | 同类别可回收成品若重新投料，单独记录回用量；不得作为新的外购原料重复计入 |
| upstream_dataset_requirement | 购入淀粉、水、能源及废物处置分别链接与来源和技术相符的数据集 |
| disclosure | 声明成品形态、原淀粉来源、热源、含水率、可销售筛下物与废物分界及供应商数据边界 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground_system_boundary | 无包装合格成品出厂前的调湿、成形、糊化、干燥和分级均纳入；原淀粉制造和下游消费按所声明系统边界处理。 | `un-cpc-3-2025`; `tokimura-2017-starch-pearls` |
| `boundary_energy` | form_cook_dry | 购入蒸汽与场内天然气燃烧按实际热源分别记录，不得对同一蒸汽再计上游锅炉燃料。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feed_condition` | 淀粉接收与调湿 | required |  | 前景生产 | 每 1 kg 合格成品 |
| `form_cook_dry` | 成形、糊化与干燥 | required |  | 前景生产 | 每 1 kg 合格成品 |
| `grade` | 分级与成品出厂 | required |  | 前景生产 | 每 1 kg 合格成品 |

### 过程：淀粉接收与调湿（`feed_condition`）

接收食品级淀粉并调湿以供成形。

#### 输入

##### 产品流

###### 木薯淀粉原料（`feed_cassava_starch`）

仅在投入木薯淀粉时纳入。

- 选定流：木薯淀粉 `00f8688a-9af4-40bf-95fd-8529f7bc70ce`
- 流属性/单位：Mass / kg
- 数量规则：实测木薯淀粉质量除以合格成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_starch`
- 来源：`tokimura-2017-starch-pearls`

###### 马铃薯淀粉代用品原料（`feed_potato_starch`）

仅在投入马铃薯淀粉时纳入。

- 选定流：马铃薯淀粉 `1acb7b11-0259-4f61-b05b-83f1f3f11eda`
- 流属性/单位：Mass / kg
- 数量规则：实测马铃薯淀粉质量除以合格成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_starch`
- 来源：

###### 玉米淀粉代用品原料（`feed_corn_starch`）

仅在投入玉米淀粉时纳入。

- 选定流：玉米淀粉 `982918a4-54b1-4792-9ee5-2f3155d4e929`
- 流属性/单位：Mass / kg
- 数量规则：实测玉米淀粉质量除以合格成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_starch`
- 来源：

###### 淀粉调湿用水（`feed_process_water`）

纳入跨越前景边界用于淀粉调湿的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测调湿用水质量除以合格成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`tokimura-2017-starch-pearls`

#### 输出

### 过程：成形、糊化与干燥（`form_cook_dry`）

形成独立颗粒或片材，进行热处理和干燥。

#### 输入

##### 产品流

###### 购入交流电（`cook_electricity`）

纳入成形、糊化、干燥及相关电机的场址购入电力，并声明电压和供电地区。

- 选定流：食品加工用交流电
- 流属性/单位：Energy / MJ
- 数量规则：计量电能除以合格成品质量；按 3.6 MJ/kWh 将 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：

###### 购入加热蒸汽（`cook_purchased_steam`）

仅在蒸汽跨越场址边界输入时纳入；其上游锅炉燃料不得再计入前景。

- 选定流：工业蒸汽 `ea4e839d-d854-4a7a-a362-b4ccb8dc61ff`
- 流属性/单位：Mass / kg
- 数量规则：计量购入蒸汽质量除以合格成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`tokimura-2017-starch-pearls`

###### 场内加热天然气（`cook_natural_gas`）

仅在场内燃烧天然气供糊化或干燥时纳入，并与购入蒸汽分开。

- 选定流：管输品质天然气 `7766e51e-0b64-4fbb-89cb-489c33293137`
- 流属性/单位：Volume / m3
- 数量规则：标准状态计量天然气体积除以合格成品质量；记录计量参比条件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas`
- 来源：

#### 输出

##### 基本流

###### 向空气排放化石源二氧化碳（`cook_fossil_co2_air`）

仅在场内燃料燃烧时纳入；采用实测燃料碳含量或有记录的烟气监测。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或按燃料碳平衡计算的化石源 CO2 质量除以合格成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

###### 向空气排放一氧化氮（`cook_no_air`）

仅在场内燃烧且一氧化氮单独实测或估算时纳入；不得将合计 NOx 标为此流。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测一氧化氮质量除以合格成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：

### 过程：分级与成品出厂（`grade`）

将合格产品与不可销售粉尘分开。

#### 输入

#### 输出

##### 产品流

###### 合格珍粉或淀粉代用品成品（`grade_tapioca_product`）

仅纳入符合申报形态与含水率规范的可销售食品级成品。

- 选定流：淀粉制成的成品珍粉片、粒或筛下物
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product`
- 来源：`un-cpc-3-2025`

##### 废物流

###### 不可销售的收集研磨筛分粉尘（`grade_sieving_dust`）

仅纳入收集后送废物处理的不可销售粉尘；可销售食品级筛下物仍计作产品。

- 选定流：研磨和筛分产生的粉尘 `e0f3b3af-7794-4c25-ae58-5e4302b226d2`
- 流属性/单位：Mass / kg
- 数量规则：实测处置粉尘质量除以合格成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_grades` | grade | 同一批次中符合食品级规格的珍粉片、粒及筛下物按合格产品计量；优先按分批实测过程记录归属投入。无法分开计量的共有投入按各成品干物质量分配，并披露干物质量、分配比例和含水率。 |  |
| `allocation_dust` | grade_sieving_dust | 不可销售的收集粉尘仅作为废物列示，不作为合格产品或负投入抵扣；若实际销售为食品级筛下物，改列成品并调整参考产品总质量。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_starch | feed_condition | 淀粉投入 | 入库与领料记录 | 批次；植物来源；供应商；湿质量；含水率 | 经校准秤称量并测含水率 | kg | 每批 | 同一生产期 | 申报生产场址 | 每 1 kg 参考流 | 表计或秤的校准及批次追溯 |
| cp_water | feed_condition | 调湿用水 | 水表记录 | 批次；水表起止读数；密度基准 | 经校准工艺水表计量 | kg | 每批 | 同一生产期 | 申报生产场址 | 每 1 kg 参考流 | 表计或秤的校准及批次追溯 |
| cp_electricity | form_cook_dry | 购入电力 | 分表与账单 | 批次；kWh；电压；供电地区 | 分表与账单核对 | MJ | 每批 | 同一生产期 | 申报生产场址 | 每 1 kg 参考流 | 表计或秤的校准及批次追溯 |
| cp_steam | form_cook_dry | 购入蒸汽 | 蒸汽表记录 | 批次；交付 kg；供应商；凝结水边界 | 场址边界蒸汽表计量 | kg | 每批 | 同一生产期 | 申报生产场址 | 每 1 kg 参考流 | 表计或秤的校准及批次追溯 |
| cp_gas | form_cook_dry | 场内天然气 | 燃气表与账单 | 批次；m3；参比温压 | 表计与账单核对 | m3 | 每批 | 同一生产期 | 申报生产场址 | 每 1 kg 参考流 | 表计或秤的校准及批次追溯 |
| cp_emissions | form_cook_dry | 场内燃烧排放 | 烟气测试或燃料分析 | 批次；物种；实测质量；燃料碳 | 按物种实测或记录碳平衡 | kg | 每测试期 | 同一生产期 | 申报生产场址 | 每 1 kg 参考流 | 表计或秤的校准及批次追溯 |
| cp_product | grade | 合格成品 | 批次验收记录 | 批次；产品形态；质量；含水率；剔除量 | 经校准秤称量并测含水率 | kg | 每批 | 同一生产期 | 申报生产场址 | 每 1 kg 参考流 | 表计或秤的校准及批次追溯 |
| cp_dust | grade | 不可销售粉尘 | 废物转移记录 | 批次；粉尘质量；去向；食品级判定 | 称量收集并处置的粉尘 | kg | 每批 | 同一生产期 | 申报生产场址 | 每 1 kg 参考流 | 表计或秤的校准及批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | 所有清单行 | 各交换量除以同批次合格干燥成品质量；保留分子原有单位。 | 各采集协议；cp_product | 每 1 kg 参考流的交换量 |  |
| reconcile_solids | 淀粉原料、成品与粉尘 | 核对干物质投入与成品、处置粉尘及其他有据可查损失；差额应说明。 | cp_starch; cp_product; cp_dust | 干物质平衡记录 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_batch | 所有清单行 | 原料、能源、排放与成品须具有相同批次和时间范围；缺测或分摊须披露。 | 批次台账、表计和校准记录 |
| dq_moisture | 淀粉及成品 | 记录原料和成品含水率及其测量方法，避免湿质量与干质量混用。 | 实验室或在线含水率记录 |
| dq_emission | 场内燃烧排放 | 实测排放与按燃料碳计算的排放需区分；不得把合计 NOx 直接映射为一氧化氮。 | 监测记录与燃料分析 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | 合格成品输出应为每 1 kg 参考流对应 1 kg；核对形态、食品级状态、含水率与原淀粉来源。 | `un-cpc-3-2025` |
| `validate_energy` | form_cook_dry | 检查电、蒸汽和燃气计量边界及参比单位；同一热量不得重复计算。 |  |
| `validate_balance` | all inventory rows | 按干物质核对淀粉投入、合格成品及粉尘，披露未解释差额；不从该试验方法推导普适产率。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 淀粉制珍粉及同类代用品，且原料、形态、技术和出厂边界相符 |
| excluded_use | 未加工淀粉、木薯根、粉丝或烘焙饼干的代表数据 |
| required_metadata | 原淀粉来源；产品形态；合格含水率；热源；地区；批次；上游数据集 |
| required_quality_disclosure | 原始计量覆盖率、缺测、分摊、干物质平衡及未确认 UUID |
| update_trigger | 原料来源、热源、成品规格或主要工艺发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品分类身份；2026-09-23 取阅 |
| `tokimura-2017-starch-pearls` | literature | Tokimura、Fujita 和 Kitahara（2017），Physicochemical Properties and Food Uses of Starch from the New Sweetpotato Cultivar Konamizuki，Journal of Applied Glycoscience 64:1–8，doi:10.5458/jag.jag.JAG-2016_010。https://www.jstage.jst.go.jp/article/jag/64/1/64_jag.JAG-2016_010/_pdf/-char/en | 出版社 PDF 第 3 页 Materials and Methods：商业淀粉加水成珠、蒸汽表层糊化及空气干燥的实验室路线；不作为工业用量或所有形态的规则 |
