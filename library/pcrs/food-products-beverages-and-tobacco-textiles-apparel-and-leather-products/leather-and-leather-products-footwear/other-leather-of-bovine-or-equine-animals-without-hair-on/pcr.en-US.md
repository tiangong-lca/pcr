---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-leather-of-bovine-or-equine-animals-without-hair-on
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Other leather, of bovine or equine animals, without hair on

## 1. Scope and Applicability

This rule covers dry saleable hairless leather made from bovine or equine hides by unhairing, tanning and finishing. This edition applies to an integrated chromium-tanning route. Declare species, received hide condition, tanning technology, final moisture state and intended use for each batch. Hair-on products, synthetic and reconstituted leather, patent and metallised leather, other tanning chemistries, footwear and leather articles are excluded. Wet-blue and crust states are internal intermediates, not this rule’s reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-leather-of-bovine-or-equine-animals-without-hair-on |
| classification_refs | CPC 3.0: 29120; classification context only |
| covered_products | Dry finished hairless bovine or equine leather |
| excluded_products | Hair-on, reconstituted, other-species, patent, metallised, wet-blue and crust leather |
| representative_product | Chromium-tanned dry finished hairless bovine leather |
| production_route | Raw hide reception → unhairing/liming → pickling/chrome tanning → dry finishing |
| market_state | Accepted dry leather, not a fabricated article, delivered by measured mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply processable hairless bovine or equine leather material |
| How much | 1 kg accepted dry finished leather |
| How well | Declared species, tanning technology, final state and accepted quality specification |
| How long or cycle | One delivery at factory gate; no service life specified |
| reference_flow_link | finished_leather |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished hairless bovine or equine leather |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; incoming hide state; tanning route; finished moisture state; leather end use; accepted quality |

Declare all required qualifiers in the foreground data package metadata, process notes or product description.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Weigh net dry finished leather after acceptance, excluding transport packaging; divide all attributable batch inputs and releases by this same mass. |
| electricity_conversion | electricity_ac | Energy | MJ | If meter records kWh, convert at 1 kWh = 3.6 MJ and retain original readings. |
| effluent_compartment | chromium_effluent, chromium_water | Volume or mass | m3 or kg | Distinguish transferred liquid effluent from chromium(III) directly released to receiving water; do not double-count one chromium load. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_1 | foreground | Include hide reception through dry finished leather acceptance, on-site unhairing, tanning, finishing, electricity and effluent handover. | eu-jrc-tan-bref-2013 |
| boundary_2 | upstream | Link actual upstream datasets for hides, chemicals, tap water and electricity; do not treat this foreground rule as their upstream production data. | eu-jrc-tan-bref-2013 |
| boundary_3 | wastewater | If effluent goes off site, record its handover and link treatment data; record chromium(III) elementary release only for measured direct discharge after on-site treatment. | eu-jrc-tan-bref-2013 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received bovine or equine raw hide; record fresh, salted or dried condition |
| starting_condition_role | Foreground manufacturing start |
| product_classification_scope | Hairless bovine or equine leather; CPC 29120 as classification context |
| recursive_input_rule | Purchased wet-blue or crust leather from the same category may enter only a separately declared partial-production route; do not double-count it with the integrated route. |
| upstream_dataset_requirement | Require upstream datasets matching the geography, technology and state of hides and purchased inputs. |
| disclosure | Disclose species, hide preservation, on-site scope, effluent destination and receiving water for direct discharge. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| beamhouse | Hide preparation and unhairing | required | All integrated routes | foreground production | per 1 kg dry finished leather |
| tanyard | Pickling and chromium tanning | conditional | When chromium tanning route applies | foreground production | per 1 kg dry finished leather |
| site_services | Site electricity supply | required | All integrated routes | foreground production | per 1 kg dry finished leather |
| finishing | Dry finishing and acceptance | required | All integrated routes | foreground production | per 1 kg dry finished leather |

### Process: Hide preparation and unhairing (`beamhouse`)

#### Inputs

##### Product flows

