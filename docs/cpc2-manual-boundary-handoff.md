---
title: CPC 2-prefix PCR Manual Boundary Handoff
docType: review-record
scope: repo
status: active
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when manually adjudicating CPC 3.0 2-prefix leaves that remained unresolved after a fresh Goal authoring attempt
whenToUpdate:
  - when another fresh attempt ends in semantic_boundary_unresolved
  - when a human accepts a product boundary and its coverage decision
checkPaths:
  - docs/cpc2-manual-boundary-handoff.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/indexes/cpc-3.0-coverage.json
lastReviewedAt: 2026-09-24
---

# CPC 2 开头分类：人工边界处理清单

以下分类在原 Goal `cpc2-20260923` 和重做 Goal `cpc2-manual-redo-20260924` 中均以 `manual_review` 结束。重做后 10 项仍无法确定语义边界（`semantic_boundary_unresolved`），另有 1 项与现有 PCR 身份可能重叠（`overlapping_pcr_identity`）。截至 2026-09-24，这 11 项在 CPC 3.0 coverage index 中仍为 `unmapped`，没有被接受的 PCR 映射。停止对这些分类自动重试；由人工先确定产品边界、参考产品与覆盖方式，再决定是否建立一个或多个语义 PCR 及接受映射。分类叶本身不构成 PCR 身份。

| CPC | 无法自动确定的边界 | 人工需要决定 |
| --- | --- | --- |
| `21700` | 人造黄油、乳化脂肪涂抹品与其他食用油脂制品范围不同。 | 仅覆盖涂抹品，还是包含起酥油等制品；若均覆盖，是一个含条件路线的 PCR 还是多个 PCR。 |
| `23991` | 均质肉类、植物和复合食品与婴幼儿制品的产品状态、工艺不同。 | 婴幼儿食品、谷物加工食品、配方食品如何分界；各 PCR 对应的产品状态与生产路线。 |
| `23995` | 干芥末粉、成品芥末、混合调味品与酱汁的产品状态、工艺不同。 | 干粉与调制品是否分开；各类酱汁的范围及参考产品状态。 |
| `23999` | “其他食品”包含不同原料、生产路线和上市状态，缺少一个共同产品边界。 | 明确可建立 PCR 的具体产品族；否则保留未映射。 |
| `26190` | 多种植物的未纺纤维、条子、绳索、短纤维及废纤维并列，产品状态不同。 | 是否拆分产品族；可售短纤维／废纤维是参考产品还是分配处理的副产品；绳索和染色纤维是否纳入同一生产边界。 |
| `26330` | 含羊毛低于 85% 的非零售毛纱，与已映射 26340 的宽泛 PCR 标题可能重叠。 | 确认现有 PCR 是否覆盖 26330；若不覆盖，明确排除范围后再建立独立 PCR。 |
| `27140` | 成品家居纺织品与零售织物／纱线制作套件并列。 | 是否分成不同 PCR；各自参考产品状态，以及与相邻纺织品 PCR 的界线。 |
| `27190` | 清洁布与救生衣、救生带并列，没有共同功能或代表性生产路线。 | 是否分别建立清洁用品和个人漂浮装备 PCR；各自参考流；若没有单一 PCR 覆盖全叶，如何记录覆盖。 |
| `27991` | 纺织絮料及制品与短纤维绒、纺织粉尘、棉结并列，后者还可能是废物流。 | 是否拆分 PCR；绒、粉尘、棉结何时属于可售产品；各自参考功能。 |
| `27998` | 灯芯、煤气灯纱罩、纺织软管、传动带、筛网布等技术纺织品没有共同功能或性能基准。 | 建一个含路线差异的 PCR，还是按产品族拆分；明确参考单位及与涂层织物的边界。 |
| `29130` | 无毛动物皮革与皮革纤维再生革的原料和制造路线不同。 | 是否建立两个 PCR；若合并，确定共同的产品状态、参考流和可比较的路线规则。 |

