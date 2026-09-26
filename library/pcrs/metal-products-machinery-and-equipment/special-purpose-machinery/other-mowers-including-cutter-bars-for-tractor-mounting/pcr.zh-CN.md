---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-mowers-including-cutter-bars-for-tractor-mounting
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他割草机，包括用于拖拉机安装的刀杆

## 1. 范围与适用性

本 PCR 适用于制造完整割草机械（草坪、公园或运动场用割草机除外）以及用于拖拉机安装的完整刀杆总成的门到门前景数据包。它支持按具体型号编制圆盘式、往复式刀杆、甩刀式、旋转式及类似农业或牧草割草机的生产数据。本规则不涵盖使用阶段、维护或报废阶段。

数据集应代表一个明确型号和一个制造场址，或有明确说明的一组场址。仅当该型号和场址实际采用某工艺路线时，才记录相应条件性交换。非报告工厂制造的外购部件仍作为可见产品投入并链接上游数据集，不得以“割草机材料”等笼统交换替代。

最低配置覆盖以所引手册记载的 Land Pride DM3600/DM3700 类拖拉机悬挂式圆盘割草机作为完整割草机代表路线。BOM 交叉表应将机架与悬挂架、液压缸、带传动总成、切割器总成、齿轮箱、PTO 传动轴、防护装置/帘和安装紧固件逐项解析为外购总成，或解析为场内制造部件及其原子材料和工序。这是一项配置核对清单，并不表示所有 CPC 44123 产品都使用这些总成，也不表示这些总成都由下述扁平钢材制造。独立销售的完整割刀采用割刀产品输出边界；只有当外购完整割刀被装入另一完整割草机配置时，才可作为投入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-mowers-including-cutter-bars-for-tractor-mounting` |
| classification_refs | CPC 3.0 `44123`（精确） |
| covered_products | 草坪、公园或运动场用割草机以外的完整农业或牧草割草机；用于拖拉机安装的完整刀杆总成；圆盘式、往复式刀杆、甩刀式、旋转式及类似割草配置。 |
| excluded_products | 草坪、公园或运动场用割草机（CPC 44121）；联合收割脱粒机；不执行割草功能的搂草机、摊晒机及其他干草制作机械；打捆机；其他收获机械；不构成完整割草机或刀杆总成的零散备件。 |
| representative_product | 制造商门口已完成、配备防护装置并通过功能测试的割草机或拖拉机安装式完整刀杆总成。 |
| production_route | 按型号接收材料和部件，经已明确自制/外购边界的切割/成形/机加工、焊接或紧固、可选干式过滤粉末涂装与固化、装配、初次加注、功能测试和包装。 |
| market_state | 按型号识别、在制造商门口交付的完整新设备或完整新刀杆总成。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 本类别内的完整新割草机，或用于拖拉机安装的完整新刀杆总成。 |
| How much | 制造商门口 1 kg 产品净质量。 |
| How well | 符合声明型号，并包含销售产品所含防护装置、传动件、安装五金及初次加注润滑油。 |
| How long or cycle | 一次制造输出；使用寿命不属于参考数量。 |
| reference_flow_link | `other_mower_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他割草机，包括用于拖拉机安装的刀杆 `21019316-3de7-4b72-b23f-74fdaee3b361` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号和配置；完整割草机或完整刀杆总成；切割技术；安装接口；作业宽度；驱动、PTO 或液压配置；产品净质量边界；所含防护装置、附件、配件及初次加注物；涂装体系；包装状态；制造场址和报告期 |

每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息会使参考流定义不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及质量计量的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过校准称量确定产品净质量，或采用经称量核对的受控型号 BOM。产品净质量不含运输包装，但包含初次加注润滑油和随产品销售的附装设备。 |
| `energy_quantity` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 对电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae` 的 state-100 直接读取显示，其 Net calorific value 使用该能量属性 UUID 和能量单位组。必须按 1 kWh = 3.6 MJ 换算计量电力，保留原始 kWh 读数和换算工作表，且不得与燃料合并。 |
| `gas_volume` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明气体体积的温度和压力参考条件；没有成分、密度和参考条件记录时不得从质量换算。 |
| `normalization` | 全部清单行 | 各行对应属性 | 各行参考单位 | 每项交换均按 1 kg 产品净质量报告，并保留绝对分子和合格可售产品输出分母。 |

## 5. 系统边界

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `foreground_gate_to_gate` | 声明制造场址 | 纳入场址直接控制的接收与内部搬运、切割、成形、机加工、焊接或紧固、适用路线的表面处理和涂装、装配、初次加注、功能测试、包装，以及直至制造商门口的场内废物或排放管理。 | `un-cpc-3-0-structure-2025`; `land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006`; `us-epa-metal-parts-surface-coating-tsd-2001` |
| `purchased_input_linking` | 外购材料、部件、能源和包装 | 在工厂边界记录每项原子交换并链接具有代表性的上游数据集。不得把上游负荷再次计为前景直接排放。 |  |
| `route_applicability` | 条件性工序和交换 | 对各工艺路线声明适用或不适用。只有存在该工序或交换确实不存在的证据时，条件性行才可为零。 |  |
| `capital_and_service_exclusion` | 前景清单 | 不纳入资本设备、厂房、员工通勤、产品使用、维护和报废；如研究采用更宽边界，应另行纳入并披露。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、部件、能源载体和包装运抵制造场址门口。 |
| starting_condition_role | 上游数据集提供从摇篮到工厂门口的负荷；前景边界从接收和内部搬运开始。 |
| product_classification_scope | CPC 3.0 子类 44123 的完整产品，不受切割技术或安装配置限制。 |
| recursive_input_rule | 同类别的外购完整割草机或刀杆总成仍作为披露的产品投入；除非供应商数据集提供拆分，否则不得在本 PCR 下递归分解。 |
| upstream_dataset_requirement | 尽量匹配材料牌号或产品状态、部件技术、地域、能源市场、包装状态和交付边界；披露代理。 |
| disclosure | 声明型号、场址、期间、起始条件、外购总成、适用路线、排除项、代理及交付边界是否包含包装。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_and_fabrication` | 材料准备与制造 | required | 对所代表产品始终纳入。 | 把外购材料和部件转化为制造结构件和切割总成。 | 每 1 kg 产品净质量。 |
| `surface_treatment_and_coating` | 干式过滤粉末涂装与固化 | conditional | 仅当所代表部件在场内经干式过滤喷粉室涂装并在场内固化时纳入；其他表面路线应另行说明，不得强行套用这些清单行。 | 施加粉末，回收符合条件的过喷粉，捕集不可回收残渣并固化涂层。 | 每 1 kg 产品净质量。 |
| `assembly_testing_and_packaging` | 装配、测试与包装 | required | 始终纳入；各条件性投入仅在实际使用时适用。 | 生产可销售、经测试和包装的输出。 | 每 1 kg 产品净质量。 |

