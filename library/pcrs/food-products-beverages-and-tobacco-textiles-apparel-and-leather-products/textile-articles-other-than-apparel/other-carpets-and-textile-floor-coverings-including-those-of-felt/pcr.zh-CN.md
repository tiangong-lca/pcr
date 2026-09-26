---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.other-carpets-and-textile-floor-coverings-including-those-of-felt
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他地毯和纺织材料铺地制品（包括毡制品）

## 1. 范围与适用性

本规则适用于剩余类别中的纺织材料铺地成品，以涤纶短纤维制针刺毡铺地制品为代表。必须声明实际纤维、结合方式及背衬配置。经核验的 CPC 标题将打结、机织和簇绒铺地制品列为其他类别；这些产品不适用。作为未制成铺地成品的毡材料、纯塑料铺地制品以及铺装、使用和报废阶段不属于本出厂门产品规则。针刺毡工艺及有条件的背衬工艺依据 `ec-jrc-textiles-bref-2023`；分类边界依据 `unsd-cpc3-2025`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.other-carpets-and-textile-floor-coverings-including-those-of-felt |
| classification_refs | CPC 3.0 27290，其他地毯和纺织材料铺地成品（包括毡制品）；`unsd-cpc3-2025` |
| covered_products | 针刺毡纺织材料铺地成品；其他剩余类铺地成品仅在单独声明其生产路线时纳入。 |
| excluded_products | 打结类 CPC 27210、机织类 CPC 27220、簇绒类 CPC 27230 铺地制品；未加工成品的毡；纯塑料铺地制品；铺装及使用。 |
| representative_product | 经检验接收、裁切至销售规格的涤纶针刺毡铺地制品。 |
| production_route | 外购涤纶短纤维；铺网及针刺；有条件的粘结剂或纺织背衬；裁切和检验。 |
| market_state | 出厂门处干燥、完工并验收的铺地制品，不含运输包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可行走纺织表面的成品铺地制品。 |
| How much | 1 kg 验收合格的成品。 |
| How well | 声明纤维成分、背衬、涂层、尺寸及验收规范。 |
| How long or cycle | 出厂门处一个验收生产批次；不假定使用寿命。 |
| reference_flow_link | `finished_covering` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 涤纶针刺毡纺织材料铺地成品；天工 UUID 尚未解决。 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纤维成分；针刺结构；背衬和粘结剂状态；干燥或调湿质量状态；批次和场址；裁切尺寸或卷材形态；声明的系统门槛。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_covering` | 质量 | kg | 使用 `cp_finished_mass` 称量不含运输包装的验收干燥铺地成品；所有适用前景交换均以同批次的验收成品质量归一化。 |
| `electricity_energy` | `needle_electricity` | 低位热值 | MJ | 保持选定天工流的能量属性。用 1 kWh = 3.6 MJ 将电表读数换算为 MJ，并保留原始读数及换算记录。 |
| `binder_wet_mass` | `sb_latex_binder` | 质量 | kg | 记录外购水性分散液的湿质量，并另行披露实测或供应商声明的固含量；不得用干聚合物质量代替湿投入质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购涤纶短纤维及适用的外购粘结剂或背衬进入已声明的工厂作业。 |
| starting_condition_role | 铺网、针刺、适用的粘结或背衬、裁切及检验的前景门槛。 |
| product_classification_scope | 剩余类纺织材料铺地成品；区分 CPC 27290 与 CPC 27210、27220、27230。 |
| recursive_input_rule | 如外购同类成品铺地制品作为投入，单独披露其质量和供应商数据集；不得将其重新归类为原生纤维。 |
| upstream_dataset_requirement | 为外购纤维、粘结剂、背衬和电力链接上游数据集；单独报告上游地理及技术信息。 |
| disclosure | 声明纳入作业、场址、批次日期、纤维成分、背衬与粘结剂状态、产品净质量和遗漏阶段。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | all processes | 从铺网、针刺、适用的粘结或背衬直至裁切后的验收干燥出厂门产品均应纳入；披露遗漏作业。 | `ec-jrc-textiles-bref-2023` |
| `boundary_category` | reference product | 从本剩余类产品身份中排除打结、机织和簇绒铺地成品。 | `unsd-cpc3-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `needle_form` | 铺网和针刺 | required | 每个所表示的针刺毡批次。 | 纺织材料成形前景过程。 | 每 1 kg 验收铺地成品 |
| `back_finish` | 粘结剂和纺织背衬 | conditional | 仅在实际施加水性丁苯粘结剂或涤纶非织造背衬时纳入；分别记录交换。 | 前景加固过程。 | 每 1 kg 验收铺地成品 |
| `cut_accept` | 裁切和验收 | required | 每个所表示的批次。 | 前景整理及参考产品输出。 | 每 1 kg 验收铺地成品 |

