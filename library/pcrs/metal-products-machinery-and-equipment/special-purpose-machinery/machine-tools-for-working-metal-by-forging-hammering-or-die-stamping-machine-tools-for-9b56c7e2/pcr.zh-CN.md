---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-metal-by-forging-hammering-or-die-stamping-machine-tools-for-9b56c7e2
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 金属成形机床及压力机

## 1. 范围与适用性

本 PCR 规定完整机床的制造商出厂门前景数据集，涵盖对金属进行锻造、锤锻、模锻、弯曲、折叠、矫直、矫平、剪切、冲孔或开槽的机床，以及其他加工金属或金属碳化物的压力机。对象为制造完成的机器，包括已安装的驱动、控制、防护系统和声明的首装介质。本规则不描述客户加工工件的生产过程。类别边界依据官方 CPC 结构（`un-cpc-3-0-structure-2025`）。

配置特定数据集应区分机械、液压和电驱动；液压折弯机仅为代表性配置，其物料清单不适用于所有机器。锻锤与精密钣金折弯机不得仅因分类相同而合并平均。制造商液压折弯机实例支持记录安装的液压系统、后挡料、控制和安全防护配置（`trumpf-trubend-3000`）；产品目录规格不作为制造清单用量或行业范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-metal-by-forging-hammering-or-die-stamping-machine-tools-for-9b56c7e2 |
| classification_refs | CPC 3.0: 44217；仅作为分类背景 |
| covered_products | 完整锻造及锤锻机床；模锻压力机；金属弯曲、折叠、矫直、矫平、剪切、冲孔和开槽机床；其他加工金属或金属碳化物的压力机 |
| excluded_products | 去除材料的机床；所列工序以外的其他非去除材料机床；金属轧机；单独销售的模具、机器零件及附件；手持工具；木材或塑料压力机；客户工件；翻新服务 |
| representative_product | 一台配备规定驱动、电控柜、后挡料及防护系统的完整液压金属折弯机 |
| production_route | 采购可追溯金属坯料、铸件及部件；按条件进行机架制造、机加工和涂装；装配、调校、工厂验收及包装 |
| market_state | 制造商出厂门的新制完整验收机器；声明安装选项和首装介质状态；运输包装单独列入清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供规定加工功能和配置的完整验收金属成形机床 |
| How much | 一台验收成品机器，以实测净质量 M 表示 |
| How well | 满足合同规定的压力或冲击能量、工作范围、行程、定位精度、防护及安装选项验收要求；不意味着类别内性能等效 |
| How long or cycle | 一次制造及工厂验收周期；使用寿命内的性能不属于本出厂门数据集 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 以锻压、锤击或模压方式加工金属的机床，以弯曲、折叠、矫直、压平、剪切、冲压或开槽等方式加工金属的机床，其他金属或金属碳化物加工用压力机 `ef918c66-bff0-4bd0-b84b-2912b75af3e4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 加工工序；机器型号；序列号或批次；驱动技术；压力或冲击能量；行程及工作范围；已安装控制和防护；铸造或焊接机架；内含模具；净质量测量；液压介质交付状态；验收日期；场址及地理范围；制造期间；上游覆盖；包装配置 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| configuration_mass | 参考产品 | Mass | kg | 纳入所有交付安装总成及保留首装介质；排除运输包装、临时试验设备和单独提供的备件。称重与验收记录应对应同一配置。 |
| energy_units | 能源输入 | Net calorific value | MJ | 通用电力标识不指定电压、地区或技术。保留计量单位、实际电压、供应组合、场址及期间。以 MJ 报告时，采用单位恒等式 1 kWh = 3.6 MJ，并保留原始记录。不得仅依据铭牌功率推算耗电量。 |
| liquid_mass | 液体输入和废物 | Mass | kg | 优先称重。体积转质量须使用相应温度与组成下实测或供应商记录的密度；不得将油的密度用于乳化液。 |
| component_count | 采购总成 | Mass | kg | 保留数量及型号特定的称重或记录单位质量；数量与匹配单位质量相乘。不得仅用原材料金属负荷替代成品部件负荷。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收已识别的金属坯料、铸件及采购部件，声明交付时的加工及涂装状态 |
| starting_condition_role | 前景入口；通过供应商或适用背景数据集关联上游生产 |
| product_classification_scope | 执行所列金属成形及机械分离工序的完整机床及压力机 |
| recursive_input_rule | 采购同类别完整机器并实际将其集成时，按交付状态记录输入并关联上游数据集，不递归展开其全部物料清单。作为资本设备使用的生产机器不属于被集成产品。 |
| upstream_dataset_requirement | 覆盖每种采购材料和总成的资源开采及制造，适用时包括外协铸造、热处理、机加工和涂装；声明从摇篮到出厂门完整性前须披露覆盖缺口 |
| disclosure | 场址、期间、工序、驱动、交付质量及介质状态、自制与采购划分、外协、所含模具及自动化、公用工程分配、包装、上游运输和废物处理覆盖 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_product | 产品识别 | 纳入完整验收机器及声明交付选项；参考产品排除客户生产以及独立销售的零件。 | un-cpc-3-0-structure-2025 |
| boundary_manufacturing | 前景 | 纳入可归属于规定机器制造及验收的所有工序，包括返工、复测和辅助电耗。采购成品部件保留上游加工负荷。通过 cp_route 识别额外实际工序，并为每项实际输入、废物和直接排放增加独立原子交换。 | |
| boundary_routes | 条件过程 | 所列卡片覆盖适用的坯料或铸件加工、乳化液机加工及电加热粉末涂装。场址存在铸造熔炼、非电加热热处理、溶剂型涂装、燃烧等作业时，须增加明确过程及分物质交换，不得静默遗漏或用统称流替代。 | jrc-fabricated-metal-bemp-2020 |
| boundary_first_fill | 液压和润滑系统 | 区分随机器交付的油与临时试验回路油、补加损耗及废弃油。已安装控制、后挡料和防护设施应纳入配置核对。 | trumpf-trubend-3000 |
| boundary_recovery | 机加工废物 | 分离不同金属牌号，并区分回收切削液与外运金属残余物。内部循环不作为新增投入或避免生产收益。 | jrc-fabricated-metal-bemp-2020 |
| boundary_downstream | 数据集用途 | 逐供应路线记录进厂运输方式、起点和距离，用于关联运输数据集。按废物类型和去向将场外处理仅关联一次。出厂运输、安装、客户使用、维护及机器寿命终结为独立情景，不得依据验收试验推断。 | |

`huang-hydraulic-press-lifecycle-2023` 中的液压压力机案例支持将钢板切割、焊接坡口加工、焊接及去应力处理区分为制造工序。该结构部件清单排除了运输、储存和部分辅助工序，因此其案例数量不能代表本规则的完整机器边界，也不能构成制造范围。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 机架制造及焊接 | conditional | 场内制造钢机架或外壳 | foreground production | 每台验收成品机器 |
| machining | 零件机加工及加工液管理 | conditional | 场内机加工床身、滑块、轴或其他零件 | foreground production | 每台验收成品机器 |
| coating | 聚酯粉末涂装 | conditional | 场内喷涂聚酯粉末并电加热固化 | conditioning | 每台验收成品机器 |
| assembly | 机械、液压和电气装配 | required | | foreground production | 每台验收成品机器 |
| acceptance | 工厂验收及交付准备 | required | | foreground production | 每台验收成品机器 |

仅当所述物理交换存在时纳入条件行。记录缺失不证明交换不存在。产品特定的路线普查和物料清单应为本通用清单以外的实际交换增加具体行。场内制备的公用工程按其采购输入和直接释放建模，不得再将内部压缩空气或热量传递计为外购供应。

### 过程：机架制造及焊接（`fabrication`）

#### 输入

##### 产品流

###### 热轧非合金钢板（`frame_steel`）

适用于采用切割前交付宽度至少 600 mm 的热轧非合金钢板的焊接机架；称量入库钢板、套料边角料和内部回料。记录牌号及涂覆状态；其他交付状态须单独匹配精确流标识。

- 选定流：非合金钢板，卷 `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 钢电弧焊丝（`welding_wire`）

