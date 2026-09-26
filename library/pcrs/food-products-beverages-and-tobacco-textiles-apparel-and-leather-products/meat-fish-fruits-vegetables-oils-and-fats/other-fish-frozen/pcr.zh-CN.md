---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-fish-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他冷冻鱼

## 1. 范围与适用性

本规则适用于 CPC 21219 剩余类别中，在加工厂门交付的冷冻整鱼，包括未去内脏或已去内脏、有头或去头的硬骨鱼。须声明鱼种、野生或养殖来源、头部及内脏状态、冷冻工艺、冰衣、包装和贮存时长。前景边界从接收原料鱼至冷冻、可选去内脏和包冰、包装及厂内冷冻贮存。上游捕捞或养殖由原料鱼投入及其上游数据集表示。厂门后的运输、零售、烹饪和处置不在此前景边界内。[un-cpc-3-2025; fao-cxs-36-1981; fao-cac-rcp-52-2012]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-fish-frozen |
| classification_refs | CPC 3.0 21219，其他冷冻鱼剩余类别 [un-cpc-3-2025] |
| covered_products | 不属于 CPC 21211–21216 的冷冻整鱼；可未去或已去内脏，可有头或去头 |
| excluded_products | 活鱼、鲜鱼或冷藏鱼；冷冻鱼片、鱼肉、鱼肝和鱼卵；21211–21216 已单列的冷冻鱼类别 [un-cpc-3-2025] |
| representative_product | 厂门交付的剩余类别冷冻整鱼，按不含冰衣与包装的鱼体净质量计 |
| production_route | 整鱼原料接收、可选去内脏、快速冷冻、可选包冰、包装和冷冻贮存 |
| market_state | 冷冻整鱼；声明鱼种、来源、加工形态和冰衣 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 厂门交付的其他鱼剩余类别冷冻整鱼 |
| How much | 不含冰衣和包装的鱼体净质量 1 kg |
| How well | 对速冻产品，稳定后热中心达到并保持 −18 °C 或更低；记录实际适用的标准 [fao-cxs-36-1981] |
| How long or cycle | 一个生产批次直至厂门放行；声明厂内冷冻贮存时长 |
| reference_flow_link | frozen_other_fish |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他冷冻鱼 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼种；野生或养殖来源；整鱼、头部与内脏形态；冷冻温度与工艺；是否有冰衣及其质量；包装；厂内冷冻贮存时长；地理及技术范围 |

参考数量按鱼体净质量计，不含保护性冰衣和包装。称量有代表性的去冰衣批次，或采用可追溯并与生产批次核对的净含量记录。[fao-cxs-36-1981; fao-cac-rcp-52-2012]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | frozen_other_fish | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 `cp_output_mass` 测得不含冰衣和包装的合格鱼体净质量，作为 1 kg 分母。 |
| input_normalization | 所有清单行 | 各行对应的流属性 | 各行对应的单位 | 按生产批次记录各项交换，并按合格鱼体净质量 kg 用 `normalize_lot` 换算；保留原分子单位。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂接收的原料整鱼；记录鱼种、来源、鲜/冷藏/冷冻状态及实测质量 |
| starting_condition_role | 作为前景起始投入，并关联上游鱼类生产负荷 |
| product_classification_scope | CPC 21219 冷冻整鱼剩余类别；上游原料鱼保留自身来源及状态类别 |
| recursive_input_rule | 若对已冷冻鱼再加工，声明投入时状态并仅关联一次上游产品数据集，不将其重复建模为新捕获原料鱼。 |
| upstream_dataset_requirement | 对接收的鱼关联相符的野生捕捞或养殖及入厂运输数据集；披露无法关联的部分。 |
| disclosure | 报告鱼种组成、来源路线、头部与内脏状态、冰衣、包装、冷冻设备、贮存时长及任何排除的交换。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_gate | 前景范围 | 纳入接收、可选去内脏、冷冻、可选包冰、包装和厂内冷冻贮存，直至产品放行。 | fao-cac-rcp-52-2012 |
| boundary_upstream | raw_whole_fish | 关联实际的原料鱼上游路线，避免重复计入上游生产。 | |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fish_freezing | 整鱼接收、冷冻、包装和贮存 | required | 所有涵盖批次 | 前景生产 | 每 1 kg 合格冷冻鱼体净质量 |

