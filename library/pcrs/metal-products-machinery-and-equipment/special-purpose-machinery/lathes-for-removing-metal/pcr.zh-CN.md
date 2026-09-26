---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.lathes-for-removing-metal
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 切削金属的车床

## 1. 范围与适用性

本候选 PCR 适用于一台完整、已验收、用途为切削金属的车床的工厂大门制造。本规则集用于前景数据，不是特定产品的物料清单、性能声明或使用阶段模型。应采集特定配置的记录。单独的零部件和附件、其他机床类别、翻新设备、安装、使用和寿命终结不适用。

本产品以金属工件绕主轴轴线相对切削刀具旋转的车削操作为识别特征。普通车床和数控车床在主要产品功能仍为车削时均可采用这些采集规则；以铣削为主的加工中心和金属加工服务不属于本产品身份。应记录控制方式、加工空间、轴系配置和随附附件，防止将不同配置混为名义平均产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.lathes-for-removing-metal` |
| classification_refs | CPC 3.0 `44213` — Lathes for removing metal |
| covered_products | 制造场址交付的完整切削金属车床 |
| excluded_products | 单独的零部件和附件；其他机床类别；翻新设备；安装和使用 |
| representative_product | 一台已声明配置的完整车床 |
| production_route | 一个制造场址内、按配置进行的加工、装配和验收测试 |
| market_state | 工厂大门的新产品 |

原始样例核验：Grizzly G4003G 手册（2022 年 3 月修订）记载铸铁构件、钢构件、交流感应电动机、圆锥滚子主轴轴承、单独的发运包装及润滑油规范。这仅支持材料和总成采集类别，不确立通用物料清单、具体合金牌号或制造用量。其环氧涂装说明不能把聚酯粉末路线视为所有车床的共同路线。灰铁牌号、低合金钢棒和电缆配方均须由实际采购记录证实。来源：`grizzly-g4003g-manual-2022`。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台已验收、配置已声明的完整切削金属车床 |
| How much | 净验收质量 `M 千克` |
| How well | 符合制造商声明的验收规范 |
| How long or cycle | 一台已制造并验收的设备 |
| reference_flow_link | `finished_lathe` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | `M` |
| 参考产品流 | 完整已验收的切削金属车床 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | 千克 |
| 必需限定信息 | 制造商；场址；型号；配置；控制方式；加工空间；轴系配置；随附附件；序列号或制造订单标识；验收净质量；验收日期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass_measurement | 参考产品 | 质量 | 千克 | `M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。` |
| electricity_measurement | `alternating_current` | 净热值 | MJ | 以 MJ 记录制造场址专用电表或有文件证明的制造订单电表的交流电购入量。 |
| fluid_measurement | `water_soluble_metalworking_fluid_concentrate` | 质量 | 千克 | 以 kg 记录发放至制造订单的浓缩液；不得以水与浓缩液的混合总量替代。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造订单的投入进入所声明场址的加工、装配和验收测试。 |
| starting_condition_role | 工厂前景清单起点。 |
| product_classification_scope | CPC 3.0 `44213`；分类用于界定类别，但不提供物料清单。 |
| recursive_input_rule | 每种购入材料、部件、能源投入和服务均应采用适当上游数据集建模；不得将上游负荷嵌入前景数量。 |
| upstream_dataset_requirement | 披露每个关联上游数据集的地理范围、技术和版本。 |
| disclosure | 说明配置、场址、验收净质量、计量基准、材料/部件记录和任何未纳入的制造步骤。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_factory_gate | 成品车床 | 纳入所声明场址制造至验收；不包括安装、使用、维护和寿命终结。 |  |
| boundary_recursive_inputs | 购入投入 | 前景数量应与关联上游数据集分开记录。 |  |
| boundary_machining_fluid | 切削金属加工 | 当所声明路线使用金属加工液时，采集实际配方和用量。 | `jrc-bemp-fabricated-metal-products-2020` |

计量表中的机器指本 PCR 的完整车床。验收净质量包含同一销售配置内安装的附件及保留初装油，排除托盘、外包装和未安装的额外备件。验收测试消耗属于制造；客户使用阶段的工件、切削刀具耗用和运行电力不属于本边界。该边界是本 PCR 的作者规则，CPC 分类仅支持产品身份。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| manufacture_and_acceptance | 制造、装配和验收 | required |  | 构件加工、机械/电气装配、润滑、测试和厂门交付；全厂购电集中记录一次 | 每台验收成品机器 |
| aqueous_machining | 水基金属加工液路线 | conditional | 制造加工使用水溶性浓缩液时 | 仅计入加工液配制、补水和废乳化液转移；电力在主过程集中记录 | 每台验收成品机器 |
| powder_finishing | 聚酯粉末涂装 | conditional | 声明并实际使用聚酯粉末涂装路线时 | 仅计入新涂料；固化电力在主过程集中记录 | 每台验收成品机器 |
| dispatch_packaging | 发运纸板包装 | conditional | 发运使用瓦楞纸板防护时 | 仅计入发运纸板；包装不属于设备净质量 | 每台验收成品机器 |

所有过程使用同一订单和配置。主过程中的设备一词指本 PCR 的完整车床。各原料卡仅适用于实际物料清单匹配的牌号及形态，不代表通用配方。现场铸造、焊接、热处理、其他涂装或 CNC 控制柜等配置存在时，必须按实际材料及能源边界增补具体原子交换及独立过程；不得静默省略或以近似流替代。

### 过程：制造、装配和验收（`manufacture_and_acceptance`）

#### 输入

##### 产品流

###### 交流电（`alternating_current`）

购入电能跨越制造场址边界，用于加工、装配和验收测试。数量应来自专用电表或有文件证明的制造订单分摊。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：净热值 / MJ
- 数量规则：每一台已验收成品车床的实测 MJ；记录供电地理范围、电压和分摊方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 灰铸铁铸件（`grey_iron_casting`）

当所声明物料清单采用外购灰铸铁床身或主轴箱铸件时，称量其收货质量。这是成形铸件，不是生铁、铁水或原矿；应标识牌号和加工余量。

- 选定流：灰铸铁铸件
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_bom` 采集每台验收成品机器的实际交换质量；不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：