### 过程：材料准备与制造（`material_preparation_and_fabrication`）

#### 输入

##### 产品流

###### 热轧非合金扁平钢材（`hot_rolled_non_alloy_flat_steel`）

仅在使用这一精确钢材状态时记录；其他牌号、宽度和产品状态应采用独立原子行。

- 选定流：除热轧外未经进一步加工的宽度小于600毫米的非合金钢平板轧材 `9705bbad-51bd-4ee8-af46-21324f57c577`
- 流属性/单位：Mass / kg
- 数量规则：净领用质量减去有记录的清洁退料，并与型号 BOM 和废钢核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_material_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 机架与悬挂架总成（`frame_and_hitch_assembly`）

外购完整机架与悬挂架总成跨越工厂边界时予以记录。若在场内制造，则排除本行，改为记录其具体牌号材料、制造交换和废料。

- 选定流：拖拉机悬挂式割草机机架与悬挂架总成
- 流属性/单位：Mass / kg
- 数量规则：采用 `cp_component_bom_records` 可用库存控制体计算外购消耗并按型号 BOM 归属；纳入已在废品中消耗的总成，仅扣除未使用的外部退货，且不得重复计入外购总成内已包含的材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 液压缸（`hydraulic_cylinder`）

当所代表割草机配置安装线性作用液压缸总成时予以记录。

- 选定流：线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位：Mass / kg
- 数量规则：采用 `cp_component_bom_records` 可用库存控制体计算外购消耗，并按供应商装箱数据和经核验的型号 BOM 归属；纳入装配废品中已消耗的液压缸，仅扣除未使用的外部退货。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 带传动总成（`belt_drive_assembly`）

采用该自制/外购路线时，记录供应商定义的、可直接安装且含皮带和带轮的外购带传动总成。

- 选定流：割草机带传动总成
- 流属性/单位：Mass / kg
- 数量规则：采用 `cp_component_bom_records` 可用库存控制体计算外购消耗并按型号 BOM 归属；纳入已消耗的废品，仅扣除未使用的外部退货，并排除未随产品交付的散装备用皮带。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 切割器总成（`cutter_unit_assembly`）

当外购内部切割器总成被装入完整割草机时予以记录。独立销售并作为参考产品的完整割刀不得使用本行。

- 选定流：割草机切割器总成
- 流属性/单位：Mass / kg
- 数量规则：采用 `cp_component_bom_records` 可用库存控制体计算外购消耗并按型号 BOM 归属；纳入已消耗的废品，仅扣除未使用的外部退货；如切割器总成在场内由已单独记录的材料和部件制造，则排除本行。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 外购完整割刀（`purchased_complete_cutter_bar`）

仅当外购完整拖拉机安装式割刀被装入另一完整割草机时予以记录。如果数据集输出本身是独立销售的完整割刀，或同一硬件已使用内部切割器总成行，则排除本行。

- 选定流：其他割草机，包括用于拖拉机安装的刀杆 `21019316-3de7-4b72-b23f-74fdaee3b361`
- 流属性/单位：Mass / kg
- 数量规则：采用 `cp_component_bom_records` 可用库存控制体计算外购消耗并归属至接收该割刀的割草机型号；纳入已消耗的废品，仅扣除未使用的外部退货，并避免递归拆分或重复计入切割器投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 割草机齿轮箱（`mower_gearbox`）

安装外购割草机齿轮箱时予以记录；不得以其他用途齿轮箱替代。

- 选定流：割草机齿轮箱
- 流属性/单位：Mass / kg
- 数量规则：采用 `cp_component_bom_records` 可用库存控制体计算外购消耗并按型号 BOM 归属；纳入已消耗的废品，仅扣除未使用的外部退货；只有在供应商数据集排除厂供润滑油且其质量另有记录时，才单独纳入该润滑油。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006`

###### PTO 传动轴（`pto_driveline`）

记录随所代表割草机配置供应的外购拖拉机 PTO 传动轴。

- 选定流：割草机用拖拉机 PTO 传动轴
- 流属性/单位：Mass / kg
- 数量规则：采用 `cp_component_bom_records` 可用库存控制体计算外购消耗并按型号 BOM 归属；纳入已消耗的废品，仅扣除未使用的外部退货，并排除未随可售产品供应的传动轴。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006`

