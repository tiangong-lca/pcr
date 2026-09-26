---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-any-material-by-removal-of-material-by-laser-or-other-light-o-7acc4d55
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 通过激光或其他光束或光子束、超声波、电火花、电化学、电子束、离子束或等离子弧工艺去除材料的机床；水射流切割机

## 1. 范围与适用性

本 PCR 适用于以激光或其他光束或光子束、超声波、电火花、电化学、电子束、离子束、等离子弧或水射流去除材料为定义功能的完整工业机床。产品状态为制造商工厂门口的已验收完整机器，包括机架、已安装的运动与驱动设备、已安装的控制装置、申报的材料去除技术，以及属于销售配置的工厂安装辅助装置。

本 PCR 不包括加工中心、组合机床、车床、钻床、镗床、铣床、螺纹加工机床、磨床、锯床、常规金属成形机床、单独供应的工具和附件、备件、供客户运行使用的消耗品、现场安装、配送、使用、维护和生命终期。前景数据包必须申报一种技术路线和一个验收销售配置。其他路线特定交换必须作为独立的具体流记录，不得合并为选择器或总括行。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-any-material-by-removal-of-material-by-laser-or-other-light-o-7acc4d55 |
| classification_refs | CPC 3.0: 44211 |
| covered_products | 完整的激光/光束/光子束、超声波、电火花、电化学、电子束、离子束、等离子弧和水射流材料去除机床 |
| excluded_products | 常规切削或成形机床；单独供应的工具、附件、零部件、运行消耗品和非机器服务 |
| representative_product | 采用一种申报技术和销售配置的一台已验收完整材料去除机床 |
| production_route | 外购部件接收、适用时的机架准备、适用时的涂装、总装、接线、功能测试和验收 |
| market_state | 不含运输包装和客户现场安装的工厂门口已验收完整机器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采用一种申报材料去除技术和销售配置的已验收完整机床 |
| How much | 1 kg 验收净机器质量 |
| How well | 完整、可运行并已按制造商验收程序放行 |
| How long or cycle | 工厂门口放行状态；不包含使用寿命声明 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整材料去除机床 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 材料去除技术；型号；销售配置；安装额定功率；加工范围；受控轴；验收净质量 M；地域；生产时期；所含辅助装置；所排除运输包装 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、产品描述、参考流备注或等效字段中申报。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `inventory_normalization` | 除 `finished_machine` 外的所有清单行 | 行特定属性 | 行特定单位 | 按每台验收成品机器采集 q_item，并应用 `normalize_mass`，使每项交换按每 1 kg 参考流报告。 |
| `electricity_energy_basis` | `electricity_medium_voltage` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量的能量基准；在应用 `normalize_mass` 前记录任何 kWh 至 MJ 的换算。 |

## 5. 系统边界

前景边界始于外购部件和材料进入报告制造场址，止于完整机器通过验收并在工厂门口放行。包括可归属的接收、内部搬运、机架准备、涂装、装配、接线、验收所需的软件加载、功能测试、返工和废物处理。外购投入品的上游生产必须用关联数据集表示。配送、客户现场安装、运行、维护、客户运行期间的消耗品使用和生命终期不在本 PCR 范围内。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告制造场址接收的外购部件和材料 |
| starting_condition_role | 前景制造进入点 |
| product_classification_scope | CPC 3.0 子类 44211 语义边界内的完整机器 |
| recursive_input_rule | 同一产品类别的外购完整机器作为一个带有自身数据集的上游产品投入记录，不在前景过程中再次拆分。 |
| upstream_dataset_requirement | 每项外购投入使用供应商特定或有代表性的上游数据集，并披露地域、技术和数据年龄。 |
| disclosure | 申报技术路线、所含工厂操作、外购与厂内制造部件、验收状态以及全部排除阶段。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | 仅纳入截至工厂门口验收放行的可归属制造活动，并披露每项省略的工厂操作。 |  |
| `boundary_route_specificity` | technology-specific exchanges | 将申报路线中实际存在的每种材料、气体、电极、磨料、介电液、电解液、水、真空系统投入以及所产生的废物或排放分别记录为具体交换。 |  |
| `boundary_upstream_components` | purchased components | 关联上游产品数据集，避免在场址记录中重复计入其内含制造负荷。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `final_assembly` | 总装、表面处理、测试和验收 | required | 每台验收完整机器均适用 | foreground_production | 一台验收成品机器；按 M 归一化 |

