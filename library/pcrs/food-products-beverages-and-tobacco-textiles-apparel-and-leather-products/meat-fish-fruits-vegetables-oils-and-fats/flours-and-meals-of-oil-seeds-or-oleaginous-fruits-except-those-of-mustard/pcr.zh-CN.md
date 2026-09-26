---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-and-meals-of-oil-seeds-or-oleaginous-fruits-except-those-of-mustard
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含油子仁或果实的细粉及粗粉（芥子粉除外）

## 1. 范围与适用性

本候选规则适用于已声明品种的非芥子油籽或含油果实经加工形成的干燥细粉或粗粉，边界止于生产厂门。已建立的代表性产品为黄豆粉，可由完整大豆去皮后加工，或由食用级脱脂大豆薄片加工。产品须以细粉或粗粉为目的制造并销售。以榨油固体残渣销售的油饼、芥子粉、分离蛋白、配合饲料及其他植物粉均不适用。CPC 3.0 将油饼残渣列于 21910，将本类细粉及粗粉列于 21920（`unsd-cpc-3-2025`）。爱荷华州立大学的完整生产报告区分了去皮大豆制成的全脂粉与脱脂白色薄片磨成的粉（`isu-soy-processing-2018`）。

各数据集须声明植物种类、细粉或粗粉、全脂或脱脂状态、热处理、粉碎规格及验收水分。下列六项具体清单行描述大豆代表路线。其他植物种类须先通过审查增补该种类的原子流身份和实测记录，方可使用本候选方法。不得由该报告的工艺描述推定固定得率或能耗基准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-and-meals-of-oil-seeds-or-oleaginous-fruits-except-those-of-mustard |
| classification_refs | CPC 3.0 21920（`unsd-cpc-3-2025`） |
| covered_products | 有意由非芥子油籽或含油果实磨制的干燥细粉及粗粉；已记录的代表品种为大豆。 |
| excluded_products | 芥子粉；以榨油残渣销售的油饼和固体残渣；蛋白浓缩物或分离物；混合饲料；其他植物粉。 |
| representative_product | 全脂或以食用级脱脂大豆薄片制得的黄豆粉。 |
| production_route | 整豆去皮并磨粉，或接收已制备的食用级脱脂薄片后磨粉；仅记录现场实际执行的调质和干燥（`isu-soy-processing-2018`）。 |
| market_state | 生产厂门处干燥、已具市场供应状态的散装细粉或粗粉，尚未进入后续使用或运输。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由已声明的非芥子油籽制得的干燥成品细粉或粗粉；前景代表产品为黄豆粉。 |
| How much | 1 kg 验收合格成品。 |
| How well | 对实际批次声明植物种类、脂肪状态、热处理状态、粉碎规格、水分及食品或饲料等级。 |
| How long or cycle | 一个生产批期，至厂门验收为止。 |
| reference_flow_link | `finished_soy_flour` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 黄豆粉 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物种类；细粉或粗粉；全脂或脱脂状态；热处理；粉碎规格；验收水分；产品等级；工厂及批期 |

由于经直读审查的候选流未能明确同时匹配所需的粉状产品状态与类别，参考产品 UUID 尚未解决。质量属性和单位组是候选流直读所得的公开状态码 100 身份信息，但并不据此认定参考产品流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_soy_flour` | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准的秤称量不含运输包装的验收成品净质量；以同一批期的成品质量作为全部交换量的分母。 |
| `energy_basis` | `purchased_electricity`、`purchased_steam_heat` | 能量 | MJ | 按 1 kWh = 3.6 MJ 将计量的 kWh 转为 MJ；不得将购入蒸汽热量与厂内燃料燃烧重复计入，也不得对同一热量重复计数。 |

## 5. 系统边界

从摇篮到厂门的报告包括购入大豆原料、电力和外购蒸汽热量的上游供给，以及场址内实际发生的去皮、调质、干燥和磨粉。所记录的前景边界起于进入工厂的完整大豆或已制备的脱脂薄片。若购入后者，其上游榨油负荷属于供应商数据集，不得未经核实再次分配到粉厂前景过程。包装、配送、使用和寿命终结不属于本散装产品边界。应披露实际工艺路线及全部排除阶段。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 全脂路线为进入工厂的完整大豆；脱脂路线为食用级脱脂大豆薄片；记录供应商、状态和来源。 |
| starting_condition_role | 作为前景制粉过程投入的购入产品。 |
| product_classification_scope | CPC 3.0 21920 的成品细粉或粗粉；另购入的原料保持其自身产品身份。 |
| recursive_input_rule | 若购入本类别成品粉再磨，应将其质量记为独立投入，关联非递归供应商数据集，并披露再磨比例。 |
| upstream_dataset_requirement | 供应数据集须覆盖已声明的来料状态和购入公用物料，且不得重复计入厂内作业。 |
| disclosure | 公布路线、起始原料、供应地理背景、工厂作业、分配和排除阶段。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_state` | 成品 | 仅纳入以非芥子油籽为原料、有意制成的细粉或粗粉；排除油饼残渣及芥子粉。 | `unsd-cpc-3-2025` |
| `boundary_route` | 来料和前景过程 | 声明整豆制粉或已制备脱脂薄片制粉路线；只纳入场址实际执行的作业，并将购入原料关联其上游数据集。 | `isu-soy-processing-2018` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `soy_flour_preparation` | 大豆细粉或粗粉制备 | required | 每个已记录的大豆代表性数据集均纳入；按各流卡的条件确定路线专属交换。 | 前景去皮（如在厂内实施）、调质、干燥和磨粉。 | 每 1 kg 验收大豆细粉或粗粉。 |

