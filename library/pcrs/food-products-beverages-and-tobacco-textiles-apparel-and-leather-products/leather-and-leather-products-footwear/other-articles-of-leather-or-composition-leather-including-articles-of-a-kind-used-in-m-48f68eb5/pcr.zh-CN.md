---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-articles-of-leather-or-composition-leather-including-articles-of-a-kind-used-in-m-48f68eb5
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他皮革或再生皮革制品（包括机械、机械器具或其他技术用途制品），未另分类

## 1. 范围与适用性

本规则适用于以皮革或皮革纤维制再生皮革为主要材料、且未归入更具体皮革制品类别的合格成品。数据包须声明制品用途、设计、材料占比和物料清单。前景过程从接收成品皮革或再生皮革及零部件开始，至工厂门口的合格成品及其包装结束。投入品须关联上游供应数据集。使用及报废阶段不属于本产品阶段规则。剩余类 CPC 名称及相邻具体类别见 `un-cpc-2025`；使用本规则前须核验实际制品的分类。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-articles-of-leather-or-composition-leather-including-articles-of-a-kind-used-in-m-48f68eb5 |
| classification_refs | CPC 3.0 29290，仅为候选对应；映射接受另行决定。 |
| covered_products | 未归入更具体类别的皮革或皮革纤维制再生皮革杂项成品，包括技术用途的裁切或装配制品。 |
| excluded_products | 未加工成制品的皮革片材；箱包；鞍具及挽具；表带；鞋类；服装及服饰用品；主体材料不是皮革或再生皮革的产品。 |
| representative_product | 功能和配置明确的一种皮革或再生皮革制成品。 |
| production_route | 外购成品片材裁切或冲孔，按实际工艺缝制、铆接或粘接，再检验及包装。 |
| market_state | 工厂门口的合格制成品，净质量不含运输包装；提供包装时将其作为单独清单投入。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种规定清楚的合格皮革或再生皮革杂项制成品。 |
| How much | 1 kg 合格制品净质量。 |
| How well | 满足声明的图纸、材料规格和验收条件。 |
| How long or cycle | 工厂门口的一个生产批次；使用寿命不属于本产品阶段边界。 |
| reference_flow_link | `finished_article` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他皮革或再生皮革制成品（未另分类） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制品类型及技术用途；配置和尺寸；天然皮革或皮革纤维制再生皮革路线；相关皮革动物种类；验收规格；工厂所在地及期间；净产出质量。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_article` | Mass | kg | 使用经校准的秤称量合格制品净质量，排除运输包装；核对不合格品和退货。 |
| `inventory_basis` | 所有清单行 | Mass 或该流规定的属性 | 该行单位 | 适用交换均按每 1 kg 参考流报告，并使用同一合格产出批次和质量分母；保留原始仪表及台账记录。 |
| `electricity_conversion` | `electricity_ac` | Net calorific value | MJ | 按 1 kWh = 3.6 MJ 将电表读数换算为 MJ；保留原始 kWh 记录，并披露电压和供电来源。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购成品皮革或皮革纤维制再生皮革片材及其他指定投入进入制造过程。 |
| starting_condition_role | 前景工厂内制造起点；上游供应负荷通过独立数据集关联。 |
| product_classification_scope | 剩余类皮革制品边界内的一种具体制品，实际分类仍须核验。 |
| recursive_input_rule | 若外购投入也是本 PCR 所覆盖制品，作为独立上游数据集处理，并在声明的采购边界停止同类递归。 |
| upstream_dataset_requirement | 对实际使用的皮革或再生皮革、缝线、胶黏剂、铆钉、电力和包装关联可追溯上游数据集；披露尚未匹配的项目。 |
| disclosure | 记录材料成分、功能、纳入工序、产品质量、联产品、边角料处理、包装及排除阶段。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | product_stage | 纳入从外购成品材料到工厂门口合格制品的制造过程，以及所有纳入投入品的上游供应。 | `un-cpc-2025` |
| `boundary_conditional_routes` | foreground_operations | 仅在声明产品配置有记录时纳入缝制、铆接、粘接和纸箱包装。 | `ilo-isco68-1969` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `article_fabrication` | 皮革制品裁切、装配和检验 | `required` | 合格制品均须纳入；具体连接和包装交换仅在物料清单中存在时纳入。 | 前景生产 | 每 1 kg 参考流 |

### 过程：皮革制品裁切、装配和检验（`article_fabrication`）

#### 输入

##### 产品流

###### 成品牛皮革片材（`finished_bovine_leather`）

使用天然皮革时，仅记录本制品实际领用的合格成品牛皮革片材。

- 选定流：成品牛皮革片材
- 流属性/单位：质量 / kg
- 数量规则：依据前景记录核算归属交换量，并按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`un-cpc-2025`

###### 皮革纤维制再生皮革片材（`composition_leather_sheet`）

仅在实际使用皮革纤维制再生皮革时纳入，并记录供应商成分及来料质量。

- 选定流：皮革纤维制再生皮革片材
- 流属性/单位：质量 / kg
- 数量规则：依据前景记录核算归属交换量，并按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`un-cpc-2025`

###### 聚酯缝纫线（`polyester_sewing_thread`）

仅在缝制工艺中纳入；称量领用缝线并核对退回余量。

- 选定流：聚酯缝纫线
- 流属性/单位：质量 / kg
- 数量规则：依据前景记录核算归属交换量，并按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ilo-isco68-1969`

###### 无溶剂型聚氨酯胶粘剂（`pu_adhesive`）

仅在粘接工艺实际使用该配方胶黏剂时纳入；记录配制品实际净消耗质量。

