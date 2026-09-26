---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.chamois-leather-patent-leather-and-patent-laminated-leather-metallized-leather
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 油鞣皮革；漆皮及层压漆皮；镀金属皮革

## 1. 范围与适用性

本规则适用于以动物皮为基材、经油鞣或特定表面涂饰制成并在工厂门口验收的油鞣革、漆皮、层压漆皮及镀金属皮革。路线必须分别申报；合成革、纯塑料片材、普通非特种皮革及其下游制品不在本边界内。产品识别依据 CPC 3.0 与官方皮革分类说明 [un-cpc-2025; eu-jrc-tanning-2013]。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.chamois-leather-patent-leather-and-patent-laminated-leather-metallized-leather |
| classification_refs | CPC 3.0 29110，作为识别参考，不代表已接受的映射 |
| covered_products | 油鞣皮革；动物皮基漆皮及层压漆皮；镀金属动物皮革 |
| excluded_products | 合成革、普通皮革、组成皮革、成品鞋及箱包 |
| representative_product | 工厂门口验收的成品油鞣动物皮革 |
| production_route | 油鞣；涂漆；预制塑料薄膜层压；金属箔转印，按实际路线申报 |
| market_state | 已验收的可销售成品皮革，含实际涂层质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 可供进一步加工的特种动物皮革 |
| How much | 1 kg |
| How well | 申报油鞣、漆皮、层压漆皮或镀金属路线及皮革状态 |
| How long or cycle | 一次工厂门口出厂验收；不设使用寿命 |
| reference_flow_link | finished_leather |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 成品特种整饰动物皮革 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 动物来源；基材鞣制状态；具体成品路线；涂层或薄膜材质；薄膜厚度；金属种类；验收含水状态；工厂门口范围 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished_leather | Mass | kg | 以校准秤或可追溯称重记录核实合格成品净质量；剔除运输包装；所有交换量按每 1 kg 参考流报告。 |
| `area_to_mass` | 以面积记录的皮革或薄膜 | Mass | kg | 只有同批次实测面积质量及含水状态齐全时，才可将面积记录换算为质量；保留原始面积和换算依据。 |

## 5. 系统边界

本前景边界始于接收动物皮基材，终于合格成品皮革在工厂门口验收。原料皮取得、上游鞣制、能源供应及废物处理分别由可追溯上游数据集表示；若企业实际在本场址完成这些过程，则扩展前景并逐项报告 [eu-jrc-tanning-2013]。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收已识别动物皮剖层或已鞣动物皮革 |
| starting_condition_role | 前景材料投入；上游生产另接数据集 |
| product_classification_scope | 仅动物皮基 CPC 29110 特种成品皮革 |
| recursive_input_rule | 若购入同类成品皮革再加工，单列投入与既有成品份额，避免将其隐匿为原皮 |
| upstream_dataset_requirement | 动物皮来源、上游鞣制、油剂、涂料、薄膜、铝箔、电力及废物处理的相容数据集 |
| disclosure | 申报接收状态、生产路线、工厂门口、上游缺口及每类产品分量 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | 所有生产路线 | 逐批区分油鞣、漆皮、层压漆皮及镀金属路线；仅纳入实际发生的原子交换。 | `un-cpc-2025`, `eu-jrc-tanning-2013` |
| `boundary_coating` | 涂饰路线 | 记录实际施加于皮革的涂层、薄膜或金属箔及其留存、损耗和排放；依据生产记录核对声明的整饰路线。 | `eu-jrc-tanning-2013` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| substrate_receipt | 动物皮基材接收 | required | 所有路线 | 前景投入核查 | 每 1 kg 参考流 |
| chamois_tannage | 油鞣及洗涤 | conditional | 仅油鞣革路线 | 前景油鞣 | 每 1 kg 参考流 |
| surface_finishing | 涂饰、层压或金属箔转印 | conditional | 仅漆皮、层压漆皮或镀金属路线 | 前景表面加工 | 每 1 kg 参考流 |
| grading_dispatch | 分级与出厂验收 | required | 所有路线 | 前景成品验收 | 每 1 kg 参考流 |

### 过程： 动物皮基材接收（`substrate_receipt`）

#### 输入

##### 产品流

###### 绵羊皮剖层基材（`sheepskin_split`）

仅在声明条件满足时记录：仅油鞣革路线；接收剖层须可追溯至动物皮。 数量由同批次原始记录取得。

