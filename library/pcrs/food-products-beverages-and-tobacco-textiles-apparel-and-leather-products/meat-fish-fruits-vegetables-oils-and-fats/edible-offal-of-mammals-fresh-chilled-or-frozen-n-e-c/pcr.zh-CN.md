---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-mammals-fresh-chilled-or-frozen-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他哺乳动物可食用内脏，鲜、冷藏或冷冻（未另分类）

## 1. 范围与适用性

本规则适用于屠后验收的其他哺乳动物可食用内脏，经分拣、清洗及必要的冷态处理后，以鲜、冷藏或冷冻状态交付。动物种属、器官、产品状态和实际工艺必须逐批申报。屠宰及养殖上游负担须由可追溯的上游数据集提供。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-mammals-fresh-chilled-or-frozen-n-e-c |
| classification_refs | CPC 3.0: 21159 |
| covered_products | 骆驼及骆驼科动物、其他未单列反刍动物、马及其他马科动物、兔及野兔、以及其他未单列哺乳动物的鲜、冷藏或冷冻可食用内脏 |
| excluded_products | 牛、水牛、猪、羊和山羊内脏；禽类、爬行动物和其他非哺乳动物内脏；不可食用内脏；盐腌、干制、熏制或其他加工制品 |
| representative_product | 鲜骆驼肝；仅作说明，数据集须声明实际种属和器官 |
| production_route | 屠后可食性验收、分拣、清洗、必要的冷藏或冷冻及交付 |
| market_state | 鲜、冷藏或冷冻；每个数据集只声明实际状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 经验收的其他哺乳动物可食用内脏 |
| How much | 1 kg |
| How well | 符合声明的可食状态、器官和冷态条件 |
| How long or cycle | 交付时的一批产品；不声明使用寿命 |
| reference_flow_link | finished_offal |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他哺乳动物可食用内脏，鲜、冷藏或冷冻（未另分类） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 动物种属；器官；鲜/冷藏/冷冻状态；屠后验收条件；场址和期间；上游数据集及其分配方法 |

未确认该残余类别的精确公开参考产品 UUID。数据包应保留未解决的产品流身份，并在确定精确公开流后再绑定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass | kg | 参考产品为同一验收批次的净可食质量；按 `cp_output` 称量，每 1 kg 合格交付量归一化。 |
| `electricity_conversion` | electricity | Net calorific value | MJ | 按 1 kWh = 3.6 MJ 将现场电表记录换算为选定流单位，并保留原始 kWh。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground | 屠后可食性验收后的内脏接收至产品交付；纳入分拣、清洗、冷态处理和相应废物。 | cpc30-notes; fao-animal-food-2009 |
| upstream_link | incoming_offal | 将屠宰和养殖过程的可追溯上游数据集与原料内脏输入相连，并披露其分配方法。 |  |
| exclude_downstream | foreground | 零售、烹饪和消费者使用不在本场门边界内。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 屠后确认可食用的未清洗内脏及其来源屠宰场 |
| starting_condition_role | 可追溯的原料进入点 |
| product_classification_scope | CPC 3.0 21159；以种属、器官、状态限定实际产品 |
| recursive_input_rule | 同类别外购内脏须作为独立输入并链接上游数据集，不得再次计入本过程产量 |
| upstream_dataset_requirement | 需可追溯的屠宰及养殖数据集，披露其内脏共产品分配 |
| disclosure | 披露接收状态、种属、器官、边界排除项及上游数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| offal_conditioning | 内脏验收后处理 | required | 全部适用批次 | 分拣、清洗和必要冷态处理 | 每 1 kg 合格交付内脏 |

### 过程：内脏验收后处理（`offal_conditioning`）

#### 输入

##### 产品流

###### 未清洗的其他哺乳动物鲜可食用内脏（`incoming_offal`）

记录清洗或修整前已称重的可食用内脏批次，并标明动物种属和器官。

- 选定流: 未清洗的其他哺乳动物鲜可食用内脏
- 流属性/单位: Mass / kg
- 数量规则: 按 `cp_incoming` 采集实际数量；按每 1 kg 合格交付内脏归一化。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_incoming`
- 来源: `cpc30-notes`

###### 自来水（`tap_water`）

计量内脏清洗和设备卫生用自来水，区分场址其他用途。

- 选定流: 自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位: Volume / m3
- 数量规则: 按 `cp_water` 采集实际数量；按每 1 kg 合格交付内脏归一化。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_water`
- 来源: `fao-animal-food-2009`

###### 电力（`electricity`）

记录搬运和冷态处理可归属的电力，将计量的 kWh 换算为 MJ。

- 选定流: 电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位: Net calorific value / MJ
- 数量规则: 按 `cp_electricity` 采集实际数量；按每 1 kg 合格交付内脏归一化。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_electricity`
- 来源: `fao-animal-food-2009`

#### 输出

##### 产品流

###### 其他哺乳动物可食用内脏，鲜、冷藏或冷冻（未另分类）（`finished_offal`）

在声明的鲜、冷藏或冷冻交付状态称量验收的可食用内脏。

- 选定流: 其他哺乳动物可食用内脏，鲜、冷藏或冷冻（未另分类）
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_output`
- 来源: `cpc30-notes`; `fao-animal-food-2009`

##### 废物流

###### 分拣剔除的哺乳动物可食用内脏（`rejected_offal`）

将剔除的内脏物流与合格产品和其他屠宰废物分别称重。

