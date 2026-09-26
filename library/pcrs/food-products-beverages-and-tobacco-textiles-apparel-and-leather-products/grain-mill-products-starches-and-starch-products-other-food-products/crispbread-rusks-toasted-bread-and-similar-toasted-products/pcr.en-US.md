---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.crispbread-rusks-toasted-bread-and-similar-toasted-products
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Crispbread; rusks, toasted bread and similar toasted products

## 1. Scope and Applicability

This rule covers crispbread, rusks, toasted bread and similar bakery products sold in a declared dry, crisp state. Record dough making, first baking, secondary toasting or drying, cooling, and actual packaging. Ordinary soft bread, biscuits, and products without the declared crisp market state are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.crispbread-rusks-toasted-bread-and-similar-toasted-products |
| classification_refs | CPC 3.0: 23410 |
| covered_products | Crispbread; rusks, toasted bread and similar toasted products |
| excluded_products | ordinary soft bread; biscuits; ordinary bread without final toasting |
| representative_product | finished rye crispbread |
| production_route | declared direct bake-and-dry crispbread route, or first-bake, slice, and second-toast rusk/toasted-bread route |
| market_state | declare moisture, crisp texture, packaging state and at-gate mass |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provide edible dry crisp bakery product |
| How much | 1 kg accepted finished product net mass |
| How well | declare product type, moisture and crisp quality specification |
| How long or cycle | one at-gate delivery; no assumed storage life |
| reference_flow_link | crispbread |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished rye crispbread |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type; source grain; first-bake and second-toast/drying route; moisture; packaging state; factory gate |


Rusk and toasted-bread datasets use `rusk` or `toasted_bread` as their finished-product row, each normalized to 1 kg actual accepted net product. Do not use the rye-crispbread display or unresolved UUID as their product identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Use a calibrated scale or traceable batch weighing record for accepted finished net mass in the declared market state, excluding packaging. |
| `electricity_conversion` | electricity | Net calorific value | MJ | Convert metered kWh to MJ by multiplying by 3.6; retain original meter records. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare whether grain flour or purchased already-baked bread enters the foreground and its source state. |
| starting_condition_role | upstream boundary for ingredient or already-baked intermediate |
| product_classification_scope | CPC 3.0 23410 finished product; ordinary bread input retains its original product identity |
| recursive_input_rule | Meter and disclose same-category rework separately; do not count one physical quantity as both new input and final output. |
| upstream_dataset_requirement | Link purchased flour, bread, fuel, electricity and packaging inputs to their respective upstream datasets. |
| disclosure | Disclose moisture, route, purchased-bread share, losses and packaging state. |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_first_bake` | all inventory rows | Include attributable in-house first baking and secondary toasting/drying; represent externally baked bread as a purchased input without repeating its off-site first bake. | `toxins-2015-rusk` |
| `boundary_finished_state` | finished product | Only accepted product in its declared dry crisp market state enters the 1 kg reference amount; exclude packaging mass from food net mass. | `un-cpc-3-2025` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `base_make` | Dough making and first bake | conditional | in-house crispbread or in-house first-baked bread for rusks | foreground ingredients and first bake | per 1 kg reference flow |
| `toast_dry` | Secondary toasting or drying and cooling | required | all covered products; declare actual heat-treatment route | finish product and losses | per 1 kg reference flow |
| `packing` | Primary packing | conditional | only when declared packaged market state uses polyethylene film | packaging input | per 1 kg reference flow |


### Process: Dough making and first bake (`base_make`)

#### Inputs

##### Product flows

###### Flour (`flour`)

Inclusion condition: When dough is made in-house.

- Selected flow: Flour `67b80ae5-687f-418a-84ba-f06b01a6139b`
- Flow property / unit: Mass / kg
- Amount rule: Record flour mass by grain and milling specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_base`
- Sources: `mustafa-2008-crispbread`

###### Tap water (`water`)

Inclusion condition: When dough is made in-house.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Record water charged to dough; convert metered volume using documented density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_base`
- Sources: `mustafa-2008-crispbread`

###### Fresh baker yeast (`yeast`)

Inclusion condition: Only when the recipe uses fresh yeast.

- Selected flow: Fresh baker yeast
- Flow property / unit: Mass / kg
- Amount rule: Record fresh baker yeast added to leavened dough.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_base`
- Sources: `mustafa-2008-crispbread`

### Process: Secondary toasting or drying and cooling (`toast_dry`)

#### Inputs

##### Product flows

###### Plain baked bread for rusks (`purchased_bread`)

Inclusion condition: Only for rusks made from externally supplied bread; omit in-house intermediate transfers.

- Selected flow: Plain baked bread for rusks
- Flow property / unit: Mass / kg
- Amount rule: Record purchased baked bread entering slicing and second toasting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `toxins-2015-rusk`

###### Electricity (`electricity`)

Inclusion condition: When electrical ovens, fans, conveyors, or controls operate.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record attributable electricity; convert kWh to MJ using 3.6 MJ/kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`

###### Pipeline-quality natural gas (`natural_gas`)

Inclusion condition: Only for natural-gas-fired equipment.

- Selected flow: Pipeline-quality natural gas `7766e51e-0b64-4fbb-89cb-489c33293137`
- Flow property / unit: Volume / m3
- Amount rule: Record metered natural gas volume for baking and toasting/drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`