- 选定流: 已鞣绵羊皮剖层
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_substrate`
- 来源: `eu-jrc-tanning-2013`

###### 已鞣皮革基材（`tanned_base_leather`）

仅在声明条件满足时记录：仅漆皮、层压漆皮或镀金属路线；披露动物来源及鞣制状态。 数量由同批次原始记录取得。

- 选定流: 已鞣动物皮革
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_substrate`
- 来源: `un-cpc-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程： 油鞣及洗涤（`chamois_tannage`）

#### 输入

##### 产品流

###### 油鞣剂投入（`cod_oil`）

仅在声明条件满足时记录：仅使用鳕鱼油的油鞣革路线；其他油剂须另设具体原子流行。 数量由同批次原始记录取得。

- 选定流: 鳕鱼油
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tannage`
- 来源: `eu-jrc-tanning-2013`

###### 鞣后洗涤碱（`sodium_carbonate`）

仅在声明条件满足时记录：仅实际用碳酸钠洗涤时纳入。 数量由同批次原始记录取得。

- 选定流: 碳酸钠 `6827e314-666a-4786-ac60-00770c61678b`
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tannage`
- 来源: `eu-jrc-tanning-2013`

###### 洗涤工艺供水（`process_water`）

仅在声明条件满足时记录：仅洗涤用水跨越设施边界时纳入。 数量由同批次原始记录取得。

- 选定流: 工艺用水
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`
- 来源: `eu-jrc-tanning-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 油鞣废水（`tannery_wastewater`）

仅在声明条件满足时记录：记录送往厂内或厂外处理的废水；若检测油和 COD 负荷则披露。 数量由同批次原始记录取得。

- 选定流: 油鞣工艺废水
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastewater`
- 来源: `eu-jrc-tanning-2013`

##### 基本流

### 过程： 涂饰、层压或金属箔转印（`surface_finishing`）

#### 输入

##### 产品流

###### 漆皮涂饰清漆（`acrylic_varnish`）

仅在声明条件满足时记录：仅适用于声明使用丙烯酸清漆的漆皮配方；其他涂层须另列具体原子流。 数量由同批次原始记录取得。

- 选定流: 丙烯酸清漆 `56a0ef1c-80ef-4e0c-b690-c8aefb4c7e8e`
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finish`
- 来源: `eu-jrc-tanning-2013`

###### 层压漆皮预制薄膜（`preformed_plastic_film`）

仅在声明条件满足时记录：仅聚氯乙烯薄膜层压路线；记录薄膜成分和厚度。 数量由同批次原始记录取得。

- 选定流: 预制聚氯乙烯薄膜
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finish`
- 来源: `eu-jrc-tanning-2013`

###### 镀金属转印铝箔投入（`aluminium_foil`）

仅在声明条件满足时记录：仅铝箔转印路线；转印损耗单独记录。 数量由同批次原始记录取得。

- 选定流: 铝箔材 `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finish`
- 来源: `us-patent-foil-transfer-2022`

###### 外购交流电（`alternating_current`）

仅在声明条件满足时记录：涂饰设备使用外购交流电时纳入；计量并披露电网来源。 数量由同批次原始记录取得。

- 选定流: 交流电
- 流属性/单位: Net calorific value / MJ
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electricity`
- 来源: `eu-jrc-tanning-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 乙酸正丁酯空气排放（`butyl_acetate_air`）

仅在声明条件满足时记录：仅涂料含乙酸正丁酯且计量或平衡表明向空气排放时纳入；介质为空气未指定。 数量由同批次原始记录取得。

- 选定流: 正丁酸丁酯 `4d9a8790-3ddd-11dd-97df-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission`
- 来源: `eu-jrc-tanning-2013`

### 过程： 分级与出厂验收（`grading_dispatch`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品特种皮革（`finished_leather`）

仅在声明条件满足时记录：报告一种声明的路线及验收出厂状态；不同路线不得在无分量记录时合并。 数量由同批次原始记录取得。