###### 防护装置与防护帘总成（`safety_guard_and_curtain_assembly`）

记录随成品割草机供应的、可直接安装的外购防护装置和柔性防护帘。若在场内制造，则记录其具体材料投入和制造工序。

- 选定流：割草机防护装置与防护帘总成
- 流属性/单位：Mass / kg
- 数量规则：采用 `cp_component_bom_records` 可用库存控制体计算外购消耗并按型号 BOM 归属；纳入已消耗的废品，仅扣除未使用的外部退货，并核对可售配置要求的全部防护装置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006`

###### 机架与悬挂架用钢制六角头螺钉（`frame_hitch_hex_head_cap_screws`）

对于限定的 DM3605/DM3606/DM3607 机架与悬挂架配置，将外购螺钉与螺母、垫圈和销分开记录。保留以下零件的制造商零件号、规格和当前型号实际数量：802-058C HHCS 5/8-11X2 1/2 GR5、802-204C HHCS 3/4-10X3 3/4 GR5、802-701C HHCS 1 1/8-7X8 1/2 GR5、802-706C HHCS 3/4-10X8 1/2 GR5 FTHD。零件表确认这些标识，但未给出每个当前配置的全部数量，因此各零件数量必须取自受控 BOM 或图纸。

- 选定流：机架与悬挂架用钢制六角头螺钉
- 流属性/单位：Mass / kg
- 数量规则：期初可用库存加外部接收量，减期末可用库存和未使用的外部退货；或等价地，按过程领用总量减退回同一可用库存的未使用量。纳入报废总成中已消耗的螺钉，不得扣除废品；其单独实测质量按实际原子废物去向报告，并以合格产品净输出归一化全部归属消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 机架与悬挂架用钢制六角螺母（`frame_hitch_steel_hex_nuts`）

对于限定的 DM3605/DM3606/DM3607 机架与悬挂架配置，单独记录外购螺母。保留以下零件的制造商零件号、规格和当前型号实际数量：803-021C NUT HEX 5/8-11 PLT、803-027C NUT HEX 3/4-10 PLT、803-048C NUT HEX JAM 3/4-10 PLT、803-099C NUT HEX 1 1/8-7 PLT、803-299C NUT HEX FLG TOP LK 3/4-10 PLT。各零件号的数量必须取自受控 BOM 或图纸。

- 选定流：机架与悬挂架用钢制六角螺母
- 流属性/单位：Mass / kg
- 数量规则：期初可用库存加外部接收量，减期末可用库存和未使用的外部退货；或等价地，按过程领用总量减退回同一可用库存的未使用量。纳入报废总成中已消耗的螺母，不得扣除废品；其单独实测质量按实际原子废物去向报告，并以合格产品净输出归一化全部归属消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 机架与悬挂架用钢制垫圈（`frame_hitch_steel_washers`）

对于限定的 DM3605/DM3606/DM3607 机架与悬挂架配置，单独记录外购垫圈。保留以下零件的制造商零件号、规格和当前型号实际数量：804-021C WASHER FLAT 5/8 SAE PLT、804-022C WASHER LOCK SPRING 5/8 PLT、804-025C WASHER FLAT 3/4 SAE PLT、804-186C WASHER BELLEVILLE .761 ID DM36。手册明确给出 804-186C 的数量为 32；受控 BOM 或图纸必须确认该数量，并提供其他各零件的当前型号数量。

- 选定流：机架与悬挂架用钢制垫圈
- 流属性/单位：Mass / kg
- 数量规则：期初可用库存加外部接收量，减期末可用库存和未使用的外部退货；或等价地，按过程领用总量减退回同一可用库存的未使用量。纳入报废总成中已消耗的垫圈，不得扣除废品；其单独实测质量按实际原子废物去向报告，并以合格产品净输出归一化全部归属消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 机架与悬挂架用止动销（`frame_hitch_retaining_pins`）

对于限定的 DM3605/DM3606/DM3607 机架与悬挂架配置，单独记录外购止动销。保留以下零件的制造商零件号、规格和当前型号实际数量：805-065C PIN WIRE RETAINING 1/4 X 1 3/4、805-103C PIN LINCH 7/16 X 1 3/4。各零件号的数量必须取自受控 BOM 或图纸；不得根据通用销名称推断材料牌号。

- 选定流：机架与悬挂架用止动销
- 流属性/单位：Mass / kg
- 数量规则：期初可用库存加外部接收量，减期末可用库存和未使用的外部退货；或等价地，按过程领用总量减退回同一可用库存的未使用量。纳入报废总成中已消耗的销，不得扣除废品；其单独实测质量按实际原子废物去向报告，并以合格产品净输出归一化全部归属消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_records`
- 来源：`land-pride-disc-mower-parts-2022`

###### 制造用电（`fabrication_electricity`）

记录切割、成形、机加工、焊接、抽排及直接相关辅助设备的用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按校准电表把本过程和期间的用电分配至产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_energy_records`
- 来源：

###### 制造用天然气（`fabrication_natural_gas`）

仅在场内适用的制造或热切割工序燃烧天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按计量或库存平衡将体积分配至工序；否则记录为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_energy_records`
- 来源：

###### 工业氧气（`industrial_oxygen`）

