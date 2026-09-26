---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-mowers-including-cutter-bars-for-tractor-mounting
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other mowers, including cutter bars for tractor mounting

## 1. Scope and Applicability

This PCR governs gate-to-gate foreground data packages for manufacturing complete mowing machines other than mowers for lawns, parks or sports grounds, and for complete cutter-bar assemblies intended for tractor mounting. It supports model-specific disc, reciprocating cutter-bar, flail, rotary and comparable agricultural or forage mowers. It is not a use-phase, maintenance or end-of-life rule.

The dataset shall represent one declared model and one manufacturing site, or an explicitly documented group of sites. Record route-specific exchanges only when the model and site use that route. Purchased components not made at the reporting factory remain visible product inputs linked to upstream datasets; do not replace them with a generic "mower materials" exchange.

For minimum configuration coverage, the representative complete-mower route is bounded to a tractor-mounted disc mower of the Land Pride DM3600/DM3700 type documented in the cited manuals. Its BOM crosswalk shall resolve, as purchased assemblies or as in-house-made parts with their atomic materials and processes, the frame and hitch, hydraulic cylinder, belt drive, cutter unit, gearbox, PTO driveline, safety guards/curtains and mounting fasteners. This is a configuration checklist, not a claim that every CPC 44123 product uses those assemblies or that they are all made from the flat-steel row below. A stand-alone complete cutter bar uses the cutter-bar output boundary; a purchased complete cutter bar may be an input only when incorporated into a different complete mower configuration.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-mowers-including-cutter-bars-for-tractor-mounting` |
| classification_refs | CPC 3.0 `44123` (exact) |
| covered_products | Complete agricultural or forage mowers other than lawn, park or sports-ground mowers; complete cutter-bar assemblies for tractor mounting; disc, reciprocating cutter-bar, flail, rotary and comparable mowing configurations. |
| excluded_products | Lawn, park or sports-ground mowers (CPC 44121); combine harvester-threshers; hay rakes, tedders and other non-mowing haymaking machinery; balers; other harvesting machinery; loose spare parts that do not constitute a complete mower or cutter-bar assembly. |
| representative_product | A finished, guarded and functionally tested mower or tractor-mountable cutter-bar assembly at the manufacturer gate. |
| production_route | Model-specific material and component receipt, make-or-buy-resolved cutting/forming/machining, welding or fastening, optional dry-filter powder coating and curing, assembly, first fill, functional test and packaging. |
| market_state | Complete new equipment or a complete new cutter-bar assembly, identified by model and delivered at the manufacturer gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete new mower within the defined category, or a complete new tractor-mountable cutter-bar assembly. |
| How much | 1 kg net product mass at the manufacturer gate. |
| How well | Conforms to the declared model and includes the guards, drive elements, mounting hardware and first-fill lubricant included in the saleable product. |
| How long or cycle | One manufacturing output; service life is not part of the reference amount. |
| reference_flow_link | `other_mower_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other mowers, including cutter bars for tractor mounting `21019316-3de7-4b72-b23f-74fdaee3b361` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and configuration; complete mower or complete cutter-bar assembly; cutting technology; mounting interface; working width; drive, PTO or hydraulic configuration; net-product mass boundary; included guards, attachments, accessories and first fills; coating system; packaging state; manufacturing site and reporting period |

Every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-based exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass by calibrated weighing or a controlled model BOM reconciled to weighing. Exclude transport packaging and include first-fill lubricant and attached saleable equipment. |
| `energy_quantity` | Electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The state-100 direct read of Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae` reports Net calorific value with this energy-property UUID and the energy unit group. Convert metered electricity using exactly 1 kWh = 3.6 MJ, retain the original kWh reading and conversion worksheet, and do not combine electricity with fuels. |
| `gas_volume` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature and pressure reference conditions. Do not convert from mass without documented composition, density and reference conditions. |
| `normalization` | All inventory rows | Row-specific property | Row-specific reference unit | Report each exchange per 1 kg net reference product and retain the absolute numerator and saleable-output denominator. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `foreground_gate_to_gate` | Declared manufacturing site | Include directly controlled receipt and internal handling, cutting, forming, machining, welding or fastening, route-applicable surface treatment and coating, assembly, first fill, functional test, packaging and on-site waste or emission handling through the manufacturer gate. | `un-cpc-3-0-structure-2025`; `land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006`; `us-epa-metal-parts-surface-coating-tsd-2001` |
| `purchased_input_linking` | Purchased materials, components, energy and packaging | Record every purchased atomic exchange at the factory boundary and link it to a representative upstream dataset. Do not add upstream burdens again as direct foreground emissions. |  |
| `route_applicability` | Conditional operations and exchanges | Declare each route applicable or not applicable for the model and site. A conditional row may be zero only with evidence that the operation or exchange is absent. |  |
| `capital_and_service_exclusion` | Foreground inventory | Exclude capital equipment, buildings, employee commuting, product use, maintenance and end of life unless separately added and disclosed for a broader study boundary. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, energy carriers and packaging received at the manufacturing-site gate. |
| starting_condition_role | Upstream datasets supply cradle-to-gate burdens; the foreground starts at receipt and internal handling. |
| product_classification_scope | Complete products in CPC 3.0 subclass 44123, independent of cutting technology or mounting configuration. |
| recursive_input_rule | A purchased complete mower or cutter-bar assembly in the same category remains a disclosed product input; do not recursively decompose it unless its supplier dataset provides that decomposition. |
| upstream_dataset_requirement | Match material grade or product state, component technology, geography, energy market, packaging state and delivery boundary as closely as available; disclose proxies. |
| disclosure | Declare model, site, period, starting condition, purchased assemblies, applicable routes, exclusions, proxies and whether packaging is included in the delivery boundary. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_and_fabrication` | Material preparation and fabrication | required | Always include for the represented product. | Converts purchased material and components into fabricated structures and cutting assemblies. | Per 1 kg net reference product. |
| `surface_treatment_and_coating` | Dry-filter powder coating and curing | conditional | Include only when the represented parts are powder coated on site in a dry-filter booth and cured on site; document other surface routes separately and do not force them into these rows. | Applies powder, recovers eligible overspray, captures unrecovered residue and cures the coating. | Per 1 kg net reference product. |
| `assembly_testing_and_packaging` | Assembly, testing and packaging | required | Always include; individual conditional inputs apply only when used. | Produces the saleable, tested and packaged output. | Per 1 kg net reference product. |