核对依据：联合国 [CPC 3.0 分类结构](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv) 与 [解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf)。重做任务另记录了针对食品、皮革、纺织品与救生装备的辅助来源、逐项问题和观察，见本地 Goal 状态及报告：`library/.pcr-builder-state/goals/cpc2-manual-redo-20260924/state.json` 中对应 CPC 的 `author_submission.boundary_review_report.boundary_review`，以及同一任务的 `report_path`。该状态目录是本地审计材料；上表保留了人工处理所需的核心判断，即使本地状态不再可用也能继续处理。

## 证据阻碍：28320

`28320`（除帽类外的毛皮服装、附件及其他制品）在原 Goal、恢复 Goal 和独立重做 Goal `cpc2-furskin-redo-20260924` 中均未通过审核，仍为 `unmapped`。最后一次重做保留了四文件草稿，但验收报告显示 [ILO 毛皮行业页面](https://www.iloencyclopaedia.org/part-xiv-42166/leather-fur-and-footwear/item/873-fur-industry) 无法读取，且 [犹他州立大学缝制资料](https://extension.usu.edu/sewing/research/sewing-with-fur)、[加拿大毛皮协会制衣资料](https://fur.ca/fur-trade-2/making-a-fur-coat/) 和 [美国国际贸易委员会出版物](https://www.usitc.gov/publications/337/pub2085.pdf) 的原始来源身份未通过核验。两次内容修复中还出现参考流 UUID 缺失。停止自动重试；人工需先确认可访问、身份可核验且能支持毛皮制品生产规则的原始资料，并确认参考产品 UUID，然后再决定是否沿用草稿。审计见本地 `library/.pcr-builder-state/goals/cpc2-furskin-redo-20260924/state.json` 中 `28320` 的 `pending_gate_findings`、`repair_history` 和 `report_path`。

## 证据阻碍：27310

`27310`（线、绳、索和缆）在原 Goal 因作者超时未入库；独立重做 Goal `cpc2-failures-redo-20260924` 已保留新四文件草稿，但验收仍未通过，coverage 保持 `unmapped`。[NOAA 绳结资料](https://repository.library.noaa.gov/view/noaa/42456/noaa_42456_DS1.pdf) 和 [中国 GB/T 4754—2017 分类资料](https://www.stats.gov.cn/xxgk/tjbz/gjtjbz/202008/P020200811608157848094.pdf) 的原始来源身份未通过核验；草稿引用的 [2025 年航海绳索 LCA 论文](https://journals.sagepub.com/doi/10.3233/PMST250012) 返回 HTTP 403。停止自动重试；人工需核验原件身份，并取得可读取、能支持草稿生产和计量规则的原始文献，或用等效证据修订草稿后重新审核。审计见本地 `library/.pcr-builder-state/goals/cpc2-failures-redo-20260924/state.json` 中 `27310` 的 `pending_gate_findings` 和 `report_path`。

## 证据阻碍：27996

`27996`（尼龙、其他聚酰胺、聚酯或黏胶高强力纱制轮胎帘子布）在原 Goal 的审核窗口耗尽后，由独立重做 Goal `cpc2-textile-failures-redo-20260924` 重新编写并保留了四文件草稿。新验收只剩 `gb4754` 来源身份未核验：草稿以 [GB/T 4754—2017 PDF](https://www.stats.gov.cn/xxgk/tjbz/gjtjbz/202008/P020200811608157848094.pdf) 支持中文术语，不能仅凭引文文字接受其原件身份。coverage 保持 `unmapped`，停止自动重试。人工需核验该原件和术语定位，或删除不必要的引文并用可核验来源修订后重新审核。审计见本地 `library/.pcr-builder-state/goals/cpc2-textile-failures-redo-20260924/state.json` 中 `27996` 的 `pending_gate_findings` 和 `report_path`。

## 证据阻碍：27997

`27997`（其他浸渍、涂层或覆面纺织物）在原 Goal 的审核窗口耗尽后，由独立重做 Goal `cpc2-textile-failures-redo-20260924` 重新编写并修复了一轮内容问题。新草稿仍未通过 [联合国 CPC 3.0 解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) 的原件身份核验，coverage 保持 `unmapped`。停止自动重试；人工需核验草稿所引第 129 页的产品范围与排除项，或以可核验原件修订引文后重新审核。审计见本地 `library/.pcr-builder-state/goals/cpc2-textile-failures-redo-20260924/state.json` 中 `27997` 的 `pending_gate_findings` 和 `report_path`。

## 参考产品 UUID 缺口：26140

`26140`（羊毛或细动物毛的精梳落毛）在原 Goal 的第二次作者任务中进行了两次已完成的 TianGong 混合检索，仍未找到可直接读取并匹配产品与单位的参考产品 UUID。双语计量检查通过，但 `pcr:check` 要求参考流 UUID，因此四文件草稿仍留在作者工作树中、未提交或入库。停止自动重试；人工需确认能否在 TianGong 建立并核验准确的参考产品流，或重新裁定产品与参考流定义，随后才能重新准备和审核草稿。审计见本地 `library/.pcr-builder-state/goals/cpc2-20260923/state.json` 中 `26140` 的失败报告与作者工作树。

## 证据阻碍：27999

`27999`（其他成匹绗缝纺织品）在独立重做 Goal `cpc2-textile-failures-redo-20260924` 中提交了新四文件草稿，但独立审核无法确认所引 [加拿大 2026 年关税章节](https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2026/html/00/ch58-eng.html) 的原件身份（`tariff2026`），因此未接受映射。停止自动重试；人工需核验该资料与草稿所引用的产品范围，或换用可核验的原始来源后重新审核。审计见本地同一 Goal 的 `state.json` 中 `27999` 的 `pending_gate_findings` 和 `report_path`。

## 准备报告窗口阻碍：25020

`25020`（雪茄、小雪茄和卷烟）已有独立作者的干净四文件提交 `e68628941e498e9c32f45f304307c52dc5884f05`，但准备报告连续耗尽收据审核窗口；作者报告未指出内容缺陷，独立验收尚未完成，coverage 仍为 `unmapped`。原 Goal `cpc2-20260923` 已对此任务设置审计保留，停止自动重试。后续需在足够的审核窗口内核对已保留的草稿、UUID 收据和准备报告，再决定是否进入独立审核；不能仅凭干净提交接受映射。审计见本地该 Goal `state.json` 中 `25020` 的 `coordinator_hold`、`author_submission` 和作者工作树。

## 新一轮人工审核：26710

`26710` 将高强力长丝纱机织物、合成纤维扁条机织物，以及交叉点粘结的网状稀松布列在同一分类叶中。重做 Goal `cpc2-interrupted-redo-20260924` 的独立边界审核将其列为 `semantic_boundary_unresolved`：人工需决定这些路线共用一个带条件规则的 PCR，还是拆成多个语义 PCR，并分别确定具体参考产品。候选的「Polyester Mesh Fabric」只覆盖较窄产品形态，未采用其 UUID。保持 `unmapped`，停止自动重试；证据和问题见该 Goal `state.json` 中 `26710` 的 `author_submission.boundary_review_report`。

## 来源身份待核验：26430、26730

`26430`（合成短纤维含量不少于 85% 的非缝纫线纱线）的新四文件草稿未通过三项原件身份核验：`usitc-spinning`（[USITC PDF](https://www.govinfo.gov/content/pkg/GOVPUB-ITC1-PURL-LPS17669/pdf/GOVPUB-ITC1-PURL-LPS17669.pdf)）、`epa-textile`（[EPA PDF](https://ofmpub.epa.gov/apex/guideme_ext/guideme_ext/guideme/file/textile%20processing%20industry.pdf)）、`china-tariff-terms`（[中国政府 PDF](https://www.gov.cn/xinwen/2019-12/23/5463213/files/703a4e156dbd4742b84f5d58aafe4b52.pdf)）。`26730`（其他人造长丝纱机织物）的新草稿未通过 `un-cpc-3-2025-notes`（[联合国 CPC 3.0 解释说明第 123 页](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf#page=123)）的原件身份核验。两项均保持 `unmapped`，停止自动重试；人工需核验对应原件及草稿引文，或用可核验的原始来源修订后重新审核。审计见同一重做 Goal `state.json` 中两项的 `pending_gate_findings` 和 `report_path`。
