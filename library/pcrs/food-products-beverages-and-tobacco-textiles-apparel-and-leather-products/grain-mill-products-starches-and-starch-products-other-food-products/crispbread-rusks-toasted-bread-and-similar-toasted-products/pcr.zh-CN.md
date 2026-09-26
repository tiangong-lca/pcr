---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.crispbread-rusks-toasted-bread-and-similar-toasted-products
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 脆面包、面包干、烤面包及类似烘烤制品

## 1. 范围与适用性

本规则适用于出厂时作为干燥、酥脆烘焙制品出售的脆面包、面包干、烤面包及类似产品。记录原料制备、初次烘焙、二次烘烤或干燥、冷却及实际包装。普通软面包、饼干和未形成所声明酥脆销售状态的产品不适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.crispbread-rusks-toasted-bread-and-similar-toasted-products |
| classification_refs | CPC 3.0: 23410 |
| covered_products | 脆面包、面包干、烤面包及类似烘烤制品 |
| excluded_products | 普通软面包；饼干；未二次烘烤的普通面包 |
| representative_product | 成品黑麦脆面包 |
| production_route | 声明脆面包直接烘焙干燥路线，或面包干／烤面包的初烘后切片和二次烘烤路线 |
| market_state | 声明含水率、酥脆度、包装状态和出厂质量 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可食用的干燥酥脆烘焙食品 |
| How much | 1 kg 合格成品净质量 |
| How well | 声明产品种类、含水率和酥脆质量指标 |
| How long or cycle | 一次出厂产品交付；不假定储存期 |
| reference_flow_link | crispbread |


| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 成品黑麦脆面包 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品种类；原料谷物；一次烘焙和二次烘烤／干燥路线；含水率；包装状态；出厂边界 |


面包干或烤面包数据集分别以 `rusk` 或 `toasted_bread` 为成品行，仍按 1 kg 实际合格成品净质量归一化；不得把黑麦脆面包名称或未确认 UUID 用作其产品身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 | kg | 采用校准秤或可追溯批次称重记录，称量同一销售状态的合格成品净质量，排除包装。 |
| `electricity_conversion` | electricity | 净热值 | MJ | 计量 kWh 乘以 3.6 换算为 MJ；保留原始电表记录。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明谷物面粉或外购已烘焙面包进入前景系统的状态和来源。 |
| starting_condition_role | 原料或已烘焙半成品的上游边界 |
| product_classification_scope | CPC 3.0 23410 成品；普通面包输入保留其原有产品身份 |
| recursive_input_rule | 同类别回用脆面包需单独计量并披露，避免将同一产量重复作为投入和产出。 |
| upstream_dataset_requirement | 每项外购面粉、面包、燃料、电力及包装投入应具有相应上游数据集。 |
| disclosure | 声明含水率、路线、外购面包份额、损耗及包装状态。 |


| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_first_bake` | all inventory rows | 将厂内初烘和二次烘烤／干燥的可归属投入纳入；外购已烘焙面包以采购输入表示，不重复模拟其厂外初烘。 | `toxins-2015-rusk` |
| `boundary_finished_state` | finished product | 仅合格的声明干燥酥脆销售状态进入 1 kg 参考量，包装质量不得并入食品净质量。 | `un-cpc-3-2025` |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `base_make` | 面团制备与初烘 | conditional | 脆面包厂内生产或面包干使用厂内初烘面包 | 前景原料和初烘 | 每 1 kg 参考流 |
| `toast_dry` | 二次烘烤或干燥与冷却 | required | 全部纳入产品；声明实际热处理路线 | 成品形成和损耗 | 每 1 kg 参考流 |
| `packing` | 初级包装 | conditional | 仅声明包装销售状态使用聚乙烯膜时 | 包装投入 | 每 1 kg 参考流 |


### 过程：面团制备与初烘（`base_make`）

#### 输入

##### 产品流

###### 面粉（`flour`）

适用条件：厂内制面团时。

- 选定流：面粉 `67b80ae5-687f-418a-84ba-f06b01a6139b`
- 流属性/单位：质量 / kg
- 数量规则：按谷物品种及研磨规格记录面粉质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_base`
- 来源：`mustafa-2008-crispbread`

###### 自来水（`water`）

适用条件：厂内制面团时。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：记录投向面团的水；体积计量时采用有记录的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_base`
- 来源：`mustafa-2008-crispbread`

###### 鲜面包酵母（`yeast`）

适用条件：仅在配方使用鲜酵母时。

- 选定流：鲜面包酵母
- 流属性/单位：质量 / kg
- 数量规则：记录加入发酵面团的鲜面包酵母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_base`
- 来源：`mustafa-2008-crispbread`

### 过程：二次烘烤或干燥与冷却（`toast_dry`）

#### 输入

##### 产品流

###### 用于制作面包干的原味已烘焙面包（`purchased_bread`）

适用条件：仅用于外购面包制作面包干；厂内中间转移不记为边界交换。

- 选定流：用于制作面包干的原味已烘焙面包
- 流属性/单位：质量 / kg
- 数量规则：记录进入切片和二次烘烤的外购已烘焙面包。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`
- 来源：`toxins-2015-rusk`

###### 电力（`electricity`）

适用条件：使用电烤炉、风机、输送机或控制设备时。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：净热值 / MJ
- 数量规则：记录可归属电力；按 3.6 MJ/kWh 将 kWh 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`

###### 管输品质天然气（`natural_gas`）

适用条件：仅适用于天然气设备。

