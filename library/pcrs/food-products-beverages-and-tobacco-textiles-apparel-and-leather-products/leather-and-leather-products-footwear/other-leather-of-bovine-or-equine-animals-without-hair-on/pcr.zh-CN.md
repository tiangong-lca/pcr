---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-leather-of-bovine-or-equine-animals-without-hair-on
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 牛科或马科动物的其他去毛皮革

## 1. 范围与适用性

本规则适用于牛科或马科动物生皮经脱毛、鞣制、整理形成的干态可销售皮革。本版适用于一体化铬鞣路线；逐批声明物种、入厂生皮状态、鞣制技术、最终含水状态和用途。皮毛保留产品、合成革、再生革、漆革、金属化革、其他鞣制化学路线以及鞋和皮革制品不在范围内。湿蓝革和坯革为内部中间状态，不作为本规则的参考产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-leather-of-bovine-or-equine-animals-without-hair-on |
| classification_refs | CPC 3.0: 29120; classification context only |
| covered_products | 牛科或马科动物干态去毛成品革 |
| excluded_products | 皮毛保留革；再生革；其他物种革；漆革；金属化革；湿蓝革；坯革 |
| representative_product | 铬鞣牛科干态去毛成品革 |
| production_route | 接收生皮 → 脱毛浸灰 → 浸酸铬鞣 → 干态整理 |
| market_state | 验收合格、未制成制品的干态皮革，按实测质量交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可加工的牛科或马科去毛皮革材料 |
| How much | 1 kg 验收合格的干态成品革 |
| How well | 声明物种、鞣制技术、最终状态及质量验收规格 |
| How long or cycle | 在工厂交付点一次交付；不规定使用寿命 |
| reference_flow_link | finished_leather |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 牛科或马科动物的去毛成品革 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种；原皮状态；鞣制路线；成品含水状态；皮革用途；验收质量 |

构建前景数据包时，应在元数据、过程说明或产品描述中声明全部必需限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | 验收后称量无运输包装的干态成品革净质量；同一批次的全部投入与排放除以此质量。 |
| electricity_conversion | electricity_ac | Energy | MJ | 如电表读数为 kWh，以 1 kWh = 3.6 MJ 换算，并保存原始读数。 |
| effluent_compartment | chromium_effluent, chromium_water | Volume or mass | m3 or kg | 区分转移废液与直接排入受纳水体的三价铬；不得将同一铬负荷重复计入。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_1 | foreground | 从入厂生皮接收到干态成品革验收，计入厂内脱毛、鞣制、整理、公用电力及废液交接。 | eu-jrc-tan-bref-2013 |
| boundary_2 | upstream | 生皮、化学品、自来水及电力的上游数据应按实际供应链另行链接，不得以本规则的前景数据替代。 | eu-jrc-tan-bref-2013 |
| boundary_3 | wastewater | 若废液移交场外处理，记录交接流并链接处理数据；仅对经现场处理后直接排放的三价铬记录基本流。 | eu-jrc-tan-bref-2013 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 入厂牛科或马科生皮；记录鲜皮、盐渍或干皮状态 |
| starting_condition_role | 前景加工起点 |
| product_classification_scope | 牛科或马科去毛皮革；CPC 29120 仅作分类参照 |
| recursive_input_rule | 同类外购湿蓝革或坯革仅在单独声明分段生产时作为上游投入，不与本一体化路线重复计入。 |
| upstream_dataset_requirement | 生皮及购入投入需有适用地区、技术和状态的上游数据。 |
| disclosure | 声明物种、原皮保存方式、厂内处理范围、废液去向及排放受纳水体。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| beamhouse | 生皮准备与脱毛 | required | 全部一体化路线 | 前景生产 | 每 1 kg 干态成品革 |
| tanyard | 浸酸与铬鞣 | conditional | 仅当铬鞣路线适用 | 前景生产 | 每 1 kg 干态成品革 |
| site_services | 场址电力供应 | required | 全部一体化路线 | 前景生产 | 每 1 kg 干态成品革 |
| finishing | 干态整理与验收 | required | 全部一体化路线 | 前景生产 | 每 1 kg 干态成品革 |

### 过程：生皮准备与脱毛 (`beamhouse`)

#### 输入

##### 产品流

###### 牛生皮 (`raw_bovine_hide`)

