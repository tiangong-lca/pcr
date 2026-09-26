---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.gloves-shawls-scarves-veils-ties-cravats-and-other-made-up-clothing-accessories-knitted-9984ae4f
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 针织或钩编的手套、披肩、围巾、面纱、领带、领结及其他制成服装附件；针织或钩编的服装或服装附件零件

## 1. 范围与适用性

本规则适用于以针织或钩编结构为主体的制成手套、披肩、围巾、面纱、领带、领结、其他服装附件，以及作为独立产品交付的针织或钩编服装、附件零件。核算到工厂门口验收合格的产品；每份数据包必须声明具体品种、纤维组成、针织工艺、外购或场内针织路线、整理、缝制及包装方式。非针织、钩编产品和完整服装适用各自规则。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.gloves-shawls-scarves-veils-ties-cravats-and-other-made-up-clothing-accessories-knitted-9984ae4f |
| classification_refs | CPC 3.0: 28229 (`un-cpc-3-2025`) |
| covered_products | 针织或钩编的制成服装附件；独立销售的针织或钩编服装与附件零件 |
| excluded_products | 完整针织服装；婴儿专用服装附件；头饰；非针织纺织附件；皮革、橡胶或塑料附件；作为其他产品内部工序的零件 |
| representative_product | 针织棉围巾或针织棉零件；仅作前景行的代表性材料路线 |
| production_route | 场内由纱针织，或外购针织面料后裁剪与连接；按实际路线纳入工序 |
| market_state | 工厂门口验收合格的制成附件或独立零件，净产品质量 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供一件所声明种类的制成针织或钩编附件或独立零件 |
| How much | 1 kg 验收合格产品净质量 |
| How well | 符合所声明的纤维、尺寸、功能和验收规范 |
| How long or cycle | 工厂门口一次交付；使用寿命由具体产品声明，非本生产参考量 |
| reference_flow_link | finished_accessory_output |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 工厂门口验收合格的针织或钩编服装附件或服装零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 具体产品；纤维组成；是否独立零件；针织或钩编工艺；产品净质量；验收标准；生产路线；工厂及报告期 |

数据包必须逐项声明必需限定信息，缺失时参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_mass_basis` | 参考产品与所有清单行 | Mass | kg | 每 1 kg 参考流按合格制成品净质量归一化；称重时排除运输包装并把废品与合格品分开。 |
| `electricity_conversion` | knitting_electricity_input, assembly_electricity_input | Energy | MJ | 若电表为 kWh，乘以精确单位换算 3.6 MJ/kWh；不得把输配服务或燃料热值当作购电量。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 交付给本前景系统的纱线或已针织面料；逐批声明组成和上游数据 |
| starting_condition_role | 由前景实测的投入起点；上游纤维、纺纱与染整通过匹配的背景数据连接 |
| product_classification_scope | CPC 3.0 28229 制成附件或独立零件；不以相邻叶类替代 |
| recursive_input_rule | 同类别外购半成品作为单独投入并披露其上游边界；避免在本工厂重复计量同一针织工序 |
| upstream_dataset_requirement | 纱线、面料、电力、缝纫线和包装材料按具体组成、地区、技术与交付状态选取上游数据 |
| disclosure | 披露纳入和省略的路线、投入物、损失、外包工序、处置去向以及从投入到工厂门口的覆盖 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | 所有前景过程 | 纳入实际的场内针织或外购面料路线、连接和出厂过程，并记录未纳入工序。 | boras-knit-on-demand; ilo-garment-carbon-wp53 |
| `boundary_upstream` | 全部外购产品投入 | 连接与组成和地区匹配的上游数据，不得重复计量同一过程。 | ilo-garment-carbon-wp53 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `knitting` | 场内针织 | `conditional` | 仅当产品在场内由纱线针织成形 | 前景成形 | 每 1 kg 参考流 |
| `assembly` | 裁剪与连接 | `required` | 所有附件或独立零件均记录实际连接；整件成形时记录零裁剪并说明 | 前景制成 | 每 1 kg 参考流 |
| `release` | 验收与出厂 | `required` | 所有合格制成品 | 参考产出 | 每 1 kg 参考流 |

下列棉路线是具体前景交换。其他纤维、染整或辅料必须按真实材料和工序增加各自原子流并核查 UUID；不得用棉流代表它们。所有跨工序中间流同时计入产出与投入，汇总时抵消。

### 过程：场内针织（`knitting`）

#### 输入

##### 产品流

###### 未上浆棉针织纱 (`cotton_knitting_yarn_input`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：未上浆棉针织纱
- 流属性/单位：Mass / kg
- 数量规则：仅在棉纱一体化针织路线中纳入; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`boras-knit-on-demand`

###### 针织工序购入的交流电 (`knitting_electricity_input`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：针织工序购入的交流电
- 流属性/单位：Mass / MJ
- 数量规则：仅在场内针织时纳入；按电表计量并以 3.6 MJ/kWh 换算; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：`boras-knit-on-demand`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 场内生产的未整理针织棉片 (`knitted_cotton_panel_output`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：场内生产的未整理针织棉片
- 流属性/单位：Mass / kg
- 数量规则：仅在一体化针织时纳入；称量转入组装的质量; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_transfer`
- 来源：`boras-knit-on-demand`

