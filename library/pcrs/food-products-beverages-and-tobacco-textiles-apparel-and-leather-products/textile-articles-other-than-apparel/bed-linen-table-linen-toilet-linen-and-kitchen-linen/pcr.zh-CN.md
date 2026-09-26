---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.bed-linen-table-linen-toilet-linen-and-kitchen-linen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 床上、餐桌、盥洗及厨房用织物制品

## 1. 范围与适用性

本规则涵盖无填充的床单和枕套、桌布和餐巾、毛巾，以及相应的盥洗或厨房用织物制品。前景边界为购入已整理织物至工厂门口的合格干燥成品。起始条件为可直接裁剪的成品织物；纤维生产、纺纱、织造或针织以及织物湿法整理须由相连的上游数据集覆盖。代表性路线是机织棉布的裁剪、缝制、检验和包装。其他纤维及针织路线须声明材料和路线，并连接相应的上游数据集，不得直接套用棉布投入。填充被褥、枕头、窗帘、服装及本类以外的清洁布不在范围内。配送、使用阶段洗涤和寿命终结不属于本工厂门口前景范围。产品区分依据 `unsd-cpc3-2025`；裁剪缝制过程类型依据 `epa-textiles-2008`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.bed-linen-table-linen-toilet-linen-and-kitchen-linen` |
| classification_refs | CPC 3.0 27120；仅为分类参照，不构成已接受的映射决定 |
| covered_products | 织物制无填充床上、餐桌、盥洗和厨房用品 |
| excluded_products | 填充寝具、窗帘、服装、地板抹布及单独销售的织物 |
| representative_product | 无填充机织棉床单 |
| production_route | 购入已整理机织棉布；干法裁剪、缝制、检验及包装 |
| market_state | 工厂门口验收的干燥成品；产品净质量不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于床上、餐桌、盥洗或厨房的无填充织物成品 |
| How much | 1 kg 验收合格的干燥成品净质量 |
| How well | 声明制品种类、纤维组成、织物结构和整理状态；符合生产者声明的验收规格 |
| How long or cycle | 一次工厂门口交付；使用寿命不属于本生产参考基准 |
| reference_flow_link | `finished_linen_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 无填充家用织物成品；UUID 待确认 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制品种类；纤维组成；机织或针织；织物整理状态；工厂门口包装状态；地域；生产期间 |