仅适用于牛科批次；按接收状态称量生皮。

- 选定流: 牛生皮 `440c2098-2f4e-4632-9dcf-32329bcbe4de`
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `eu-jrc-tan-bref-2013`

###### 马的生皮和毛皮 (`raw_equine_hide`)

仅适用于马科批次；按接收状态称量生皮。

- 选定流: 马的生皮和毛皮 `a1d67ddb-fb38-433d-8fa7-1d0e18216c34`
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `un-cpc-3-2025`

###### 自来水 (`process_water`)

计量或称量湿法加工所用的自来水。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`
- 来源: `eu-jrc-tan-bref-2013`

###### 脱毛用硫化钠 (`unhairing_sulfide`)

硫化物脱毛工艺记录购入硫化钠产品质量。

- 选定流: 硫化钠 `a3b3c67f-ef15-4a1e-ba7f-8c97ae352b5c`
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `eu-jrc-tan-bref-2013`

###### 浸灰用熟石灰 (`liming_lime`)

浸灰工艺记录熟石灰产品质量。

- 选定流: 熟石灰 `49bf5000-b2da-4a30-8349-b0bb44171616`
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `eu-jrc-tan-bref-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 生皮去肉废料 (`fleshing_waste`)

称量生皮去肉废料；若作为联产品出售应披露。

- 选定流: 生皮去肉废料
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源: `eu-jrc-tan-bref-2013`

##### 基本流

### 过程：浸酸与铬鞣 (`tanyard`)

#### 输入

##### 产品流

###### 浸酸用硫酸溶液 (`pickling_acid`)

记录浸酸投加的 98% 硫酸溶液产品质量。

- 选定流: 硫酸溶液，98% `efbf8d56-3521-45c1-aac1-3564408f3d01`
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `eu-jrc-tan-bref-2013`

###### 浸酸用氯化钠 (`pickling_salt`)

记录浸酸投加的氯化钠产品质量。

- 选定流: 工业氯化钠
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `eu-jrc-tan-bref-2013`

###### 碱式硫酸铬鞣剂 (`chrome_tan`)

铬鞣工艺记录碱式硫酸铬产品质量。

- 选定流: 碱式硫酸铬 `fcccd040-e728-4932-9cbe-363051c308a5`
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 来源: `eu-jrc-tan-bref-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含铬制革废液 (`chromium_effluent`)

转移至场外处理或下水道时，在交接点计量该单独收集的含铬废液。

- 选定流: 含铬制革废液
- 流属性/单位: 体积 / m3
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_effluent`
- 来源: `eu-jrc-tan-bref-2013`

##### 基本流

###### 排入受纳水体的三价铬 (`chromium_water`)

仅适用于现场处理后经监测的直接排放；由采样浓度与排水量计算质量。

