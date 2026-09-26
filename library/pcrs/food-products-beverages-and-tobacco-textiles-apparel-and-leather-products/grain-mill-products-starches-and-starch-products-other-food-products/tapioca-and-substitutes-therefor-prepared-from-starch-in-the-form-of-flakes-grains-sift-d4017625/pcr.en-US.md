---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.tapioca-and-substitutes-therefor-prepared-from-starch-in-the-form-of-flakes-grains-sift-d4017625
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tapioca and substitutes therefor prepared from starch, in the form of flakes, grains, siftings or similar forms

## 1. Scope and Applicability

This rule covers food-grade starch conditioned, formed, partly gelatinized, dried and graded into tapioca and substitutes in flakes, grains, siftings or similar forms, up to the unpackaged accepted-product factory gate. Saleable food-grade siftings are product; captured unsalable dust is waste. Primary starch manufacture, root cultivation, packaging, delivery, cooking and consumption are outside the foreground gate; upstream purchased starch and energy burdens still require matching background datasets. Unprocessed starch, noodles, flour, biscuits and cassava roots are excluded. Cassava, potato and corn starch are named feedstocks; another starch source requires its own concrete atomic feed flow and applicability review. The publisher full-text trial by Tokimura et al. documents the starch-conditioned pearl route, including forming, surface gelatinization and air drying; CPC 3.0 supplies the category and form wording. The trial does not establish operating intensities or show that every listed form follows the same route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.tapioca-and-substitutes-therefor-prepared-from-starch-in-the-form-of-flakes-grains-sift-d4017625 |
| classification_refs | CPC 3.0: 23230 (classification context, not an accepted mapping) |
| covered_products | food-grade starch-prepared tapioca flakes, grains, pearls, saleable siftings and analogous substitutes |
| excluded_products | raw starch, roots, noodles, bakery products, non-food granules and unsalable dust |
| representative_product | dried unpackaged cassava-starch tapioca pearls |
| production_route | receive and condition edible starch; form and surface-gelatinize; finish dry; sieve and grade |
| market_state | unpackaged dry food-grade product accepted at the declared moisture specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | food-grade starch-prepared tapioca or substitute for food preparation |
| How much | 1 kg accepted dry unpackaged finished product |
| How well | meets declared starch origin, form and finished moisture specification |
| How long or cycle | one finished batch at factory gate; no use duration |
| reference_flow_link | grade_tapioca_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished starch-prepared tapioca flakes, grains or siftings |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | starch botanical origin; finished form; accepted-product moisture; production geography and technology; thermal source; saleable siftings inclusion; unpackaged factory gate |

A foreground data package must state the required qualifiers in its product description or dataset metadata. A raw-starch flow is never substituted for the finished tapioca flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted dry finished product mass in kg; normalize every inventory row to the same batch per 1 kg accepted product. |
| `energy_unit` | cook_electricity | Energy | MJ | Retain raw metered kWh and conversion; 1 kWh = 3.6 MJ. |
| `gas_volume` | cook_natural_gas | Volume | m3 | Record gas-meter reference temperature and pressure; do not combine volumes from different reference states. |

## 5. System Boundary

The terminal gate is unpackaged accepted product. Purchased starch, water and energy, and waste treatment require appropriate upstream or downstream datasets. Do not double count on-site combustion and purchased steam for the same delivered heat.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | purchased food-grade starch with declared botanical origin, wet/dry state and supplier boundary |
| starting_condition_role | separate upstream raw-starch production from foreground tapioca forming |
| product_classification_scope | starch-prepared tapioca and substitutes within CPC 3.0 23230 |
| recursive_input_rule | same-category recovered finished product re-entering the process is recorded separately as internal rework, not a second external input |
| upstream_dataset_requirement | match purchased starch, water, energy and waste treatment to source and technology |
| disclosure | state finished form, starch source, heat source, moisture, saleable siftings/waste split and supplier-data boundary |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground_system_boundary | Include conditioning, forming, gelatinization, drying and grading up to the unpackaged accepted-product gate; treat primary starch production and downstream consumption according to the declared system boundary. | `un-cpc-3-2025`; `tokimura-2017-starch-pearls` |
| `boundary_energy` | form_cook_dry | Record purchased steam and on-site gas combustion according to the actual heat route; do not count upstream boiler fuel again for the same purchased steam. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed_condition` | Starch receiving and conditioning | required |  | foreground production | per 1 kg accepted product |
| `form_cook_dry` | Forming, gelatinization and drying | required |  | foreground production | per 1 kg accepted product |
| `grade` | Grading and finished-product gate | required |  | foreground production | per 1 kg accepted product |

### Process: Starch receiving and conditioning (`feed_condition`)

Receive food-grade starch and condition it for forming.

#### Inputs

##### Product flows

###### Cassava starch feed (`feed_cassava_starch`)

Include only when cassava starch is charged.

- Selected flow: Cassava Starch `00f8688a-9af4-40bf-95fd-8529f7bc70ce`
- Flow property / unit: Mass / kg
- Amount rule: Measured cassava starch mass divided by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_starch`
- Sources: `tokimura-2017-starch-pearls`