###### 热轧低合金钢棒（`low_alloy_steel_bar`）

对已声明的棒材加工路线，记录轴及其他机加工零件和工厂验收试件所领用的毛坯量。标识合金和产品形态，扣除有记录的退料并单独记录切屑。不得重复计入已包含在外购成品总成中的原料。

- 选定流：热轧低合金钢棒
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_bom` 采集每台验收成品机器的实际交换质量；不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：

###### 交流电动机（`ac_motor`）

记录已声明配置中实际安装的交流电动机，列明额定功率、控制技术、数量和实测总质量。可作为外购总成建模，也可拆解其构成材料，但不得重复计入。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_bom` 采集每台验收成品机器的实际交换质量；不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：

###### 圆锥滚子轴承（`tapered_roller_bearing`）

仅纳入已声明主轴或传动配置单独采购的圆锥滚子轴承；记录零件型号、数量和总质量。外购主轴总成内已包含的轴承不得再次计入。

- 选定流：圆锥滚子轴承
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_bom` 采集每台验收成品机器的实际交换质量；不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：

###### 绝缘铜电缆（`insulated_copper_cable`）

测量设备装配时安装的外购绝缘铜电缆，标识导体截面和绝缘材料。电缆质量包含绝缘层；不得重复计入外购控制柜内的电缆。

- 选定流：绝缘铜电缆
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_bom` 采集每台验收成品机器的实际交换质量；不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：

###### 矿物润滑油（`mineral_lubricating_oil`）