###### Bovine raw hide (`raw_bovine_hide`)

Only for bovine batches; weigh raw hide as received.

- Selected flow: Rawhide `440c2098-2f4e-4632-9dcf-32329bcbe4de`
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-tan-bref-2013`

###### Equine raw hide (`raw_equine_hide`)

Only for equine batches; weigh raw hide as received.

- Selected flow: Raw hides and skins of equine animals `a1d67ddb-fb38-433d-8fa7-1d0e18216c34`
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `un-cpc-3-2025`

###### Tap water (`process_water`)

Meter or weigh supplied tap water used in wet processing.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-jrc-tan-bref-2013`

###### Sodium sulfide for unhairing (`unhairing_sulfide`)

Record purchased sodium sulfide product mass for the sulfide unhairing route.

- Selected flow: Sodium sulfide `a3b3c67f-ef15-4a1e-ba7f-8c97ae352b5c`
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-tan-bref-2013`

###### Slaked lime for liming (`liming_lime`)

Record slaked lime product mass for the liming route.

- Selected flow: Slaked lime `49bf5000-b2da-4a30-8349-b0bb44171616`
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-tan-bref-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Hide fleshing waste (`fleshing_waste`)

Weigh fleshing removed from hides; disclose any sale as a co-product.

- Selected flow: Hide fleshing waste
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-jrc-tan-bref-2013`

##### Elementary flows

### Process: Pickling and chromium tanning (`tanyard`)

#### Inputs

##### Product flows

###### Sulfuric acid solution for pickling (`pickling_acid`)

Record 98% sulfuric acid solution product mass charged to pickling.

- Selected flow: Sulfuric acid solution, 98% `efbf8d56-3521-45c1-aac1-3564408f3d01`
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-tan-bref-2013`

###### Sodium chloride for pickling (`pickling_salt`)

Record sodium chloride product mass charged to pickling.

- Selected flow: Industrial sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-tan-bref-2013`

###### Basic chromium sulfate tanning agent (`chrome_tan`)

Record basic chromium sulfate product mass for the chrome-tanning route.

