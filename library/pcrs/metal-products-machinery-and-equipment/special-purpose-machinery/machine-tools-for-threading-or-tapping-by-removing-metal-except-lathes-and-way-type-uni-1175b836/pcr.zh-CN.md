---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-threading-or-tapping-by-removing-metal-except-lathes-and-way-type-uni-1175b836
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 通过去除金属进行螺纹加工或攻丝的机床（车床和导轨式动力头机床除外）

## 1. 范围与适用性

本 PCR 适用于以去除金属方式进行螺纹加工或攻丝的完整机床制造。须声明其为外螺纹切削还是内螺纹攻丝、工件加工范围、螺纹尺寸与螺距能力、主轴配置及控制方式。CPC 3.0 的 44215 提供分类身份，不提供制造配方。车床、导轨式动力头机床、通用钻镗铣机床、非切削滚丝机、可更换丝锥与板牙，以及向客户提供的机加工服务均不属于本产品身份。术语经对照英文边界核查：“攻丝”指内螺纹加工，“去除金属”排除滚压成形；“导轨式动力头机床”对应 way-type unit head machines，保留英文以避免与整机攻丝机混淆。

前景范围从采购投入到厂开始，包括实际发生的零件制造、表面处理、装配、出厂验收及发运包装，并递归连接上游生产和制造废物处理。机床在客户处的使用、维护及最终处置不在所声明的制造结果中；开展全寿命比较前须另行建模。本 PCR 不声明使用寿命、默认机床质量或平均清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-threading-or-tapping-by-removing-metal-except-lathes-and-way-type-uni-1175b836 |
| classification_refs | CPC 3.0: 44215；仅为分类参考，不构成已接受的映射决策 |
| covered_products | 通过去除金属进行螺纹加工或攻丝的完整验收机床 |
| excluded_products | 车床；导轨式动力头机床；通用钻镗铣机床；滚丝机；单独丝锥与板牙；机加工服务 |
| representative_product | 一种明确配置的完整螺纹加工或攻丝机床；不指定通用型号或重量 |
| production_route | 采购组件结合声明的厂内制造、机加工、表面处理、装配及验收 |
| market_state | 制造厂门处验收合格的新机床；发运包装单独核算 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并供应完整验收合格的螺纹加工或攻丝机床 |
| How much | 一台验收成品机床，实测净质量为 M kg |
| How well | 满足文件化采购规格及出厂螺纹加工或攻丝验收试验要求，声明螺纹加工能力 |
| How long or cycle | 一个制造及出厂验收周期；客户使用寿命不在本结果范围内 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 验收合格的螺纹加工或攻丝机床 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；配置；螺纹加工或攻丝能力；适用时的额定驱动功率；验收净质量 M；已装设备及初始充液；制造场址和期间；采购组件状态；电力供应地域；包装范围 |