### Process: Material preparation and fabrication (`material_preparation_and_fabrication`)

#### Inputs

##### Product flows

###### Hot-rolled non-alloy flat steel (`hot_rolled_non_alloy_flat_steel`)

Record this exact steel state only where used; other grades, widths and product states require separate atomic rows.

- Selected flow: Flat-rolled products of non-alloy steel, not further worked than hot-rolled, of a width of less than 600 mm `9705bbad-51bd-4ee8-af46-21324f57c577`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass minus documented clean returns; reconcile to the model BOM and steel scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_material_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Frame and hitch assembly (`frame_and_hitch_assembly`)

Record the purchased complete frame-and-hitch assembly when it crosses the factory gate. When made on site, exclude this row and record its grade-specific materials, fabrication exchanges and scrap instead.

- Selected flow: Tractor-mounted mower frame and hitch assembly
- Flow property / unit: Mass / kg
- Amount rule: Purchased consumption from the `cp_component_bom_records` usable-stock control volume, assigned from the model BOM; include consumed rejects, exclude only unused external returns, and do not also count materials already embodied in the purchased assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Hydraulic cylinder (`hydraulic_cylinder`)

Record an assembled linear-acting hydraulic cylinder when installed in the represented mower configuration.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass / kg
- Amount rule: Purchased consumption from the `cp_component_bom_records` usable-stock control volume, assigned from supplier packing data and the verified model BOM; include consumed assembly rejects and exclude only unused external returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Belt-drive assembly (`belt_drive_assembly`)

Record the purchased installation-ready belt-drive assembly, including its supplier-defined belts and pulleys, when this make-or-buy route applies.

- Selected flow: Mower belt-drive assembly
- Flow property / unit: Mass / kg
- Amount rule: Purchased consumption from the `cp_component_bom_records` usable-stock control volume, assigned from the model BOM; include consumed rejects, exclude only unused external returns, and exclude loose replacement belts not delivered with the product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Cutter-unit assembly (`cutter_unit_assembly`)

Record a purchased internal cutter unit when it is incorporated into a complete mower. Do not use this row for a stand-alone complete cutter bar sold as the reference product.

- Selected flow: Mower cutter-unit assembly
- Flow property / unit: Mass / kg
- Amount rule: Purchased consumption from the `cp_component_bom_records` usable-stock control volume, assigned from the model BOM; include consumed rejects, exclude only unused external returns, and exclude this row when the cutter unit is made on site from separately recorded materials and parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Purchased complete cutter bar (`purchased_complete_cutter_bar`)

Record a purchased complete tractor-mountable cutter bar only when it is incorporated into a different complete mower. Exclude it when the dataset output is itself a stand-alone cutter bar or when the internal cutter-unit row is used for the same hardware.

- Selected flow: Other mowers, including cutter bars for tractor mounting `21019316-3de7-4b72-b23f-74fdaee3b361`
- Flow property / unit: Mass / kg
- Amount rule: Purchased consumption from the `cp_component_bom_records` usable-stock control volume, assigned to the receiving mower model; include consumed rejects, exclude only unused external returns, and prevent recursive decomposition or duplicate cutter-unit input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Mower gearbox (`mower_gearbox`)

Record the purchased mower gearbox when installed; do not substitute a gearbox from another application.

- Selected flow: Mower gearbox
- Flow property / unit: Mass / kg
- Amount rule: Purchased consumption from the `cp_component_bom_records` usable-stock control volume, assigned from the model BOM; include consumed rejects, exclude only unused external returns, and include factory-supplied lubricant only if the supplier dataset excludes it and the mass is separately known.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006`

###### PTO driveline (`pto_driveline`)

Record the purchased tractor PTO driveline supplied with the represented mower configuration.

- Selected flow: Tractor PTO driveline for mower
- Flow property / unit: Mass / kg
- Amount rule: Purchased consumption from the `cp_component_bom_records` usable-stock control volume, assigned from the model BOM; include consumed rejects, exclude only unused external returns, and exclude drivelines not supplied with the saleable product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006`

