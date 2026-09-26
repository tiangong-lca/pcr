---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-threading-or-tapping-by-removing-metal-except-lathes-and-way-type-uni-1175b836
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machine-tools for threading or tapping by removing metal, except lathes and way-type unit head machines

## 1. Scope and Applicability

This PCR governs manufacture of a complete machine-tool whose defining operation is threading or tapping by removing metal. Declare whether it cuts external threads or taps internal threads, its workpiece envelope, thread size and pitch capability, spindle configuration and control mode. CPC 3.0 44215 supplies the classification identity; it does not supply a manufacturing recipe. Lathes, way-type unit head machines, general drilling/boring/milling machines, non-cutting thread rolling machines, interchangeable taps and dies, and a machining service supplied to a customer are outside this product identity.

The Chinese terminology was checked against the English boundary: tapping denotes internal threads, metal removal excludes rolling, and 导轨式动力头机床 retains the English term way-type unit head machines to distinguish that excluded construction.

The foreground covers receipt of purchased inputs through fabrication where performed, surface finishing where performed, assembly, factory acceptance and dispatch packaging. It is linked recursively to upstream production and downstream treatment of manufacturing wastes. Customer use, maintenance and final disposal of the machine are excluded from the declared manufacturing result and must be separately modelled before any full-life comparison. No service lifetime, default machine mass or average inventory is asserted.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-threading-or-tapping-by-removing-metal-except-lathes-and-way-type-uni-1175b836 |
| classification_refs | CPC 3.0: 44215; classification reference, not an accepted mapping decision |
| covered_products | Complete accepted threading or tapping machine-tools operating by metal removal |
| excluded_products | Lathes; way-type unit head machines; general drilling/boring/milling machines; thread rolling machines; separate taps/dies; machining services |
| representative_product | A configured complete threading or tapping machine; no universal model or weight |
| production_route | Purchased components plus declared in-house fabrication, machining, finishing, assembly and acceptance |
| market_state | Complete new machine accepted at the manufacturing gate, with separately accounted dispatch packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and supply a complete accepted threading or tapping machine-tool |
| How much | One accepted finished machine with measured net mass M kg |
| How well | Meets the documented purchase specification and factory threading/tapping acceptance test for the declared thread capability |
| How long or cycle | One manufacturing and factory-acceptance cycle; customer service life is outside this result |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Accepted threading or tapping machine-tool |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; configuration; threading/tapping capability; rated drive power where applicable; accepted net mass M; fitted equipment and initial fluid charge; manufacturing site and period; purchased component states; electricity supply geography; packaging scope |