必需限定信息须在数据集元数据、过程说明或参考流描述中声明。缺失限定信息的前景数据包不完整。参考产品 UUID 尚未解决：后续候选的英文名称及 CPC 44215 相符，但中文将 tapping 表述为“开口机床”，将被排除的 way-type unit head machines 表述为“组合头钻床”。采用前须对该双语身份差异进行数据库审查。此前候选标识刀具或其他机床类别。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| mass_records | 材料、组件、包装及废物行 | Mass | kg | 使用称量净质量；按件记录须采用该物项的实测单件质量，按电缆长度记录须采用实测单位长度质量。保留换算证据。 |
| electricity_energy | manufacturing_electricity | Net calorific value | MJ | 使用电能，按 energy_conversion 将计量 kWh 乘以 3.6 转为 MJ。这是单位换算，不是燃料热值假设。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 以明确文件化状态接收的采购金属原材、床身铸件及成品组件 |
| starting_condition_role | foreground_start |
| product_classification_scope | 完整螺纹加工或攻丝机床；产品分类独立于采购投入起点 |
| recursive_input_rule | 每项采购交换均连接上游生产；自制零件展开为实际操作及投入 |
| upstream_dataset_requirement | 匹配牌号、产品状态、组件配置、地域、技术及期间；代理数据单独披露 |
| disclosure | 披露外包铸造、组件制造及表面处理、入厂运输、包装及全部制造废物去向 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_complete_route | 所有过程 | 保留竣工物料清单和工艺路线。每项实物投入、废次品、送处理流及直接排放均须覆盖或明确证明不存在。实际路线中未列出的交换须增加具体卡片，不得使用其他材料或其他废物汇总行。 | |
| boundary_upstream | 采购投入 | 通过关联上游数据集纳入采购材料、组件及包装的开采和生产。按货运质量、距离和运输方式记录纳入实际入厂运输；运输服务不能替代所运材料。不得再次核算采购子组件的内含材料。 | |
| boundary_routes | machining; finishing | 内部流转按工单关联，不得重复计为外部采购。厂内发生的铸造、热处理、焊接、溶剂涂装或化学预处理须展开实际燃料、化学品、排放及废物。采购成品零件中的这些工序在上游核算。 | jrc-metal-bemp-2020; epa-metal-coating-tsd |
| boundary_treatment | 制造废物 | 纳入制造废物的运输和处理负荷。送处理的废水属于废物交换；直接排放须分别标识物质及接收环境介质。未知排放属于缺失数据，不得视为零。 | jrc-metal-bemp-2020; epa-metal-coating-tsd |
| boundary_cutoff | 完整数据包 | 电气组件、润滑剂和有害排放不得自动按质量截断。记录排除项、预计重要性及敏感性；重大遗漏未解决时不得发布所建数据集。 | |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| machining | 零件制造及机加工 | conditional | 厂内加工金属原材或铸件时纳入，包括验收试切试样 | 前景金属加工；采购成品零件路线保留在上游 | 归属于每台验收成品机器的投入与损失 |
| finishing | 水洗及环氧粉末涂装 | conditional | 厂内实际采用水洗或环氧粉末路线时纳入；其他表面处理路线须列出各自具体交换 | 表面准备、涂装及相关废物处理 | 归属于每台验收成品机器的投入与废物 |
| assembly | 装配、验收及发运 | required | 每台完整机床；组件及包装卡片仅在安装相应组件或采用相应包装时适用 | 系统集成、出厂试验、全厂电力核对及包装 | M kg 验收成品机床 |

卡片规定采集要求，不表示所有型号都使用每项列出的投入。按竣工配置及工单路线确定适用性。明确记录不存在的交换；发布数据集前须展开存在实质差异的路线。不要求对所有型号、涂层及包装选项进行笛卡尔积展开。

### 过程：零件制造及机加工 (`machining`)

#### 输入

##### 产品流

###### 钢板 (`steel_plate`)

采购的经进一步加工的合金钢板；仅在制造零件或验收试切试样采用该牌号及形态时纳入。记录牌号、厚度、领用量、未用退料量及加工损失。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-metal-bemp-2020`

###### 灰铸铁机床床身铸件 (`iron_casting`)

毛坯铸造床身进入厂内机加工时纳入。称量入厂铸件，上游数据集须包含铸造工序。采购的已加工床身属于另一产品状态。

- 选定流：灰铸铁机床床身铸件
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-metal-bemp-2020`

###### 纯油型矿物切削油 (`cutting_oil`)

仅在纯油型矿物油加工路线中纳入。记录新油补充量及库存变化；循环使用属于内部流转。水混溶浓缩液须按实际配方另列交换。

- 选定流：纯油型矿物切削油
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-metal-bemp-2020`

#### 输出

##### 废物流

###### 铁基机加工切屑 (`swarf`)

铁基切屑离开前景边界送回收时纳入。测定沥干质量及残留油、水含量；分开收集不相容合金流，回收油另行核算。

- 选定流：铁基机加工切屑
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-metal-bemp-2020`

###### 废矿物切削油 (`spent_oil`)

废纯油型切削油送处理时纳入。记录净质量及接收方；不得重复核算已计入切屑的附着油。

- 选定流：废矿物切削油
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-metal-bemp-2020`

### 过程：水洗及环氧粉末涂装 (`finishing`)

#### 输入

##### 产品流

###### 自来水 (`water`)

使用外购自来水进行水洗时纳入。记录水源及计量消耗，内部循环水不作为新增采购量。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_water 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`epa-metal-coating-tsd`

###### 环氧粉末涂料 (`powder_coating`)

仅在供应商配方确认为机床使用的环氧粉末涂料时纳入。记录新粉用量、回收粉循环量及固化涂层质量；不得以单一树脂替代配制涂料。

- 选定流：环氧粉末涂料
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`epa-metal-coating-tsd`

#### 输出

##### 废物流

###### 金属零件水洗废液 (`wash_effluent`)

水洗废液送处理时纳入。测定湿质量、污染物组成及接收方；厂内分离的污泥须另列独立废物交换。

- 选定流：金属零件水洗废液
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-metal-coating-tsd`