仅当前景边界内实施氧燃料切割时记录外购氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：计量提取量或气瓶库存平衡；否则记录为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_material_records`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

###### 二氧化碳保护气（`carbon_dioxide_shielding_gas`）

仅在 GMAW 使用外部供应的二氧化碳作为保护气时记录焊接级二氧化碳。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：将气瓶或储罐库存平衡分配至 GMAW；记录供应商碳来源，并将消耗质量与化石源和生物源直接排放行、实测捕集/留存量及库存变化进行核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shielding_gas_balance`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

###### 实芯钢焊丝（`solid_steel_welding_wire`）

仅对适用 GMAW 路线记录实芯钢耗材焊丝。其 UUID 尚未解决，不得以药芯焊丝替代。

- 选定流：实芯钢焊丝
- 流属性/单位：Mass / kg
- 数量规则：领用焊丝盘质量减去有记录的退回焊丝；否则记录为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_material_records`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废钢（`steel_scrap`）

记录离场回收或处置的分类钢板边角料、废品和机加工废料；场内清洁退料不属于输出。

- 选定流：废钢 `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- 流属性/单位：Mass / kg
- 数量规则：按去向称量离场质量，并与钢材投入、进入产品质量和库存变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_waste_records`
- 来源：

###### 捕集的焊接烟尘（`captured_welding_fume_dust`）

记录由集气罩、过滤器或除尘器捕集并运离场址的焊接颗粒物。其应与排入空气的颗粒物以及场内清理后复用的金属分开。

- 选定流：捕集的焊接烟尘
- 流属性/单位：Mass / kg
- 数量规则：按实际危险特性和处理去向分类，记录扣除容器皮重后的离场捕集残渣称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_waste_records`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

##### 基本流

###### 焊接颗粒物（`welding_particulate_matter`）

记录经场内控制后直接排入空气的焊接颗粒物。如有实测粒径组分和更精确流，应使用该精确流。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：采用场址测量，或基于耗材、捕集和控制效率的有记录场址特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

###### 保护气化石源二氧化碳排放（`shielding_carbon_dioxide_release_fossil`）

仅当供应商文件核实碳来自化石源时，记录直接排至室外空气的二氧化碳保护气。本行不是燃烧产生的二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：保护气投入减去实测捕集量、化学留存量、产品留存量和库存变化；只有在物理排放已核实为室外空气但无法对应更具体公开区室时，才使用未特指空气流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shielding_gas_balance`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

###### 保护气生物源二氧化碳排放（`shielding_carbon_dioxide_release_biogenic`）

仅当供应商文件核实碳来自生物源时，记录直接排至室外空气的二氧化碳保护气。同一气体不得同时计入化石源行。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：保护气投入减去实测捕集量、化学留存量、产品留存量和库存变化；只有在物理排放已核实为室外空气但无法对应更具体公开区室时，才使用未特指空气流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shielding_gas_balance`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

###### 制造过程化石源二氧化碳（`fabrication_fossil_carbon_dioxide`）

记录本过程燃烧天然气产生的直接化石源二氧化碳；排除电力和燃料供应的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气测量或针对 `fabrication_natural_gas` 的燃料碳平衡；否则记录为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：

### 过程：表面处理与涂装（`surface_treatment_and_coating`）

#### 输入

##### 产品流

###### 粉末涂层（`powder_coating`）

记录场内使用的新鲜粉末涂料。声明化学体系；没有供应商证据时，不得将通用粉末标为聚酯专用。

- 选定流：粉末涂层 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位：Mass / kg
- 数量规则：新鲜粉末领用量减去有记录的未开封退料；另行披露内部回收的过喷粉末。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_material_records`
- 来源：`us-epa-metal-parts-surface-coating-tsd-2001`

###### 表面处理用电（`surface_treatment_electricity`）

记录适用清洗、预处理、涂装、通风和固化设备的用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按校准电表把适用过程和期间的用电分配至产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_energy_records`
- 来源：

###### 表面处理用天然气（`surface_treatment_natural_gas`）

仅当场内采用燃气干燥或固化炉处理所代表部件时记录天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按计量或库存平衡将体积分配至适用炉体；否则记录为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_energy_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 粉末涂装废弃物（`powder_coating_waste`）

记录离开系统的不可回收过喷粉、废干式喷粉室过滤残渣和报废固化粉末涂层。返回喷涂工序的回收粉末属于内部循环，不是投入或废物输出。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass / kg
- 数量规则：称量离场残渣并计入库存变化，与新鲜粉末投入、合格件和废品上的沉积粉末及经核实的内部回收量进行核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_waste_records`
- 来源：`us-epa-metal-parts-surface-coating-tsd-2001`

##### 基本流

###### 表面处理化石源二氧化碳（`surface_treatment_fossil_carbon_dioxide`）

记录本过程燃烧天然气产生的直接化石源二氧化碳；排除电力和燃料供应的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气测量或针对 `surface_treatment_natural_gas` 的燃料碳平衡；否则记录为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：

### 过程：装配、测试与包装（`assembly_testing_and_packaging`）

#### 输入

##### 产品流

###### 装配用电（`assembly_electricity`）

记录最终装配、受控终检测试和直接相关包装设备的用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按校准电表把本过程和期间的用电分配至产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy_records`
- 来源：

###### SAE 90 齿轮润滑油（`sae_90_gear_lubricating_oil`）

记录加入可销售产品的初装 SAE 90 齿轮润滑油。其 UUID 尚未解决，不得以柴油替代。另行记录离开系统的排出或泄漏润滑油。