适用于焊接机架；记录实际消耗的填充金属，排除可重复使用的焊丝盘质量。

- 选定流：钢电弧焊丝
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 氩气（`welding_argon`）

采购气态氩用于保护焊时纳入；与其他保护气体分别计量。若以液态交付，应另行记录液态投入及气化过程，不重复计算内部气态氩流。

- 选定流：氩气
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 电力（`fabrication_power`）

计量机架切割和焊接、抽风机、压缩空气制备及可归属搬运的电耗。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_energy 采集每台验收成品机器的电量；采用 1 kWh = 3.6 MJ 将实测 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

###### 电力（`stress_relief_power`）

场内对焊接机架进行电加热去应力处理时纳入；计入保温和可归属预热电耗，与焊接电耗分开。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_energy 采集每台验收成品机器的电量；采用 1 kWh = 3.6 MJ 将实测 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

#### 输出

##### 废物流

###### 非合金钢制造边角料（`fabrication_scrap`）

称量外运清洁钢边角料；内部再加工仍属内部循环，不计外运回收收益。

- 选定流：非合金钢制造边角料
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-fabricated-metal-bemp-2020`

### 过程：零件机加工及加工液管理（`machining`）

#### 输入

##### 产品流

###### 灰铸铁机床床身铸件（`frame_casting`）

适用于铸造床身或飞轮；采用机加工前采购铸件质量，并保留供应商铸造过程覆盖信息。

- 选定流：灰铸铁机床床身铸件
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`jrc-fabricated-metal-bemp-2020`

###### 低合金钢棒（`shaft_stock`）

由交付状态除锻造、热轧、热拉拔或挤压外未经进一步加工的低合金棒材机加工轴、滑块或传动零件时纳入；本标识排除高速钢和硅锰钢。记录牌号、交付加工状态、热处理和坯料尺寸；采购的进一步加工棒材须单独匹配精确流标识。

- 选定流：除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外） `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`jrc-fabricated-metal-bemp-2020`

