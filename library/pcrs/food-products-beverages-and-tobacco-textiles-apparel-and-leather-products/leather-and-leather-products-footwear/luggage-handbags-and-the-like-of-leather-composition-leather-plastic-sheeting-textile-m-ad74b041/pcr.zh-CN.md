---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.luggage-handbags-and-the-like-of-leather-composition-leather-plastic-sheeting-textile-m-ad74b041
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---


# 皮革、再生皮革、塑料片材、纺织材料、硬化纤维或纸板制行李箱、手提包及类似制品；个人梳洗、缝纫或鞋履及衣物清洁用旅行套装


## 1. 范围与适用性


本规则适用于出厂时已完成并验收的行李箱、手提包、类似携带或收纳用品，以及作为一个销售单元交付的个人梳洗、缝纫、鞋履或衣物清洁旅行套装。应分别申报产品子类、外层材料、内衬、结构件、尺寸或容量、闭合件、套装内物品、生产地点和参考年度。不同容量、用途或预期寿命的产品不得仅凭“每件”结果直接比较。皮革手提包是本规则的数据库参考实例；其他子类需要各自经核实的成品流身份。


纳入已购入材料与部件的上游数据、裁切、缝制、粘接、装配、检验及随产品出厂的包装；套装内销售的物品也纳入。零售、使用期清洁与维护、消费者运输和寿命终结不在本出厂边界内。若工厂自行制革、织造或成型，应作为另行申报的前景过程纳入，不得以本装配过程替代。


## 2. 产品类别识别


| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.luggage-handbags-and-the-like-of-leather-composition-leather-plastic-sheeting-textile-m-ad74b041 |
| classification_refs | CPC 3.0 29220 (`un-cpc-2025`) |
| covered_products | 成品行李箱、手提包、类似制品及指定旅行套装 |
| excluded_products | 单独出售的原料、包装货物用袋、鞍具及维修服务 |
| representative_product | 一件已验收的成品皮革手提包 |
| production_route | 采购材料与部件后裁切、缝制或粘接、装配与包装；按物料清单申报适用路线 |
| market_state | 已完成、合格、可销售且未使用的制品 |


## 3. 参考流


| 字段 | 值 |
| --- | --- |
| What | 提供已申报容量与用途的携带、收纳或旅行套装功能 |
| How much | 1 件已验收的成品 |
| How well | 申报容量、外形尺寸、材质、闭合方式、装载等级及套装清单；不得默认为等效 |
| How long or cycle | 申报预期使用年限或循环次数；出厂清单不包含使用阶段 |
| reference_flow_link | `finished_leather_bag` |


| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 皮包 `3a920bac-cab3-4a8c-8a9c-71875390afa8` |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 产品子类；外层与内衬材料；容量与尺寸；装载等级；套装内物品；包装；生产地点；参考年度；验收状态；预期使用年限 |


已核实的“皮包”UUID仅用于代表性皮革包数据集。其他子类不得借用该 UUID；必须先核实其自身成品流，并在数据包中记录。


## 4. 计量与单位规则


| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `accepted_item_basis` | `finished_leather_bag` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 每参考流为一件已验收、未使用且配置明确的成品；不得将废品计入件数。 |
| `mass_records` | 材料与废物记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将实际称重的净材料量按同一批次合格件数归一；保留称重凭证。 |
| `electricity_units` | `ac_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 若电表以 kWh 记录，按 1 kWh = 3.6 MJ 换算，并保留原始读数。 |


## 5. 系统边界


### 边界概化


| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的已完成材料与部件进入裁切及装配场址 |
| starting_condition_role | 前景装配起点；上游材料生产由独立数据集提供 |
| product_classification_scope | CPC 3.0 29220 的成品；每个数据集申报一个具体子类 |
| recursive_input_rule | 若购入同类成品并纳入套装，作为独立产品输入计量，不将其制造过程重复计入本场址 |
| upstream_dataset_requirement | 所有购入皮革、纺织品、塑料、纸板、金属件、胶黏剂、套装内容物及包装均须连接与其状态匹配的上游数据集 |
| disclosure | 披露任何场内制革、纺织、成型、返工、外包和运输排除项 |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all declared datasets | 计入至已验收成品及随件包装离开工厂；保留所购材料及套装内物品的上游数据。 | `un-cpc-2025` |
| `boundary_no_double_count` | same-category purchased inputs | 将购入同类成品作为一次独立输入；不得在本场址重复计算其上游制造。 | `ghg-product-2011` |


## 6. 过程清单结构


### 过程图


| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| bag_fabrication | 裁切、缝制、粘接、装配、检验及包装 | required | 所有已申报制品；各材料行仅在对应路线适用时纳入 | 前景制造 | 每一件已验收成品 |


### 过程：制品制造与包装（`bag_fabrication`）


按批次物料清单增加实际使用且不在以下代表性行中的各项具体输入与废物流；每项须保持一个原子交换，并保留其独立来源及数量。套装内物品必须逐项登记。


#### 输入
##### 产品流


###### 成品牛皮革片材（`bovine_leather`）

仅当使用成品牛皮革裁片的皮革或混合材料制品时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：成品牛皮革片材
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量成品牛皮革片材，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：使用成品牛皮革裁片的皮革或混合材料制品


###### 再生皮革片材（`composition_leather`）

仅当使用再生皮革裁片的制品时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：再生皮革片材
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量再生皮革片材，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：使用再生皮革裁片的制品


###### 机织聚酯纤维布（`polyester_fabric`）

仅当采用机织聚酯外层或里料的制品时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：机织聚酯纤维布
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量机织聚酯纤维布，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：采用机织聚酯外层或里料的制品


###### 聚氯乙烯片材（`pvc_sheet`）

仅当采用聚氯乙烯片材裁片的制品时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：聚氯乙烯片材
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量聚氯乙烯片材，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：采用聚氯乙烯片材裁片的制品


###### 硬化纤维板（`vulcanized_fibre`）

仅当采用硬化纤维板结构件的制品时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：硬化纤维板
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量硬化纤维板，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：采用硬化纤维板结构件的制品


###### 纸板片材（`paperboard_panel`）

仅当采用纸板结构件的制品时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：纸板片材
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量纸板片材，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：采用纸板结构件的制品


###### 聚酯缝纫线（`sewing_thread`）

仅当使用聚酯线缝制的制品时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量聚酯缝纫线，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：使用聚酯线缝制的制品


###### 金属齿拉链（`metal_zipper`）

仅当装配金属齿拉链的制品时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：金属齿拉链
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量金属齿拉链，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：装配金属齿拉链的制品


###### 水性聚氨酯胶黏剂（`pu_adhesive`）

仅当使用水性聚氨酯胶黏剂粘接的制品时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：水性聚氨酯胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量水性聚氨酯胶黏剂，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：使用水性聚氨酯胶黏剂粘接的制品


###### 交流电（`ac_electricity`）

仅当制造中购入并消耗交流电时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：依据关联的前景记录，按每参考流计量交流电，单位 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 纳入条件：制造中购入并消耗交流电


###### 瓦楞纸箱（`corrugated_box`）

仅当销售制品采用瓦楞纸箱包装时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量瓦楞纸箱，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 纳入条件：销售制品采用瓦楞纸箱包装


##### 废物流

无预期废物流输入。
##### 基本流

本装配过程不预设自然资源直接输入。


#### 输出
##### 产品流


###### 皮包（`finished_leather_bag`）

仅当作为代表产品的验收合格成品皮革手提包时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：皮包 `3a920bac-cab3-4a8c-8a9c-71875390afa8`
- 流属性/单位：Number of items / item
- 数量规则：1 件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished`
- 纳入条件：作为代表产品的验收合格成品皮革手提包


##### 废物流


###### 成品皮革裁切边角料（`leather_offcuts`）

仅当成品皮革裁切产生分类收集的边角料时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：成品皮革裁切边角料
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量成品皮革裁切边角料，单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 纳入条件：成品皮革裁切产生分类收集的边角料


###### 废聚氯乙烯（PVC）（`pvc_offcuts`）

仅当聚氯乙烯片材裁切产生分类收集的废聚氯乙烯时纳入这一项独立交换。依据实际物料清单和生产批次记录；不适用的路线应明确记录为不适用。

- 选定流：废聚氯乙烯（PVC） `cacd273c-d5c5-4f38-91c2-660d8a86498b`
- 流属性/单位：Mass / kg
- 数量规则：依据关联的前景记录，按每参考流计量废聚氯乙烯（PVC），单位 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 纳入条件：聚氯乙烯片材裁切产生分类收集的废聚氯乙烯


##### 基本流

若场址记录了直接排放，应按实际化学物种、排放介质和计量记录逐项补充，不得将其合并成“空气排放”。