- 选定流: 三价铬，排入水体
- 流属性/单位: 质量 / kg
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission`
- 来源: `eu-jrc-tan-bref-2013`

### 过程：场址电力供应 (`site_services`)

#### 输入

##### 产品流

###### 购入交流电 (`electricity_ac`)

以 MJ 记录归属于一体化制革生产线的购入交流电。

- 选定流: 购入中压交流电
- 流属性/单位: 能量 / MJ
- 数量规则: 按批次实测并除以该批次验收合格的干态成品革质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electricity`
- 来源: `eu-jrc-tan-bref-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：干态整理与验收 (`finishing`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的干态成品革 (`finished_leather`)

在最终调湿及质量验收后称量可销售的干态去毛成品革。

- 选定流: 牛科或马科动物的去毛成品革
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_product`
- 来源: `un-cpc-3-2025`

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_1 | foreground_process | 优先按可计量工序拆分不同皮革批次的投入、废物和排放。 | eu-jrc-tan-bref-2013 |
| allocation_2 | marketable_fleshings | 若去肉废料出售为有价联产品，应记录销售事实、可追溯质量及所采用的分配依据；不得将其同时作为零负担废物和联产品。 | eu-jrc-tan-bref-2013 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_inputs | beamhouse, tanyard | 购入原料 | 交货单与批次投料台账 | 原料名称；物种或品级；接收质量；批次编号 | 称量或核对交货与批次领用记录 | kg | 每批次 | 连续生产批次或代表性年度 | 报告场址 | 每 1 kg 参考流 | 计量校准、批次台账与交接记录 |
| cp_water | beamhouse | 自来水 | 水表 | 水表起数；水表止数；批次分配 | 读取经校准的水表并分配实测取水量 | kg | 每批次 | 连续生产批次或代表性年度 | 报告场址 | 每 1 kg 参考流 | 计量校准、批次台账与交接记录 |
| cp_waste | beamhouse | 去肉废料 | 地磅或容器秤 | 批次编号；皮重；毛重；处置或销售去向 | 称量单独收集的去肉废料 | kg | 每批次 | 连续生产批次或代表性年度 | 报告场址 | 每 1 kg 参考流 | 计量校准、批次台账与交接记录 |
| cp_effluent | tanyard | 含铬废液 | 废液流量计 | 体积；含铬流别；去向；批次编号 | 在转移点计量单独收集的废液 | m3 | 每批次 | 连续生产批次或代表性年度 | 报告场址 | 每 1 kg 参考流 | 计量校准、批次台账与交接记录 |
| cp_emission | tanyard | 三价铬直接排放 | 排口采样与流量计 | 三价铬浓度；排水量；日期；受纳水体 | 测量现场处理后的直接排放 | kg | 每批次 | 连续生产批次或代表性年度 | 报告场址 | 每 1 kg 参考流 | 计量校准、批次台账与交接记录 |
| cp_electricity | site_services | 购入交流电 | 电表 | 电表起数；电表止数；kWh；分配依据 | 读取经校准的电表并将 kWh 换算为 MJ | MJ | 每批次 | 连续生产批次或代表性年度 | 报告场址 | 每 1 kg 参考流 | 计量校准、批次台账与交接记录 |
| cp_product | finishing | 验收合格的皮革 | 经校准的秤与验收记录 | 物种；批次编号；干态成品净质量；含水状态；验收结果 | 称量不含运输包装的验收合格干态皮革 | kg | 每批次 | 连续生产批次或代表性年度 | 报告场址 | 每 1 kg 参考流 | 计量校准、批次台账与交接记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_basis | all inventory rows | 每项可归属批次数量除以该批验收合格干态成品革 kg；保留原始计量与分配记录。 | 批次数量；cp_product | 每 1 kg 参考流 | eu-jrc-tan-bref-2013 |
| electricity_kwh_to_mj | electricity_ac | 电表 kWh × 3.6 = MJ；先换算再归一化。 | cp_electricity | MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 物种、工艺、投入品浓度及最终市场状态须与所用流和上游数据一致。 | 批次台账；供应单据 |
| dq_balance | all inventory rows | 追溯干态成品革质量、投入原皮质量、去肉废料与含铬废液交接；解释物料平衡差额。 | 称量单；废物交接单 |
| dq_time | all inventory rows | 披露采集期间、缺失值、分配方法及计量校准。 | 原始记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_1 | reference_flow | 成品革必须是经验收的干态去毛牛科或马科皮革，参考量及全部清单基准均为同一批次 1 kg。 | eu-jrc-tan-bref-2013 |
| validation_2 | conditional_rows | 牛科与马科生皮投入互斥；废液转移与直接排水的三价铬负荷不得重复计入。 | eu-jrc-tan-bref-2013 |
| validation_3 | uuid_and_range | 未确认 UUID 的流保持待审核；缺少双重独立原文证据时不得以外部数值范围替代前景计量。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 牛科或马科去毛干态成品革的前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在物种、状态、地区及铬鞣技术匹配时用于皮革材料投入建模。 |
| excluded_use | 不得替代湿蓝革、坯革、羊皮革、再生革或皮革制品的数据集。 |
| required_metadata | 物种；入厂原皮状态；铬鞣路线；最终含水状态；地区；采集年份；废液去向 |
| required_quality_disclosure | 计量覆盖、未解决 UUID、缺失范围证据、联产品处理、物料平衡差额 |
| update_trigger | 工艺、入厂状态、供电结构或排水处理路线发生实质变化。 |

## 11. 数据源

| 来源 ID | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品分类身份；相邻类别边界 |
| eu-jrc-tan-bref-2013 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Tanning of Hides and Skins, 2013; https://eippcb.jrc.ec.europa.eu/sites/default/files/2019-11/TAN_Published_def.pdf | 工艺分解；主要投入及排出；废液处理边界 |