Required qualifiers must be declared in dataset metadata, process notes or the reference-flow description. A missing qualifier makes the foreground package incomplete. The reference UUID remains unresolved: a later candidate matches the English title and CPC 44215, but its Chinese name uses 开口机床 for tapping and 组合头钻床 for the excluded way-type unit head machines. That bilingual identity discrepancy requires database review before adoption. Earlier candidates identified tooling or other machine-tool categories.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| mass_records | material, component, packaging and waste rows | Mass | kg | Use net weighed mass; count-based supplier records require item-specific measured mass, and cable-length records require measured mass per length. Retain the conversion evidence. |
| electricity_energy | manufacturing_electricity | Net calorific value | MJ | Use electrical energy; convert metered kWh to MJ by multiplying by 3.6 in energy_conversion. This is a unit conversion, not a fuel heating-value assumption. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal stock, bed castings and finished components received at the plant in explicitly documented states |
| starting_condition_role | foreground_start |
| product_classification_scope | Complete threading or tapping machine; classification is independent of the purchased-input starting point |
| recursive_input_rule | Attach upstream production to every purchased exchange; expand internally made parts into their actual operations and inputs |
| upstream_dataset_requirement | Match grade, product state, component configuration, geography, technology and period; report any proxy separately |
| disclosure | Disclose outsourced casting, component manufacture and finishing, inbound freight, packaging and all manufacturing waste destinations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete_route | all processes | Retain the as-built bill of materials and routing. Every physical input, reject, transfer to treatment and direct release must be covered or explicitly justified as absent. Add concrete cards for actual exchanges outside the listed route examples; never use an other-materials or other-wastes row. | |
| boundary_upstream | purchased inputs | Include extraction and production of purchased materials, components and packaging through linked upstream datasets. Include actual inbound transport using shipment mass, distance and mode records; a transport service must not replace the carried material. Do not also count materials contained inside a purchased subassembly. | |
| boundary_routes | machining; finishing | Internal transfers remain linked by work order without duplicate external purchases. Foundry work, heat treatment, welding, solvent coating or chemical pretreatment performed on site must be expanded with their actual fuels, chemicals, emissions and wastes. Bought finished parts carry those operations upstream. | jrc-metal-bemp-2020; epa-metal-coating-tsd |
| boundary_treatment | manufacturing wastes | Include transport and treatment burdens for manufacturing waste. A wastewater sent to treatment is a waste exchange; direct releases require individually identified substances and receiving compartments. Unknown releases are missing data, not zero. | jrc-metal-bemp-2020; epa-metal-coating-tsd |
| boundary_cutoff | full package | No automatic mass-only cutoff applies to electrical assemblies, lubricants or hazardous releases. Record exclusions, estimated significance and sensitivity; unresolved significant omissions prevent release of the resulting dataset. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| machining | Component fabrication and machining | conditional | Include when metal stock or castings are machined on site, including acceptance-test coupons | Foreground metal transformation; purchased finished-part routes remain upstream | Inputs and losses attributable to one accepted finished machine |
| finishing | Aqueous washing and epoxy powder coating | conditional | Include the actual washing or epoxy-powder route if performed on site; other finishing routes require their own concrete exchanges | Surface preparation, coating and associated waste handling | Inputs and wastes attributable to one accepted finished machine |
| assembly | Assembly, acceptance and dispatch | required | Every complete machine; component and packaging cards apply only where the stated component is fitted or packaging is used | System integration, factory test, all-site electricity reconciliation and packaging | M kg accepted finished machine |

The cards are collection requirements, not a claim that all variants use every listed input. Establish applicability from the as-built configuration and work-order routing. Record absence explicitly; expand materially different routes before releasing a dataset. No Cartesian expansion of every model, coating and packaging option is required.

### Process: Component fabrication and machining (`machining`)

#### Inputs

##### Product flows

###### Steel Plate (`steel_plate`)

Purchased further-worked alloy-steel plate; include only when this grade/form is used for fabricated parts or acceptance-test coupons. Record grade, thickness, gross issues, unused returns and machining losses.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-metal-bemp-2020`

###### Grey cast iron machine-tool bed casting (`iron_casting`)

Include when an unfinished cast bed enters on-site machining. Weigh the received casting; its upstream dataset must include foundry operations. A finished bought bed is a different product state.

- Selected flow: Grey cast iron machine-tool bed casting
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-metal-bemp-2020`

###### Neat mineral cutting oil (`cutting_oil`)

Include only for the neat-mineral-oil machining route. Record fresh oil additions and inventory changes; recirculation is internal. Water-miscible concentrates require their own formulation-specific exchange.

- Selected flow: Neat mineral cutting oil
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-metal-bemp-2020`

#### Outputs

##### Waste flows

###### Ferrous machining swarf (`swarf`)

Include when ferrous swarf leaves the foreground for recycling. Measure drained mass and residual oil/moisture; segregate incompatible alloy streams and keep recovered oil separate.

- Selected flow: Ferrous machining swarf
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-metal-bemp-2020`

###### Spent mineral cutting oil (`spent_oil`)

Include when spent neat cutting oil is transferred to treatment. Record net mass and receiver; do not count oil retained on swarf a second time.

- Selected flow: Spent mineral cutting oil
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-metal-bemp-2020`

### Process: Aqueous washing and epoxy powder coating (`finishing`)

#### Inputs

##### Product flows

###### Tap water (`water`)

Include purchased tap water used for aqueous washing. Record supply and metered consumption; internally recirculated water is not a new purchase.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-metal-coating-tsd`

###### Epoxy powder coating (`powder_coating`)

Include only if supplier formulation confirms an epoxy powder coating used on the machine. Record fresh powder, recovered powder recirculation and cured coating mass; never substitute resin alone for a formulated coating.