##### 废物流

##### 基本流

### 过程：裁剪与连接（`assembly`）

#### 输入

##### 产品流

###### 从针织工序转入的未整理针织棉片 (`knitted_cotton_panel_input`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：从针织工序转入的未整理针织棉片
- 流属性/单位：Mass / kg
- 数量规则：仅在一体化针织时纳入；与对应产出相等; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_transfer`
- 来源：`ilo-garment-carbon-wp53`

###### 购入的未涂层针织棉面料 (`purchased_knitted_cotton_fabric_input`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：购入的未涂层针织棉面料
- 流属性/单位：Mass / kg
- 数量规则：仅在外购针织棉面料路线中纳入; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`ilo-garment-carbon-wp53`

###### 聚酯缝纫线 (`polyester_sewing_thread_input`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：仅在采用聚酯线缝制时纳入; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：`ilo-garment-carbon-wp53`

###### 组装工序购入的交流电 (`assembly_electricity_input`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：组装工序购入的交流电
- 流属性/单位：Mass / MJ
- 数量规则：按电表计量并以 3.6 MJ/kWh 换算; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：`ilo-garment-carbon-wp53`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的未包装针织服装附件或服装零件 (`assembled_accessory_output`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：验收合格的未包装针织服装附件或服装零件
- 流属性/单位：Mass / kg
- 数量规则：称量转入出厂工序的合格产品净质量; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_transfer`
- 来源：`ilo-garment-carbon-wp53`

##### 废物流

###### 洁净针织棉裁剪边角料 (`cotton_knit_offcuts_output`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：洁净针织棉裁剪边角料
- 流属性/单位：Mass / kg
- 数量规则：仅在裁剪针织棉面料时纳入；记录实际回收或处置路线; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`ilo-garment-carbon-wp53`

##### 基本流

### 过程：验收与出厂（`release`）

#### 输入

##### 产品流

###### 转入出厂工序的验收合格未包装针织服装附件或服装零件 (`assembled_accessory_input`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：转入出厂工序的验收合格未包装针织服装附件或服装零件
- 流属性/单位：Mass / kg
- 数量规则：与对应组装产出相等; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_transfer`
- 来源：`ilo-garment-carbon-wp53`

###### 低密度聚乙烯包装薄膜 (`ldpe_film_input`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：低密度聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：仅在销售产品实际使用低密度聚乙烯薄膜时纳入; 按每 1 kg 参考流的真实记录计量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging`
- 来源：`ilo-garment-carbon-wp53`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口验收合格的针织或钩编服装附件或服装零件 (`finished_accessory_output`)

仅在所述条件下记录该项跨过程边界的实际交换；其他路线填写不适用并给出依据。

