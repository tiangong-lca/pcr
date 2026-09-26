---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-85-or-more-by-weight-of-cotton-weighing-not-more-tha-66cf480e
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含棉量不少于85%、单位面积质量不超过200克/平方米的棉机织物

## 1. 范围与适用性

本规则规定织造出厂门处的棉机织坯布前景数据。验收织物的干态纤维质量中棉占比不少于85%，单位面积质量不超过200 g/m2。应记录实际组织、纱线与上浆路线。织后退浆、漂白、染色、印花和整理须另建并声明下游数据集；本坯布边界不能代表 CPC 26610 的所有成品状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-85-or-more-by-weight-of-cotton-weighing-not-more-tha-66cf480e |
| classification_refs | CPC 3.0 26610；坯布生产状态为较窄范围 |
| covered_products | 干态含棉纤维质量分数≥85%、单位面积质量≤200 g/m2 的普通棉机织坯布 |
| excluded_products | 较厚或含棉量较低织物、针织物、毛巾织物等特种织物，以及织后湿整理织物 |
| representative_product | 卷装干态棉机织坯布 |
| production_route | 棉纱整经；视路线采用淀粉上浆；织机织造 |
| market_state | 湿整理和运输包装前验收合格的干态坯布 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收合格的棉机织坯布 |
| How much | 1 kg |
| How well | 棉的干态纤维质量分数≥85%；单位面积质量≤200 g/m2；声明组织与上浆路线 |
| How long or cycle | 织造出厂门处一个明确生产批次 |
| reference_flow_link | fabric_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 含棉量不少于85%、单位面积质量不超过200克/平方米的棉机织物 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 棉的干态纤维质量分数；单位面积质量 g/m2；坯布状态；纱线等级；组织；上浆路线；工厂与批次 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 | kg | 参考量与所有每千克清单分母均使用同一织造出厂门处实测干态合格坯布质量；排除运输包装。 |
| `fabric_specification` | 参考产品 | 质量与单位面积质量 | kg；g/m2 | 按干质量检验验收批次的棉纤维分数和单位面积质量；不符合棉≥85%或≤200 g/m2 的批次不得纳入。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground_boundary | 从进入整经的采购或转入纱线开始，至织造出厂门处合格坯布及分拣织机边角料为止。 | `eu-jrc-textiles-bref-2023`; `un-cpc-3-structure-2025` |
| `sizing_route` | conditional_process | 仅在实际采用水性玉米淀粉上浆时纳入该批次用水与玉米淀粉；其他浆料配方须另行审查原子交换。 | `eu-jrc-textiles-bref-2023` |
| `finishing_exclusion` | foreground_boundary | 本坯布边界不计入下游退浆、漂白、染色、印花、整理、使用和寿命终结。 | `eu-jrc-textiles-bref-2023` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 整经入口处按干质量计量的采购或转入棉纱 |
| starting_condition_role | 前景投入；上游纱线生产由背景数据集连接 |
| product_classification_scope | 满足含棉分数及单位面积质量检验的 CPC 3.0 26610 坯布子集 |
| recursive_input_rule | 若重新投入同类坯布，单独记录并披露其上游数据集，避免自我递归连接。 |
| upstream_dataset_requirement | 棉纱、水和电力使用可追溯上游数据集，并披露地域、技术与时间。 |
| disclosure | 记录织物状态、批次、组织、实测含棉分数、单位面积质量、纱线等级、浆料配方及出厂门。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| weave_greige | 整经、按路线上浆及织机织造 | required | 所有覆盖的坯布批次；上浆交换仅在使用相应配方时适用 | 前景织物形成 | 每 1 kg 合格坯布 |

### 过程：整经、按路线上浆及织机织造（`weave_greige`）

#### 输入

##### 产品流

###### 投入经纬纱的棉纱（`cotton_yarn_input`）

采购棉纱进入整经及织造；采集该批次的干态质量。

- 选定流：含棉重量达85%或85%以上的棉纱（缝纫线除外） `526fe0a1-be6d-4384-b609-4ca604628ec4`
- 流属性/单位：质量 / kg
- 数量规则：记录该批次领用的合格干棉纱质量，包括最终成为已计量织机边角料的纱线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`eu-jrc-textiles-bref-2023`

###### 淀粉上浆用工业生产水（`industrial_water_input`）

仅在声明的淀粉上浆路线中，工业生产水进入浆液。

- 选定流：工业生产用水 `72dcdee6-846a-455a-95d1-942aa7ad3730`
- 流属性/单位：质量 / kg
- 数量规则：采用水性淀粉上浆时，记录该批次进入浆液配制环节的用水量；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`eu-jrc-textiles-bref-2023`

###### 玉米淀粉浆料（`corn_starch_input`）

仅在声明配方使用玉米淀粉时，干淀粉进入浆液。

- 选定流：玉米淀粉
- 流属性/单位：质量 / kg
- 数量规则：采用玉米淀粉上浆时，记录该批次领用的干玉米淀粉质量；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`eu-jrc-textiles-bref-2023`

###### 整经、上浆与织造使用的交流电（`grid_electricity_input`）