###### 废环氧粉末涂料过喷粉 (`powder_waste`)

不可回收的环氧过喷粉送处理时纳入。扣除返回同一涂装工序的粉末，称量实际废弃净量。

- 选定流：废环氧粉末涂料过喷粉
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-metal-coating-tsd`

### 过程：装配、验收及发运 (`assembly`)

#### 输入

##### 产品流

###### 交流电动机 (`motor`)

安装外购完整交流驱动电动机时纳入。记录型号、额定功率、净质量及采购数量。上游数据集覆盖铜、钢及电机制造，不得再次添加其内含材料。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_component`
- 来源：

###### 攻丝机齿轮传动主轴组件 (`spindle`)

安装外购完整齿轮传动主轴时纳入。记录传动比、主轴接口及质量；自制主轴追溯其实际金属加工投入，不得再次作为采购件核算。

- 选定流：攻丝机齿轮传动主轴组件
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_component`
- 来源：

###### 机床电气控制柜 (`control_cabinet`)

安装外购组装电气控制柜时纳入，并记录控制器、箱体及开关设备配置。空箱体不能替代已装配组件。

- 选定流：机床电气控制柜
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_component`
- 来源：

###### 钢制滚珠轴承 (`bearing`)

钢制滚珠轴承作为独立采购件装入机床时纳入。记录轴承规格及质量；扣除已包含在外购主轴或电机数据集内的轴承。

- 选定流：钢制滚珠轴承
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_component`
- 来源：

###### 钢制六角头螺栓 (`fastener`)

机床安装独立采购的钢制六角头螺栓时纳入。记录等级、尺寸、数量及实测质量；其他紧固件形式使用独立身份。

- 选定流：钢制六角头螺栓
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_component`
- 来源：

###### 绝缘铜电缆 (`cable`)

安装独立采购的绝缘铜电缆时纳入。记录导体截面、绝缘材料、裁切长度、单位长度质量及边角料；扣除已包含在采购组件内的电缆。