- 选定流：SAE 90 齿轮润滑油
- 流属性/单位：Mass / kg
- 数量规则：加注总质量减去回收的清洁退料和另行报告的废润滑油输出，并将产品中留存的初装质量与 BOM 核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_material_records`
- 来源：`land-pride-disc-mower-operator-2006`

###### 测试用柴油（`diesel_test_fuel`）

仅对发动机驱动型号记录场内功能测试中实际燃烧的柴油。只有当外部测试拖拉机由报告场址控制时才纳入其燃料。不得将随可售产品转移的残余燃料计入本行。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：测试油箱期初质量加领用燃料，减去期末质量、回收/退回燃料、泄漏量和 `diesel_fuel_retained_in_product`；仅将燃烧平衡量分配至通过测试的合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_material_records`
- 来源：

###### 产品中留存的柴油（`diesel_fuel_retained_in_product`）

发动机驱动可售产品在制造商门口实际携带残余柴油时予以记录。本行表示交付产品内容，不是测试燃烧燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：计量合格产品在制造商门口的期末燃料质量，排除外部测试设备中的燃料和已报告为燃烧的任何数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_material_records`
- 来源：

###### 瓦楞纸板包装（`corrugated_cardboard`）

使用瓦楞纸板作为交付包装时，记录其进入包装的质量。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：包装纸板领用总质量减去单独称量的纸板废品和清洁退料，并通过抽样称量核对交付包装中包含的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 木托盘（`wooden_pallet`）

只有当这一精确欧标木托盘实际转移给客户或所有权以其他方式离开报告组织时才予以记录。其他托盘类型应采用独立原子行。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：分配给交付产品的新托盘或发生所有权转移的托盘实际质量，扣除另行称量的废品。对供应商或托盘池拥有并回收的托盘，本行转移质量为零，并仅链接一次上游托盘使用服务或使用周期数据集；若该数据集已代表一次使用周期，不得再次除以重复使用次数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他割草机参考产品（`other_mower_reference_product`）

记录最终装配和测试后合格可售产品的净质量；产品流质量不含包装。保留归一化前的合格绝对输出质量。

- 选定流：其他割草机，包括用于拖拉机安装的刀杆 `21019316-3de7-4b72-b23f-74fdaee3b361`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product_records`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 废润滑油（`used_lubricating_oil`）

记录加注或测试后排出并作为废物离场的齿轮润滑油，以及离开场址的润滑油泄漏；返回加注系统的清洁润滑油属于内部循环。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：记录扣除容器皮重后离开系统的排出或泄漏润滑油称量质量，并与加注总量、清洁退料及合格和报废产品中的留存量核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste_records`
- 来源：`land-pride-disc-mower-operator-2006`

###### 瓦楞纸板废料（`corrugated_cardboard_scrap`）

记录离开场址的瓦楞纸板裁切、破损和包装废品；清洁退回纸板不是废物输出。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass / kg
- 数量规则：记录扣除容器皮重后离开系统的纸板废品称量质量，并与纸板领用总量、清洁退料和交付包装核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste_records`
- 来源：

###### 木托盘废料（`wooden_pallet_scrap`）

记录作为废物离开场址的破损或报废木托盘，并与随产品转移的托盘及退回所有者/托盘池的托盘分开。