- 选定流：无溶剂型聚氨酯胶粘剂 `669d2f68-79e9-47c2-96fa-316fc7d33b62`
- 流属性/单位：质量 / kg
- 数量规则：依据前景记录核算归属交换量，并按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ilo-isco68-1969`

###### 钢铆钉（`steel_rivet`）

仅在制品使用钢铆钉连接时纳入；用领用质量扣除退回的未用铆钉。

- 选定流：钢铆钉
- 流属性/单位：质量 / kg
- 数量规则：依据前景记录核算归属交换量，并按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ilo-isco68-1969`

###### 外购交流电（`electricity_ac`）

计量归属于合格制品批次的裁切、缝制、压制和装配用电。

- 选定流：外购交流电
- 流属性/单位：净热值 / MJ
- 数量规则：依据前景记录核算归属交换量，并按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 瓦楞纸箱（`corrugated_box`）

仅在生产者随成品提供瓦楞纸箱时纳入；称量实际用箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：依据前景记录核算归属交换量，并按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他皮革或再生皮革制成品（未另分类）（`finished_article`）

称量排除运输包装后的合格制品净质量；1 kg 此类合格产出为一个参考流。

- 选定流：其他皮革或再生皮革制成品（未另分类）
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：`un-cpc-2025`

##### 废物流

###### 分类收集的皮革边角料（`leather_offcut`）

裁切牛皮革时，分类收集并称量离开制造过程的边角废料。

- 选定流：牛皮革裁切边角废料
- 流属性/单位：质量 / kg
- 数量规则：称量分类废料并按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared_operations | 优先对各制品系列及生产线分别计量电力和材料领用。 | |
| `allocation_shared` | unavoidable_shared_inputs | 无法直接拆分时，设备用电按有记录的机器时间、物料处理按实测净领料量分配；记录分子、分母和敏感性。 | |
| `allocation_recycling` | leather_offcuts | 单独记录边角料质量和实际去向；未明确下游系统及分配方法时不得假定回收抵扣。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `article_fabrication` | 合格制品 | 称重与验收记录 | 制品编号；配置；合格净质量；不合格质量 | 用经校准的秤称量不含运输包装的合格制品，并核对验收记录。 | kg | 每批 | 声明的生产期间 | 制品生产线 | 每 1 kg 参考流 | 校准记录；签字验收记录 |
| `cp_material` | `article_fabrication` | 各材料投入 | 领退料台账 | 材料 SKU；配方；领用质量；退回质量；批次 | 记录归属于本制品批次的净材料消耗，核验供应商规格和物料清单。 | kg | 每批 | 声明的生产期间 | 制品生产线 | 每 1 kg 参考流 | 供应商规格；领料台账 |
| `cp_energy` | `article_fabrication` | 外购交流电 | 电表记录 | 表号；kWh；期间；电压；制品批次 | 读取专用电表，或依据有记录的机器时间分摊共用电表电量；将 kWh 换算为 MJ。 | MJ | 每批 | 声明的生产期间 | 制品生产线 | 每 1 kg 参考流 | 电表读数；分配工作表 |
| `cp_waste` | `article_fabrication` | 牛皮革边角料 | 废物称重与转移记录 | 材料编号；边角料质量；去向；批次 | 分类收集并称量裁切边角料后转移至处理或回收。 | kg | 每批 | 声明的生产期间 | 制品生产线 | 每 1 kg 参考流 | 废物秤记录；转移单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有清单行 | 记录制品配置、皮革动物种类或成分、连接方法和实际供应产品；未解决的 UUID 不得用类别代理替代。 | 图纸；物料清单；供应商规格 |
| `dq_mass_balance` | 材料与产出行 | 按材料路线核对领用材料、合格产品、边角料及有记录的不合格品；解释无法说明的质量差。 | 领料台账；秤记录；不合格品记录 |
| `dq_period` | 所有清单行 | 分子和合格产出分母须使用同一场址、制品配置及声明生产期间。 | 批次与仪表时间戳 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_product | 要求一种制品配置、合格净产出质量和 1 kg 参考基准；不得以含包装毛质量作分母。 | |
| `validate_atomic_flows` | inventory | 对各投入、废物及产出分别建模；依照实际物料清单核验条件行。 | |
| `validate_uuids` | unresolved_flows | 未解决行不得宣称有天工数据库公开匹配；发布前须进行精确的 state-100 直读审查。 | |
| `validate_balance` | material_balance | 核对皮革及再生皮革领用量、合格制品、分类边角料及不合格品，并披露无法解释的差额。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景产品阶段的皮革制品制造数据集。 |
| downstream_use | 在投入品上游数据集关联且未解决身份经过审查后，可供 process 或 lifecyclemodel 使用。 |
| allowed_use | 一种声明清楚的制品配置、材料路线、场址及期间。 |
| excluded_use | 自动作为所有 CPC 29290 商品的通用因子、用于使用或报废阶段建模，以及未经审查的 UUID 替代。 |
| required_metadata | 制品功能、配置、皮革材料规格、质量基准、连接工艺、包装、场址和期间。 |
| required_quality_disclosure | 未解决流身份、缺失的来源支持范围、共用电表分配、不合格品和废物去向。 |
| update_trigger | 制品设计、皮革成分、连接技术、场址供电或包装规格改变。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | 联合国统计司，CPC 3.0 结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 分类身份及相邻类别排除，不提供生产因子。 |
| `ilo-isco68-1969` | `official_guidance` | 国际劳工局，《国际职业标准分类》（1968 年修订版），1969 年出版，第 193 页，https://webapps.ilo.org/ilostat-files/ISCO/newdocs-08-2021/Previous%20versions%20of%20ISCO/ISCO-68/ISCO-68%20EN%20Structure%20and%20defnitions.pdf | 仅支持裁切、缝制、紧固和装配工序；历史职业描述不是定量 LCA 证据。 |