### 过程：大豆细粉或粗粉制备（`soy_flour_preparation`）

#### 输入

##### 产品流

###### 完整大豆投入（`whole_soybeans_input`）

仅在工厂由完整大豆制造全脂细粉或粗粉时记录。进料在厂内去皮或调质之前称量。

- 选定流：大豆（完整、非芥子油籽；UUID 尚未解决）
- 流属性/单位：质量 / kg
- 数量规则：同一批期称量的大豆来料质量除以验收成品粉质量；仅适用于整豆路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_mass`
- 来源：`isu-soy-processing-2018`

###### 脱脂大豆薄片投入（`defatted_soy_flakes_input`）

仅在脱脂粉路线记录购入的食用级脱脂大豆薄片。供应商产品不是成品粉，须关联其独立上游数据集。

- 选定流：脱脂大豆薄片（食用级中间品；UUID 尚未解决）
- 流属性/单位：质量 / kg
- 数量规则：同一批期称量的脱脂薄片来料质量除以验收成品粉质量；仅适用于脱脂薄片路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flake_mass`
- 来源：`isu-soy-processing-2018`

###### 购入电力（`purchased_electricity`）

记录所述调质、干燥和磨粉过程消耗的计量电力；排除另行计量的上游榨油用电。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：净热值 / MJ
- 数量规则：将可归属于该批期的购入电量由 kWh 转为 MJ，再除以验收成品粉质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：

###### 购入蒸汽热量（`purchased_steam_heat`）

仅在购入蒸汽供调质或干燥时记录其交付热量。若在厂内产热，须在经审查的扩展中以独立的燃料和排放流替换本交换。

- 选定流：蒸汽热（UUID 尚未解决）
- 流属性/单位：能量 / MJ
- 数量规则：计量交付的蒸汽热量除以验收成品粉质量；仅在外购蒸汽热量跨越工厂边界时适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_heat`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收大豆细粉或粗粉（`finished_soy_flour`）

仅记录厂门验收的干燥成品。本行为代表性参考产品，不声称已确认数据库流 UUID。

- 选定流：黄豆粉
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`isu-soy-processing-2018`

##### 废物流

###### 分离的大豆皮（`separated_soy_hulls`）

将厂内去皮产生的大豆皮作为独立外送固体流记录。声明其作为共产品销售或作为废物管理，不得改称油饼。

- 选定流：大豆皮（分离的固体；UUID 尚未解决）
- 流属性/单位：质量 / kg
- 数量规则：称量的外送大豆皮质量除以验收成品粉质量；仅在本工厂实施去皮时适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hull_mass`
- 来源：`isu-soy-processing-2018`

##### 基本流

## 7. 分配与共产品处理