#### Outputs

##### Product flows

###### Finished rye crispbread (`crispbread`)

Inclusion condition: Only for the crispbread route.

- Selected flow: Finished rye crispbread
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `un-cpc-3-2025`

###### Finished rusk (`rusk`)

Inclusion condition: Only for the rusk route.

- Selected flow: Finished rusk
- Flow property / unit: Mass / kg
- Amount rule: Record 1 kg accepted rusk after second toasting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `toxins-2015-rusk`

###### Finished toasted bread (`toasted_bread`)

Inclusion condition: Only for the toasted-bread route.

- Selected flow: Finished toasted bread
- Flow property / unit: Mass / kg
- Amount rule: Record 1 kg accepted toasted bread after final toasting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `un-cpc-3-2025`

##### Waste flows

###### Rejected baked bread (`bread_reject`)

Inclusion condition: When rejects leave the product system.

- Selected flow: Rejected baked bread
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected bread separately from accepted product and document destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`

### Process: Primary packing (`packing`)

#### Inputs

##### Product flows

###### Polyethylene film (`pe_film`)

Inclusion condition: Only when the declared market state uses polyethylene film.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Record primary polyethylene film used per accepted product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rework` | all inventory rows | Prefer batch and product direct measurement. If a saleable co-product exists, record mass and destination and disclose any allocation separately; rejected waste is not accepted product. |  |
| `allocation_shared_energy` | electricity; natural_gas | Attribute shared oven and dryer utilities using submetering or verifiable operating time first; disclose unresolved shared quantities. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_base` | `base_make` | flour; water; yeast | batch weigh and recipe records | batch id; ingredient mass; grain type; product output mass | calibrated scales and ingredient issue records | kg | each batch | representative continuous production period | production site | per 1 kg reference flow | calibration, batch and purchase evidence |
| `cp_heat` | `toast_dry` | purchased_bread; electricity; natural_gas | purchase and meter records | bread mass; kWh; gas m3; product output mass | purchase weights and dedicated meters or documented allocation | kg; MJ; m3 | each batch or continuous | representative continuous production period | production site | per 1 kg reference flow | calibration, batch and purchase evidence |
| `cp_output` | `toast_dry` | crispbread; rusk; toasted_bread; bread_reject | accepted and reject weigh records | product type; accepted net mass; reject mass; moisture; destination | calibrated net weighing after cooling and final drying | kg | each batch | representative continuous production period | production site | per 1 kg reference flow | calibration, batch and purchase evidence |
| `cp_pack` | `packing` | pe_film | material issue records | film grade; film mass; accepted output mass | weigh film issued and reconcile returns and scrap | kg | each batch | representative continuous production period | production site | per 1 kg reference flow | calibration, batch and purchase evidence |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch` | all inventory rows | q_ref = q_batch / m_accepted; q_batch is the measured exchange in the covered batch; m_accepted is accepted finished net food mass in kg. | q_batch; m_accepted; cp_output | q_ref |  |
| `electricity_mj` | electricity | MJ = kWh × 3.6 | kWh; cp_heat | MJ |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | all inventory rows | Declare product type, ingredients, purchased bread status and first-bake/second-toast state. | batch recipe and purchase record |
| `dq_mass` | finished product | Weigh accepted product, rejects and packaging separately; moisture must match the at-gate state. | calibration, quality and packaging records |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished product | Accepted finished food net mass is the denominator of the 1 kg reference; exclude packaging and rejected bread. |  |
| `validate_route` | all inventory rows | Check declared secondary toasting/drying, purchased bread and in-house first-bake conditions; do not double-count intermediate bread. | `toxins-2015-rusk` |
| `validate_missing` | all inventory rows | Keep unresolved product and waste UUIDs explicit; do not substitute nearby database flows. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | accepted finished product foreground data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | model crispbread, rusk or toasted bread only for the declared route and market state |
| excluded_use | ordinary soft bread, biscuits or other untoasted products |
| required_metadata | product type; grain; route; moisture; packaging; site; period; factory gate |
| required_quality_disclosure | metering, allocation, rejects and unresolved UUIDs |
| update_trigger | change in ingredients, route, toasting process, packaging or moisture |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product classification identity |
| `mustafa-2008-crispbread` | literature | Arwa Mustafa, Acrylamide in Bread: Precursors, Formation and Reduction, 2008 thesis, §2.2. https://pub.epsilon.slu.se/1789/1/Arwa_Mustafa_thesis_08.pdf | crispbread bake-and-dry stages; laboratory case only |
| `toxins-2015-rusk` | literature | Deoxynivalenol & Deoxynivalenol-3-Glucoside Mitigation through Bakery Production Strategies: Effective Experimental Design within Industrial Rusk-Making Technology, Toxins 7 (2015), 2773–2790. https://mdpi-res.com/d_attachment/toxins/toxins-07-02773/article_deploy/toxins-07-02773.pdf | rusk first bake, slicing and second toast sequence |