测量装配和验收使用的矿物润滑油，区分保留的初装油与测试后排出的油。记录牌号；体积换算质量时应采用供应商对应记录温度的实际密度。合成润滑剂必须另列准确的流。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_consumables` 采集每台验收成品机器的实际交换质量；不设默认数量。
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

###### 完整已验收的切削金属车床（`finished_lathe`）

该参考产品为离开所声明制造场址的完整已验收设备。其质量应与所采集前景记录对应同一配置。

- 选定流：完整已验收的切削金属车床
- 流属性/单位：质量 / 千克
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 黑色金属加工切屑（`ferrous_machining_swarf`）

将铁基加工切屑与有色金属废料分开收集。称量出厂批次，记录合金、水分和夹带油，并核对金属质量与投料和验收零件。默认不计避免原生金属生产的抵扣。

- 选定流：铁金属切屑 `8aa263a4-39e5-475e-966b-d967747ecc9c`
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_waste` 采集每台验收成品机器的实际交换质量；不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-bemp-fabricated-metal-products-2020`

##### 基本流

### 过程：水基金属加工液路线（`aqueous_machining`）

#### 输入

##### 产品流

###### 水溶性金属加工液浓缩液（`water_soluble_metalworking_fluid_concentrate`）

这是一个条件性加工投入：仅当所声明生产路线向制造订单发放水溶性浓缩液时纳入。应记录浓缩液，而不是笼统的冷却液或稀释混合物。

- 选定流：水溶性金属加工液浓缩液
- 流属性/单位：质量 / 千克
- 数量规则：每一台已验收成品车床发放的浓缩液实测 kg；支持记录应标识配方和浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mwf`
- 来源：`jrc-bemp-fabricated-metal-products-2020`

###### 自来水（`tap_water`）

记录稀释金属加工液浓缩液及加工回路补水使用的计量自来水，不重复计入同一过程内的循环水。不得将本产品流用于地表水或地下水直接取水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_aqueous` 采集每台验收成品机器的实际交换质量；不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous`
- 来源：`jrc-bemp-fabricated-metal-products-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水基金属加工乳化液（`spent_machining_emulsion`）

称量交由有资质处理方的废水基加工乳化液，保留废物组成和去向。这是废物混合物转移，不是排入水体的基本流。单独量化回收油和实际处理排水，避免重复计入。

- 选定流：废水基金属加工乳化液
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_waste` 采集每台验收成品机器的实际交换质量；不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-bemp-fabricated-metal-products-2020`

##### 基本流

### 过程：聚酯粉末涂装（`powder_finishing`）

#### 输入

##### 产品流

###### 聚酯粉末涂料（`polyester_powder_coating`）

对于有记录的聚酯粉末涂装路线，称量消耗的新粉，扣除未开封退料，核对留存涂层、未回收过喷粉和内部回收。溶剂型涂料属于其他路线，必须单列具体配方和按物质识别的排放。

- 选定流：聚酯粉末涂料
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_coating` 采集每台验收成品机器的实际交换质量；不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：发运纸板包装（`dispatch_packaging`）

#### 输入

##### 产品流

###### 瓦楞纸板（`corrugated_board`）

