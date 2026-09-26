---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-n-e-c-for-working-metal-sintered-metal-carbides-or-cermets-without-removi-1d406b04
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类的不去除材料的金属、烧结金属碳化物或金属陶瓷加工机床

## 1. 范围与适用性

本 PCR 适用于以不去除材料的方式改变金属、烧结金属碳化物或金属陶瓷的形状或表面，且未归入更具体机床类别的完整机床的生产。无屑螺纹或型面滚压机床为代表配置。应声明实际加工机理，并记录其不属于 `un-cpc-3-0-structure-2025` 所列相邻类别的依据。

不包括材料去除机床、CPC 44217 单列的锻压、成形、剪切、冲孔机床及其他压力机、轧机、单独供应的工具或机床零件，以及使用机床提供的加工服务。机床自身零件制造时是否采用切削加工，不决定成品机床的分类。

前景数据包覆盖生产和出厂验收。外购部件生产按部件的实际交付状态衔接上游。客户现场安装、商业运行、维护和报废应分别建立下游情景；工厂试运行属于生产。生产参考单位并非全寿命金属加工服务功能单位，未建立等效产能、质量和工况假设时不得用于性能比较。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-n-e-c-for-working-metal-sintered-metal-carbides-or-cermets-without-removi-1d406b04 |
| classification_refs | CPC 3.0:44218；作为分类背景，并遵守所述排除条件 |
| covered_products | 未另分类的、不去除材料的金属、烧结金属碳化物或金属陶瓷加工完整机床 |
| excluded_products | 材料去除机床；单独分类的成形机床和压力机；轧机；单独的工具及零件；金属加工服务 |
| representative_product | 已完成出厂验收的无屑螺纹或型面滚压机床，明确机架、主轴及滑台布局、驱动和控制配置 |
| production_route | 实际发生的来料部件准备；机械和电气装配；有条件纳入的液压系统安装；润滑；工厂测试；发运准备 |
| market_state | 制造商厂门处验收合格的完整机床，明确列出已安装设备和随附工装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够完成声明的不去除材料加工操作的完整机床 |
| How much | 一台声明配置的验收完整机床 |
| How well | 满足采购技术条件和书面出厂验收要求，包括声明工件、产能以及尺寸或表面质量 |
| How long or cycle | 一个制造与验收周期；运行寿命和客户工况不属于该生产参考范围 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 未另列明的以不切削材料的方式对金属、烧结金属碳化物或金属陶进行加工的机床 `a187cf0a-5f14-43b2-a3ea-3da9055970b6` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；配置及序列号或批次；实际加工机理；金属、碳化物或金属陶瓷工件范围；验收净质量 M；已安装工装及辅助设备；驱动类型；控制器类型；产能及验收标准；生产场址与期间；来料部件起始状态；M 不含包装的说明 |