- 选定流：绝缘铜电缆
- 流属性/单位：Mass / kg
- 数量规则：按 cp_component 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_component`
- 来源：

###### 木托盘 (`pallet`)

采用木托盘发运机床时纳入。记录托盘净质量及有记录支持的重复使用分配；包装质量不计入 M。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：按 cp_packaging 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：

###### 低密度聚乙烯包装薄膜 (`film`)

使用非泡沫、非自粘、未层压的低密度聚乙烯防护薄膜时纳入。记录薄膜牌号及领用量减未用退回量，包装质量不计入 M。其他结构的薄膜须另行确定流身份。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_packaging 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：

###### 交流电 (`manufacturing_electricity`)

记录纳入边界内的机加工、水洗、粉末固化、压缩空气制备、装配及验收试验消耗的外购电力。分表与厂级总表核对，避免同一电量重复核算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_energy 采集归属于每台验收成品机器的实际数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 产品流

###### 验收合格的螺纹加工或攻丝机床 (`finished_machine`)

一台声明配置的完整验收机床离开工厂大门。净质量 M 包括已安装的驱动装置、防护件、控制系统及声明的初始充液；不包括运输包装和试验工件。

- 选定流：验收合格的螺纹加工或攻丝机床
- 流属性/单位：Mass / kg
- 数量规则：M 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-0-structure-2025`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_priority | 共用操作 | 优先按工单及计量表细分记录。无法避免的共用负荷采用实测机时或其他已证明的物理驱动因素分配，记录分子、分母及理由。用电差异明显的机床不默认按质量分配。 | |
| allocation_rework | 废次品及返工 | 返工、未通过验收的试验及不可销售废次品归属于同型号、同配置的验收产量，不得将全部投产台数当作合格产量作分母。 | |
| allocation_recycling | 切屑及废液 | 内部回收改变新投入及废物产出的净量。本制造清单中不添加替代原生材料的避免负荷抵扣。后续回收收益核算须披露方法，并防止与接收数据集重复抵扣。 | jrc-metal-bemp-2020 |
| allocation_packaging | 可重复使用托盘 | 按有证据支持的实际使用次数分配托盘生产及翻修负荷；没有重复使用证据时，本次发运承担全部托盘负荷。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | 验收参考产品 | 校准称量及验收报告 | 型号；配置；序列号；验收净质量 M；初始充液 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台或文件证明配置相同的批次 | 完整制造工单 | 最终装配及验收 | M = 同一配置的一台完整机器的验收净质量 | 秤校准；签署验收记录；竣工物料清单 |
| cp_material | machining; finishing | 每种采购材料分别记录 | 仓储台账及工单 | 确切牌号或配方；期初期末库存；收货；领用；退料；工单 |分别称量每种具体材料，核对库存变化、退料、内部回收及工单领用记录。 归属于每台验收成品机器的净消耗，内部循环不属于新增投入 | kg | 每次领用及库存核对 | 包括返工的完整生产期间 | 纳入边界的制造操作 | 每台验收成品机器 | 采购规格；适用时的 SDS；称量记录；库存核对 |
| cp_component | assembly | 每种采购组件分别记录 | 竣工物料清单及来料检验 | 组件型号；采购状态；件数；单件质量；配置；废次品；电缆长度及单位长度质量 |称量具有代表性的相同组件或取得可追溯的供应商净质量记录；将件数与竣工物料清单核对；称量电缆边角料。 组件件数乘经核实的单件质量；电缆长度乘经核实的单位长度质量；实际废次品归于验收机床 | kg | 每种配置及采购批次 | 完整制造工单 | 装配及其上游组件关联 | 每台验收成品机器 | 供应商图纸；称量记录；批次身份；组件数据集边界 |
| cp_water | finishing | 外购自来水 | 分表及水平衡 | 表起止读数；体积；采用体积记录时的实测密度；循环量；工单 |使用经校准的质量计，或按有记录的密度和温度换算实测体积；区分新购水与循环水。 归属于每台验收成品机器的净购水量 | kg | 每批或计量期间 | 完整水洗操作 | 水洗线 | 每台验收成品机器 | 计量校准；密度证据；供水与废液核对 |
| cp_waste | machining; finishing | 每种废物流分别记录 | 废物地磅及转移联单 | 净湿质量；油及水分；废物组成；接收方；运输；处理；工单 |分别称量隔离收集的废物流，与转移联单核对，必要时测量附着液体。 每台验收成品机器的归属净质量；不得把干质量和湿质量当作不同废物相加 | kg | 每次清运批次 | 制造及相关废物清运期间 | 从废物产生到首次处理 | 每台验收成品机器 | 地磅单；废物分析；有资质接收方记录 |
| cp_packaging | assembly | 每种包装物分别记录 | 发运装箱单 | 托盘质量；薄膜牌号及质量；未用退料；重复使用历史 |分别称量托盘及薄膜，按机床序列号核对发运包装。 归属于每台验收成品机器的实际包装，不计入 M | kg | 每次发运 | 验收机床发运 | 工厂发运 | 每台验收成品机器 | 装箱单；称量记录；重复使用证明 |
| cp_energy | assembly | 全部纳入操作的制造用电 | 分表及电费单 | 表读数；kWh；工单；运行小时；共用负荷驱动量；合格台数 |计量相关操作，包括试验及返工；将分表合计与已分配共用用电同厂级账单核对。 将实测能耗归属于每台验收成品机器并应用 energy_conversion | MJ | 每个工单或生产期间 | 与材料记录相同的生产期间 | 全部纳入操作，核算一次 | 每台验收成品机器 | 经校准电表；电费账单；共用负荷计算 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| energy_conversion | manufacturing_electricity | E_MJ = 3.6 * E_kWh；cp_energy 提供归属于每台验收成品机器的实测电能。 | E_kWh; cp_energy | 每台验收成品机器的 MJ | |
| records_to_machine | 所有交换 | 将可追溯的消耗、组件安装及废物记录归属于验收序列号。采用同质批次时，按 allocation_priority 和 allocation_rework 分配后，以同配置验收台数除归属总量。不假设机床质量常数。 | work order; accepted count; cp_mass | 每台验收成品机器的交换 | |
| mass_reconciliation | 材料投入及产出 | 比较材料及组件投入与验收净质量、包装、在制品、分类废物及记录排放。按实测不确定性及库存时点解释差异，不得虚构残余交换强行闭合。 | cp_material; cp_component; cp_mass; cp_waste; cp_packaging | 已核对的质量核算 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | 所有记录 | 匹配场址、生产期间及确切机床配置，保留每个重要组件的自制或外购决策。 | 竣工物料清单、工艺路线及采购记录 |
| dq_evidence | 数值交换 | 采集前景数量，本 PCR 不提供外部平均值或数值范围。缺失数据须在接受数据集前进行文件化估算与敏感性分析。 | 原始记录；不确定性；敏感性及缺口登记 |
| dq_sources | 支持文献 | CPC 仅支持分类；JRC 支持切削液及废物分离原则；EPA 支持条件性表面处理路线。这些行业资料不确立本机床的物料清单或数值范围。 | 引用原文章节及供应商或场址证据 |
| dq_balance | 材料、电力及废物 | 核对投入、验收产品、返工、库存变化、废料及公用消耗，调查尚未解释的重大差异。 | 含计量不确定性的签署核对记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | finished_machine | 选择本 PCR 前核实去除金属的螺纹加工或攻丝身份及排除项，声明全部必需限定信息。 | un-cpc-3-0-structure-2025 |
| validate_basis | 所有交换 | 通过 reference_mass 和 cp_mass 核实 M，并确保所有交换采用同一验收机床基准。按质量归一化的比较结果须另有明确换算，且不能据此认定不同机床功能等效。 | |
| validate_completeness | 物料清单及工艺路线 | 将每个重要采购或自制组件和实际耗材同具体清单交换核对。实际发生的刀具磨耗、装配润滑、清洗剂、焊材、压缩空气供应、工艺燃料、边角料及排放均须覆盖。不存在须有证据；仅有本组卡片不能证明场址数据集完整。 | jrc-metal-bemp-2020; epa-metal-coating-tsd |
| validate_boundary | 采购组件 | 使用组装组件数据集时，防止重复核算内含金属、轴承、配线及表面处理。核实上游生产及制造废物处理覆盖。 | |
| validate_waste | 废物及排放 | 核查废物类型、质量状态、接收方及处理方式。按实际工艺化学组成和监测记录分别识别直接排放物质及环境介质。不得将混合残余物映射为单一基本流物质或默默省略排放。 | jrc-metal-bemp-2020; epa-metal-coating-tsd |
| validate_evidence | 所有行 | 缺少确切 UUID 须保持为显式缺口，不授权使用代理。不得将无依据的外部范围当作实测数量，合规限值不得当作经验范围。 | |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 明确配置的完整机床制造前景数据包 |
| downstream_use | 关联上游及废物处理数据集的机床生产过程及 lifecyclemodel 投影 |
| allowed_use | 声明配置及实测参考质量的制造阶段评价 |
| excluded_use | 客户机加工服务、自动全生命周期声明，或仅按 kg 比较不同功能机床 |
| required_metadata | 必需限定信息；竣工物料清单；工艺路线；分配；来源；上游关联；废物去向；运输；范围缺口 |
| required_quality_disclosure | 缺失 UUID；计量不确定性；估算；未解决平衡；外部范围证据缺口 |
| update_trigger | 设计、自制或外购路线、能源供应、表面处理化学品、验收规格或重大源数据变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，CPC 第 3.0 版结构，2025 年 6 月 30 日，第 2264–2274 行：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 44215 类别身份及相邻类别排除项；不提供制造数量 |
| jrc-metal-bemp-2020 | official_guidance | 欧盟委员会 JRC，Best Environmental Management Practice in the Fabricated Metal Products sector，EUR 30025 EN，2020，DOI 10.2760/894966，第 4.1、4.5 节，印刷页 190、226：https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | 原文关于不同切削液形态、切屑收集及油回收的定性证据；可用于厂内金属零件机加工，不是机床专用定量数据集 |
| epa-metal-coating-tsd | official_guidance | 美国 EPA，National Emission Standards for Hazardous Air Pollutants for Miscellaneous Metal Parts and Products Surface Coating Operations: Technical Support Document；其中初步行业特征文件日期为 1998 年 9 月 30 日，印刷页 8-14，PDF 页 113：https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | 原文关于表面准备、施涂、固化及粉末涂装路线的定性证据；不主张当前法规适用性或机床专用消耗范围 |

这些相互独立的出版物确立定性适用性，并未提供边界相容的数值上下限。每项交换均须进行场址采集，不采用外部清单范围。