- 选定流：木托盘废料
- 流属性/单位：Mass / kg
- 数量规则：记录扣除皮重后的托盘废物称量质量，并记录托盘类型、所有者、损坏原因和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste_records`
- 来源：

##### 基本流

###### 测试过程化石源二氧化碳（`test_fossil_carbon_dioxide`）

纳入测试燃烧柴油时，记录其直接化石源二氧化碳；排除柴油供应的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：排气测量或针对 `diesel_test_fuel` 的燃料碳平衡；否则记录为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `subdivide_first` | 不同型号、路线和产线 | 分配前按型号、产线、批次、运行时间或其他物理驱动因素细分记录。 |  |
| `recycled_scrap_no_avoided_burden` | 可回收输出 | 报告离场废物质量和去向；前景清单内不得计入替代原生材料收益，边界外的回收分配应另行声明。 |  |
| `shared_resource_allocation` | 共用公用工程和工序 | 无法细分时，采用机器时间、计量能源、处理面积、焊缝长度或加工质量等有记录因果物理驱动因素；使用经济分配须说明理由。 |  |
| `rework_and_rejects` | 返工、退货部件和最终废品 | 将内部返工负荷计入合格输出。供应商退货应从投入总量中扣除并保留退货证据；最终废品应拆解为单独计量的原子材料、部件或废物去向。不得采用笼统“报废割草机”流，也不得遗漏非钢材部分。 |  |
| `pallet_ownership_and_use` | 木托盘 | 区分实物所有权转移与临时使用。只有在所有权离开报告组织时才报告实际转移托盘质量；对回收式/托盘池托盘链接一次上游使用周期或服务数据集，不得将已按一次使用建模的数据集再次除以重复使用次数。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_material_records` | `material_preparation_and_fabrication` | 材料和工艺气体投入 | BOM、领退料和气瓶记录 | 标识；牌号/纯度；期初；接收；领用；退回；期末；型号/批次 | 将受控库存记录与 BOM 和产量核对。 汇总方式：按原子流汇总净领用量并采用物理驱动因素分配。 | kg 或 m3 | 每批；按月汇总 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | BOM、供应商规格、库存核对、校准 |
| `cp_component_bom_records` | `material_preparation_and_fabrication` | 外购割草机总成和各紧固件族 | 受控 BOM、自制/外购决策、可用库存、过程领用、外部退货和废品记录 | 型号/版本；制造商零件号/规格/数量；供应商；产品状态；期初可用库存；外部接收；过程领用总量；未使用内部退库；期末可用库存；未使用外部退货；已消耗废品；安装质量 | 将代表配置中的每个项目映射至一个外购行，或映射至其场内原子材料/工序，同一项目不得两者同时采用。外购件使用可用库存控制体；场内自制转移取自其前景生产过程，不得作为外部接收量。 汇总方式：按型号直接分配。外购消耗 = 期初可用库存 + 外部接收 - 期末可用库存 - 未使用外部退货；等价的领用法为过程领用总量减退回同一库存的未使用量。因废品补领的部件仍属于已消耗投入。未使用内部退库重新进入同一可用库存，只能通过期末库存或领用法退库量表示一次，不得两者重复。投入必须包含已消耗废品，其实测质量按实际原子废物去向单独报告，并以合格产品净输出归一化。 | kg | 每次 BOM 修订和每批 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | 批准 BOM、零件表、供应商规格、库存核对、领用/退库记录、接收称量、处置记录 |
| `cp_fabrication_energy_records` | `material_preparation_and_fabrication` | 电力和天然气 | 分表、账单和运行记录 | 表计起止；燃气体积；参考条件；机器时间；输出 | 优先用分表并与账单核对。 汇总方式：仅将剩余共用量按机器时间或其他因果因素分配。 | MJ 或 m3 | 连续或按账单；按月汇总 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | 校准、账单核对、分配表 |
| `cp_fabrication_waste_records` | `material_preparation_and_fabrication` | 废钢 | 磅单和联单 | 标识；毛/皮/净重；日期；去向；处置 | 汇总离场磅单并核对库存变化。 汇总方式：直接按批次或加工钢材质量分配。 | kg | 每次运输 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | 衡器校准、联单、质量平衡 |
| `cp_shielding_gas_balance` | `material_preparation_and_fabrication` | 外供保护气及直接排放 | 供应商证书、气瓶/储罐库存、捕集和排风记录 | 碳来源；期初库存；接收；期末库存；退回气体；捕集/留存；排口；区室 | 核实化石源或生物源，将消耗气体与捕集/留存和直接排放核对，并记录实际室外排口；只有无法合理对应更具体公开区室时才使用未特指空气。 汇总方式：直接归属 GMAW；化石源与生物源排放是消耗气体中互斥的部分。 | kg | 每次交付/每批；按月汇总 | 数据集期间 | 代表场址和排口 | 每 1 kg 参考流 | 供应商来源证书、库存核对、捕集记录、通风图 |
| `cp_surface_material_records` | `surface_treatment_and_coating` | 粉末涂料投入 | 采购、配方、库存和回收记录 | 粉末标识；化学体系；期初；接收；新粉领用；未开封退料；过喷粉回收；期末；处理面积 | 将新鲜粉末与合格涂层、废品、内部回收和离场粉末废物核对。 汇总方式：直接按批次或处理面积分配。 | kg | 每批；按月汇总 | 数据集期间 | 代表干式过滤喷粉线 | 每 1 kg 参考流 | 供应商规格、库存核对、喷房回收日志 |
| `cp_surface_energy_records` | `surface_treatment_and_coating` | 电力和天然气 | 分表、账单和炉体记录 | 表计起止；燃气体积；参考条件；产线时间；输出 | 优先用产线分表并与账单核对。 汇总方式：按处理面积、产线时间或批次分配。 | MJ 或 m3 | 连续或按账单；按月汇总 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | 校准、账单核对、分配表 |
| `cp_surface_waste_records` | `surface_treatment_and_coating` | 过喷粉、过滤残渣和涂层废品 | 喷房回收、滤材更换、废品和离场称量记录 | 新鲜粉末；回收粉末；沉积涂层；报废涂层件；滤材皮/毛重；离场残渣；去向 | 经核实的内部回收量不计入边界流，并称量每项离开系统的残渣。 汇总方式：直接按批次或处理面积分配；闭合粉末平衡。 | kg | 每批和每次更换滤材 | 数据集期间 | 代表干式过滤喷粉线 | 每 1 kg 参考流 | 称量校准、回收日志、滤材更换记录、废物联单 |
| `cp_assembly_energy_records` | `assembly_testing_and_packaging` | 电力 | 分表、账单和运行记录 | 表计起止；产线时间；合格输出 | 优先用分表并与账单核对。 汇总方式：按产线时间或合格输出质量分配。 | MJ | 连续或按账单；按月汇总 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | 校准、账单核对、分配表 |
| `cp_assembly_material_records` | `assembly_testing_and_packaging` | 润滑油、燃烧的测试燃料和交付残余燃料 | 加注、油箱、领退料、泄漏和库存记录 | 标识；期初/期末；接收；领用；清洁退料；排出/泄漏；留存初装量；测试油箱起止；交付燃料；型号；测试台数 | 分别闭合润滑油和柴油平衡；不得把交付残余燃料作为燃烧量。 汇总方式：按型号直接分配；仅将核实的燃烧量分配至测试输出。 | kg | 每批/测试；按月汇总 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | 加注校准、油箱读数、库存核对、测试记录、产品出厂记录 |
| `cp_assembly_waste_records` | `assembly_testing_and_packaging` | 润滑油、包装和最终废品输出 | 废品、泄漏/排放、拆解、称量和联单记录 | 行标识；报废整机/部件；质量；内部返工；供应商退货；拆解组分；皮重；去向 | 跟踪每个报废部件和最终产品的返工、供应商退货或实测原子离场组分；分别称量废油、纸板和托盘废物。 汇总方式：按型号直接分配；核对全部废品并防止与总投入重复计数。 | kg | 每次事件；按月汇总 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | 不合格记录、拆解表、磅单、退货单、废物联单 |
| `cp_packaging_records` | `assembly_testing_and_packaging` | 包装投入 | 规范、采购、所有权、退回和废品记录 | 标识；质量；每批数量；所有者；所有权转移；上游数据集基准；清洁退回；废品质量；型号 | 通过校准抽样称量验证交付包装，并记录托盘所有权和上游参考流。 汇总方式：按交付配置直接分配；若上游托盘数据已按一次使用周期建模，不得再次相除。 | kg | 每次修订；按期间汇总 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | 批准规范、称量记录、所有权/退回协议、上游数据集审核 |
| `cp_reference_product_records` | `assembly_testing_and_packaging` | 产品输出 | 衡器和受控 BOM 记录 | 毛重；包装皮重；净重；型号；序列号/批次；数量 | 优先校准净重称量；核对 BOM 备选方法。 汇总方式：汇总合格净输出并以此分母归一化。 | kg | 每台或受控批次 | 数据集期间 | 代表场址 | 每 1 kg 参考流 | 衡器校准、BOM 版本、检验记录 |
| `cp_air_emission_records` | 适用前景过程 | 颗粒物和化石源 CO2 | 烟气测试、控制日志、燃料分析和计算 | 污染物；浓度/流量；时长；燃料；碳；捕集/控制 | 优先场址测量；否则保留透明的场址特定平衡或因子计算。 汇总方式：直接归于工序或按因果燃料/耗材分配。 | kg | 有效测试/报告期 | 代表数据集期间 | 代表场址和排口 | 每 1 kg 参考流 | 测试报告、校准、控制日志、计算表 |