这些作业之间的内部毡坯转移不另计为外购投入或最终产出。其他纤维、粘结剂、背衬或废物成分在数据集声称覆盖前，需要独立的原子流行及身份审查。

### 过程：铺网和针刺（`needle_form`）

#### 输入

##### 产品流

###### 涤纶短纤维投入（`polyester_fibre`）

纳入送往铺网和针刺线的外购未梳理涤纶短纤维；记录供应状态及批次质量。

- 选定流：涤纶短纤维 `03377e13-45a0-4774-9cc8-37c8c60523f2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采集本批次净领用纤维质量，除以验收成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre`
- 来源：`ec-jrc-textiles-bref-2023`

###### 针刺线外购电力（`needle_electricity`）

纳入交付给铺网及针刺作业的电力；以元数据保留场址实测供电组合。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采集归属本批次的电表 kWh，乘以 3.6 MJ/kWh，再除以验收成品质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：粘结剂和纺织背衬（`back_finish`）

#### 输入

##### 产品流

###### 水性丁苯胶乳粘结剂（`sb_latex_binder`）

仅在声明路线实际施加此特定化学组成的湿粘结剂时纳入；不得从笼统的涂层名称推断。

- 选定流：水性丁苯胶乳分散液；天工 UUID 尚未解决。
- 流属性/单位：质量 / kg 湿分散液
- 数量规则：采集本批次领用的湿分散液称重质量，除以验收成品质量，并单独报告固含量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_binder`
- 来源：`ec-jrc-textiles-bref-2023`

###### 涤纶非织造纺织背衬（`polyester_backing`）

仅在针刺毡铺地制品实际附着此特定背衬时纳入。

- 选定流：涤纶非织造纺织背衬；天工 UUID 尚未解决。
- 流属性/单位：质量 / kg
- 数量规则：采集本批次领用的背衬称重质量，除以验收成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：裁切和验收（`cut_accept`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的针刺毡铺地成品（`finished_covering`）

仅记录离开声明出厂门的验收干燥铺地成品。

- 选定流：涤纶针刺毡纺织材料铺地成品；天工 UUID 尚未解决。
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_mass`
- 来源：`unsd-cpc3-2025`

##### 废物流

###### 单独收集的清洁 PET 裁切边料（`clean_pet_trim`）

仅纳入清洁、未涂覆、单一涤纶材料的裁切边料；混合或带粘结剂的边料需要另行审核废物流身份。

- 选定流：废弃聚对苯二甲酸乙二醇酯 `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采集本批次清洁 PET 边料的称重质量，除以验收成品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trim`
- 来源：`ec-jrc-textiles-bref-2023`

##### 基本流