当发运使用瓦楞纸板防护时，单独测量每台发运设备的纸板质量，不计入设备净质量。使用托盘、塑料薄膜或钢打包带时应分别列材料行；本纸板行不适用并不表示没有包装。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 / 千克
- 数量规则：按 `cp_packaging` 采集每台验收成品机器的实际交换质量；不设默认数量。
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
| allocation_subdivision | 共享制造操作 | 在技术可行时，通过分割记录至制造订单避免分配。 |  |
| allocation_physical_driver | 无法避免的共享电力或流体使用 | 无法分割时，采用有文件证明的物理计量驱动因素分配，并披露驱动因素和期间。 |  |
| allocation_production_cohort | 测试不合格、返工和最终报废 | 其投入、能源和废物负荷保留在同一配置生产批群的分子中，仅以已验收成品车床数量归一化。核对期初期末在制品和实际退料；内部回收或退回材料不得重复抵扣。 |  |
| allocation_recovery | 金属切屑和回收液体 | 默认作为出厂废物转移，不给予避免原生生产的抵扣；记录实际处理去向和回收状态。如拟作为有销售功能的共产品，须证明市场身份、完成可复核的分配并另报敏感性结果。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | manufacture_and_acceptance | `finished_lathe` | 验收记录和衡器记录 | 型号；配置；序列号；验收净质量 `M`；验收日期 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | 千克 | 每台设备 | 验收日期 | 所声明制造场址 | 每台验收净质量 | 衡器校准和验收记录 |
| cp_energy | manufacture_and_acceptance | `alternating_current` | 电表或制造订单台账 | 电表标识；读数或 kWh；换算；订单标识；分摊方法；批群配置；验收数量；关联的测试不合格、返工及最终报废事件标识 | 读取专用电表或核对有文件证明的订单级分摊，将关联的测试不合格、返工和最终报废用电保留在同一生产批群内。 | MJ | 每台设备或报告期 | 所声明报告期 | 所声明制造场址 | 每台验收成品机器 | 电表记录和分摊工作表 |
| cp_mwf | aqueous_machining | `water_soluble_metalworking_fluid_concentrate` | 物料发放记录 | 配方；浓度；发放质量；订单标识 | 将浓缩液发放记录与制造订单核对；仅当路线使用该浓缩液时纳入。 | 千克 | 每台设备或批次 | 所声明报告期 | 所声明制造场址 | 每台验收成品机器 | 发放记录和配方记录 |
| cp_bom | manufacture_and_acceptance | 材料及外购零部件逐项采集 | 收货、领退料和物料清单 | 订单；配置；零件标识；牌号；形态；数量；单件实测质量；领退料；期初期末在制品；验收数量；关联的测试不合格、返工及最终报废事件标识 | 逐项称量投入并与订单物料清单及关联的测试、返工和报废记录核对；外购总成与其构成材料不得重复计入 | 千克 | 每台或批次 | 所声明报告期 | 所声明制造场址 | 每台验收成品机器 | 称量记录、校准记录和订单核对 |
| cp_consumables | manufacture_and_acceptance | mineral_lubricating_oil | 润滑剂台账 | 牌号；订单；领退量；保留量；排出量；密度及温度 | 称量实际领用润滑油，分开核对保留初装油和排出废油 | 千克 | 每台或批次 | 所声明报告期 | 所声明制造场址 | 每台验收成品机器 | 称量记录、校准记录和订单核对 |
| cp_aqueous | aqueous_machining | tap_water | 水表及配液记录 | 来源；水表读数；订单；浓缩液质量；补水量 | 使用分项计量，按实际密度转换有体积记录的水量，不重复计循环水 | 千克 | 每台或批次 | 所声明报告期 | 所声明制造场址 | 每台验收成品机器 | 称量记录、校准记录和订单核对 |
| cp_waste | manufacture_and_acceptance; aqueous_machining | 各废物分别采集 | 废物称重单和转移联单 | 废物身份；来源过程；毛重；皮重；水分；夹带油；批次；去向 | 逐废物称量实际出厂转移量；以订单实测产生量分配批次，不得把废物转移当作环境排放 | 千克 | 每台或批次 | 所声明报告期 | 所声明制造场址 | 每台验收成品机器 | 称量记录、校准记录和订单核对 |
| cp_coating | powder_finishing | polyester_powder_coating | 涂料领用和回收台账 | 配方；SDS；订单；新粉量；退料；留存涂层；回收和废粉 | 核对新粉用量与留存涂层、回收量和损失；内部循环只计一次 | 千克 | 每台或批次 | 所声明报告期 | 所声明制造场址 | 每台验收成品机器 | 称量记录、校准记录和订单核对 |
| cp_packaging | dispatch_packaging | corrugated_board | 包装物料清单 | 订单；发运数量；纸板净质量；退料 | 称量每台发运设备使用的纸板并与发运记录核对 | 千克 | 每台或批次 | 所声明报告期 | 所声明制造场址 | 每台验收成品机器 | 称量记录、校准记录和订单核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| reconcile_machine_order | 所采集前景交换 | 将记录核对至同一配置的一台已验收车床；记录任何物理驱动因素分配。 | `cp_mass`; `cp_energy`; `cp_mwf` | 完整的每台设备前景清单 |  |
| calculate_production_cohort | 特定配置的生产批群 | 将测试不合格、返工和最终报废的投入、能源及废物保留在各交换的批群分子中，核对期初期末在制品和实际退料后，仅除以已验收成品车床数量。内部回收和退料只记录一次，不额外给予避免投入的抵扣。没有验收成品的批群不能计算每台验收设备结果。 | `cp_bom`; `cp_energy`; `cp_waste`; 验收及测试、返工和报废记录 | 每台验收成品机器 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_configuration | 成品车床和投入 | 所有记录的型号、配置和验收记录必须一致。 | 制造订单和验收记录 |
| dq_atomic_inputs | 制造投入 | 对每一种实际购入材料、部件、能源载体、废物和基本流建立一个原子行；不得使用笼统类别。 | 物料清单、发放记录和废物清单 |
| dq_mwf_route | 条件性流体投入 | 说明加工是否使用水溶性浓缩液；使用时保留配方记录。 | 工艺路线单和配方记录 |
| dq_bom_closure | 全部材料、总成和成品 | 按订单核对物料清单、期初期末在制品、领退料、报废和验收数量。保留件质量与设备净质量核对，包装和过程流体单独核对。记录差异、校准和不确定性；不得为闭合而改写实测数值。 | 订单物料平衡和差异说明 |
| dq_route_completeness | 实际制造路线 | 逐项确认铸造、焊接、热处理、清洗、涂装、数控装配和包装是否适用；适用但表内未列出的原料、废物和每种实际排放必须补充具体行及采集协议。没有依据的缺失不等于零。 | 工艺路线、物料清单、SDS、排放测量和废物联单 |
| dq_shared_energy | 共享电力 | 主过程只记录一次归属该订单的加工、泵、压缩空气制备、涂装固化、装配和测试用电。避免与内部公用工程过程重复计入；如购入压缩空气而非自制，增加其独立物理交换。 | 电表边界图和分配工作表 |
| dq_external_ranges | 数量范围 | 当前无经两个独立、边界兼容原始来源验证的经验数量范围。必须采集前景数据，不得将单台样机数值、额定功率、法规限值或场景极值当作行业范围。 | 数据采集记录及未解决范围证据需求 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference_mass | `finished_lathe` | 核验 `M` 为同一已声明配置的验收净质量，单位为 kg，且不含运输包装。 |  |
| validation_atomic_exchange | 所有清单卡片 | 核验每张卡均为一个具体交换且仅有一个属性和单位；拒绝笼统流和未记录的路线选择。 |  |
| validation_conditional_route | `water_soluble_metalworking_fluid_concentrate` | 核验仅在所声明路线使用该浓缩液时出现此行，且发放记录标识其配方。 | `jrc-bemp-fabricated-metal-products-2020` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按配置的工厂大门前景数据包 |
| downstream_use | 关联上游数据集以形成过程或生命周期模型投影 |
| allowed_use | 用于制造清单建模；比较时还必须另行证明加工服务、精度、产能和使用寿命等功能等效性，不得仅按设备质量比较 |
| excluded_use | 产品性能、使用阶段、安装或寿命终结声明 |
| required_metadata | 必需限定信息；计量记录；上游数据集标识；分配方法 |
| required_quality_disclosure | 场址、报告期、配置、数据采集方法和条件性路线状态 |
| update_trigger | 配置、制造路线、场址、计量方法或验收质量方法变化 |

## 11. 数据源

| source_id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Structure*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品类别识别和排除项；不作为制造边界或数量范围的依据。 |
| jrc-bemp-fabricated-metal-products-2020 | official_guidance | European Commission Joint Research Centre, *Best Environmental Management Practice in the Fabricated Metal Products sector*, EUR 30025 EN, 2020. https://doi.org/10.2760/894966 | 印刷页 190 和 226（PDF 页 192 和 228）：金属加工液形态和加工残余物分类收集；属于定性工艺指导，不是车床制造数据集或数量范围。 |
| grizzly-g4003g-manual-2022 | handbook | Grizzly Industrial, *Model G4003G Owner's Manual*, revised March 2022, for models manufactured since March 2020; public PDF snapshot retrieved 2026-09-22. https://cdn2.grizzly.com/manuals/g4003g_m.pdf | 仅限原始 PDF 页 8–10（印刷页 6–8）的定性配置和材料证据及涂装反例；不采用该型号数值作为参考质量、制造数量或范围。 |