### 计算规则

| 规则编号 | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 每项交换 | 归一化量 = 绝对交换量 / 合格产品净质量 | 绝对量；合格产品净质量 | 每 1 kg 产品的交换量 |  |
| `direct_fossil_co2` | 场内燃料燃烧 | 使用实测燃料和有记录的碳含量/氧化假设；排除上游燃料和电力排放。 | 燃料；成分/碳；氧化假设 | kg 直接化石源 CO2 |  |
| `material_reconciliation` | 钢材制造 | 钢材投入 = 进入产品的钢材 + 离场废钢 + 库存增加 + 有记录损失 | 钢材投入；BOM；废钢；库存 | 差额 |  |
| `powder_balance` | 干式过滤粉末涂装 | 新鲜粉末 = 合格件沉积涂层 + 废品沉积涂层 + 离场粉末/过滤废物 + 库存增加；回收粉末显示为内部循环 | 粉末领用；回收；涂层沉积；废品；残渣；库存 | 平衡差额 | `us-epa-metal-parts-surface-coating-tsd-2001` |
| `shielding_gas_balance` | 外供二氧化碳保护气 | 消耗 CO2 = 化石源直接排放 + 生物源直接排放 + 捕集/留存 CO2 + 库存变化；化石源和生物源部分均需供应商来源证据 | 气体库存；来源证书；捕集/留存；排口 | 按来源区分的直接 CO2 kg | `us-epa-ap42-electric-arc-welding-1995` |
| `diesel_test_balance` | 测试和交付燃料 | 测试燃烧柴油 = 测试油箱期初质量 + 领用量 - 期末质量 - 退回/回收量 - 泄漏量 - 可售产品留存柴油 | 油箱/领用/退回/泄漏/出厂记录 | 测试燃烧柴油 kg |  |
| `accepted_output_loss_balance` | 部件、包装和最终废品 | 外部接收 + 期初可用库存 = 合格产品包含量 + 期末可用库存 + 未使用外部退货 + 已消耗废品/废物 + 其他有记录损失；投入清单必须包含已消耗废品且不得将其扣除。未使用内部退库留在同一库存控制体内，场内自制转移与外购分开，废品质量按实际原子去向记录，全部归属消耗和损失仅以合格输出归一化 | 外部接收；期初/期末可用库存；过程领用；内部和外部退回；BOM 数量；废品；原子废物去向；合格输出 | 平衡差额 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `model_specificity` | 产品标识和参考流 | 采用一个型号/配置，或披露并说明产量加权型号族。 | 型号清单、产量、规格 |
| `atomic_bom_coverage` | 外购材料/部件 | 每项跨边界 BOM 材料或总成均设原子行；披露供应商数据缺口或代理，不得合并为笼统流。 | BOM—清单对照表和未解决登记 |
| `route_evidence` | 条件性行/过程 | 保留该型号和场址适用或不适用的证据。 | 路线表、作业指导书、设备清单或记录 |
| `mass_balance` | 钢材、涂料、保护气、润滑油、柴油、包装、废品和产品 | 调查差额，避免重复计数内部循环、交付燃料、供应商退货和捕集残渣。 | 签署的平衡表和库存变化记录 |
| `complete_configuration_crosswalk` | 代表性割草机 BOM | 将机架/悬挂架、液压缸、带传动、切割器或完整割刀备选、齿轮箱、PTO 传动轴、防护装置/帘、分开的螺钉、螺母、垫圈和销族，以及初次加注物解析为外购原子投入或场内生产，且不得重叠。每个紧固件族均保留制造商零件号、规格和实际型号数量。 | 型号 BOM、零件手册交叉表、自制/外购记录 |
| `temporal_representativeness` | 全部前景数据 | 采用连续代表期间，并披露停机、试制、异常废品和产品组合变化。 | 期间说明和生产日志 |
| `upstream_match` | 上游数据集 | 记录地域、技术、状态和交付边界，并解释实质性代理。 | 数据集选择日志 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_output` | 参考流 | 确认 `other_mower_reference_product` 使用 UUID `21019316-3de7-4b72-b23f-74fdaee3b361`、Mass 和 kg，归一化后等于 1。 |  |
| `validate_inventory_balance` | 清单 | 确认每张卡片仅含一个原子交换，且每张 UUID 空缺卡片均以相同行 ID 进入清单 `review_metadata.unresolved.inventory_flow_uuids`。 |  |
| `validate_route_conditions` | 条件性路线 | 确认存在适用性证据，且零值不是无记录默认值。 |  |
| `validate_no_upstream_double_count` | 直接排放 | 确认直接化石源 CO2 和焊接颗粒物不包含上游电力、燃料、材料或气体数据集中的排放。 |  |
| `validate_component_and_reject_coverage` | BOM 和报废生产 | 确认每个代表性总成都由自制/外购交叉表解析，且每个报废部件/最终产品均有返工、供应商退货或实测原子离场去向。 | `land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006` |
| `validate_shielding_and_powder_balances` | 焊接和干式过滤粉末涂装 | 确认外供保护气 CO2 按已核实来源与直接排放、捕集/留存和库存闭合，且粉末与沉积涂层、内部回收、废品和离场残渣闭合。 | `us-epa-ap42-electric-arc-welding-1995`; `us-epa-metal-parts-surface-coating-tsd-2001` |
| `validate_test_fuel_and_first_fill` | 装配与测试 | 确认燃烧柴油不含交付残余燃料，且润滑油总量与产品留存初装量、清洁退料、泄漏/排出和废品闭合。 |  |
| `validate_allocations` | 共用工序、托盘、返工和废料 | 确认已先尝试细分，且每项分配均有驱动因素、分子、分母和核对总量；确认托盘所有权，且未将按一次使用建模的上游数据集再次相除。 |  |
| `validate_bilingual_alignment` | 双语 PCR/数据集 | 确认稳定 ID、UUID、单位、规则顺序和清单行顺序一致，并采用 Tiangong 直读中文流名。 |  |
| `validate_source_limits` | 外部证据 | 手册仅作为代表性配置/工艺证据；不得从一个制造商型号族推断行业数量范围。 | `land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整其他割草机或拖拉机安装式完整刀杆总成的型号和场址特定前景制造数据包。 |
| downstream_use | 链接的 `process` 或 `lifecyclemodel` 数据集及经兼容性核查的比较研究。 |
| allowed_use | 门到门制造清单、贡献分析、供应商数据改进，以及链接上游数据集后的更宽边界研究。 |
| excluded_use | 草坪/公园/运动场割草机、零散部件、割草使用阶段、维护、寿命或报废性能。 |
| required_metadata | PCR ID/状态；CPC 参考；型号/配置；切割技术；安装/驱动；作业宽度；所含设备/初次加注物；涂装/包装；场址/地域/期间；路线适用性；分配；上游参考。 |
| required_quality_disclosure | 未解决 UUID；供应商数据缺口；代理；范围证据缺口；计量/分配；平衡差额；异常生产；排除项和局限。 |
| update_trigger | 型号/BOM、路线、场址、能源市场、涂装或包装变化；出现新的精确流标识或更强证据；计量、分配或供应商数据发生实质变化。 |