前景数据包必须记录全部限定信息。制造商目录规格可用于识别型号，不能替代对实际验收配置的测量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| energy_basis | 电力清单行 | 净热值 | MJ | 采用生产活动的累计计量电量，包括应归属的待机和验收测试用电。按精确定义 1 kWh = 3.6 MJ 换算记录的 kWh。TianGong 能量属性的名称不表示发生燃料燃烧。装机功率本身不是耗电量；保留供电电压及场址特定电力组合。 |
| component_accounting | 已安装部件清单行 | 质量 | kg | 将数量与安装配置和采购记录核对；部件生产已由上游部件数据集提供时，不得再把该部件质量作为原料金属重复计入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址实际接收的部件、坯料和耗材；逐项记录其为铸态、已加工、已热处理、已涂装还是外购装配件 |
| starting_condition_role | 前景采集的进入状态；不免除上游生产负荷 |
| product_classification_scope | 未另分类的不去除材料的完整金属加工机床 |
| recursive_input_rule | 同类别外购完整机床作为投入时，应使用与声明交付状态相符的上游数据集；仅记录新增前景作业，避免递归展开已计入的生产。 |
| upstream_dataset_requirement | 每项外购投入和厂外处理均衔接与材料或部件身份、技术、地理、参考属性和交付状态一致的数据集；披露代理选择及数据缺口。 |
| disclosure | 起始状态、自制或外购决策、已纳入的辅助设备及工装、外包作业、入厂运输、生产损失、分配、包装、废物去向及排除的下游情景 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_identity | 产品范围 | 应用参考单位前，核实不去除材料的功能和排除条件。 | un-cpc-3-0-structure-2025 |
| boundary_configuration | 已安装机床 | 记录实际机械、驱动和控制组件；仅在交付设计包含液压装置时纳入该装置。 | profiroll-innovative-machine-configuration |
| boundary_make_buy | 部件生产 | 为本机床实际实施的机械加工、表面处理、热处理及其他作业应纳入；外包时，交付部件数据集和运输仅计入一次。逐项记录实际物理交换。 | |
| boundary_tests | 出厂验收 | 纳入验收相关试验电力、润滑剂、试验坯料、不合格品和废物处理，包括失败试验和返工。排除交付后的客户生产。 | |
| boundary_transport | 入厂供应 | 记录供应商与场址位置、运输方式、距离、载荷和运输质量，衔接适用运输数据集。运输服务交换应与燃烧基本流区分。 | |
| boundary_extension | 前景完整性 | 核对物料清单、领料、计量和废物记录。对通用清单未涵盖的实际作业补充逐项识别的物理交换；未列入通用清单不构成截断依据。 | |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly | 机械和电气装配 | required |  | 前景生产 | 每台验收成品机器 |
| hydraulic | 液压系统安装 | conditional | 验收配置采用液压驱动或执行器。 | 前景生产 | 每台验收成品机器 |
| rolling | 随附滚压工装 | conditional | 机床为随附钢制滚压模具的滚压配置。 | 前景生产 | 每台验收成品机器 |
| drawing | 随附拉拔工装 | conditional | 机床为随附碳化物拉丝模的拉拔配置。 | 前景生产 | 每台验收成品机器 |
| acceptance | 出厂验收与放行 | required |  | 前景生产 | 每台验收成品机器 |
| dispatch | 发运准备 | required |  | 前景生产 | 每台验收成品机器 |

### 过程：机械和电气装配（`assembly`）

#### 输入

##### 产品流

###### 铸铁机床机架（`frame`）

记录接收的成品机架质量和供应状态；上游铸造、加工及涂装仅计一次。仅适用于声明配置使用铸铁机架的情形。

- 选定流：铸铁机床机架
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 钢制机床主轴（`spindle`）

按规格及交付加工、热处理状态记录每根已安装钢制主轴。

- 选定流：钢制机床主轴
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 滚子轴承（`bearing`）

记录已安装滚子轴承的质量和规格；排除已计入外购电机或其他总成内的轴承。

- 选定流：滚子轴承
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 交流电动机（`motor`）

记录已安装交流驱动电动机、相数、额定电压与频率及额定输出功率。本行不含纯直流电动机和发电机；该部件数量不含寿命期用电。

仅在书面电动机类型及额定规格符合所选流的 CPC 46112 分类时使用该流。属于其他类别的电动机应按 boundary_extension 单独记录为身份适当的交换。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 电机变频器（`drive`）

驱动架构包含单独供应的变频器时纳入，并与电气清单核对。

- 选定流：电机变频器
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 可编程逻辑控制器（`controller`）

配置指定时纳入单独供应的可编程逻辑控制器。外购数控单元已包含集成可编程逻辑控制器时，不得重复计入。

- 选定流：可编程逻辑控制器
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 计算机数控单元（`cnc_controller`）

验收配置采用数控时，纳入交付的数控单元。记录其包含的控制板及操作界面，避免再把集成部件按单独采购重复计入。

- 选定流：计算机数控单元
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`profiroll-innovative-machine-configuration`

###### 绝缘铜电缆（`cable`）