参考产品流 UUID 尚未确认。前景数据包须声明全部必需限定信息；在直接核实前不得声称使用了已确认的天工成品流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量不含包装的验收合格干燥制品，以该净质量作为所有清单行的共同分母。 |
| `lot_normalization` | 所有清单行 | 各行规定的质量或能量 | kg 或 kWh | 将归属批次的投入及边角料除以合格制品净质量（kg）；保留各行分子单位。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入可裁剪的已整理机织织物；声明纤维、结构和整理状态 |
| starting_condition_role | 裁剪缝制前景过程的上游产品投入 |
| product_classification_scope | 无填充床上、餐桌、盥洗及厨房用织物成品 |
| recursive_input_rule | 若购入制品已属于本类别，须将其作为单独声明的投入并连接上游数据集；不得再将其计为新制造的产出 |
| upstream_dataset_requirement | 连接相容织物数据集，覆盖上游实际发生的纤维、纱线、成布和湿法整理 |
| disclosure | 披露织物起始条件、裁剪缝制场址、产品组合、包装状态及排除阶段 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_fabric_entry` | 购入织物 | 将购入成品织物及其相连的上游生产纳入产品系统；前景从接收可裁剪织物开始。 | `epa-textiles-2008` |
| `boundary_factory_gate` | 成品织物制品 | 纳入裁剪、缝制、检验、现场电力和可归属包装，直至工厂门口。 | `epa-textiles-2008` |
| `boundary_wet_process` | 现场湿法加工 | 若现场进行洗涤、漂白、染色或烘干，须先另列该过程的原子交换并披露过程清单，方可用于该路线。 | `epa-textiles-2008` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `make_up_linen` | 织物裁剪、缝制、检验和包装 | `required` | 所有范围内制品 | 前景加工 | 每 1 kg 合格干燥成品净质量 |

### 过程：织物裁剪、缝制、检验和包装（`make_up_linen`）

#### 输入

##### 产品流
###### 购入机织棉布（`cotton_fabric`）

购入棉布作为主要材料投入跨越前景边界。

- 选定流：棉布 `f8292a12-0851-4ed8-9ff3-18d5f4d302ff`
- 流属性/单位：质量 / kg
- 数量规则：称量代表性棉路线的合格入厂织物；记录纤维含量及整理状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：

###### 棉缝纫线（`cotton_sewing_thread`）

棉缝纫线在缝制时进入接缝。

- 选定流：棉缝纫线；UUID 待确认
- 流属性/单位：质量 / kg
- 数量规则：称量或核对批次领用的棉缝纫线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：

###### 购入电网电力（`grid_electricity`）

购入电网电力驱动裁剪、缝制和检验设备。

- 选定流：电网电力；UUID 待确认
- 流属性/单位：能量 / kWh
- 数量规则：依据电表或经核对的账单记录裁剪、缝制和检验的归属电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 瓦楞运输纸箱（`corrugated_box`）

采用该运输包装时，瓦楞纸箱进入前景边界。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：使用瓦楞纸箱时称量批次归属纸箱；未使用时记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格织物成品（`finished_linen_output`）

验收合格的干燥制品作为参考产品离开生产边界。

- 选定流：无填充家用织物成品；UUID 待确认
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

##### 废物流

###### 干净棉布裁剪边角料（`cotton_cutting_offcuts`）

干净棉布边角料作为分类废物流离开裁剪步骤。

- 选定流：干净棉布裁剪边角料；UUID 待确认
- 流属性/单位：质量 / kg
- 数量规则：分拣并称量归属于所报批次的干净棉布边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_offcuts`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用生产线 | 首先按制品种类分离批次特定的裁剪、缝制、电力和材料记录，并记录细分方法。 | `eu-pef-2021` |
| `allocation_physical` | 剩余共用负荷 | 若无法细分，且净质量能够解释资源使用，则按实测合格成品净质量分配共用加工投入；披露理由及敏感性。 | `eu-pef-2021` |
| `allocation_scrap` | 裁剪边角料 | 单独记录边角料质量及去向。无实际回收及替代产品证据时不得假定替代收益。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output_mass` | `make_up_linen` | 合格产出 | 称重记录 | 制品种类；批次；合格干燥净质量；不合格质量；包装皮重 | 用经校准的秤称量不含包装的合格制品，并核对出货及不合格记录。 | kg | 每批 | 报告期间 | 生产场址 | 每 1 kg 参考流 | 秤校准及验收日志 |
| `cp_materials` | `make_up_linen` | 织物、缝纫线及纸箱 | 领料及称重记录 | 材料身份；批次；领用 kg；退回 kg；包装种类 | 称量领用材料减退库量，并核对库存记录。 | kg | 每批 | 报告期间 | 生产场址 | 每 1 kg 参考流 | 库存核对及称重记录 |
| `cp_energy` | `make_up_linen` | 外购电力 | 电表或账单 | 电表编号；期初及期末 kWh；批次或生产线工时 | 优先使用分表；核对总表或账单及有记录的生产线分配。 | kWh | 每批或每月 | 报告期间 | 生产场址 | 每 1 kg 参考流 | 电表校准或账单及分配工作表 |
| `cp_offcuts` | `make_up_linen` | 干净棉布边角料 | 分类废物称重 | 批次；边角料 kg；污染状态；去向 | 将干净边角料分开并在回收或处置前称量。 | kg | 每批 | 报告期间 | 生产场址 | 每 1 kg 参考流 | 地磅或秤日志及移交记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | `cotton_fabric`; `cotton_sewing_thread`; `grid_electricity`; `corrugated_box`; `cotton_cutting_offcuts` | q_ref = 批次归属交换量 / 合格干燥织物成品净质量（kg）；保留交换量分子单位。 | 批次交换量；合格干燥净质量；`cp_output_mass` | 每 1 kg 参考流的交换量 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有行 | 声明制品种类、纤维组成、织物整理状态、材料等级、包装状态和废物流实际去向。 | 产品规格及库存记录 |
| `dq_balance` | 织物和成品质量 | 核对领用织物、合格成品、不合格品和裁剪边角料；解释剩余质量差异。 | 批次质量平衡表 |
| `dq_time` | 所有行 | 使用同一声明的报告期间，披露缺失或估计记录。 | 带日期的仪表、台账及验收记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_denominator` | 所有清单行 | 确认每项交换量均按不含包装的合格干燥成品净质量归一化，且实测分母大于零。 | |
| `validate_identity` | 产品及材料流 | 核对制品类别、投入织物状态及纤维组成；UUID 未解决时不得表述为已核实的天工流。 | `unsd-cpc3-2025` |
| `validate_balance` | 织物裁剪 | 核对织物投入、合格品、不合格品和边角料，并解释物料损失。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 家用织物制品前景生产数据集 |
| downstream_use | `secondary_dataset`；代表性经审核后可作 `background_dataset` |
| allowed_use | 在织物上游数据相容时，建模声明的制品种类和裁剪缝制路线 |
| excluded_use | 不得在未追加建模时声称全生命周期足迹、使用寿命功能单位，或不同制品种类间的等效性 |
| required_metadata | 制品种类；纤维组成；织物结构和整理状态；场址；期间；合格质量；包装状态；织物上游数据集；UUID 未解决状态 |
| required_quality_disclosure | 分配方法；电表覆盖；物料平衡；缺失记录；边角料去向；地域和技术限制 |
| update_trigger | 织物路线、产品组合、整理场址、供电、包装或经核实流身份变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | `official_guidance` | 联合国统计司，CPC 3.0 结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品身份及邻近类别区分 |
| `epa-textiles-2008` | `official_guidance` | 美国环保署，《美国关键工业部门温室气体排放量化》，2008 年 5 月工作稿，https://archive.epa.gov/osem/sectors/web/pdf/greenhouse-report.pdf | 纺织品裁剪缝制过程类型；不作数量基准 |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations，《欧盟官方公报》L 471（2021 年 12 月 30 日），附件 I 第 4.5 节，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 | 多功能过程及分配层级 |