若记录允许，优先按独立计量的去皮、热调质和磨粉作业细分。若有可销售的大豆皮离开过程，应报告其干质量与去向，并披露所选分配原则及使用的经济或物理关系。不得在此前景过程再次分配购入脱脂薄片的上游榨油负荷。没有前景共产品证据时，不规定固定经济或质量分配系数。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 前景作业 | 分配共享负荷前，优先按可独立计量或称量的作业细分。 |  |
| `allocation_hulls` | 可销售大豆皮 | 若大豆皮是可销售共产品，应披露分配方法及实测产品数量；若予以处置，则按废物处理并计入实际处理过程。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_mass` | `soy_flour_preparation` | `whole_soybeans_input` | 收料地磅及批次记录 | 批次号；来料净质量；水分；品种 | 用经校准的收料秤称重，扣除车辆和包装皮重。 | kg | 每批来料 | 与验收成品相同的生产批期 | 实际工厂 | 每 1 kg 参考流 | 秤校准及批次核对 |
| `cp_flake_mass` | `soy_flour_preparation` | `defatted_soy_flakes_input` | 收料秤及供应商记录 | 供应商；批次号；来料净质量；脂肪状态 | 用经校准的收料秤称重，并核对供应商规格。 | kg | 每批来料 | 与验收成品相同的生产批期 | 实际工厂 | 每 1 kg 参考流 | 秤校准及供应商规格 |
| `cp_electricity` | `soy_flour_preparation` | `purchased_electricity` | 电表读数或发票 | 电表号；起止 kWh；分摊比例 | 读取经校准的电表，或核对发票与所述过程。 | MJ | 每生产批期 | 与验收成品相同的批期 | 实际工厂 | 每 1 kg 参考流 | 电表校准或发票核对 |
| `cp_steam_heat` | `soy_flour_preparation` | `purchased_steam_heat` | 交付热量表 | 热量表号；交付热量 MJ；分摊比例 | 在工厂边界读取经校准的蒸汽热量表。 | MJ | 每个使用外购蒸汽的批期 | 与验收成品相同的批期 | 实际工厂 | 每 1 kg 参考流 | 热量表证书及热平衡 |
| `cp_product_mass` | `soy_flour_preparation` | `finished_soy_flour` | 验收成品秤及质量记录 | 批次号；验收净质量；水分；粉碎规格 | 用经校准的秤称量不含包装的验收成品。 | kg | 每批验收成品 | 与投入相同的生产批期 | 实际工厂 | 每 1 kg 参考流 | 秤校准及验收记录 |
| `cp_hull_mass` | `soy_flour_preparation` | `separated_soy_hulls` | 外送秤及去向记录 | 大豆皮质量；去向；销售或废物状态 | 外送或处理前称量分离的大豆皮。 | kg | 每次去皮外送 | 与验收成品相同的批期 | 实际工厂 | 每 1 kg 参考流 | 秤校准及外送记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_campaign` | 全部清单行 | 使用同一已核对批期及同一验收成品分母；披露缺失的计量表或批次覆盖。 | 批次台账、电表读数及秤记录 |
| `dq_route` | 成品及投入行 | 将声明的整豆或脱脂薄片路线与购入物料状态相匹配，并保留供应商证据。 | 供应商规格及工艺日志 |
| `dq_mass` | 质量相关行 | 核对来料、验收成品、大豆皮及已记录的水分或其他损失；调查无法解释的差额。 | 称量记录及质量平衡表 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 若数据集未注明植物种类、细粉或粗粉及脂肪状态，或将油饼、芥子材料作为参考产品，则予以拒绝。 | `unsd-cpc-3-2025` |
| `validate_denominator` | 全部清单行 | 确认每项交换均按同一验收成品 kg 归一化，且参考产品输出为 1 kg。 |  |
| `validate_route` | 完整大豆和脱脂薄片 | 要求声明路线及相应购入物料状态；不得将同一上游榨油过程计算两次。 | `isu-soy-processing-2018` |
| `validate_evidence` | 未解决的流及范围身份 | 在发布前将未确认的天工流 UUID 和缺乏独立证据的经验范围标记为待审查事项。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 干燥油籽细粉或粗粉生产的前景产品数据集。 |
| downstream_use | 前景数据包的 process 和 lifecyclemodel 投影。 |
| allowed_use | 已限定的大豆粉路线，使用实测批期投入、产出和流身份。 |
| excluded_use | 作为芥子粉、油饼残渣、未经审查扩展的其他种类或未计量公用物料需求的替代数据。 |
| required_metadata | 植物种类、来料状态、路线、脂肪状态、热处理、粉碎规格、水分、产品等级、地理区域、年份和共产品处理。 |
| required_quality_disclosure | 电表和秤的覆盖、缺失流身份、未计量损失、范围证据缺口及分配决定。 |
| update_trigger | 来料、粉碎或加热技术、供应商物料状态、产品等级或已核实流身份发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | 联合国统计司，CPC 3.0 结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品身份及相邻油饼类别的区分。 |
| `isu-soy-processing-2018` | literature | Stanford 和 Keener，爱荷华州立大学，《锡达拉皮兹食品与生物加工制造报告》，2018 年，第 38 和 40 页，https://www.cals.iastate.edu/files/inline-files/2018-ISU-Report.pdf | 全脂和脱脂大豆粉路线，以及粉、粕与豆皮产品的区分；未据此推定经验清单范围。 |