记录已安装电缆质量、铜导体及绝缘规格，排除外购总成已涵盖的电缆。

- 选定流：绝缘铜电缆
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 钢制螺钉（`fastener`）

记录单独领用并安装的钢制螺钉，避免重复计入交付总成内的紧固件。

- 选定流：钢螺钉 `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 丁腈橡胶密封圈（`seal`）

安装单独供应的丁腈橡胶密封圈时纳入；按零件规格核实聚合物身份。

- 选定流：丁腈橡胶密封圈
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 电力（`assembly_electricity`）

计量装配及应归属辅助设备用电，并核对共用负载分配。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 / MJ
- 数量规则：按 cp_energy 采集每台验收成品机器的用电量；采用 3.6 MJ/kWh 将电表记录的 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：液压系统安装（`hydraulic`）

#### 输入

##### 产品流

###### 液压油泵（`hydraulic_pump`）

仅液压配置纳入已安装液压泵；不得把整个液压站作为该泵计量。

- 选定流：液压油泵
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 液压缸（`hydraulic_cylinder`）

按交付规格记录已安装液压缸；纯机电驱动机床无该投入。

- 选定流：液压缸
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

###### 矿物液压油（`oil`）

计量首次充填矿物液压油及测试补充量；核对保留量与排出量。

依据交付产品规格和安全技术说明书核实矿物／石油基液压配方；本行不得以合成或水基液体替代。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：质量 / kg
- 数量规则：按 cp_consumables 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：随附滚压工装（`rolling`）

#### 输入

##### 产品流

###### 钢制螺纹滚压模具（`rolling_die`）

纳入随滚压机床交付的钢制滚压模具；单独销售的备用工具不属于该参考配置。

- 选定流：钢制螺纹滚压模具
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`profiroll-innovative-machine-configuration`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：随附拉拔工装（`drawing`）

#### 输入

##### 产品流

###### 碳化钨拉丝模（`drawing_die`）

仅在拉拔配置实际随附碳化物拉丝模时纳入；记录复合材质牌号和上游制造。

- 选定流：碳化钨拉丝模
- 流属性/单位：质量 / kg
- 数量规则：按 cp_components 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：出厂验收与放行（`acceptance`）

#### 输入

##### 产品流

###### 电力（`test_electricity`）

计量出厂验收测试用电，包括失败试验；排除客户生产。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 / MJ
- 数量规则：按 cp_energy 采集每台验收成品机器的用电量；采用 3.6 MJ/kWh 将电表记录的 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 碳钢试验棒料（`test_bar`）

纳入工厂试验消耗的碳钢坯料；记录退回坯料和合格试件去向。

对所选流，应核实来料为符合 CPC 41261 的冷成形、冷精整或进一步加工的碳素钢／非合金钢棒杆材。记录牌号、几何尺寸和加工状态；实际使用热轧盘卷料或其他状态时，应另行识别。

- 选定流：碳素钢 `b3b18433-8fd1-4298-98f5-8af11eb64762`
- 流属性/单位：质量 / kg
- 数量规则：按 cp_consumables 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未另列明的以不切削材料的方式对金属、烧结金属碳化物或金属陶进行加工的机床（`finished_machine`）

记录一台实测净质量为 M 的验收完整机床；排除运输包装。

- 选定流：未另列明的以不切削材料的方式对金属、烧结金属碳化物或金属陶进行加工的机床 `a187cf0a-5f14-43b2-a3ea-3da9055970b6`
- 流属性/单位：质量 / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 碳钢废料（`scrap`）

不作为可销售共产品交付的碳钢试件按分类废料记录，并识别实际回收或处理。

- 选定流：碳钢废料
- 流属性/单位：质量 / kg
- 数量规则：按 cp_waste 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 废矿物液压油（`waste_oil`）

记录排出并送往处理的矿物液压油；交付机床内保留油不属于该废物流。

- 选定流：废矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：按 cp_waste 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：发运准备（`dispatch`）

#### 输入

##### 产品流

###### 木托盘（`pallet`）

实际使用木托盘时纳入；记录复用次数，不得无依据地将每次发运按全新托盘计入。

- 选定流：木托盘
- 流属性/单位：质量 / kg
- 数量规则：按 cp_packaging 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 低密度聚乙烯包装膜（`film`）

使用时计量实际低密度聚乙烯缠绕膜，区分其他聚合物配方。

仅对非自粘、非泡沫，且未增强、未层压、未以其他材料支撑的 LDPE 薄膜使用所选流。其他交付形态的薄膜应单独识别。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：按 cp_packaging 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 瓦楞纸板（`board`）

供应瓦楞纸板垫片或箱体时计量其质量；排除无关场址包装。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 / kg
- 数量规则：按 cp_packaging 采集每台验收成品机器的归属交换数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | 共享制造过程 | 首先考察过程细分或系统扩展；两者均不适用时，采用可量化的内在物理关系，并记录决策和归属证据。 | eu-environmental-footprint-2021-allocation |
| allocation_meters | 电力和共用设备 | 优先按工序或工单分表计量。计量覆盖多个工单时，保留分配所用实测作业时间及负载证据，并与总表核对。仅按机器数量分配须证明作业具有可比性。 | |
| allocation_rejects | 不合格品和返工 | 将同一生产期间的不合格机床及返工负荷归属于验收产出；验收数量分母不含不合格机床。内部循环不另计为外购投入。 | |
| allocation_scrap | 生产金属废料 | 记录废料质量、组成和去向。明确处理或回收假设并与接收模型保持一致；不得加入无依据的原生金属替代抵扣。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | 参考产品 | 称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收机床，或具有可追溯性的相同配置批次 | 同一制造与验收周期 | 最终验收场址 | 每台验收净质量 | 校准证书；称重单；配置清单；验收签字 |
| cp_components | assembly; hydraulic; rolling; drawing | 已安装部件 | 物料清单及领料记录 | 部件身份；供应商；交付状态；数量；净质量；型号；序列号或批次；不合格品；退料 | 核对采购、工单领料、安装清单和退料。获取可追溯的部件重量；拆分未表征的采购组合包。 | kg | 每个工单，定期核对 | 同一完工机床群组 | 制造场址及具名供应商 | 归属部件质量 / 验收机器数量 | 供应商规格；称重记录；签字清单；上游数据集映射 |
| cp_energy | assembly; acceptance | 电力 | 计量与活动记录 | 电表编号；起止读数；时间戳；工序；工单；待机期间；分配依据；验收数量 | 在生产或测试运行前后读取校准电表；将共用负载分配值与场址总量核对。 | kWh | 每次运行或生产班次 | 包含返工的完整制造及验收期间 | 制造场址及应分配的辅助设备 | 分配电量 / 验收机器数量 | 电表校准；日志；账单；分配核对 |
| cp_consumables | hydraulic; acceptance | 油品和试验坯料 | 领料及试验记录 | 具体材料身份；领用；退回；保留充填量；消耗量；试验工单；验收数量 | 计量领用和退回量；区分保留油量、排出油量和试验坯料损失。 | kg | 每次充填或测试批次 | 同一制造与验收周期 | 制造场址 | 归属材料净用量 / 验收机器数量 | 称重记录；领料单；试验记录；安全技术说明书 |
| cp_waste | acceptance | 逐项识别的废物 | 废物转移及称重记录 | 废物身份；组成；污染情况；质量；去向；回收或处理；批次；验收数量 | 对分类废物称重，将处置记录与生产工单核对；分别识别损失与内部循环。 | kg | 每次收集，并按期间核对 | 同一完工机床群组 | 制造场址至首个接收设施 | 归属废物质量 / 验收机器数量 | 地磅单；运输或处理记录；组成证据 |
| cp_packaging | dispatch | 单项包装材料 | 包装规格及称重记录 | 材料身份；净质量；包装数量；复用次数；对应机床 | 对实际使用的每种包装材料称重；记录退回或复用包装，并与发运记录核对。 | kg | 每种包装规格及每个发运批次 | 同一验收机床群组 | 发运场址 | 归属包装质量 / 验收机器数量 | 包装清单；秤；发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| production_attribution | 所有清单行 | 汇总归属于完工群组的交换量，包括失败试验和返工，并除以同配置的验收机器数量；保留分子、分母和分配证据。 | 原始采集记录；验收数量；分配证据 | 每台验收成品机器的交换数量 | |
| configuration_balance | 已安装部件清单行 | 将已安装部件及保留流体质量与实测验收机床净质量核对；调查部件遗漏、毛净质量混淆或配置不一致。包装及单独消耗的试验坯料不计入安装质量。 | cp_components; cp_consumables; cp_mass | 书面核对结果及差异说明 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | 所有数量 | 使用同一声明验收配置和生产群组；披露供应状态、驱动技术和测试方案变化。 | 物料清单、序列号或批次记录、验收日志 |
| quality_completeness | 边界 | 核对采购、安装部件、能源、保留充填量和废物；数据集发布前调查无解释的缺项。 | 采集核对及供应商覆盖清单 |
| quality_temporal | 前景 | 声明生产运行、返工、测试失败和发运的日期及覆盖范围；跨期间数据应说明对齐方法。 | 有日期的原始记录及验收产出登记 |
| quality_estimates | 无法测量的项目 | 区分实测、计算和估算数量。提供估算方法、不确定性和替代计划；缺失值不等于零。 | 数据质量报告 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | 参考产品 | 核查实际加工机理及排除条件、必需限定信息和验收配置。 | un-cpc-3-0-structure-2025 |
| validate_mass | 参考和清单 | M 必须是同一验收配置实测的正值机床净质量；每项清单数量采用相同的每台机器基准。 | |
| validate_exchange | 所有清单行 | 每行表示一个已识别的交换，属性、单位、采集协议和路线条件相容。明确保留未解决 UUID，不得将代理默认为精确身份。 | |
| validate_supply | 上游关联 | 同一物理部件不得同时计入原料生产和外购部件生产。核实自制或外购及运输边界。 | |
| validate_tests | 验收 | 核对测试记录、失败试验、保留油、排出油和试验坯料。不得将客户运行计入验收。 | |
| validate_evidence | 定量主张 | 使用实际前景数量；不得以制造商装机功率替代实测能耗，也不得以型号目录重量充当行业范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 作为声明机床配置生产负荷的 background_dataset |
| allowed_use | 功能、产能、交付状态和系统边界相符时，用于机床采购或资本设备建模 |
| excluded_use | 未建立等效性能及使用情景的寿命服务比较；材料去除设备；其他分类压力机；工具或加工服务 |
| required_metadata | 产品及配置；净质量；参考基准；场址及日期；随附工装和辅助设备；自制或外购图；供应商地理和技术；验收方案；分配；运输及废物路线 |
| required_quality_disclosure | 测量覆盖；未解决身份；上游代理；供应商缺失数据；估算及不确定性；排除项；核对结果 |
| update_trigger | 机床架构、材料或部件规格、供应状态、生产场址、驱动、验收方案变化，或证据显著改善 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，CPC 3.0 结构，2025-06-30，第 2264–2274 及 2440–2454 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品身份及相邻类别排除条件；电气部件分类区别 |
| profiroll-innovative-machine-configuration | literature | Profiroll Technologies，The Innovative – The next Generation，制造商网页，2026-09-22 检索。https://www.profiroll.com/machines/thread-and-profile-rolling-machines/the-innovative-cnc-thread-rolling-machine.html | 代表性无屑滚压机理及随配置变化的驱动、滑台、主轴和控制组件；未采用定量清单范围 |
| eu-environmental-footprint-2021-allocation | official_guidance | 欧盟委员会建议 (EU) 2021/2279，2021-12-30 合并文本，第 4.5 节，第 87 页。https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | 通用分配层级；不声称研究完全符合 PEF |