- Selected flow: Epoxy powder coating
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epa-metal-coating-tsd`

#### Outputs

##### Waste flows

###### Aqueous metal-parts washing effluent (`wash_effluent`)

Include aqueous washing effluent transferred to treatment. Measure wet mass, contamination and receiver; sludge separated on site is a distinct waste requiring a separate exchange.

- Selected flow: Aqueous metal-parts washing effluent
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-metal-coating-tsd`

###### Discarded epoxy powder-coating overspray (`powder_waste`)

Include unrecoverable epoxy overspray removed for treatment. Exclude powder returned to the same coating operation; weigh the net discarded amount.

- Selected flow: Discarded epoxy powder-coating overspray
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-metal-coating-tsd`

### Process: Assembly, acceptance and dispatch (`assembly`)

#### Inputs

##### Product flows

###### Alternating-current electric motor (`motor`)

Include a purchased complete AC drive motor when fitted. Record model, power rating, net mass and purchased quantity. Its upstream dataset covers copper, steel and motor manufacture; do not add those contained materials again.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_component.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component`
- Sources:

###### Tapping-machine geared spindle assembly (`spindle`)

Include a purchased complete geared spindle when fitted. Identify gear ratio, spindle interface and mass; an internally made spindle is traced through its actual metalworking inputs rather than purchased twice.

- Selected flow: Tapping-machine geared spindle assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_component.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component`
- Sources:

###### Machine-tool electrical control cabinet (`control_cabinet`)

Include the purchased assembled control cabinet where fitted, with controller, enclosure and switching equipment configuration recorded. A bare enclosure cannot substitute for the populated assembly.

- Selected flow: Machine-tool electrical control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_component.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component`
- Sources:

###### Steel ball bearing (`bearing`)

Include purchased ball bearings assembled separately into the machine. Record bearing specification and mass; exclude bearings already included in the purchased spindle or motor dataset.

- Selected flow: Steel ball bearing
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_component.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component`
- Sources:

###### Steel hexagon-head bolt (`fastener`)

Include separately purchased hexagon-head steel bolts fitted in the machine. Record grade, size, count and measured mass; other fastener designs require distinct identities.

- Selected flow: Steel hexagon-head bolt
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_component.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component`
- Sources:

###### Insulated copper electrical cable (`cable`)

Include separately purchased insulated copper cable installed for machine wiring. Record conductor size, insulation, cut length, mass per length and offcuts; exclude cable already inside a purchased assembly.