## 11. 数据源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构 CSV，2025-06-30，子类 44123 及相邻子类 44121—44129。 | 官方产品标识，以及与相邻割草、干草制作和收获类别的排除边界。 |
| `land-pride-disc-mower-parts-2022` | handbook | Land Pride，*DM3605, DM3606 & DM3607 Disc Mowers Parts Manual*，327-045P，2022-06-13；机架与悬挂架表位于 PDF 第 7、9 页（印刷第 5、7 页），切割器表位于 PDF 第 17 页（印刷第 15 页）。 | 覆盖机架/悬挂架、液压缸、带传动、切割器、齿轮箱、传动轴和防护装置的代表性配置清单；机架与悬挂架用螺钉、螺母、垫圈和销的精确零件规格，包括垫圈 804-186C 的标示数量 32；不作为材料组成或行业数量范围。 |
| `land-pride-disc-mower-operator-2006` | handbook | Land Pride，*DM3705, DM3706, and DM3707 Series Disc Mowers Operator's Manual*，327-083M，2006-09-15，PDF 第 9、11 页。 | 农业圆盘割草机用途、拖拉机安装和初装 SAE 90 齿轮润滑油的代表性证据；不构成行业范围。 |
| `us-epa-ap42-electric-arc-welding-1995` | official_guidance | 美国 EPA，AP-42 第 12.19 章 *Electric Arc Welding*，1995 年 1 月最终版，PDF 第 1、3 页。 | 焊接工艺、GMAW 耗材焊丝与外供保护气，以及颗粒物采集限定信息。 |
| `us-epa-metal-parts-surface-coating-tsd-2001` | official_guidance | 美国 EPA，*National Emission Standards for Hazardous Air Pollutants for Miscellaneous Metal Parts and Products Surface Coating Operations: Technical Support Document*，EPA 托管 PDF，2001 年汇编，PDF 第 67 页（印刷第 5-3 页）及 PDF 第 115、117 页（印刷第 8-16、8-18 页）。 | 对农业机械制造的有限适用性；干式过滤喷粉室的过喷粉捕集及可能的场内回收；表面涂装和固化工序；必须收集场址特定能源和废物数据。不据此推断数值范围。 |