###### Safety-guard and curtain assembly (`safety_guard_and_curtain_assembly`)

Record purchased installation-ready guards and flexible protective curtains supplied on the finished mower. When made on site, record their material-specific inputs and fabrication instead.

- Selected flow: Mower safety-guard and curtain assembly
- Flow property / unit: Mass / kg
- Amount rule: Purchased consumption from the `cp_component_bom_records` usable-stock control volume, assigned from the model BOM; include consumed rejects, exclude only unused external returns, and reconcile all guards required for the saleable configuration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006`

###### Frame-and-hitch steel hex-head cap screws (`frame_hitch_hex_head_cap_screws`)

For the bounded DM3605/DM3606/DM3607 frame-and-hitch configuration, record purchased screws separately from nuts, washers and pins. Retain manufacturer part number, specification and actual current-model count for 802-058C HHCS 5/8-11X2 1/2 GR5, 802-204C HHCS 3/4-10X3 3/4 GR5, 802-701C HHCS 1 1/8-7X8 1/2 GR5 and 802-706C HHCS 3/4-10X8 1/2 GR5 FTHD. The parts table establishes these identities but not every current configuration count, so the controlled BOM or drawing shall supply each count.

- Selected flow: Frame-and-hitch steel hex-head cap screws
- Flow property / unit: Mass / kg
- Amount rule: Opening usable stock plus external receipts minus closing usable stock and unused external returns, or equivalently gross process issues minus unused returns to the same usable stock. Include screws consumed in rejected assemblies; do not subtract rejects. Record their separately measured mass under the actual atomic waste destination, and normalize all attributable consumption by conforming net output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Frame-and-hitch steel hex nuts (`frame_hitch_steel_hex_nuts`)

For the bounded DM3605/DM3606/DM3607 frame-and-hitch configuration, record purchased nuts separately. Retain manufacturer part number, specification and actual current-model count for 803-021C NUT HEX 5/8-11 PLT, 803-027C NUT HEX 3/4-10 PLT, 803-048C NUT HEX JAM 3/4-10 PLT, 803-099C NUT HEX 1 1/8-7 PLT and 803-299C NUT HEX FLG TOP LK 3/4-10 PLT. The controlled BOM or drawing shall supply the count for each part number.

- Selected flow: Frame-and-hitch steel hex nuts
- Flow property / unit: Mass / kg
- Amount rule: Opening usable stock plus external receipts minus closing usable stock and unused external returns, or equivalently gross process issues minus unused returns to the same usable stock. Include nuts consumed in rejected assemblies; do not subtract rejects. Record their separately measured mass under the actual atomic waste destination, and normalize all attributable consumption by conforming net output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Frame-and-hitch steel washers (`frame_hitch_steel_washers`)

For the bounded DM3605/DM3606/DM3607 frame-and-hitch configuration, record purchased washers separately. Retain manufacturer part number, specification and actual current-model count for 804-021C WASHER FLAT 5/8 SAE PLT, 804-022C WASHER LOCK SPRING 5/8 PLT, 804-025C WASHER FLAT 3/4 SAE PLT and 804-186C WASHER BELLEVILLE .761 ID DM36. The manual explicitly gives quantity 32 for 804-186C; the controlled BOM or drawing shall confirm that quantity and supply each other current-model count.

- Selected flow: Frame-and-hitch steel washers
- Flow property / unit: Mass / kg
- Amount rule: Opening usable stock plus external receipts minus closing usable stock and unused external returns, or equivalently gross process issues minus unused returns to the same usable stock. Include washers consumed in rejected assemblies; do not subtract rejects. Record their separately measured mass under the actual atomic waste destination, and normalize all attributable consumption by conforming net output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Frame-and-hitch retaining pins (`frame_hitch_retaining_pins`)

For the bounded DM3605/DM3606/DM3607 frame-and-hitch configuration, record purchased retaining pins separately. Retain manufacturer part number, specification and actual current-model count for 805-065C PIN WIRE RETAINING 1/4 X 1 3/4 and 805-103C PIN LINCH 7/16 X 1 3/4. The controlled BOM or drawing shall supply the count for each part number; do not infer material grade from the general pin description.

- Selected flow: Frame-and-hitch retaining pins
- Flow property / unit: Mass / kg
- Amount rule: Opening usable stock plus external receipts minus closing usable stock and unused external returns, or equivalently gross process issues minus unused returns to the same usable stock. Include pins consumed in rejected assemblies; do not subtract rejects. Record their separately measured mass under the actual atomic waste destination, and normalize all attributable consumption by conforming net output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_records`
- Sources: `land-pride-disc-mower-parts-2022`

###### Fabrication electricity (`fabrication_electricity`)

Record electricity used by cutting, forming, machining, welding, extraction and directly associated support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Allocated calibrated-meter consumption for the process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_energy_records`
- Sources:

###### Fabrication natural gas (`fabrication_natural_gas`)

Record natural gas only when combusted in an applicable on-site fabrication or thermal-cutting operation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or stock-balance volume allocated to the operation; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_energy_records`
- Sources:

###### Industrial oxygen (`industrial_oxygen`)