- 选定流: 分拣剔除的哺乳动物可食用内脏
- 流属性/单位: Mass / kg
- 数量规则: 按 `cp_reject` 采集实际数量；按每 1 kg 合格交付内脏归一化。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_reject`
- 来源: `fao-animal-food-2009`

###### 清洗废水（`cleaning_effluent`）

测量送往处理设施的清洗废水，不含未污染径流和生活污水。

- 选定流: 清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位: Mass / kg
- 数量规则: 按 `cp_effluent` 采集实际数量；按每 1 kg 合格交付内脏归一化。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_effluent`
- 来源: `fao-animal-food-2009`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| separate_lots | foreground | 优先按批次和设备记录分开计量；不同种属、器官及状态不得无说明合并。 |  |
| shared_utilities | foreground | 不能直接分表的清洗和冷态公用投入，按同期各合格批次处理湿质量分摊，披露分母和覆盖期。 |  |
| upstream_allocation | upstream | 沿用已核实上游屠宰数据集的内脏共产品分配并披露，不凭空设定屠宰分配系数。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_incoming | offal_conditioning | incoming_offal | 批次或计量记录 | 批次号；动物种属；器官；状态；计量读数；计量时间 | 用可追溯秤或流量/电表记录；核对批次与独立计量边界 | kg | 每批及每月汇总 | 覆盖报告期间全部合格批次 | 同一场址处理线 | 每 1 kg 参考流 | 校准、批次质量平衡与计量记录 |
| cp_water | offal_conditioning | tap_water | 批次或计量记录 | 批次号；动物种属；器官；状态；计量读数；计量时间 | 用可追溯秤或流量/电表记录；核对批次与独立计量边界 | m3 | 每批及每月汇总 | 覆盖报告期间全部合格批次 | 同一场址处理线 | 每 1 kg 参考流 | 校准、批次质量平衡与计量记录 |
| cp_electricity | offal_conditioning | electricity | 批次或计量记录 | 批次号；动物种属；器官；状态；计量读数；计量时间 | 用可追溯秤或流量/电表记录；核对批次与独立计量边界 | MJ | 每批及每月汇总 | 覆盖报告期间全部合格批次 | 同一场址处理线 | 每 1 kg 参考流 | 校准、批次质量平衡与计量记录 |
| cp_output | offal_conditioning | finished_offal | 批次或计量记录 | 批次号；动物种属；器官；状态；计量读数；计量时间 | 用可追溯秤或流量/电表记录；核对批次与独立计量边界 | kg | 每批及每月汇总 | 覆盖报告期间全部合格批次 | 同一场址处理线 | 每 1 kg 参考流 | 校准、批次质量平衡与计量记录 |
| cp_reject | offal_conditioning | rejected_offal | 批次或计量记录 | 批次号；动物种属；器官；状态；计量读数；计量时间 | 用可追溯秤或流量/电表记录；核对批次与独立计量边界 | kg | 每批及每月汇总 | 覆盖报告期间全部合格批次 | 同一场址处理线 | 每 1 kg 参考流 | 校准、批次质量平衡与计量记录 |
| cp_effluent | offal_conditioning | cleaning_effluent | 批次或计量记录 | 批次号；动物种属；器官；状态；计量读数；计量时间 | 用可追溯秤或流量/电表记录；核对批次与独立计量边界 | kg | 每批及每月汇总 | 覆盖报告期间全部合格批次 | 同一场址处理线 | 每 1 kg 参考流 | 校准、批次质量平衡与计量记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | all inventory rows | q_ref = q_period / m_accepted；q_period 为同期各行实测总量；m_accepted 为 `cp_output` 的同期合格产品净质量（kg）。 | q_period; m_accepted; cp_output | q_ref | |
| convert_electricity | electricity | MJ = kWh × 3.6；保留原始电表记录。 | kWh; cp_electricity | MJ | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_traceability | finished_offal | 每批记录种属、器官和鲜/冷藏/冷冻状态。 | 批次验收与交付记录 |
| meter_consistency | all inventory rows | 核对同一期间、场址、产品分母和计量设备校准。 | 原始计量及校准记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | finished_offal | 若种属属于另设类别或状态为盐腌、干制、熏制，则不符合本规则。 | cpc30-notes |
| validate_mass | all inventory rows | 所有行须按同期合格产品净质量归一化，保留原始分子和分母。 |  |
| validate_waste | cleaning_effluent | 分别记录排入排水系统的清洗废水及其处理去向，并与其他水流分开计量。 | fao-animal-food-2009 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 其他哺乳动物内脏加工前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在种属、器官、状态、场址和上游分配相符时用于过程或生命周期模型 |
| excluded_use | 不得作为牛、猪、羊、禽类或已加工内脏的通用替代数据 |
| required_metadata | 种属；器官；状态；场址；期间；产品质量；上游屠宰数据集和分配；计量方法 |
| required_quality_disclosure | 未解决的参考产品及原料流 UUID；缺失的经验范围；共享公用投入的分摊 |
| update_trigger | 准确公开流身份、批次数据或可比实证范围可用时复核 |

## 11. 数据源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| cpc30-notes | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类边界 |
| fao-animal-food-2009 | official_guidance | FAO, Animal food production, second edition (2009), Code of Hygienic Practice for Meat, https://www.fao.org/4/i1111e/i1111e.pdf | 卫生、排水和冷链过程 |