电网交流电为整经、上浆和织机运行提供动力。

- 选定流：电网交流电
- 流属性/单位：能量 / kWh
- 数量规则：记录分配至该批次整经、上浆和织机运行的电表电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`eu-jrc-textiles-bref-2023`

##### 废物流
##### 基本流
#### 输出
##### 产品流

###### 验收合格的棉机织坯布（`fabric_output`）

验收合格的干态坯布在湿整理前离开织造出厂门。

- 选定流：含棉量不少于85%、单位面积质量不超过200克/平方米的棉机织物
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product`
- 来源：`eu-jrc-textiles-bref-2023`

##### 废物流

###### 洁净棉织边及废纱（`loom_cotton_scrap_output`）

分拣出的洁净棉织边及废纱作为废物流离开织造过程。

- 选定流：洁净棉织边及废纱
- 流属性/单位：质量 / kg
- 数量规则：称量该批次分拣外运的洁净棉织边及废纱；仅经核实不存在时记录零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：`eu-jrc-textiles-bref-2023`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | foreground_burden_allocation | 分配前按批次或机组计量纱线、浆料、电力及合格产出。 | `eu-jrc-textiles-bref-2023` |
| `allocation_shared` | shared_operations | 共用设备的实测总电量按该批次有记录的机器运行时间分配，并披露总量和分配份额。 |  |
| `scrap_no_credit` | loom_cotton_scrap_output | 报告分拣废料质量；除非另有文件化下游回收模型，否则不计替代产品收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | weave_greige | 合格产出 | 称重与检验 | 批次号；合格干质量 kg；棉分数；g/m2；组织；出厂门 | 用校准秤称量合格干态坯布；检验成分及单位面积质量；排除运输包装。 | kg | 每批 | 代表性生产期 | 同一织造场址 | 每 1 kg 参考流 | 秤校准；检验证书；批次验收 |
| cp_material | weave_greige | 纱线；上浆水；玉米淀粉 | 领料与计量记录 | 批次号；干棉纱 kg；水 kg；干淀粉 kg；配方 | 将领料和退料与批次核对；对每种原子材料单独称重或计量。 | kg | 每批 | 与产出相同批次 | 同一织造场址 | 每 1 kg 参考流 | 库存核对；计量器校准 |
| cp_energy | weave_greige | 电网电力 | 电表记录 | 批次号；kWh；设备工时；共用电表份额 | 使用专用电表，或按有记录的机器运行时间分配共用电表的 kWh。 | kWh | 每批 | 与产出相同批次 | 同一织造场址 | 每 1 kg 参考流 | 电表校准；运行日志 |
| cp_scrap | weave_greige | 洁净棉织边及废纱 | 分拣废物称重 | 批次号；废料 kg；去向 | 将洁净棉织机废料与受污染或混合废料分开称量。 | kg | 每批 | 与产出相同批次 | 同一织造场址 | 每 1 kg 参考流 | 过磅单；分拣记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `batch_normalization` | all inventory rows | 对每项适用的记录交换量，用同批次归属交换量除以该批次合格干坯布质量，得到每千克值。 | 批次归属交换量；合格干坯布 kg；cp_product | 每 1 kg 参考流的交换量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_trace` | all inventory rows | 分子和分母使用相同批次、场址、时期与出厂门；披露电表分配。 | 批次记录；秤及电表校准 |
| `dq_route` | fabric_output; corn_starch_input; industrial_water_input | 保留成分、单位面积质量检验及浆料配方；仅在路线记录证实未使用时将条件投入标记为不适用。 | 检验证书；生产配方 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_class` | fabric_output | 剔除干态纤维棉分数低于85%或单位面积质量大于200 g/m2 的验收批次。 | `un-cpc-3-structure-2025` |
| `validate_balance` | all inventory rows | 要求合格干坯布质量大于零，并核对领用棉纱、合格坯布与实测棉废料；解释差额。 |  |
| `validate_route` | corn_starch_input; industrial_water_input | 用批次生产记录核查浆料配方与条件投入的适用性。 | `eu-jrc-textiles-bref-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景采集及审查完成后的 secondary_dataset |
| downstream_use | 织造出厂门处坯布的 process 或 lifecyclemodel |
| allowed_use | 符合实测类别限定条件的棉机织坯布 |
| excluded_use | 湿整理织物，或代表整个 CPC 26610 产品类别 |
| required_metadata | 工厂；地域；时期；批次；组织；纱线等级；浆料配方；棉分数；单位面积质量；产出边界 |
| required_quality_disclosure | 未解决的 UUID 与经验范围需求；电表分配；质量平衡差额；上游数据集选择 |
| update_trigger | 织物状态、纱线组合、上浆路线、织机技术或证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | official_guidance | 联合国统计司，CPC 第3版结构，2025年6月30日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品分类与类别限值 |
| `eu-jrc-textiles-bref-2023` | official_guidance | 欧盟委员会 JRC，《纺织工业最佳可行技术参考文件》，2023年，§§2.5.1.1–2.5.1.3，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 整经、上浆、织造过程分解；不作数量基准 |