###### 电力（`machining_power`）

计量机加工及可归属待机、切削液循环、切屑处理和压缩空气电耗。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_energy 采集每台验收成品机器的电量；采用 1 kWh = 3.6 MJ 将实测 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`jrc-fabricated-metal-bemp-2020`

###### 水溶性金属加工液浓缩液（`cutting_concentrate`）

仅适用于乳化液机加工；单独记录未稀释浓缩液及配方，与稀释用水分开。

- 选定流：水溶性金属加工液浓缩液
- 流属性/单位：Mass / kg
- 数量规则：按 cp_fluid 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fluid`
- 来源：`jrc-fabricated-metal-bemp-2020`

###### 自来水（`dilution_water`）

适用于加工液稀释或清洗；单独记录供水，避免与预混液重复计算。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_fluid 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fluid`
- 来源：`jrc-fabricated-metal-bemp-2020`

#### 输出

##### 废物流

###### 钢机加工切屑（`steel_chips`）

分离不同钢种，记录残油和水分；接收流要求干金属质量时按干基报告。

- 选定流：钢废料，机加工切屑 `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-fabricated-metal-bemp-2020`

###### 铸铁机加工切屑（`cast_iron_chips`）

适用于铸件机加工；与钢切屑分开，并记录处理去向。

- 选定流：铸铁机加工切屑
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-fabricated-metal-bemp-2020`

###### 废油水金属加工乳化液（`spent_cutting_fluid`）

适用于废弃乳化液；记录湿质量、含油率和合规处理去向，不使用笼统废水总量代替。

- 选定流：废油水金属加工乳化液
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-fabricated-metal-bemp-2020`

### 过程：聚酯粉末涂装（`coating`）

#### 输入

##### 产品流

###### 聚酯粉末涂料（`coating_powder`）

适用于聚酯粉末涂装；记录扣除未用库存退料后的新粉，回收粉仍属内部循环。