###### Potato starch substitute feed (`feed_potato_starch`)

Include only when potato starch is charged.

- Selected flow: Potato Starch `1acb7b11-0259-4f61-b05b-83f1f3f11eda`
- Flow property / unit: Mass / kg
- Amount rule: Measured potato starch mass divided by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_starch`
- Sources:

###### Corn starch substitute feed (`feed_corn_starch`)

Include only when corn starch is charged.

- Selected flow: corn starch `982918a4-54b1-4792-9ee5-2f3155d4e929`
- Flow property / unit: Mass / kg
- Amount rule: Measured corn starch mass divided by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_starch`
- Sources:

###### Water for starch conditioning (`feed_process_water`)

Include water crossing the foreground boundary for starch conditioning.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured conditioning water mass divided by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `tokimura-2017-starch-pearls`

#### Outputs

### Process: Forming, gelatinization and drying (`form_cook_dry`)

Form discrete particles or flakes, heat-treat and dry them.

#### Inputs

##### Product flows

###### Purchased alternating-current electricity (`cook_electricity`)

Include site purchased electricity used for forming, gelatinizing, drying and associated motors; state voltage and supply geography.

- Selected flow: Alternating-current electricity for food processing
- Flow property / unit: Energy / MJ
- Amount rule: Metered electricity energy divided by accepted finished product mass; convert kWh to MJ using 3.6 MJ/kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

###### Purchased steam for heating (`cook_purchased_steam`)

Include only for steam supplied across the site boundary; do not also count its upstream boiler fuel in foreground.

- Selected flow: Industrial steam `ea4e839d-d854-4a7a-a362-b4ccb8dc61ff`
- Flow property / unit: Mass / kg
- Amount rule: Metered purchased steam mass divided by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `tokimura-2017-starch-pearls`

###### Natural gas for on-site heating (`cook_natural_gas`)

Include only when natural gas is combusted on site for cooking or drying; keep this separate from purchased steam.

- Selected flow: Pipeline-quality natural gas `7766e51e-0b64-4fbb-89cb-489c33293137`
- Flow property / unit: Volume / m3
- Amount rule: Metered standard-volume natural gas divided by accepted finished product mass; record meter reference conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources:

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide to air (`cook_fossil_co2_air`)

Include only for on-site fuel combustion; use measured fuel carbon or documented stack measurement.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or fuel-carbon-balanced fossil CO2 mass divided by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen monoxide to air (`cook_no_air`)

Include only for on-site fuel combustion where nitrogen monoxide is measured or separately estimated; do not label aggregate NOx as this flow.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured nitrogen monoxide mass divided by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

### Process: Grading and finished-product gate (`grade`)

Separate accepted product from unsalable dust.

#### Inputs

#### Outputs

##### Product flows

###### Accepted finished tapioca or starch substitute (`grade_tapioca_product`)

Include only saleable food-grade product that meets the declared form and moisture specification.

- Selected flow: Finished starch-prepared tapioca flakes, grains or siftings
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `un-cpc-3-2025`

##### Waste flows

###### Unsalable captured grinding and sieving dust (`grade_sieving_dust`)

Include only captured unsalable dust sent to waste management; saleable food-grade siftings remain product output.