## 7. 分配与副产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_meter` | shared utilities | 优先采用针刺毡生产线单独计量的电力；使用共用电表时披露物理分配依据及生产记录。 | `ec-jrc-textiles-bref-2023` |
| `allocation_review` | co-products | 单独记录任何可销售副产品。若其分摊投入不可分割且没有可证实的物理分配依据，应将该批次提交方法审查，不得虚构固定分配比例。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_finished_mass` | `cut_accept` | `finished_covering` | 校准秤与验收日志 | 批次编号；纤维和背衬配置；验收干燥净质量；拒收质量 | 调湿后用经校准的秤称量验收铺地成品；排除运输包装，并核对验收卷材或片材。 | kg | 每批次 | 生产期间 | 声明工厂 | 每批次验收干燥净质量；所有清单行均除以该质量 | 校准证书；验收日志 |
| `cp_fibre` | `needle_form` | `polyester_fibre` | 领用与退回记录 | 批次编号；纤维领用质量；未用纤维退回质量 | 核对同批次供应商交付、领用及退回称重记录。 | kg | 每批次 | 生产期间 | 声明工厂 | 每 1 kg 参考流 | 称重单；库存核对 |
| `cp_electricity` | `needle_form` | `needle_electricity` | 电表日志 | 电表编号；起止 kWh；生产线分配依据；批次编号 | 在对应批次时间内读取经校准电表，或使用有记录的共用电表分配。 | kWh | 每批次 | 生产期间 | 声明工厂 | 每 1 kg 参考流 | 电表日志；分配工作表 |
| `cp_binder` | `back_finish` | `sb_latex_binder` | 批次领用记录 | 批次编号；湿粘结剂质量；固含量；退回质量 | 称量净领用水性分散液；从批次检测或供应商规范取得固含量。 | kg | 每个加背衬批次 | 生产期间 | 声明工厂 | 每 1 kg 参考流 | 批次单；供应商或检测记录 |
| `cp_backing` | `back_finish` | `polyester_backing` | 背衬领用记录 | 批次编号；背衬领用质量；退回质量 | 称量本批次净领用涤纶非织造背衬。 | kg | 每个加背衬批次 | 生产期间 | 声明工厂 | 每 1 kg 参考流 | 称重单；批次单 |
| `cp_trim` | `cut_accept` | `clean_pet_trim` | 分类边料日志 | 批次编号；清洁 PET 边料质量；污染检查 | 将清洁单一 PET 边料与涂覆或混合边料分开称重。 | kg | 每批次 | 生产期间 | 声明工厂 | 每 1 kg 参考流 | 废物称重单；分类记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | 对每项适用交换，以同一配置和报告期间的验收干燥成品净质量除本批次数量；保留未舍入的分子和分母。 | 批次交换量；验收干燥净质量；`cp_finished_mass` | 每 1 kg 参考流的交换量 |  |
| `electricity_energy` | `needle_electricity` | MJ = 电表 kWh × 3.6；然后对换算后的批次能量应用 `normalize_lot`。 | 归属 kWh；`cp_electricity`；验收干燥净质量 | 每 1 kg 参考流的 MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | all rows | 场址、批次、报告日期及实际路线应与验收参考产品一致。 | 批次追溯与过程日志 |
| `dq_mass` | fibre, backing, binder, trim and product | 核对投入、验收产出及拒收品；解释水分变化、残留物及未表示的物流。 | 质量核算与秤校准 |
| `dq_identity` | UUID-bearing rows | 将选定流身份与实际产品或废物状态核对；保存供应商成分和电力地理信息。 | 供应商规范；流身份直读记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `finished_covering` | 所有归一化清单行必须使用同一场址、批次及配置的一项 kg 验收干燥净质量分母。 |  |
| `validate_route` | `back_finish` | 仅在对应实物交换发生时纳入粘结剂及背衬行；报告每项有条件状态。 | `ec-jrc-textiles-bref-2023` |
| `validate_waste` | `clean_pet_trim` | 仅对单独收集的清洁单一 PET 使用该废物流身份；否则本行不适用，另行审核原子废物流。 |  |
| `validate_identity` | `finished_covering`, `sb_latex_binder`, `polyester_backing` | 选定流 UUID 未解决时不得发布数据集；对每项适用行进行公开身份直读审查。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 出厂门生产的前景数据包，可在审查后形成次级或背景数据集。 |
| downstream_use | 用于已声明针刺毡铺地制品配置的过程和生命周期模型构建。 |
| allowed_use | 仅用于纤维、背衬、粘结剂、地理范围及出厂门匹配的铺地成品。 |
| excluded_use | 不适用于打结、机织、簇绒、未制成品的毡、纯塑料铺地制品、铺装、使用或处置。 |
| required_metadata | 产品配置；场址和时间；干燥质量协议；材料成分；背衬与粘结剂状态；电力地理范围及分配依据。 |
| required_quality_disclosure | UUID 缺口、材料和能量记录、质量平衡、有条件清单行、遗漏过程及不确定性。 |
| update_trigger | 新产品路线、粘结剂或背衬成分、流身份、工厂技术或材料前景证据变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | 联合国统计司，CPC 第 3.0 版解释性说明，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 剩余类别身份及相邻地毯类别排除。 |
| `ec-jrc-textiles-bref-2023` | official_guidance | 欧盟委员会联合研究中心，《纺织工业最佳可行技术参考文件》，2023 年，第 2.5.3.2 和 2.10.2 节，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 针刺毡工艺及有条件的纺织背衬；不转用数值。 |