- Selected flow: Basic chromium sulfate `fcccd040-e728-4932-9cbe-363051c308a5`
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `eu-jrc-tan-bref-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Chromium-bearing tannery effluent (`chromium_effluent`)

For transfer to off-site treatment or sewer, meter this segregated liquid effluent at handover.

- Selected flow: Chromium-bearing tannery effluent
- Flow property / unit: Volume / m3
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `eu-jrc-tan-bref-2013`

##### Elementary flows

###### Chromium(III) discharged to receiving water (`chromium_water`)

Only for measured direct discharge after on-site treatment; calculate mass from sampled concentration and discharge volume.

- Selected flow: Chromium(III), to water
- Flow property / unit: Mass / kg
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `eu-jrc-tan-bref-2013`

### Process: Site electricity supply (`site_services`)

#### Inputs

##### Product flows

###### Purchased alternating-current electricity (`electricity_ac`)

Record purchased AC electricity attributable to the integrated leather line in MJ.

- Selected flow: Purchased AC electricity, medium voltage
- Flow property / unit: Energy / MJ
- Amount rule: Measure the attributable batch quantity and divide by the accepted dry finished leather mass of that batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-jrc-tan-bref-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Dry finishing and acceptance (`finishing`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dry finished leather (`finished_leather`)

Weigh saleable dry finished hairless leather after final conditioning and quality acceptance.

- Selected flow: Finished hairless bovine or equine leather
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

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_1 | foreground_process | First subdivide measured operations and assign inputs, wastes and releases to the leather batches that cause them. | eu-jrc-tan-bref-2013 |
| allocation_2 | marketable_fleshings | If fleshings are sold as a marketable co-product, record the sale, traceable mass and allocation basis; do not treat the same material both as zero-burden waste and a co-product. | eu-jrc-tan-bref-2013 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_inputs | beamhouse, tanyard | purchased material | delivery and batch use ledger | material name; species or grade; received mass; batch id | Weigh or reconcile delivery and batch issue records | kg | each batch | production batch or representative year | reporting site | per 1 kg reference flow | meter calibration, batch ledger and handover records |
| cp_water | beamhouse | tap water | water meter | meter start; meter end; batch allocation | Read calibrated meter and allocate measured draw | kg | each batch | production batch or representative year | reporting site | per 1 kg reference flow | meter calibration, batch ledger and handover records |
| cp_waste | beamhouse | fleshings | weighbridge or bin scale | batch id; tare; gross; disposal or sale route | Weigh segregated fleshing waste | kg | each batch | production batch or representative year | reporting site | per 1 kg reference flow | meter calibration, batch ledger and handover records |
| cp_effluent | tanyard | chromium-bearing effluent | effluent flow meter | volume; chromium stream; destination; batch id | Meter segregated effluent at transfer point | m3 | each batch | production batch or representative year | reporting site | per 1 kg reference flow | meter calibration, batch ledger and handover records |
| cp_emission | tanyard | chromium(III) direct release | discharge sampling and meter | Cr(III) concentration; discharge volume; date; receiving water | Measure direct discharge after on-site treatment | kg | each batch | production batch or representative year | reporting site | per 1 kg reference flow | meter calibration, batch ledger and handover records |
| cp_electricity | site_services | purchased AC electricity | electricity meter | meter start; meter end; kWh; allocation key | Read calibrated electricity meter and convert kWh to MJ | MJ | each batch | production batch or representative year | reporting site | per 1 kg reference flow | meter calibration, batch ledger and handover records |
| cp_product | finishing | accepted leather | calibrated scale and acceptance record | species; batch id; dry finished net mass; moisture state; acceptance | Weigh accepted dry leather excluding transport packaging | kg | each batch | production batch or representative year | reporting site | per 1 kg reference flow | meter calibration, batch ledger and handover records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_basis | all inventory rows | Divide each attributable batch quantity by the accepted dry finished leather kg of that batch; retain raw readings and allocation records. | batch quantity; cp_product | per 1 kg reference flow | eu-jrc-tan-bref-2013 |
| electricity_kwh_to_mj | electricity_ac | Metered kWh × 3.6 = MJ; convert before batch normalization. | cp_electricity | MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Species, route, chemical concentration and final market state must match flow and upstream dataset identities. | batch ledger; supplier records |
| dq_balance | all inventory rows | Trace finished leather, incoming hide, fleshings and chromium effluent; explain material-balance residuals. | weighing records; waste manifests |
| dq_time | all inventory rows | Disclose collection period, missing values, allocation method and calibration. | primary records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_1 | reference_flow | The reference product must be accepted dry hairless bovine or equine leather; the reference quantity and every inventory basis use the same batch 1 kg. | eu-jrc-tan-bref-2013 |
| validation_2 | conditional_rows | Bovine and equine raw-hide inputs are mutually exclusive by batch; transferred effluent and direct-water chromium loads must not duplicate one release. | eu-jrc-tan-bref-2013 |
| validation_3 | uuid_and_range | Keep unresolved flow UUIDs under review; without two independent original-text sources, do not replace foreground measurements with external numeric intervals. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for dry finished hairless bovine or equine leather |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Model leather material inputs when species, state, geography and chromium-tanning technology match. |
| excluded_use | Do not substitute for wet-blue, crust, ovine, reconstituted leather or fabricated articles. |
| required_metadata | species; received hide state; chrome route; final moisture state; geography; collection year; effluent destination |
| required_quality_disclosure | meter coverage; unresolved UUIDs; missing range evidence; co-product handling; mass-balance residual |
| update_trigger | Material change in technology, incoming state, electricity supply or effluent route. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | classification identity; adjacent-category boundary |
| eu-jrc-tan-bref-2013 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Tanning of Hides and Skins, 2013; https://eippcb.jrc.ec.europa.eu/sites/default/files/2019-11/TAN_Published_def.pdf | process decomposition; main inputs and outputs; effluent boundary |