- Selected flow: Insulated copper electrical cable
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_component.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component`
- Sources:

###### Wooden pallet (`pallet`)

Include when the machine is shipped on a wooden pallet. Record net pallet mass and any documented reuse allocation; packaging mass is excluded from M.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Low-density polyethylene packaging film (`film`)

Include non-cellular, non-self-adhesive, unlaminated LDPE protective film if used. Record film grade and issued mass less unused returns; packaging mass is excluded from M. Other film constructions require a distinct identity.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual amount per one accepted finished machine using cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Alternating current (`manufacturing_electricity`)

Record purchased electricity for all included machining, washing, powder curing, compressed-air production, assembly and acceptance testing. Submeters are reconciled to the site meter so the same energy is counted once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the actual amount per one accepted finished machine using cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Accepted threading or tapping machine-tool (`finished_machine`)

One complete accepted machine of the declared configuration leaves the factory gate. Net mass M includes the fitted drive, guards, controls and declared initial fluid charge; transport packaging and test workpieces are excluded.

- Selected flow: Accepted threading or tapping machine-tool
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-0-structure-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_priority | shared operations | First subdivide records by work order and meter. For unavoidable shared loads use measured machine-hours or another demonstrated physical driver; record numerator, denominator and reason. Mass allocation is not the default for electrically different machines. | |
| allocation_rework | rejects and rework | Attribute rework, failed acceptance tests and non-saleable rejects to accepted production of the same model/configuration. Do not divide by all started units as though each were accepted. | |
| allocation_recycling | swarf and spent fluids | Internal recovery changes net fresh input and waste output. Do not add an avoided-virgin-material credit inside this manufacturing inventory. Any later recycling benefit calculation must disclose its method and prevent duplicate credits with the receiving dataset. | jrc-metal-bemp-2020 |
| allocation_packaging | reusable pallet | Allocate documented pallet production and refurbishment over evidenced actual uses; absent reuse evidence retain the full pallet burden for the dispatch. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | accepted reference product | calibrated weighing and acceptance report | model; configuration; serial number; accepted net mass M; initial fluid charge | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each machine or documented identical-configuration lot | full manufacturing order | final assembly and acceptance | M = accepted net mass of one complete machine of the same configuration | scale calibration; signed acceptance; as-built bill of materials |
| cp_material | machining; finishing | each purchased material separately | stores ledger and job card | exact grade/formulation; opening and closing stock; receipts; issues; returns; work order |Weigh each named material separately; reconcile stock movement, returns and internal recovery with work-order issues. Net consumption attributable to one accepted finished machine; internal circulation is not a new input | kg | each issue and stock reconciliation | complete production period including rework | included manufacturing operations | per one accepted finished machine | purchase specification; SDS where applicable; weighing records; stock reconciliation |
| cp_component | assembly | each purchased component separately | as-built bill of materials and receiving inspection | component model; purchased state; count; item mass; configuration; rejected items; cable length and mass per length |Weigh representative identical components or obtain traceable supplier net-mass records; verify counts against the as-built bill of materials; weigh cable offcuts. Component count times verified item mass; cable length times verified mass per length; allocate actual rejects to accepted machines | kg | each configuration and purchasing lot | full manufacturing order | assembly including upstream component links | per one accepted finished machine | supplier drawing; weighing record; lot identity; component dataset boundary |
| cp_water | finishing | purchased tap water | submeter and water balance | meter start and end; volume; measured density if volume records used; recirculation; work order |Use a calibrated mass meter or convert recorded volume with documented density and temperature; distinguish fresh purchase from recirculation. Net purchased water attributable to one accepted finished machine | kg | each batch or metered period | complete washing operation | washing line | per one accepted finished machine | meter calibration; density evidence; supply and effluent reconciliation |
| cp_waste | machining; finishing | each waste stream separately | waste weighbridge and transfer manifest | net wet mass; oil and moisture; waste composition; receiver; transport; treatment; work order |Weigh each segregated waste stream; reconcile to transfer manifests and measure retained liquid where relevant. Attributable net mass per one accepted finished machine; do not sum dry and wet masses as separate wastes | kg | each removal batch | manufacturing and related waste removal period | waste generation through first treatment | per one accepted finished machine | weighbridge slips; waste analysis; licensed receiver records |
| cp_packaging | assembly | each packaging item separately | dispatch packing list | pallet mass; film grade and mass; unused returns; reuse history |Weigh pallet and film separately; reconcile dispatched packaging with the machine serial number. Actual packaging attributable to one accepted finished machine, excluded from M | kg | each dispatch | dispatch of the accepted machine | factory dispatch | per one accepted finished machine | packing list; scale record; documented reuse evidence |
| cp_energy | assembly | manufacturing electricity across all included operations | submeter and utility bill | meter readings; kWh; work order; operating hours; shared-load driver; accepted-unit count |Meter the relevant operations, including test and rework; reconcile submeter totals and allocated shared electricity with the facility bill. Attribute measured energy to one accepted finished machine and apply energy_conversion | MJ | each order or production period | same production period as material records | all included plant operations, counted once | per one accepted finished machine | calibrated meters; utility invoice; shared-load calculation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| energy_conversion | manufacturing_electricity | E_MJ = 3.6 * E_kWh; cp_energy supplies attributable metered electrical energy per one accepted finished machine. | E_kWh; cp_energy | MJ per one accepted finished machine | |
| records_to_machine | all exchanges | Assign traceable consumption, component installation and waste records to the accepted serial number. If a homogeneous lot is used, divide attributable totals by accepted units of the same configuration after allocation_priority and allocation_rework. No machine-mass constant is assumed. | work order; accepted count; cp_mass | exchanges per one accepted finished machine | |
| mass_reconciliation | material inputs and outputs | Compare material and component inputs with accepted net mass, packaging, work in progress, segregated waste and documented releases. Explain discrepancies using measured uncertainty and stock timing; do not force closure by inventing a residual exchange. | cp_material; cp_component; cp_mass; cp_waste; cp_packaging | reconciled mass accounting | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | all records | Match site, production period and exact machine configuration; retain make-or-buy decisions for every significant assembly. | as-built bill of materials, routing and purchase records |
| dq_evidence | numerical exchanges | Collect foreground quantities; no external average or numerical range is supplied by this PCR. Missing data require documented estimation and sensitivity in the dataset before acceptance. | primary records; uncertainty; sensitivity and gap register |
| dq_sources | supporting publications | CPC supports classification only. JRC supports machining-fluid and waste segregation principles. EPA supports conditional surface-treatment routes. These sector sources do not establish this machine's bill of materials or a quantitative range. | cited original sections and supplier/site evidence |
| dq_balance | material, electricity and waste | Reconcile inputs, accepted products, rework, stock changes, scrap and utilities. Investigate unresolved significant differences. | signed reconciliation with measurement uncertainties |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | finished_machine | Verify material-removal threading/tapping identity and exclusions before selecting this PCR; declare all required qualifiers. | un-cpc-3-0-structure-2025 |
| validate_basis | all exchanges | Verify M through reference_mass and cp_mass and ensure every exchange uses the same accepted-machine basis. A mass-normalized comparative result requires an explicit subsequent conversion and does not establish functional equivalence between unlike machines. | |
| validate_completeness | bill of materials and routing | Reconcile every significant purchased or manufactured component and actual consumable with concrete inventory exchanges. Cover cutting-tool wear, assembly lubrication, detergents, welding consumables, compressed-air supply, process fuels, offcuts and emissions where they occur. Absence must be evidenced; the listed cards alone do not certify completeness of a site dataset. | jrc-metal-bemp-2020; epa-metal-coating-tsd |
| validate_boundary | purchased components | Prevent double-counting contained metals, bearings, wiring and finishing when an assembled component dataset is used. Verify upstream production and manufacturing-waste treatment coverage. | |
| validate_waste | waste and emissions | Check waste type, mass state, receiver and treatment. Identify each directly released substance and compartment from actual process chemistry and monitoring. Do not map a mixed residue to an elementary substance or silently omit a release. | jrc-metal-bemp-2020; epa-metal-coating-tsd |
| validate_evidence | all rows | A missing exact UUID remains a visible gap and does not authorize a proxy. Do not use unsupported external ranges as measured quantities; do not use conformance limits as empirical ranges. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground data package for a configured complete machine |
| downstream_use | Machine-production process and lifecyclemodel projections with linked upstream and waste-treatment datasets |
| allowed_use | Manufacturing-stage assessment with declared configuration and measured reference mass |
| excluded_use | Customer machining service, automatic full-life claims, or comparison of unlike machines solely per kg |
| required_metadata | Required qualifiers; as-built bill of materials; routing; allocation; sources; upstream links; waste destinations; transport; scope gaps |
| required_quality_disclosure | Missing UUIDs; measurement uncertainty; estimates; unresolved balances; external range-evidence gaps |
| update_trigger | Design, make-or-buy route, energy supply, finishing chemistry, acceptance specification or significant source-data changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, rows 2264–2274: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Category 44215 identity and neighbouring category exclusions; no manufacturing quantities |
| jrc-metal-bemp-2020 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR 30025 EN, 2020, DOI 10.2760/894966, sections 4.1 and 4.5, printed pp. 190 and 226: https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | Original-text qualitative evidence for separate cutting-fluid forms, swarf collection and oil recovery; transferable to in-house metal-component machining, not a machine-specific quantitative dataset |
| epa-metal-coating-tsd | official_guidance | US EPA, National Emission Standards for Hazardous Air Pollutants for Miscellaneous Metal Parts and Products Surface Coating Operations: Technical Support Document; included preliminary industry characterization dated 30 September 1998, printed p. 8-14, PDF p. 113: https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | Original-text qualitative surface preparation, application, curing and powder-coating route evidence; no claim of current legal applicability or a machine-specific consumption range |

These independent publications establish qualitative applicability, not mutually compatible numerical bounds. Site collection is required for every exchange. No external inventory range is adopted.