### 过程：总装、表面处理、测试和验收（`final_assembly`）

#### 输入

##### 产品流

###### 机床机架（`machine_frame`）

记录安装在验收配置中的一个机床机架净质量。TianGong 流 UUID 尚未解决。

- 选定流：机床机架
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 `normalize_mass`；reference_mass；cp_bom_mass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_mass`
- 来源：

###### 电子控制单元（`electronic_control_unit`）

记录安装在验收配置中的电子控制单元净质量。

- 选定流：电子控制单元 `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 `normalize_mass`；reference_mass；cp_bom_mass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_mass`
- 来源：

###### 电动机（`electric_motor`）

记录验收配置中安装的每台完整电动机的净质量，并汇总为该同一流的一项交换。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 `normalize_mass`；reference_mass；cp_bom_mass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_mass`
- 来源：

###### 中压电力（`electricity_medium_voltage`）

记录可归属于接收、准备、涂装、装配、接线、测试、返工和验收的计量中压电力。流 UUID 尚未解决：根据本次独立审核，原标识已无法公开读取，替代候选审核亦未确认精确的中压电力标识。前景记录应保留实测电压及能量基准。

- 选定流：中压电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：对 q_item 应用 `normalize_mass`；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 涂料（粉末）（`powder_coating`）

仅当涂装在前景边界内进行时，记录发放给该机器的粉末涂料。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 `normalize_mass`；reference_mass；cp_coating。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_coating`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收完整机器（`finished_machine`）

记录在工厂门口放行的完整机器配置的验收净质量 M。TianGong 产品流 UUID 尚未解决。

- 选定流：完整材料去除机床
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 钢废料（`steel_scrap`）

记录前景边界内机架装配或机加工产生的可归属分选钢废料。

- 选定流：钢废料 `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 `normalize_mass`；reference_mass；cp_waste_mass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass`
- 来源：

###### 粉末涂装废弃物（`powder_coating_waste`）

仅当粉末涂装在前景边界内进行时，记录可归属于该机器的粉末涂装废弃物。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 `normalize_mass`；reference_mass；cp_waste_mass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | all foreground exchanges | 使用 BOM 质量、仪表、工单和废物票据直接归属于验收机器配置，之后才可采用分配。 |  |
| `allocation_shared` | shared site records | 按过程或仪表细分。无法细分时，采用机器工时或设备实测负荷等有文件依据的因果驱动量，并披露驱动量和敏感性。 |  |
| `allocation_scrap` | steel scrap and coating waste | 在前景边界报告废物交换，不扣除未经验证的回收信用；任何下游回收均在接收废物处理数据集中建模。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `final_assembly` | reference product mass | 经校准的称重记录 | 型号；配置；序列号；验收记录；验收净质量 M；包装排除 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收配置或每台机器 | 报告期 | 报告制造场址 | 每台验收净质量 | 校准证书；签署的验收记录；配置核对 |
| `cp_bom_mass` | `final_assembly` | installed component mass | 已批准 BOM 和供应商质量记录 | 型号；配置；零件号；流身份；安装数量；净单位质量；拒收数量 | 将竣工 BOM 与供应商质量记录或验收序列号的校准称量相核对。 | kg | 每个验收配置 | 报告期 | 报告制造场址和指定供应商 | 安装净质量 / 验收机器数量 | 已发布 BOM；供应商记录；偏差日志 |
| `cp_energy` | `final_assembly` | site electricity | 仪表和工单记录 | 仪表编号；起始；终止；过程设备；工单；验收机器；换算系数 | 读取经校准仪表；扣除无关负荷，或按披露的因果规则分配共享负荷。 | MJ | 每个生产批次，至少每月 | 有代表性的报告期 | 所含前景操作 | 分配电量 / 验收机器数量 | 仪表校准；核对；分配工作表 |
| `cp_coating` | `final_assembly` | powder coating input | 领料、退料和批次记录 | 批次；材料编号；发放质量；退回可复用质量；验收机器 | 将已发放涂料与验收机器工单退回的可复用材料相核对。 | kg | 每个涂装批次 | 报告期 | 场内涂装操作 | 净发放涂料 / 验收机器数量 | 库存核对；工单；秤校准 |
| `cp_waste_mass` | `final_assembly` | segregated waste output | 称量废物票据 | 废物身份；容器皮重；毛重；工单；去向 | 称量每项分选废物流、扣除皮重，并归属于验收机器工单。 | kg | 每次废物转移 | 报告期 | 所含前景操作 | 可归属净废物 / 验收机器数量 | 秤校准；废物票据；去向记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | machine_frame; electronic_control_unit; electric_motor; electricity_medium_voltage; powder_coating; steel_scrap; powder_coating_waste | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass; cp_bom_mass; cp_energy; cp_coating; cp_waste_mass | q_ref |  |
| `reconcile_reference_output` | `finished_machine` | 确认用同一 M 除验收输出质量 M 后，报告输出恰为 1 kg。 | M; cp_mass | 1 kg 参考流 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 在所有协议中匹配型号、序列号、材料去除技术、销售配置和验收记录。 | 配置核对 |
| `dq_mass_balance` | installed components and wastes | 说明接收部件质量、安装质量、去除材料、废物和验收净质量之间的关系，不强迫不同项目进入同一平衡。 | BOM、领料记录、废物票据、验收质量 |
| `dq_temporal` | all foreground records | 使用一个有代表性的报告期，并披露停机、原型、返工活动和异常生产。 | 带日期的仪表、工单和验收记录 |
| `dq_completeness` | route-specific exchanges | 确认申报路线中存在的每种材料、气体、电极、磨料、介电液、电解液、水、真空系统投入、废物和直接排放均作为自身具体交换表示。 | 路线核对表和签署的完整性审查 |
| `dq_uuid` | all selected flows | 仅采用产品状态、流类型、分类、属性、单位组、技术、地域和备注相容的 state-code-100 TianGong 身份；显式保留未解决身份。 | 已定稿 UUID 搜索回执 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference flow | 核验一个验收配置、以 kg 表示的 M、包装排除以及准确的 1 kg 输出归一化。 |  |
| `validate_inventory` | inventory | 拒绝组合流或选择器流、缺少采集协议、未经换算的每台数量以及隐藏在备注中的路线特定交换。 |  |
| `validate_bom` | component inputs | 将安装数量和质量与竣工 BOM 核对，并说明替代、返工和拒收部件。 |  |
| `validate_waste` | waste outputs | 核验废物身份、皮重扣除、归属、去向以及未使用未经验证的避免负荷信用。 |  |
| `validate_completeness` | data package | 当申报技术路线或所含工厂操作缺少其具体投入、废物和直接排放时，判定数据包不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种验收机器配置的前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与申报技术、配置、地域、时期和工厂门口边界匹配的产品系统建模 |
| excluded_use | 代表常规机床；运行能源或消耗品；现场安装；维护；生命终期；未披露的技术混合 |
| required_metadata | 型号；序列号或配置族；材料去除技术；销售配置；M；加工范围；额定功率；受控轴；地域；时期；所含操作；数据源 |
| required_quality_disclosure | 仪表覆盖；BOM 覆盖；质量方法；分配；路线完整性；未解决 UUID；缺失经验范围；偏差 |
| update_trigger | 材料技术或配置发生重大变化；生产场址或过程变化；有新的已接受 TianGong 身份；获得更好的独立范围证据；仪表或 BOM 出现重大更正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《Central Product Classification Version 3.0 Structure》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 44211 身份及相邻子类排除 |