Record purchased oxygen only when oxy-fuel cutting is performed within the foreground boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered withdrawal or cylinder stock balance; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_material_records`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

###### Carbon-dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Record welding-grade carbon dioxide only when externally supplied carbon dioxide is used as GMAW shielding gas.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Cylinder or bulk-tank stock balance allocated to GMAW; record supplier carbon origin and reconcile the consumed mass to the fossil and biogenic direct-release rows, measured capture/retention and inventory change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shielding_gas_balance`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

###### Solid steel welding wire (`solid_steel_welding_wire`)

Record solid steel consumable wire only for the applicable GMAW route. The UUID is unresolved; flux-cored wire shall not be substituted.

- Selected flow: Solid steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Issued spool mass minus documented returned wire; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_material_records`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel scrap (`steel_scrap`)

Record segregated steel offcuts, rejected parts and machining scrap leaving for recycling or disposal; internal clean returns are not outputs.

- Selected flow: Scrap steel `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound mass by disposition, reconciled with steel input, product incorporation and inventory change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_waste_records`
- Sources:

###### Captured welding fume and dust (`captured_welding_fume_dust`)

Record welding particulate captured in hoods, filters or dust collectors and sent off site. Keep it separate from particulate released to air and from internally cleaned reusable metal.

- Selected flow: Captured welding fume and dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected residue leaving the site, net of container tare, classified by actual hazard status and treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_waste_records`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

##### Elementary flows

###### Welding particulate matter (`welding_particulate_matter`)

Record direct welding particulate released to air after controls. Use a more specific exact flow when a measured particle-size fraction is available.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or a documented site-specific calculation based on consumable use, capture and control performance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

###### Fossil shielding-carbon-dioxide release (`shielding_carbon_dioxide_release_fossil`)

Record supplied shielding carbon dioxide released directly to outdoor air only when supplier documentation verifies fossil carbon origin. This is not combustion carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Shielding-gas input minus measured capture, chemical retention, product retention and inventory change; use the unspecified-air flow only when the physical discharge is verified as outdoor air but cannot be assigned a more specific public compartment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shielding_gas_balance`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

###### Biogenic shielding-carbon-dioxide release (`shielding_carbon_dioxide_release_biogenic`)

Record supplied shielding carbon dioxide released directly to outdoor air only when supplier documentation verifies biogenic carbon origin. Do not report the same gas in the fossil row.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Shielding-gas input minus measured capture, chemical retention, product retention and inventory change; use the unspecified-air flow only when the physical discharge is verified as outdoor air but cannot be assigned a more specific public compartment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shielding_gas_balance`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

###### Fabrication fossil carbon dioxide (`fabrication_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide from natural-gas combustion in this process; exclude upstream electricity and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or documented fuel-carbon balance for `fabrication_natural_gas`; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources:

### Process: Surface treatment and coating (`surface_treatment_and_coating`)

#### Inputs

##### Product flows

###### Powder coating (`powder_coating`)

Record fresh powder coating used on site. Document chemistry and do not relabel generic powder as polyester-specific without supplier evidence.

- Selected flow: Powder Coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass / kg
- Amount rule: Fresh powder issued minus documented unopened return; disclose internal recovered overspray separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_material_records`
- Sources: `us-epa-metal-parts-surface-coating-tsd-2001`

###### Surface-treatment electricity (`surface_treatment_electricity`)

Record electricity used by applicable cleaning, pretreatment, coating, ventilation and curing equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Allocated calibrated-meter consumption for the applicable process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_energy_records`
- Sources:

###### Surface-treatment natural gas (`surface_treatment_natural_gas`)

Record natural gas only when an on-site gas-fired drying or curing oven is used for the represented parts.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or stock-balance volume allocated to the applicable oven; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_energy_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Powder-coating waste (`powder_coating_waste`)

Record unrecovered overspray, spent dry booth-filter residue and rejected cured powder coating that leave the system. Recovered powder returned to application is an internal loop, not an input or waste output.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound residue plus inventory change, reconciled to fresh powder input, powder deposited on accepted and rejected parts, and verified internal recovery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_waste_records`
- Sources: `us-epa-metal-parts-surface-coating-tsd-2001`

##### Elementary flows

###### Surface-treatment fossil carbon dioxide (`surface_treatment_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide from natural gas burned in this process; exclude upstream electricity and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or documented fuel-carbon balance for `surface_treatment_natural_gas`; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources:

### Process: Assembly, testing and packaging (`assembly_testing_and_packaging`)

#### Inputs

##### Product flows

###### Assembly electricity (`assembly_electricity`)

Record electricity used for final assembly, controlled final test and directly associated packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Allocated calibrated-meter consumption for the process and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy_records`
- Sources:

###### SAE 90 gear lubricating oil (`sae_90_gear_lubricating_oil`)

Record first-fill SAE 90 gear lubricant incorporated in the saleable product. The UUID is unresolved; diesel fuel shall not be substituted. Separately record drained or spilled lubricant that leaves the system.

- Selected flow: SAE 90 gear lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Gross dispensed mass minus recovered clean return and separately reported used-lubricating-oil output; reconcile the retained first-fill mass to the product BOM.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_material_records`
- Sources: `land-pride-disc-mower-operator-2006`

###### Diesel test fuel (`diesel_test_fuel`)