- 选定流：管输品质天然气 `7766e51e-0b64-4fbb-89cb-489c33293137`
- 流属性/单位：体积 / m3
- 数量规则：记录烘焙及烘烤／干燥所用的天然气计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat`

#### 输出

##### 产品流

###### 成品黑麦脆面包（`crispbread`）

适用条件：仅适用于脆面包路线。

- 选定流：成品黑麦脆面包
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：`un-cpc-3-2025`

###### 成品面包干（`rusk`）

适用条件：仅适用于面包干路线。

- 选定流：成品面包干
- 流属性/单位：质量 / kg
- 数量规则：记录二次烘烤后 1 kg 合格面包干。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：`toxins-2015-rusk`

###### 成品烤面包（`toasted_bread`）

适用条件：仅适用于烤面包路线。

- 选定流：成品烤面包
- 流属性/单位：质量 / kg
- 数量规则：记录最终烘烤后 1 kg 合格烤面包。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：`un-cpc-3-2025`

##### 废物流

###### 不合格烘焙面包（`bread_reject`）

适用条件：不合格品离开产品系统时。

- 选定流：不合格烘焙面包
- 流属性/单位：质量 / kg
- 数量规则：将不合格面包与合格产品分别称重并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`

### 过程：初级包装（`packing`）

#### 输入

##### 产品流

###### 聚乙烯薄膜（`pe_film`）

适用条件：仅在声明的销售状态采用聚乙烯薄膜时。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 / kg
- 数量规则：记录每单位合格产品使用的聚乙烯初级包装膜质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rework` | all inventory rows | 优先按批次和产品直接计量。可销售副产品若存在，先记录质量及去向，分配方法应单独披露；不合格废物不作为合格成品。 |  |
| `allocation_shared_energy` | electricity; natural_gas | 共用烤炉和干燥设备先用独立计量或可核查运行时间归属；披露无法分辨的共享量。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_base` | `base_make` | flour; water; yeast | 批次称重及配方记录 | 批次号；原料质量；谷物类型；成品质量 | 校准秤及原料领用记录 | kg | 每批 | 连续代表性生产期 | 生产场址 | 每 1 kg 参考流 | 校准、批次及采购凭据 |
| `cp_heat` | `toast_dry` | purchased_bread; electricity; natural_gas | 采购及计量记录 | 面包质量；kWh；天然气 m3；成品质量 | 采购称重与独立计量或有依据的分摊 | kg; MJ; m3 | 每批或连续计量 | 连续代表性生产期 | 生产场址 | 每 1 kg 参考流 | 校准、批次及采购凭据 |
| `cp_output` | `toast_dry` | crispbread; rusk; toasted_bread; bread_reject | 合格品及不合格品称重记录 | 产品类型；合格净质量；不合格质量；含水率；去向 | 冷却及最终干燥后校准净称重 | kg | 每批 | 连续代表性生产期 | 生产场址 | 每 1 kg 参考流 | 校准、批次及采购凭据 |
| `cp_pack` | `packing` | pe_film | 包装领用记录 | 薄膜牌号；薄膜质量；合格产量 | 称量领用薄膜并核对退料与边角料 | kg | 每批 | 连续代表性生产期 | 生产场址 | 每 1 kg 参考流 | 校准、批次及采购凭据 |


### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch` | all inventory rows | q_ref = q_batch / m_accepted；q_batch 为纳入批次的交换量；m_accepted 为 kg 表示的合格成品净质量。 | q_batch; m_accepted; cp_output | q_ref |  |
| `electricity_mj` | electricity | MJ = kWh × 3.6 | kWh; cp_heat | MJ |  |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | all inventory rows | 声明产品种类、原料、是否外购已烘焙面包、初烘和二次烘烤状态。 | 批次配方及采购记录 |
| `dq_mass` | finished product | 合格成品、损耗及包装分别计量；含水率与出厂状态一致。 | 校准、质量检验和包装记录 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished product | 合格成品净质量必须为 1 kg 参考量分母；包装及不合格面包均不计入。 |  |
| `validate_route` | all inventory rows | 检查实际二次烘烤／干燥、外购面包和厂内初烘的纳入条件；不得重复计算中间面包。 | `toxins-2015-rusk` |
| `validate_missing` | all inventory rows | 未确认的产品或废物流 UUID 必须保留为待解决，不得以近似流替代。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 合格成品前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按声明路线和销售状态对脆面包、面包干或烤面包建模 |
| excluded_use | 普通软面包、饼干或其他未烘烤成品 |
| required_metadata | 产品种类；谷物；路线；含水率；包装；场址；期间；出厂边界 |
| required_quality_disclosure | 计量、分摊、损耗及未解决 UUID |
| update_trigger | 原料、路线、烘烤工艺、包装或含水率改变 |


## 11. 数据源

| 来源 ID | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品分类身份 |
| `mustafa-2008-crispbread` | literature | Arwa Mustafa, Acrylamide in Bread: Precursors, Formation and Reduction, 2008 thesis, §2.2. https://pub.epsilon.slu.se/1789/1/Arwa_Mustafa_thesis_08.pdf | 脆面包烘焙和干燥阶段；仅实验室案例 |
| `toxins-2015-rusk` | literature | Deoxynivalenol & Deoxynivalenol-3-Glucoside Mitigation through Bakery Production Strategies: Effective Experimental Design within Industrial Rusk-Making Technology, Toxins 7 (2015), 2773–2790. https://mdpi-res.com/d_attachment/toxins/toxins-07-02773/article_deploy/toxins-07-02773.pdf | 面包干初烘、切片和二次烘烤顺序 |