- 选定流：工厂门口验收合格的针织或钩编服装附件或服装零件
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_reference`
- 来源：`ilo-garment-carbon-wp53`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_balance` | 所有过程 | 按干质量或净质量核对投入、合格产出、边角料、废品及库存变化；报告差额，不虚构清单流。 | ilo-garment-carbon-wp53 |
| `allocation_shared` | 共用电表与产线 | 共用电力及材料损耗按有记录的机时或实测产出质量分摊；披露分配因子、期间与敏感性。 | ilo-garment-carbon-wp53 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | `assembly, knitting` | 纱线、面料和缝纫线 | 称重和领料记录 | 批号；材料组成；投入净质量；退料 | 称重并用领料台账核对 | kg | 每批和每报告期 | 同一代表性生产期 | 实际厂区与产线 | 每 1 kg 参考流 | 校准记录、批次台账与物料平衡 |
| `cp_energy` | `assembly, knitting` | 购入电力 | 电表读数 | 电表；起止读数；机台或工序；产量 | 扣除非生产用电；将 kWh 换算为 MJ | MJ | 每批和每报告期 | 同一代表性生产期 | 实际厂区与产线 | 每 1 kg 参考流 | 校准记录、批次台账与物料平衡 |
| `cp_transfer` | `knitting, assembly, release` | 中间产品 | 转移称重记录 | 批号；来源；去向；净质量 | 称量并核对配对的投入与产出 | kg | 每批和每报告期 | 同一代表性生产期 | 实际厂区与产线 | 每 1 kg 参考流 | 校准记录、批次台账与物料平衡 |
| `cp_waste` | `assembly` | 棉边角料 | 分类称重记录 | 批号；纤维；净质量；处理去向 | 单独称量并核对交接凭证 | kg | 每批和每报告期 | 同一代表性生产期 | 实际厂区与产线 | 每 1 kg 参考流 | 校准记录、批次台账与物料平衡 |
| `cp_packaging` | `release` | 聚乙烯薄膜 | 包装领用记录 | 薄膜牌号；净耗量；退料 | 按实际附着产品的薄膜净量计 | kg | 每批和每报告期 | 同一代表性生产期 | 实际厂区与产线 | 每 1 kg 参考流 | 校准记录、批次台账与物料平衡 |
| `cp_reference` | `release` | 验收合格产品 | 验收与称重记录 | 产品类型；组成；合格净质量；包装质量 | 经校准秤称量合格产品；剔除包装 | kg | 每批和每报告期 | 同一代表性生产期 | 实际厂区与产线 | 每 1 kg 参考流 | 校准记录、批次台账与物料平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference` | all inventory rows | q_ref = 记录期归属该产品的交换量 / 同期合格产品净质量（kg）；按每 1 kg 参考流报告。 | exchange records; `cp_reference` | q_ref | `ilo-garment-carbon-wp53` |
| `paired_transfer` | knitted_cotton_panel_output, knitted_cotton_panel_input, assembled_accessory_output, assembled_accessory_input | 同一批次中间品的出入量相等；内部转移不作为额外外购投入。 | `cp_transfer` | reconciled transfer mass | `boras-knit-on-demand` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product rows | 记录实际材料、纤维比例、针织状态和供货地；未匹配的 UUID 不得作为已确认数据库流。 | 批次规格与采购凭证 |
| `dq_coverage` | all processes | 覆盖同一生产期间；披露外包、未计量和不适用的工序。 | 生产台账与工序图 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_accessory_output | 要求合格净质量为正，产品限定信息完整，归一化产出为 1 kg。 | un-cpc-3-2025 |
| `validate_routes` | all inventory rows | 检查路线条件、内部转移配对、净产品质量不含包装，以及场址实测量。 | boras-knit-on-demand; ilo-garment-carbon-wp53 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 前景产品生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同产品品种、纤维组成、工艺路线及工厂门口边界的建模 |
| excluded_use | 无产品限定信息的所有针织附件通用平均值；使用期或报废阶段模型 |
| required_metadata | 产品、纤维、路线、厂区、地区、时期、生产量、包装、外包、废物流去向 |
| required_quality_disclosure | 未确认 UUID、未覆盖的材料或工序、分配、质量平衡差额与缺少的范围证据 |
| update_trigger | 产品结构、纤维、工艺、供应链或计量记录发生实质变化 |

## 11. 数据源

| source_id | title | type | reference | use |
| --- | --- | --- | --- | --- |
| `un-cpc-3-2025` | CPC Version 3.0 Structure, 30 June 2025 | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品分类边界 |
| `boras-knit-on-demand` | Knit on Demand - mass customisation of knitted fashion products | `literature` | https://www.diva-portal.org/smash/get/diva2%3A870798/FULLTEXT01.pdf | 平针针织、围巾、裁剪缝制和成形针织的定性工艺区别；第 4 节及图 3—4；不采用文中的裁剪损耗百分比 |
| `ilo-garment-carbon-wp53` | Taking climate action: Measuring carbon emissions in the garment sector in Asia, ILO Working Paper 53 | `literature` | https://webapps.ilo.org/static/english/intserv/working-papers/wp053/index.html | 服装生产工厂门口边界及裁剪、缝制、包装过程 |