## 7. 分配与共产品处理


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_subdivide` | shared cutting and assembly operations | 先按可追溯的生产批次、设备和表计拆分共同过程，直接归属材料及能耗。 | `ghg-product-2011` |
| `allocate_physical` | unavoidable shared inputs | 若无法拆分，应以已记录的物理因果关系分配，并披露分母、依据及残余；若物理关系不成立，再申报并论证其他方法。 | `ghg-product-2011` |
| `scrap_distinction` | offcuts and saleable coproducts | 区分有经济用途的副产品与待处置边角料；不得对同一废物重复计入废物处理与副产品收益。 | `ghg-product-2011` |


## 8. 前景数据采集、计算与质量规则


### 数据采集协议


| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | bag_fabrication | specific purchased material or component | 采购单、领料单及批次物料清单 | 物料身份；批次；净投入质量；退料；合格件数 | 以校准秤或可追溯的净质量单据记录；扣除退料，核对同批次物料清单。 | kg | each production lot | representative production year | manufacturing site and product subtype | 每参考流 | 称重记录；采购单；物料清单；验收记录 |
| `cp_electricity` | bag_fabrication | alternating-current electricity | 分表及总表记录 | 初末表读数；表计范围；批次；合格件数 | 优先用分表；对共用电量记录可验证的分摊依据。 | MJ | each production lot | representative production year | manufacturing site and product subtype | 每参考流 | 表计校准；账单；分摊记录 |
| `cp_waste` | bag_fabrication | specific segregated offcut waste | 分类称重及转移联单 | 废物材质；批次；净质量；去向；合格件数 | 分别称量皮革与聚氯乙烯边角料，记录回用、外售或处置去向。 | kg | each production lot | representative production year | manufacturing site and product subtype | 每参考流 | 称重记录；转移联单；去向凭证 |
| `cp_finished` | bag_fabrication | accepted finished article | 质量检验与入库记录 | 子类；配置；合格件数；不合格件数；容量；尺寸 | 按同一批次逐件核对验收及入库记录；不合格件不进入分母。 | item | each production lot | representative production year | manufacturing site and product subtype | 每参考流 | 验收单；入库单；规格单 |


### 计算规则


| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_per_item` | 所有清单行 | 每参考流数量 = 同批次可归属的净交换量 / 同批次已验收成品件数；不同子类与配置不得混算。 | lot quantity; accepted item count; cp_finished | amount per reference flow |  |
| `check_material_balance` | 材料与边角料行 | 核对同批次材料投入、成品中材料、分类边角料、返工或其他已识别去向；记录无法解释的差额。 | cp_materials; cp_waste; cp_finished | documented mass-balance residual | `ilo-isco68` |


### 数据质量要求


| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | each declared material and finished subtype | 逐项核对实际材料、成品状态、流类型、计量属性及单位；未核实 UUID 不得替代近似流。 | bill of materials; direct flow evidence |
| `dq_coverage` | each production lot | 记录各路线适用性、套装内容物、返工、外包以及所有直接排放；不得把缺项记为零。 | lot reconciliation; site log |
| `dq_time` | site data | 申报场址、年度和技术；记录覆盖时长及异常批次。 | meter logs; production records |


## 9. 校验规则


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_item_denominator` | reference and all inventory rows | 确认仅以同一子类及配置的验收合格件数归一；皮包 UUID 不得用于其他子类。 |  |
| `validate_material_routes` | all material and waste rows | 核查每项适用材料、部件、套装物品、包装及边角料都有单独流和批次记录，且不适用路线有依据。 | `ilo-isco68` |
| `validate_allocation` | shared operations | 检查直接归属和共同投入分配的一致性、完整性及残余披露。 | `ghg-product-2011` |


## 10. 发布数据集画像


| 字段 | 值 |
| --- | --- |
| dataset_role | 具体成品子类的前景生产数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与申报的子类、材料、功能、容量、场址和年度相符的生产阶段模型 |
| excluded_use | 不得将每件结果用于不同容量或寿命的直接比较；不得代表未核实的其他子类 |
| required_metadata | 产品子类；容量与尺寸；主要材料；套装内物品；配置；场址；年度；参考流；包装；生产批次 |
| required_quality_disclosure | 数据覆盖率；估算和缺口；分配方法；无 UUID 清单；质量守恒差额 |
| update_trigger | 主要材料、制造路线、套装内容物、场址或代表年度发生变化 |


## 11. 数据源


| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 分类产品身份与相邻类别 |
| `ilo-isco68` | official_guidance | International Labour Office, International Standard Classification of Occupations, revised edition 1968, p. 193 (PDF p. 199). https://webapps.ilo.org/ilostat-files/ISCO/newdocs-08-2021/Previous%20versions%20of%20ISCO/ISCO-68/ISCO-68%20EN%20Structure%20and%20defnitions.pdf | 皮革制品裁切、缝制与装配的定性分解 |
| `ghg-product-2011` | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard (2011), section 9.2, pp. 62–63. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 共同过程拆分及分配顺序；非数量范围依据 |