### 过程：整鱼接收、冷冻、包装和贮存（`fish_freezing`）

#### 输入

##### 产品流

###### 接收的原料整鱼（`raw_whole_fish`）

接收的原料整鱼作为一项产品投入跨越前景边界。

- 选定流：剩余鱼种范围的鲜或冷藏整鱼
- 流属性/单位：质量 / kg
- 数量规则：逐生产批次称量投入的合格原料鱼。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_fish`
- 来源：`fao-cac-rcp-52-2012`

###### 可选包冰用自来水（`glazing_tap_water`）

可选包冰用自来水作为一项产品投入跨越前景边界。仅在使用自来水包冰时纳入。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：逐批计量供包冰使用的饮用水质量；仅未包冰时记零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glazing_water`
- 来源：`fao-cxs-36-1981`

###### 冷冻及厂内贮存用电（`freezing_electricity`）

冷冻及厂内贮存用电作为一项产品投入跨越前景边界。

- 选定流：交流电
- 流属性/单位：能量 / MJ
- 数量规则：计量该批次冷冻、包装和厂内冷冻贮存期间的归属电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`fao-cac-rcp-52-2012`

###### 聚乙烯包装薄膜（`polyethylene_film`）

聚乙烯包装薄膜作为一项产品投入跨越前景边界。仅在使用聚乙烯薄膜的路线中纳入。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：称量合格批次包装消耗的薄膜；如使用其他树脂，另设原子清单行。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_film`
- 来源：`fao-cxs-36-1981`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他冷冻整鱼（`frozen_other_fish`）

合格冷冻整鱼是加工厂门的参考产品。其净质量不包括冰衣和包装。

- 选定流：其他冷冻鱼
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`fao-cxs-36-1981`

##### 废物流

###### 可选去内脏产生的鱼内脏（`fish_viscera`）

单独收集并记录去内脏工序移除的鱼内脏，作为一项废物输出；本行仅在进行去内脏时适用。

- 选定流：鱼内脏
- 流属性/单位：质量 / kg
- 数量规则：逐批称量单独收集的鱼内脏；仅未去内脏时记零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_viscera`
- 来源：`fao-cac-rcp-52-2012`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | 联合运行的生产线 | 如记录允许，首先按生产线或批次细分计量的冷冻与贮存活动。 | fao-cac-rcp-52-2012 |
| allocation_shared | 共同使用的鱼加工投入 | 无法细分时，依据实测设备运行时间或其他实测物理驱动量进行因果分配，披露驱动量及共产品；若无可辩护的驱动量，则提交审查。 | |
| allocation_byproduct | fish_viscera | 内脏作废物处置时按废物记录；若作为产品销售，应报告其质量、去向和另行论证的分配决定，不得默认为零负荷。 | fao-cac-rcp-52-2012 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_raw_fish | fish_freezing | raw_whole_fish | 入厂与称量记录 | 批次；鱼种；来源；原料质量；状态 | 校准秤或经核对的入厂记录 | kg | 每批 | 生产周期 | 加工厂门 | 每 1 kg 参考流 | 秤校准和入厂单据 |
| cp_glazing_water | fish_freezing | glazing_tap_water | 水表和批次记录 | 批次；饮用水质量；包冰状态 | 计量或称量投入的自来水 | kg | 每包冰批次 | 生产周期 | 加工厂门 | 每 1 kg 参考流 | 水表和饮用水记录 |
| cp_electricity | fish_freezing | freezing_electricity | 电表和冷冻设备日志 | 批次；电表读数；设备运行时间；贮存时长 | 计量电量，并按记录的运行时间分配共用电量 | MJ | 每批或每生产周期 | 入厂至放行 | 加工厂门 | 每 1 kg 参考流 | 电表校准和运行日志 |
| cp_film | fish_freezing | polyethylene_film | 包装领用记录 | 批次；薄膜树脂；领用质量；退回质量 | 称量该批次净领用的聚乙烯薄膜 | kg | 每批 | 生产周期 | 加工厂门 | 每 1 kg 参考流 | 树脂规格和库存核对 |
| cp_output_mass | fish_freezing | frozen_other_fish | 去冰衣称量及放行记录 | 批次；鱼种；加工形态；毛质量；冰衣质量；鱼体净质量 | 称量去冰衣后的合格鱼体或核对可追溯的净含量记录 | kg | 每批 | 加工厂门放行时 | 加工厂门 | 每 1 kg 参考流 | 校准秤、去冰衣和放行记录 |
| cp_viscera | fish_freezing | fish_viscera | 单独收集废物的称量记录 | 批次；去内脏状态；内脏质量；去向 | 称量单独收集的鱼内脏 | kg | 每个去内脏批次 | 生产周期 | 加工厂门 | 每 1 kg 参考流 | 废物单据和质量平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | 所有清单行 | q_ref = q_lot / m_net，其中 m_net 为不含冰衣和包装的合格鱼体净质量；保留各行原分子单位。 | q_lot; m_net; cp_output_mass | 每 1 kg 参考流的 q_ref | fao-cxs-36-1981 |
| reconcile_mass | raw_whole_fish; frozen_other_fish; fish_viscera | 核对实测原料鱼、合格鱼体净质量、鱼内脏及记录的加工损失；调查未解释的差额，不假定为零。 | cp_raw_fish; cp_output_mass; cp_viscera | 质量平衡检查 | fao-cac-rcp-52-2012 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 所有批次 | 记录鱼种、来源、头部和内脏形态、包装树脂及产品状态。 | 入厂、包装和放行记录 |
| dq_net_mass | frozen_other_fish | 鱼体净质量须与冰衣和包装分开。 | 去冰衣、称量和标签记录 [fao-cxs-36-1981] |
| dq_cold_chain | frozen_other_fish | 保存冷冻热中心和冷库温度记录及贮存时长。 | 校准温度计和冷冻设备日志 [fao-cac-rcp-52-2012] |
| dq_completeness | 所有清单行 | 将仪表和材料单据与同一批次核对，报告缺失的覆盖情况。 | 批次核对记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | 参考产品 | 不得以鱼片、鱼糜、鱼肝、鱼卵或已单列的冷冻鱼类别替代剩余类别整鱼。 | un-cpc-3-2025 |
| validate_net_mass | frozen_other_fish | 检查参考质量是否为不含冰衣和包装的合格鱼体质量，以及所有清单行是否采用同一 1 kg 分母。 | fao-cxs-36-1981 |
| validate_routes | 条件适用的清单行 | 包冰时须有用水记录，去内脏时须有内脏记录，使用包装薄膜时须记录其材料。 | fao-cac-rcp-52-2012 |
| validate_temperature | frozen_other_fish | 声称速冻时，核实稳定后热中心温度为 −18 °C 或更低，并披露贮存条件。 | fao-cxs-36-1981 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 其他冷冻整鱼的厂门前景数据包 |
| downstream_use | 完成数据集检查后，发布产品流、过程和生命周期模型投影 |
| allowed_use | 已声明鱼种、来源和技术的特定冷冻整鱼建模 |
| excluded_use | 通用鱼片、鱼糜、鱼肝和鱼卵，或已单列冷冻鱼类别的建模 |
| required_metadata | 鱼种组成；来源路线；加工形态；净质量；冷冻工艺和温度；冰衣；包装；贮存时长；地理范围 |
| required_quality_disclosure | 仪表覆盖、分配、质量平衡、未解决的流 UUID、缺失的数量范围和上游数据关联 |
| update_trigger | 鱼种组成、来源路线、冷冻技术、包装或贮存制度发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | CPC Ver. 3.0 Explanatory Notes, 30 June 2025, section 21219; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品边界与排除项 |
| fao-cxs-36-1981 | standard | Codex Standard for Quick Frozen Finfish, Uneviscerated and Eviscerated, CXS 36-1981, revised 1995, amended 2013; https://www.fao.org/input/download/standards/103/CXS_036e.pdf | 整鱼状态、冷冻、净质量和冰衣 |
| fao-cac-rcp-52-2012 | official_guidance | Code of Practice for Fish and Fishery Products, second edition, 2012, sections 8.1 and 8.3; https://www.fao.org/4/i2382e/i2382e.pdf | 接收、冷冻、包冰及冷库记录 |