- 选定流：聚酯粉末涂料
- 流属性/单位：Mass / kg
- 数量规则：按 cp_coating 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating`

###### 电力（`coating_power`）

适用于电加热固化粉末涂装；纳入喷涂、抽风和固化电耗。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_energy 采集每台验收成品机器的电量；采用 1 kWh = 3.6 MJ 将实测 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

#### 输出

##### 废物流

###### 废聚酯涂料粉末（`coating_residue`）

称量送往场外处理的不可回用粉末，与喷房内部循环粉分开。

- 选定流：废聚酯涂料粉末
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

### 过程：机械、液压和电气装配（`assembly`）

#### 输入

##### 产品流

###### 交流电动机（`drive_motor`）

适用于安装的工业交流驱动；保留各型号电机数量、供电类型、额定功率、效率等级及供应商质量。牵引、小型或直流以及另有明确要求的伺服配置须单独核对精确流标识。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 液压缸（`press_cylinder`）

适用于液压压力机及液压辅助执行机构；记录液压缸配置和总成质量。

- 选定流：液压缸
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 液压泵（`hydraulic_pump`）

适用于液压动力单元；液压泵仅计一次，并排除已单独统计的电机。

- 选定流：液压泵
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 机床电气控制柜（`control_cabinet`）

适用于交付控制系统；记录内含可编程控制器、驱动器和内部布线，避免与单列电缆重复。

- 选定流：机床电气控制柜
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 钢制球轴承（`ball_bearings`）

安装球轴承时纳入；保留准确轴承类型和数量，不以其替代所有轴承技术。

- 选定流：钢制球轴承
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 绝缘铜电缆（`external_wiring`）

适用于采购控制柜或电机总成之外的布线；记录绝缘层和导体规格。

- 选定流：绝缘铜电缆
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 矿物液压油（`hydraulic_fill`）

适用于矿物油液压系统；区分交付首装油、试验损耗及可回收临时试验油。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_fluid 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fluid`

###### 润滑脂（`bearing_grease`）

适用于润滑运动副；仅计出厂加注量，并披露润滑脂配方。

- 选定流：润滑脂
- 流属性/单位：Mass / kg
- 数量规则：按 cp_fluid 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fluid`

###### 工业齿轮箱（`gear_transmission`）

适用于齿轮传动机械或伺服压力机；记录完整采购齿轮箱质量，避免重复计入内部齿轮。

- 选定流：工业齿轮箱
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 钢制螺栓（`steel_bolts`）

适用于单独安装的螺栓连接；排除已含于供应商总成质量的紧固件。

- 选定流：钢制螺栓
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 增强橡胶液压软管（`hydraulic_hose`）

适用于柔性液压连接；保留橡胶及增强层规格、额定压力和交付长度。

- 选定流：液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 丁腈橡胶密封圈（`nitrile_seal`）

适用于单独装配的丁腈橡胶密封圈；避免与液压缸或泵总成内含密封件重复。

- 选定流：丁腈橡胶密封圈
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 工具钢成形模具（`forming_die`）

仅当具体模具属于交付机器配置时纳入；排除独立销售及临时工厂试验用模具。

- 选定流：工具钢成形模具
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 光电安全光幕（`safety_light_curtain`）

适用于安装的光学防护配置；明确发射及接收装置范围，与电控柜分开。

- 选定流：光电安全光幕
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component`

###### 电力（`assembly_power`）

计量装配工具、调校和可归属搬运电耗。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_energy 采集每台验收成品机器的电量；采用 1 kWh = 3.6 MJ 将实测 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

#### 输出

### 过程：工厂验收及交付准备（`acceptance`）

#### 输入

##### 产品流

###### 电力（`acceptance_power`）

计量预热、空载和负载验收循环，以及复测和可归属辅助设备电耗。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_energy 采集每台验收成品机器的电量；采用 1 kWh = 3.6 MJ 将实测 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

###### 热轧非合金钢板（`test_steel`）

适用于从交付宽度至少 600 mm 的热轧非合金钢板切取出厂试验试件；依据记录在多次试验之间核算重复使用的试件。单独采购的窄试件或不同加工状态的试件须采用其自身精确流标识。

- 选定流：非合金钢板，卷 `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_test 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test`

###### 针叶材锯材（`crate_timber`）

适用于运输木箱或底座；记录交付木材及重复使用分配，质量与机器净质量分开。

- 选定流：针叶材锯材
- 流属性/单位：Mass / kg
- 数量规则：按 cp_packaging 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`

###### 低密度聚乙烯薄膜（`packing_film`）

适用于非泡沫、非增强的低密度聚乙烯保护包膜；薄膜质量与机器和木箱分别记录。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_packaging 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`

