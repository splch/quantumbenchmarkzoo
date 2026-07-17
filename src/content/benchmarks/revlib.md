---
name: RevLib
tagline: The 2008 online database of reversible functions and verified circuit realizations that served as the de facto workload set for quantum compilation benchmarking through the 2010s
category: software-stack
measures: Supplies standard reversible-circuit workloads (.real format) on which synthesis and compilation tools are compared, typically by gate count and quantum cost; defines no score of its own
introducedBy:
  - Wille, Große, Teuber, Dueck & Drechsler (U. Bremen & U. New Brunswick)
yearIntroduced: 2008
aliases:
  - RevLib benchmarks
status: superseded
papers:
  - title: "RevLib: An Online Resource for Reversible Functions and Reversible Circuits"
    authors: Wille, Große, Teuber, Dueck & Drechsler
    year: 2008
    url: https://doi.org/10.1109/ISMVL.2008.43
  - title: "MQT Bench: Benchmarking Software and Design Automation Tools for Quantum Computing"
    authors: Quetschlich, Burgholzer & Wille
    year: 2022
    url: https://arxiv.org/abs/2204.13719
code:
  - name: RevLib benchmark database (revlib.org)
    url: https://www.revlib.org/
related:
  - mqt-bench
---

RevLib is an online database of reversible functions with verified benchmark-circuit realizations, launched in 2008 by Wille, Große, Teuber, Dueck & Drechsler ([ISMVL 2008](https://doi.org/10.1109/ISMVL.2008.43)). It benchmarks design-automation software, not quantum hardware, and predates NISQ-era hardware benchmarking entirely: the motivation was reversible and low-power circuit design, with quantum computing as one application. Even so, decomposed RevLib circuits became the de facto standard workload set for quantum circuit mapping and compilation benchmarking through the 2010s, used by, among others, the SABRE qubit-mapping paper (ASPLOS 2019) and Tan & Cong's optimal layout-synthesis study.

## How it works

RevLib is a workload library, not a scored protocol. It catalogs reversible functions (154 as of 2026) alongside verified circuit realizations (454) in its .real file format, which the companion RevKit design toolkit also adopted. Synthesis, optimization, and quantum-compilation tools are then compared on these circuits by user-reported metrics: most commonly gate count and "quantum cost," a convention from the NCV-gate-count era.

## Strengths and limitations

For a decade RevLib gave the reversible- and quantum-circuit-design communities a common, verified corpus; that is why so much early qubit-mapping work standardized on it. Its central limitation is structural: reversible circuits are classical Boolean functions embedded reversibly, employing no superposition or entanglement, the stated reason the [MQT Bench paper](https://arxiv.org/abs/2204.13719) concludes they "do not serve as adequate benchmarks for the whole stack." Its quantum-cost convention likewise does not map onto modern hardware-native or fault-tolerant cost models. It should not be confused with RevKit, the companion open-source toolkit built around the same file format.

## Notable results

For quantum-software benchmarking, RevLib has been superseded by [MQT Bench](/benchmarks/mqt-bench/) (2022), created in the group of RevLib's own lead author, Robert Wille. revlib.org remains online as of July 2026 but shows no sign of ongoing maintenance (its citation page still lists only the 2008 paper), while RevLib circuits still occasionally appear as held-out evaluation sets in reversible-logic synthesis research (e.g. BDD2Seq, 2025).