- Selected flow: Dust from Grinding and Sieving `e0f3b3af-7794-4c25-ae58-5e4302b226d2`
- Flow property / unit: Mass / kg
- Amount rule: Measured disposed dust mass divided by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_grades` | grade | Count food-grade flakes, grains and siftings from one batch as accepted product. Attribute inputs by separately metered batch or grade where possible. Allocate unavoidable shared inputs by measured dry product mass across accepted grades and disclose dry masses, shares and moisture. |  |
| `allocation_dust` | grade_sieving_dust | Record unsalable captured dust as waste without avoided-product credit. If siftings are actually saleable food product, classify them as accepted output and revise total reference product mass. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_starch | feed_condition | starch inputs | receiving and issue records | batch; botanical source; supplier; wet mass; moisture | calibrated scale and moisture test | kg | each batch | same production campaign | declared production site | per 1 kg reference flow | meter/scale calibration and batch traceability |
| cp_water | feed_condition | conditioning water | water meter record | batch; meter opening and closing; density basis | calibrated process-water meter | kg | each batch | same production campaign | declared production site | per 1 kg reference flow | meter/scale calibration and batch traceability |
| cp_electricity | form_cook_dry | purchased electricity | submeter and invoice | batch; kWh; voltage; supply geography | reconcile submeter with invoice | MJ | each batch | same production campaign | declared production site | per 1 kg reference flow | meter/scale calibration and batch traceability |
| cp_steam | form_cook_dry | purchased steam | steam meter record | batch; delivered kg; supplier; condensate boundary | meter at site boundary | kg | each batch | same production campaign | declared production site | per 1 kg reference flow | meter/scale calibration and batch traceability |
| cp_gas | form_cook_dry | on-site natural gas | gas meter and invoice | batch; m3; reference temperature and pressure | meter and invoice reconciliation | m3 | each batch | same production campaign | declared production site | per 1 kg reference flow | meter/scale calibration and batch traceability |
| cp_emissions | form_cook_dry | on-site combustion emissions | stack test or fuel analysis | batch; species; measured mass; fuel carbon | species-specific measurement or documented carbon balance | kg | each tested period | same production campaign | declared production site | per 1 kg reference flow | meter/scale calibration and batch traceability |
| cp_product | grade | accepted finished product | batch acceptance record | batch; product form; mass; moisture; reject mass | calibrated scale and moisture test | kg | each batch | same production campaign | declared production site | per 1 kg reference flow | meter/scale calibration and batch traceability |
| cp_dust | grade | unsalable dust | waste transfer record | batch; dust mass; destination; food-grade decision | weigh captured disposed dust | kg | each batch | same production campaign | declared production site | per 1 kg reference flow | meter/scale calibration and batch traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | Divide each recorded exchange by the accepted finished dry-product mass for the same batch; preserve the numerator unit. | row collection protocol; cp_product | exchange per 1 kg reference flow |  |
| reconcile_solids | starch feed, product and dust | Reconcile dry solids input with accepted product, disposed dust and documented other losses; explain the difference. | cp_starch; cp_product; cp_dust | dry-solids reconciliation record |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_batch | all inventory rows | Feed, energy, emissions and product must have the same batch and period; disclose missing records or allocation. | batch ledger, meters and calibration records |
| dq_moisture | starch and product | Record feed and finished moisture and measurement method; do not mix wet and dry mass. | laboratory or inline moisture record |
| dq_emission | on-site combustion | Distinguish measured emissions from fuel-carbon calculations; never map aggregate NOx directly to nitrogen monoxide. | stack records and fuel analysis |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Accepted output must equal 1 kg per 1 kg reference flow; check form, food-grade state, moisture and starch origin. | `un-cpc-3-2025` |
| `validate_energy` | form_cook_dry | Check electricity, steam and gas-meter boundaries and units; reject double counting of the same delivered heat. |  |
| `validate_balance` | all inventory rows | Reconcile starch input, accepted output and dust on dry solids and disclose unexplained differences; no yield benchmark is inferred from the trial method. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | starch-prepared tapioca and analogous substitutes with matching feed, form, technology and gate |
| excluded_use | raw starch, cassava roots, noodles or biscuits |
| required_metadata | starch origin; finished form; accepted moisture; thermal source; geography; batch; upstream datasets |
| required_quality_disclosure | primary-record coverage, missing data, allocation, dry-solids balance and unresolved UUIDs |
| update_trigger | material change in feed origin, heat source, product specification or process |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product classification identity; accessed 2026-09-23 |
| `tokimura-2017-starch-pearls` | literature | Tokimura, Fujita and Kitahara (2017), Physicochemical Properties and Food Uses of Starch from the New Sweetpotato Cultivar Konamizuki, Journal of Applied Glycoscience 64:1–8, doi:10.5458/jag.jag.JAG-2016_010. https://www.jstage.jst.go.jp/article/jag/64/1/64_jag.JAG-2016_010/_pdf/-char/en | Publisher PDF, page 3, Materials and Methods: laboratory pearl route using commercial starch, added water, surface steaming and air drying; not an industrial quantity or all-form rule |