Record diesel actually combusted in on-site functional testing only for an engine-driven model. Include fuel for an external test tractor only when controlled by the reporting site. Never include residual fuel transferred with the saleable product in this row.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Test-tank opening mass plus issued fuel minus closing mass, recovered/returned fuel, spills and `diesel_fuel_retained_in_product`; allocate only the combusted balance to conforming tested output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_material_records`
- Sources:

###### Diesel fuel retained in product (`diesel_fuel_retained_in_product`)

Record residual diesel physically transferred with an engine-driven saleable product when present. This is delivered product content, not combusted test fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Measured closing fuel mass in conforming units at the manufacturer gate, excluding fuel in external test equipment and excluding any amount reported as combusted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_material_records`
- Sources:

###### Corrugated-cardboard packaging (`corrugated_cardboard`)

Record corrugated cardboard incorporated in delivered packaging when used.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Gross cardboard issued to packing minus separately weighed cardboard rejects and clean returns; reconcile the mass incorporated in delivered packaging by sample weighing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Wooden pallet (`wooden_pallet`)

Record EURO-format wooden pallets only when that exact pallet is physically transferred to the customer or ownership otherwise leaves the reporting organization. Use another atomic row for a different pallet type.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Actual mass of new or ownership-transferred pallets assigned to delivered output, net of separately weighed rejects. For a supplier- or pool-owned returnable pallet, report zero transferred pallet mass here and link the upstream pallet-use service or use-cycle dataset once; never divide again when that dataset already represents one use cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Other mower reference product (`other_mower_reference_product`)

Record conforming saleable net product mass after final assembly and test. Exclude packaging from product-flow mass. Retain absolute conforming output mass before normalization.

- Selected flow: Other mowers, including cutter bars for tractor mounting `21019316-3de7-4b72-b23f-74fdaee3b361`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product_records`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Used lubricating oil (`used_lubricating_oil`)

Record gearbox lubricant drained after filling or testing and lubricant spills that leave the site as waste; clean lubricant returned to the dispensing system is an internal loop.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Weighed drained or spilled lubricant leaving the system, net of container tare, reconciled to gross dispensed, clean return and lubricant retained in accepted and rejected products.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste_records`
- Sources: `land-pride-disc-mower-operator-2006`

###### Corrugated-cardboard scrap (`corrugated_cardboard_scrap`)

Record corrugated-cardboard cutting, damage and packing rejects that leave the site; clean returned sheets are not waste outputs.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Weighed cardboard rejects leaving the system, net of container tare, reconciled to gross cardboard issue, clean returns and delivered packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste_records`
- Sources:

###### Wooden-pallet scrap (`wooden_pallet_scrap`)

Record damaged or rejected wooden pallets leaving the site as waste, separately from pallets transferred with products or returned to an owner/pool.

- Selected flow: Wooden-pallet scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed pallet waste leaving the system, net of tare, with pallet type, owner, damage cause and destination recorded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste_records`
- Sources:

##### Elementary flows