#### 输出

##### 产品流

###### 金属成形机床（`finished_machine`）

一台规定配置的完整验收机器；净质量排除可拆卸运输包装。

- 选定流：以锻压、锤击或模压方式加工金属的机床，以弯曲、折叠、矫直、压平、剪切、冲压或开槽等方式加工金属的机床，其他金属或金属碳化物加工用压力机 `ef918c66-bff0-4bd0-b84b-2912b75af3e4`
- 流属性/单位：Mass / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 钢试件废料（`test_scrap`）

记录废弃试件；可销售产品和留存试样须分别核算。

- 选定流：钢试件废料
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-fabricated-metal-bemp-2020`

###### 废矿物液压油（`drained_oil`）

适用于废弃冲洗油或试验油；返回试验台的油仍在系统内部。

- 选定流：废矿物液压油
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集每台验收成品机器的实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocate_direct | 共用生产 | 首先通过 cp_material、cp_component 和 cp_energy，将材料、采购零件和已计量工序直接归属于订单及序列号或配置记录。分配总量前优先细分共用工序。 | |
| allocate_campaign | 共用电力及介质 | 无法细分时，采用实测设备时间及相应运行负荷；在 cp_energy 或 cp_fluid 中记录有因果依据的分配指标、所含空载待机份额、分子、分母及与全厂总量的核对。仅当配置相同且工况相当时，允许按机器数量简单平均。 | |
| allocate_scrap | 外运废物及内部回料 | 保留材料总投入与分类外运废物输出。废料不自动获得负负荷或原生材料替代收益。记录接收端处理或回收模型，避免重复计算回收收益。内部材料及油回流仍属内部循环。 | jrc-fabricated-metal-bemp-2020 |
| allocate_test | 验收产出 | 将试件、能源和耗材归属于受验机器。披露试验中销售的产品；具有实质影响时，细分试验或采用有记录的物理分配并进行敏感性分析。验收机器负荷须包含返工及失败试验。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | 验收参考产品 | 称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收机器 | 完整验收订单 | 制造商场址 | 每台验收净质量 | 秤校准；皮重及磅单；配置清单 |
| cp_route | assembly | 过程及配置完整性 | 路线普查 | 订单；工序；自制或采购决定；材料牌号；部件型号；安装选项；外协厂；供应起点及运输方式和距离；废物去向；实际公用工程及排放 | 核对生产流转单、物料清单、采购记录和现场核查；清单批准前识别缺失的工序特定交换及供应商覆盖。 | record | 每项配置及路线变更 | 完整订单及关联公共服务期间 | 场址及外协厂 | 每台验收成品机器的完整路线记录 | 已批准物料清单；制造流转单；供应商覆盖声明；路线及废物单据 |
| cp_material | fabrication, machining | 坯料、填充材料及气体输入 | 材料台账 | 材料；牌号；批次；发料质量；退料质量；库存变化；废料；订单；保护气体组成 | 称量发料和退料；核对仓库、订单及生产记录；气体按体积记录时，温压换算须有依据。 | kg | 每次领用及退料 | 完整生产批次 | 相关工作中心 | 分配数量 / 验收机器数量 | 经校准的秤；批次证明；仓库核对 |
| cp_component | assembly | 采购总成 | 部件物料清单 | 物项标识；型号；数量；单位净质量；所含子部件；供应商；交付状态 | 按实物接收记录核对竣工物料清单；采用可追溯单位称重或供应商质量记录；防止总成与子部件重复计入。 | kg | 每项订单及版本 | 验收配置 | 装配及供应商 | 分配数量 / 验收机器数量 | 物料清单；供应商数据；称重记录；范围矩阵 |
| cp_energy | fabrication, machining, coating, assembly, acceptance | 外购电力 | 电表及负荷记录 | 电表；电压；起止读数；工作中心；运行状态；循环次数；订单工时；分配指标；待机份额 | 分项计量各工序，包括抽风及内部公用工程制备；将未分表共用负荷的分配与场址账单核对。 | kWh | 每项订单或有代表性的实测批次 | 所有相关生产及验收期间 | 场址及工作中心 | 分配电量 / 验收机器数量 | 电表校准；日志；账单；分配核对 |
| cp_fluid | machining, assembly | 水、浓缩液、油和润滑脂 | 介质平衡 | 化学品标识；配方；领用量；退料；保留加注量；稀释用水；废弃质量；换算所用密度和温度 | 分别称量或计量每种介质；核对新供给、内部回收、机器保留量及处置。 | kg | 每次加注、补加和排放 | 完整订单及介质服务期间 | 机加工、装配及试验回路 | 分配数量 / 验收机器数量 | 安全技术说明书；加注日志；校准计量；介质平衡 |
| cp_coating | coating | 新涂料粉末 | 涂装台账 | 配方；新粉领用；未用退料；回收粉；废弃量；涂装订单；固化路线 | 称量粉末及库存变动；分离新粉消耗、喷房循环和外运废物。 | kg | 每个涂装批次 | 规定订单的涂装生产期 | 涂装线 | 分配数量 / 验收机器数量 | 批次记录；秤；涂层规格 |
| cp_waste | fabrication, machining, coating, acceptance | 具体外运废物 | 废物联单 | 废物标识；金属牌号或组成；干湿基准；含油率；实测质量；来源；去向；处理 | 称量每项独立识别的废物流；保留转移联单，在计算外部输出前核对内部回料。 | kg | 每次转运并分配至订单 | 全部制造及验收期间 | 废物产生工作中心 | 分配数量 / 验收机器数量 | 经校准的秤；联单；油和水分检测；回收商记录 |
| cp_test | acceptance | 试验材料 | 验收记录 | 机器配置；试验方法；压力或能量；行程；循环数；试件牌号；新增质量；重复使用质量；失败试验；去向 | 将试件实物领用及试验日志与每台验收机器关联；保留合同验收结果及所有复测。 | kg | 每次验收试验 | 首次试验至最终验收 | 工厂试验区 | 分配数量 / 验收机器数量 | 试验报告；材料领用记录；复用日志 |
| cp_packaging | acceptance | 木材及薄膜 | 包装物料清单 | 包装部件；质量；新用或复用状态；可复用包装的周转次数及所有权；机器序列号 | 分别称量每种包装材料；记录实际复用分配；包装排除在验收机器净质量之外。 | kg | 每次交付 | 交付准备 | 包装区域 | 分配数量 / 验收机器数量 | 装箱单；磅单；复用台账 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_per_machine | 所有清单行 | 将可归属交换总量除以同一配置的验收机器数量；有直接订单归属记录时优先使用。保留可归属于验收产出的不合格品及返工负荷。 | 可归属总量；验收数量；cp_route | 每台验收成品机器的交换数量 | |
| stock_balance | 材料及介质输入 | 核对期初库存加接收量、减期末库存及未消耗退料与外部净消耗之间的关系；内部循环不计为新供给。 | cp_material；cp_fluid；cp_coating | 按具体流分别记录净物理输入 | |
| component_mass | 采购总成 | 安装数量乘以可追溯的型号特定单位质量；与竣工物料清单及实测整机质量核对，不将废料或包装算作机器保留质量。 | cp_component；cp_mass | 按物项记录已安装部件质量 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | 完整机器 | 声明工序、驱动、交付状态及验收规格。不得仅按质量合并锻锤、折弯机和冲床。 | cp_route；cp_mass；un-cpc-3-0-structure-2025 |
| dq_coverage | 前景及供应商 | 覆盖整个验收订单，或披露实测批次代表性；纳入全部相关班次及共用服务。识别每项遗漏工序和上游缺口。不得用任意小质量截断规则省略相关涂层、电子器件或油。 | cp_route；经核对的生产流转单 |
| dq_material | 物料清单及废物 | 核对保留材料、交付机器净质量、分类废物及记录损失；接受差异前评估水分、保留介质及测量不确定性。 | cp_mass；cp_component；cp_waste |
| dq_energy | 电力 | 匹配地理范围、电压、期间和供电技术。缺乏实测负荷及运行时间时，铭牌功率不足以作为依据。 | cp_energy |
| dq_source | 外部证据 | JRC 金属加工段落仅用于适用的加工液及残余物管理原则，不用于建立压力机制造强度。液压折弯机产品页面仅支持配置。 | jrc-fabricated-metal-bemp-2020；trumpf-trubend-3000 |
| dq_ranges | 重要交换 | 采集场址特定的材料、能源、介质、废物及包装数量。后续经验范围须有至少两个相互独立、产品状态和边界相容的原始来源，或另经审查的前景依据。 | 采集记录及有记录的来源评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_machine | 确认 M 是验收配置的实测净质量，所有清单数量采用相同的单台机器分母。不得发布虚构的机器质量数值。 | |
| validate_atomic | 每项交换 | 每行须为一种已识别的物理产品、废物或基本流物质，并具有相容的流类型、属性和单位。数据库标识缺失不允许使用替代品；数据集发布前解决标识或明确披露缺口。 | |
| validate_configuration | 路线及物料清单 | 核对每项交付功能总成、防护、模具及首装介质与配置的一致性；对通用卡片未列出的实际部件或工序扩展原子清单。缺失、采购或外协不等于零负荷。 | trumpf-trubend-3000 |
| validate_balances | 输入及输出 | 核对材料、介质、电力和废物平衡；结合记录不确定性及库存变化调查差异。分类残余物及内部回收记录须避免重复计算。 | jrc-fabricated-metal-bemp-2020 |
| validate_boundary | 数据集 | 确认上游过程覆盖、运输关联和废物处理各计一次；从摇篮到出厂门覆盖不完整时，将数据集标为仅前景。拒绝仅依据工厂验收电耗进行使用阶段比较。 | |
| validate_evidence | 范围和假设 | 不得将目录质量、单个案例、法规限值或同一出版物中的不同型号转为经验行业范围。披露分配敏感性及全部未验证假设。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置特定的前景制造数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 规定完整金属成形机器的制造清单；上游关联；纳入另行明确规定的设备生命周期模型 |
| excluded_use | 不限定条件的跨功能机器比较；客户工件加工负荷；由验收试验推断全寿命能耗；将一千克不同机器视为功能等效 |
| required_metadata | 型号及工序；驱动；压力或冲击能量；行程及范围；安装配置及模具；实测净质量；介质状态；场址；生产期间；自制采购划分；上游覆盖；供应路线；分配；包装；数据集版本 |
| required_quality_disclosure | 测量覆盖及不确定性；代表性批次选择；供应商缺口；有条件不存在的交换；未解决流标识；范围证据缺口；直接及分配数量；废物处理及回收模型 |
| update_trigger | 设计、驱动、配置、材料牌号、供应商路线、涂层、场址能源供应、首装状态或验收程序改变；获得可替代假设的新实测数据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，中央产品分类第 3.0 版，2025-06-30 结构文件，第 2264–2274 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ；原文核对日期 2026-09-22。 | 分类识别及相邻类别排除；不支持清单数量 |
| jrc-fabricated-metal-bemp-2020 | official_guidance | 欧盟委员会联合研究中心，Best Environmental Management Practice in the Fabricated Metal Products sector，EUR 30025 EN，2020，DOI 10.2760/894966，第 4.1、4.5 节，印刷页 190、226。https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf ；原页核对日期 2026-09-22。 | 适用的加工液区分、切屑、油和残余物分类；不支持机器特定范围 |
| trumpf-trubend-3000 | literature | 通快，TruBend Series 3000，制造商官方产品页面，2026-09-22 获取快照，Backgauge、BendGuard 和 On-demand hydraulic system 段落。https://www.trumpf.com/en_US/products/machines-systems/bending-machines/trubend-serie-3000/ | 代表性液压折弯机配置及验收描述；不支持经验制造范围 |
| huang-hydraulic-press-lifecycle-2023 | literature | Huang H.、Zou X.、Liu Z.，Life cycle oriented low carbon manufacturing of mechanical equipment: method and application，Green Manufacturing Open 2023;1:9。DOI 10.20517/gmo.2022.07。https://www.oaepublish.com/articles/gmo.2022.07 ；全文 Carbon emissions in the manufacture 节，核对日期 2026-09-22。 | 压力机机架切割、焊接及去应力工序拆分；案例边界限制；不采用数值范围 |