- 选定流: 成品特种整饰动物皮革
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_product`
- 来源: `un-cpc-2025`

##### 废物流

###### 皮革裁切边角料（`leather_cuttings`）

仅在声明条件满足时记录：按路线和处置去向记录实际裁切边角料。 数量由同批次原始记录取得。

- 选定流: 成品皮革裁切边角料
- 流属性/单位: Mass / kg
- 数量规则: 测量同批次交换量，并按每 1 kg 参考流报告。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scrap`
- 来源: `eu-jrc-tanning-2013`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 所有路线 | 先按路线、批次和过程细分，避免将油鞣、涂饰及层压投入混摊。 | `eu-jrc-tanning-2013` |
| `allocation_mass` | 无法分表的共享投入 | 仅在实测批次成品质量及设备运行记录齐全时，按可追溯质量或运行时间分摊共享投入，并披露所选因果依据；不得把废物处理收益抵销原始废物流。 | `eu-jrc-tanning-2013` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_substrate | substrate_receipt | 基材质量 | 批次原始记录 | 批次；路线；流名称；数量；单位 | 按批次计量或核对可追溯记录 | kg | 每批 | 报告期内全部合格批次 | 报告场址 | 每 1 kg 参考流 | 校准记录及原始凭证 |
| cp_tannage | chamois_tannage | 油剂与碱质量 | 批次原始记录 | 批次；路线；流名称；数量；单位 | 按批次计量或核对可追溯记录 | kg | 每批 | 报告期内全部合格批次 | 报告场址 | 每 1 kg 参考流 | 校准记录及原始凭证 |
| cp_water | chamois_tannage | 洗涤用水 | 批次原始记录 | 批次；路线；流名称；数量；单位 | 按批次计量或核对可追溯记录 | kg | 每批 | 报告期内全部合格批次 | 报告场址 | 每 1 kg 参考流 | 校准记录及原始凭证 |
| cp_wastewater | chamois_tannage | 油鞣废水 | 批次原始记录 | 批次；路线；流名称；数量；单位 | 按批次计量或核对可追溯记录 | kg | 每批 | 报告期内全部合格批次 | 报告场址 | 每 1 kg 参考流 | 校准记录及原始凭证 |
| cp_finish | surface_finishing | 涂饰材料质量 | 批次原始记录 | 批次；路线；流名称；数量；单位 | 按批次计量或核对可追溯记录 | kg | 每批 | 报告期内全部合格批次 | 报告场址 | 每 1 kg 参考流 | 校准记录及原始凭证 |
| cp_electricity | surface_finishing | 交流电 | 批次原始记录 | 批次；路线；流名称；数量；单位 | 按批次计量或核对可追溯记录 | MJ | 每批 | 报告期内全部合格批次 | 报告场址 | 每 1 kg 参考流 | 校准记录及原始凭证 |
| cp_emission | surface_finishing | 乙酸正丁酯排放 | 批次原始记录 | 批次；路线；流名称；数量；单位 | 按批次计量或核对可追溯记录 | kg | 每批 | 报告期内全部合格批次 | 报告场址 | 每 1 kg 参考流 | 校准记录及原始凭证 |
| cp_product | grading_dispatch | 合格成品质量 | 批次原始记录 | 批次；路线；流名称；数量；单位 | 按批次计量或核对可追溯记录 | kg | 每批 | 报告期内全部合格批次 | 报告场址 | 每 1 kg 参考流 | 校准记录及原始凭证 |
| cp_scrap | grading_dispatch | 皮革边角料 | 批次原始记录 | 批次；路线；流名称；数量；单位 | 按批次计量或核对可追溯记录 | kg | 每批 | 报告期内全部合格批次 | 报告场址 | 每 1 kg 参考流 | 校准记录及原始凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | 所有清单行 | 以批次可归属交换量除以合格成品净质量（kg）；按每 1 kg 参考流报告。 | lot exchange; accepted finished net mass; cp_product | 每 1 kg 参考流的数量 |  |
| electricity_conversion | alternating_current | 记录的 kWh 按 1 kWh = 3.6 MJ 换算。 | kWh; cp_electricity | MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all lots | 按批次声明动物皮基材、成品路线及涂层化学组成。 | 供应商声明；批次记录 |
| dq_balance | all lots | 核对投入、合格产出、边角料及废水质量，不隐匿路线损耗。 | 称重及排放记录 |
| dq_time | all measured exchanges | 使用一个明确报告期，披露缺失计量、估算及数据年份。 | 计量日志；发票 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | all lots | 核验每 1 kg 参考流对应 1 kg 已验收成品皮革，且已声明路线。 | `un-cpc-2025` |
| `validate_chemistry` | coating or oil routes | 按生产记录核验油剂、清漆、薄膜、铝箔、用水及溶剂流；未发生路线不得计量。 | `eu-jrc-tanning-2013` |
| `validate_releases` | all lots | 以废物联单及排放记录核对废水、裁切边角料和溶剂排放。 | `eu-jrc-tanning-2013` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅适用于匹配路线、动物皮基材和工厂门口状态的皮革数据 |
| excluded_use | 合成革、塑料薄膜或下游制品的直接替代数据 |
| required_metadata | 路线；动物来源；基材状态；涂层与薄膜组成；金属种类；报告期；场址；验收净质量 |
| required_quality_disclosure | UUID 缺口；上游数据集；缺失计量；分配及各路线产量 |
| update_trigger | 基材、路线、配方、场址或计量方法发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 引文 | 用途 |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Structure (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品识别及相邻类别边界 |
| eu-jrc-tanning-2013 | official_guidance | European Commission JRC, Best Available Techniques (BAT) Reference Document for the Tanning of Hides and Skins (2013), https://eippcb.jrc.ec.europa.eu/sites/default/files/2019-11/TAN_Published_def.pdf | 油鞣、洗涤、涂饰排放及过程划分 |
| us-patent-foil-transfer-2022 | literature | US20220194276A1, Encapsulated foil leather transfer, https://patents.google.com/patent/US20220194276A1/en | 仅用于条件性铝箔转印路线 |