###### Test fossil carbon dioxide (`test_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide when diesel is combusted during an included test; exclude upstream diesel supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Exhaust measurement or documented fuel-carbon balance for `diesel_test_fuel`; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide_first` | Distinct models, routes and lines | Subdivide records by model, line, batch, operating time or another physical driver before allocation. |  |
| `recycled_scrap_no_avoided_burden` | Recoverable outputs | Report outbound waste mass and destination. Do not credit avoided virgin material inside the foreground inventory; declare any recycling allocation outside this boundary. |  |
| `shared_resource_allocation` | Shared utilities and operations | If subdivision is infeasible, allocate by a documented causal physical driver such as machine time, metered energy, treated area, weld length or processed mass; justify any economic allocation. |  |
| `rework_and_rejects` | Rework, rejected components and final rejects | Assign internal rework burdens to conforming output. Deduct supplier-returned components from gross input, retain their return evidence, and dismantle final rejects into separately measured atomic material/component/waste destinations. Report no umbrella "rejected mower" flow and do not omit non-steel fractions. |  |
| `pallet_ownership_and_use` | Wooden pallets | Distinguish physical ownership transfer from temporary use. Report actual transferred pallet mass only when ownership leaves the reporting organization; for returnable/pool pallets link one upstream use-cycle or service dataset and do not divide a per-use dataset by reuse cycles again. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_material_records` | `material_preparation_and_fabrication` | material and process-gas inputs | BOM, issue, return and cylinder records | identity; grade/purity; opening stock; receipts; issues; returns; closing stock; model/batch | Reconcile controlled inventory records to BOM and production. Aggregation: Sum net issues by atomic flow; allocate with a physical driver. | kg or m3 | each batch; monthly aggregation | dataset period | represented site | per 1 kg reference flow | BOM, supplier specification, stock reconciliation, calibration |
| `cp_component_bom_records` | `material_preparation_and_fabrication` | purchased mower assemblies and fastener families | controlled BOM, make-or-buy decision, usable-stock, process-issue, external-return and reject records | model/revision; manufacturer part number/specification/count; supplier; product state; opening usable stock; external receipts; gross process issues; unused internal returns; closing usable stock; unused external returns; consumed rejects; installed mass | Crosswalk every representative configuration item to one purchased row or to its in-house atomic materials/processes and prohibit both for the same item. Keep external purchases in the usable-stock control volume; record in-house transfers from their producing foreground process without treating them as external receipts. Aggregation: Direct model assignment. Purchased consumption equals opening usable stock plus external receipts minus closing usable stock minus unused external returns; an equivalent issue basis is gross process issues minus unused returns to the same stock. Replacement issues for rejects remain consumed input. Unused internal returns re-enter the same usable stock and are represented once through either closing stock or the issue-basis return, never both. Include consumed rejects in the input and report their measured mass separately under actual atomic waste destinations; normalize by conforming net output. | kg | each BOM revision and batch | dataset period | represented site | per 1 kg reference flow | approved BOM, parts list, supplier specification, stock reconciliation, issue/return record, receiving scale, disposition record |
| `cp_fabrication_energy_records` | `material_preparation_and_fabrication` | electricity and natural gas | submeter, invoice and operating records | meter start/end; fuel volume; reference conditions; machine hours; output | Prefer submeters and reconcile totals to invoices. Aggregation: Allocate residual shared use by machine time or another causal driver. | MJ or m3 | continuous or invoice; monthly aggregation | dataset period | represented site | per 1 kg reference flow | calibration, invoice reconciliation, allocation worksheet |
| `cp_fabrication_waste_records` | `material_preparation_and_fabrication` | steel scrap | scale tickets and manifests | identity; gross/tare/net mass; date; destination; disposition | Sum outbound tickets and reconcile inventory change. Aggregation: Direct batch assignment or processed-steel mass. | kg | each shipment | dataset period | represented site | per 1 kg reference flow | scale calibration, manifest, mass balance |
| `cp_shielding_gas_balance` | `material_preparation_and_fabrication` | supplied shielding gas and direct release | supplier certificate, cylinder/bulk stock, capture and exhaust records | carbon origin; opening stock; receipts; closing stock; returned gas; capture/retention; discharge point; compartment | Verify fossil or biogenic origin, balance consumed gas to capture/retention and direct release, and document the actual outdoor discharge; use unspecified air only when no more specific public compartment is defensible. Aggregation: Direct GMAW assignment; fossil and biogenic releases are mutually exclusive portions of the consumed gas. | kg | each delivery/batch; monthly aggregation | dataset period | represented site and discharge point | per 1 kg reference flow | supplier origin certificate, stock reconciliation, capture record, ventilation diagram |
| `cp_surface_material_records` | `surface_treatment_and_coating` | powder-coating input | purchase, formulation, stock and recovery records | powder identity; chemistry; opening stock; receipts; fresh issue; unopened return; recovered overspray; closing stock; treated area | Reconcile fresh powder to accepted coating, rejects, internal recovery and outbound powder waste. Aggregation: Direct batch or treated surface area. | kg | each batch; monthly aggregation | dataset period | represented dry-filter powder line | per 1 kg reference flow | supplier specification, stock reconciliation, booth recovery log |
| `cp_surface_energy_records` | `surface_treatment_and_coating` | electricity and natural gas | submeter, invoice and oven records | meter start/end; fuel volume; reference conditions; line hours; output | Prefer line submeters and reconcile totals to invoices. Aggregation: Treated area, line time or direct batch. | MJ or m3 | continuous or invoice; monthly aggregation | dataset period | represented site | per 1 kg reference flow | calibration, invoice reconciliation, allocation worksheet |
| `cp_surface_waste_records` | `surface_treatment_and_coating` | powder overspray, filter residue and coating rejects | booth recovery, filter-change, reject and outbound scale records | fresh powder; recovered powder; deposited coating; rejected coated parts; filter tare/gross; outbound residue; destination | Keep verified internal recovery out of boundary flows and weigh each residue leaving the system. Aggregation: Direct batch or treated surface area; close the powder balance. | kg | each batch and filter change | dataset period | represented dry-filter powder line | per 1 kg reference flow | scale calibration, recovery log, filter-change record, waste manifest |
| `cp_assembly_energy_records` | `assembly_testing_and_packaging` | electricity | submeter, invoice and operating records | meter start/end; line hours; conforming output | Prefer submeters and reconcile totals to invoices. Aggregation: Line time or conforming output mass. | MJ | continuous or invoice; monthly aggregation | dataset period | represented site | per 1 kg reference flow | calibration, invoice reconciliation, allocation worksheet |
| `cp_assembly_material_records` | `assembly_testing_and_packaging` | lubricant, combusted test fuel and delivered residual fuel | dispensing, tank, issue, return, spill and stock records | identity; opening/closing stock; receipts; issues; clean returns; drains/spills; retained first fill; test-tank start/end; delivered fuel; model; tested units | Close separate lubricant and diesel balances; never treat delivered residual fuel as combusted. Aggregation: Direct model assignment; allocate only verified combustion to tested output. | kg | each batch/test; monthly aggregation | dataset period | represented site | per 1 kg reference flow | dispensing calibration, tank reading, stock reconciliation, test record, product gate record |
| `cp_assembly_waste_records` | `assembly_testing_and_packaging` | lubricant, packaging and final-reject outputs | reject, spill/drain, dismantling, scale and manifest records | row identity; rejected unit/component; mass; internal rework; supplier return; dismantled fractions; tare; destination | Track every rejected component and final unit through rework, supplier return or measured atomic outbound fractions; separately weigh oil, cardboard and pallet wastes. Aggregation: Direct model assignment; reconcile all rejects and prevent double counting with gross inputs. | kg | each event; monthly aggregation | dataset period | represented site | per 1 kg reference flow | nonconformance record, dismantling sheet, scale ticket, return note, waste manifest |
| `cp_packaging_records` | `assembly_testing_and_packaging` | packaging inputs | specification, purchase, ownership, return and reject records | identity; mass; quantity per shipment; owner; ownership transfer; upstream dataset basis; clean return; reject mass; model | Verify delivered packaging by calibrated sample weighing and document pallet ownership and upstream reference flow. Aggregation: Direct delivery configuration; never divide again when the upstream pallet dataset is already per use cycle. | kg | each revision; period aggregation | dataset period | represented site | per 1 kg reference flow | approved specification, weighing record, ownership/return agreement, upstream dataset review |
| `cp_reference_product_records` | `assembly_testing_and_packaging` | product output | scale and controlled BOM records | gross; packaging tare; net mass; model; serial/batch; quantity | Prefer calibrated net weighing; reconcile BOM alternatives. Aggregation: Sum conforming net output and normalize by that denominator. | kg | each unit or controlled batch | dataset period | represented site | per 1 kg reference flow | scale calibration, BOM revision, inspection record |
| `cp_air_emission_records` | applicable foreground process | particulate and fossil CO2 | stack test, control log, fuel analysis and calculation | pollutant; concentration/flow; duration; fuel; carbon; capture/control | Prefer site measurements; otherwise retain a transparent site-specific balance or factor calculation. Aggregation: Direct operation or causal fuel/consumable. | kg | valid test/reporting interval | representative of dataset period | represented site and point | per 1 kg reference flow | test report, calibration, control log, worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | Every exchange | normalized amount = absolute exchange / conforming net product mass | absolute amount; conforming net product mass | amount per 1 kg product |  |
| `direct_fossil_co2` | On-site fuel combustion | Use measured fuel and documented carbon content/oxidation assumptions; exclude upstream fuel and electricity emissions. | fuel; composition/carbon; oxidation assumption | kg direct fossil CO2 |  |
| `material_reconciliation` | Steel fabrication | steel input = steel in product + outbound scrap + inventory increase + documented losses | steel input; BOM; scrap; inventory | residual |  |
| `powder_balance` | Dry-filter powder coating | fresh powder = accepted deposited coating + rejected deposited coating + outbound powder/filter waste + inventory increase, with recovered powder shown as an internal loop | powder issue; recovery; coating deposition; reject; residue; inventory | balance residual | `us-epa-metal-parts-surface-coating-tsd-2001` |
| `shielding_gas_balance` | Supplied carbon-dioxide shielding gas | consumed CO2 = fossil direct release + biogenic direct release + captured/retained CO2 + inventory change; fossil and biogenic portions require supplier origin evidence | gas stock; origin certificate; capture/retention; discharge | kg direct CO2 by origin | `us-epa-ap42-electric-arc-welding-1995` |
| `diesel_test_balance` | Test and delivery fuel | combusted test diesel = opening test-tank mass + issued mass - closing mass - returned/recovered mass - spills - diesel retained in saleable product | tank/issue/return/spill/gate records | kg combusted test diesel |  |
| `accepted_output_loss_balance` | Components, packaging and final rejects | external receipts + opening usable stock = accepted-product incorporation + closing usable stock + unused external returns + consumed rejects/waste + other documented losses; the input inventory includes consumed rejects and never subtracts them. Keep unused internal returns inside the same stock control volume, keep in-house transfers distinct from external purchases, record reject mass by actual atomic destination, and normalize all attributable consumption and losses by conforming output only | external receipts; opening/closing usable stock; process issues; internal and external returns; BOM counts; rejects; atomic waste destinations; conforming output | balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `model_specificity` | Product identity and reference flow | Use one model/configuration or disclose and justify a production-weighted family. | model list, quantities, specification |
| `atomic_bom_coverage` | Purchased materials/components | Represent every boundary-crossing BOM material or assembly as an atomic row; disclose missing supplier data or proxies without umbrella flows. | BOM-to-inventory crosswalk and unresolved register |
| `route_evidence` | Conditional rows/processes | Retain applicability or non-applicability evidence for the model and site. | routing sheet, work instruction, equipment list or record |
| `mass_balance` | Steel, coating, shielding gas, lubricant, diesel, packaging, rejects and product | Investigate residuals and avoid double-counting internal loops, delivered fuel, supplier returns and captured residues. | signed balance and inventory-change records |
| `complete_configuration_crosswalk` | Representative mower BOM | Resolve frame/hitch, hydraulic cylinder, belt drive, cutter unit or complete cutter-bar alternative, gearbox, PTO driveline, guards/curtains, separate screw, nut, washer and pin families, and first fills as purchased atomic inputs or in-house production, without overlap. Retain manufacturer part number, specification and actual model count for every fastener family. | model BOM, parts manual crosswalk, make-or-buy records |
| `temporal_representativeness` | All foreground data | Use a continuous representative period and disclose shutdowns, trials, abnormal scrap and mix changes. | period memo and production log |
| `upstream_match` | Upstream datasets | Record geography, technology, state and delivery boundary; explain material proxies. | dataset-selection log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | Reference flow | Confirm `other_mower_reference_product` uses UUID `21019316-3de7-4b72-b23f-74fdaee3b361`, Mass, kg and equals 1 after normalization. |  |
| `validate_inventory_balance` | Inventory | Confirm every card is atomic and every UUID-empty card appears in manifest `review_metadata.unresolved.inventory_flow_uuids` with the same row id. |  |
| `validate_route_conditions` | Conditional routes | Confirm applicability evidence exists and zero is not an undocumented default. |  |
| `validate_no_upstream_double_count` | Direct emissions | Confirm direct fossil CO2 and welding particulate exclude emissions in upstream electricity, fuel, material or gas datasets. |  |
| `validate_component_and_reject_coverage` | BOM and rejected production | Confirm every representative assembly is resolved by the make-or-buy crosswalk and every component/final reject has rework, supplier-return or measured atomic outbound disposition. | `land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006` |
| `validate_shielding_and_powder_balances` | Welding and dry-filter powder coating | Confirm supplied shielding CO2 is balanced to direct release by verified origin, capture/retention and inventory, and powder is balanced to deposited coating, internal recovery, rejects and outbound residue. | `us-epa-ap42-electric-arc-welding-1995`; `us-epa-metal-parts-surface-coating-tsd-2001` |
| `validate_test_fuel_and_first_fill` | Assembly and test | Confirm combusted diesel excludes delivered residual fuel, and gross lubricant reconciles to retained first fill, clean return, spills/drains and rejects. |  |
| `validate_allocations` | Shared operations, pallets, rework and scrap | Confirm subdivision was attempted and every allocation has a driver, numerator, denominator and reconciliation total; confirm pallet ownership and that a per-use upstream dataset was not divided again. |  |
| `validate_bilingual_alignment` | Bilingual PCR/dataset | Confirm stable IDs, UUIDs, units, rule order and row order match, using direct-read Tiangong Chinese flow names. |  |
| `validate_source_limits` | External evidence | Treat cited manuals as representative configuration/process evidence only; do not infer industry quantity ranges from one manufacturer family. | `land-pride-disc-mower-parts-2022`; `land-pride-disc-mower-operator-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Model- and site-specific foreground manufacturing data package for a complete other mower or complete tractor-mountable cutter-bar assembly. |
| downstream_use | Linked `process` or `lifecyclemodel` datasets and compatible comparative studies. |
| allowed_use | Gate-to-gate manufacturing inventories, contribution analysis, supplier-data improvement and broader studies with linked upstream datasets. |
| excluded_use | Lawn/park/sports-ground mowers, loose parts, use-phase mowing, maintenance, lifetime or end-of-life performance. |
| required_metadata | PCR id/state; CPC reference; model/configuration; cutting technology; mounting/drive; working width; included equipment/first fills; coating/packaging; site/geography/period; route applicability; allocations; upstream references. |
| required_quality_disclosure | Unresolved UUIDs; missing supplier data; proxies; range-evidence gaps; measurement/allocation; balance residuals; abnormal production; exclusions and limitations. |
| update_trigger | Model/BOM, route, site, energy market, coating or packaging change; new exact flow identity or stronger evidence; material measurement/allocation/supplier-data change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure CSV, 30 June 2025, subclass 44123 and adjacent subclasses 44121-44129. | Official product identity and exclusions from adjacent mower, haymaking and harvesting categories. |
| `land-pride-disc-mower-parts-2022` | handbook | Land Pride, *DM3605, DM3606 & DM3607 Disc Mowers Parts Manual*, 327-045P, 06/13/2022, frame and hitch tables on PDF pages 7 and 9 (printed 5 and 7), and cutter-unit table on PDF page 17 (printed 15). | Representative configuration checklist covering frame/hitch, hydraulic cylinder, belt drive, cutter unit, gearbox, driveline and guards; exact frame-and-hitch screw, nut, washer and pin part specifications, including the stated count of 32 for washer 804-186C; not material composition or industry quantity ranges. |
| `land-pride-disc-mower-operator-2006` | handbook | Land Pride, *DM3705, DM3706, and DM3707 Series Disc Mowers Operator's Manual*, 327-083M, 9/15/06, PDF pages 9 and 11. | Representative agricultural disc-mower application, tractor mounting and first-fill SAE 90 gear lubricant; not an industry range. |
| `us-epa-ap42-electric-arc-welding-1995` | official_guidance | U.S. EPA, AP-42 Chapter 12.19, *Electric Arc Welding*, final section January 1995, PDF pages 1 and 3. | Welding process, GMAW consumable wire and supplied shielding gas, and particulate collection qualifiers. |
| `us-epa-metal-parts-surface-coating-tsd-2001` | official_guidance | U.S. EPA, *National Emission Standards for Hazardous Air Pollutants for Miscellaneous Metal Parts and Products Surface Coating Operations: Technical Support Document*, EPA-hosted PDF, 2001 compilation, PDF page 67 (printed 5-3) and PDF pages 115 and 117 (printed 8-16 and 8-18). | Bounded applicability to farm-machinery manufacturing; dry-filter powder-booth overspray collection and potential internal powder recovery; surface-coating and curing operations and the need for site-specific energy and waste collection. No numerical range is inferred. |
