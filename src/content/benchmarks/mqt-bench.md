---
name: MQT Bench
tagline: Library of 70,000+ benchmark circuits, each served at four abstraction levels, so quantum compilers, simulators, and verifiers can be compared on common workloads.
category: software-stack
measures: Standardized circuit workloads (2–130 qubits, four abstraction levels) for evaluating quantum software and design-automation tools; defines no device figure of merit itself
introducedBy:
  - Quetschlich, Burgholzer & Wille (TU Munich, Chair for Design Automation)
yearIntroduced: 2022
status: active
papers:
  - title: "MQT Bench: Benchmarking Software and Design Automation Tools for Quantum Computing"
    authors: Quetschlich, Burgholzer & Wille
    year: 2022
    url: https://arxiv.org/abs/2204.13719
  - title: "MQT Bench: Benchmarking Software and Design Automation Tools for Quantum Computing (Quantum 7, 1062)"
    authors: Quetschlich, Burgholzer & Wille
    year: 2023
    url: https://doi.org/10.22331/q-2023-07-20-1062
code:
  - name: mqt-bench (GitHub)
    url: https://github.com/cda-tum/mqt-bench
  - name: MQT Bench web interface
    url: https://www.cda.cit.tum.de/mqtbench/
related:
  - qasmbench
  - benchpress
  - revlib
  - veriqbench
---

MQT Bench is a benchmark circuit library from the Chair for Design Automation at the Technical University of Munich, part of the Munich Quantum Toolkit (MQT). Introduced by Quetschlich, Burgholzer & Wille in 2022, it supplies the standard workloads on which quantum software — compilers, simulators, verifiers — is evaluated. Its organizing idea is that a benchmark suite for software tools must provide the same circuit at whichever abstraction level each tool actually consumes.

## How it works

The library holds 70,000+ benchmark circuits spanning 2 to 130 qubits, each provided at four abstraction levels: algorithmic (the abstract circuit), target-independent (compiled to a generic gate set), target-dependent native gates (expressed in a specific device's gate set), and target-dependent mapped (routed to a device's connectivity). A high-level simulator takes algorithmic-level input, a mapper is judged at the native-gates level, and a verifier can compare any two levels of the same benchmark. Circuits are served through a Python package and a [web interface](https://www.cda.cit.tum.de/mqtbench/) with filter-and-download access, so tool papers can cite a reproducible workload set instead of hand-rolled circuits.

## Strengths and limitations

The four-level structure distinguishes it from single-level circuit suites such as [QASMBench](/benchmarks/qasmbench/): each stage of the design-automation stack can be isolated and tested on identical workloads ([Quetschlich, Burgholzer & Wille 2022](https://arxiv.org/abs/2204.13719)). The authors position [RevLib](/benchmarks/revlib/), the reversible-circuit-era library, as its inadequate predecessor for quantum tooling.

The flip side: MQT Bench supplies workloads, not scores. It defines no timing harness, pass criterion, or headline number — timed harnesses such as [Benchpress](/benchmarks/benchpress/) exist precisely to add that layer. And as a software-stack suite it says nothing directly about quantum hardware performance.

## Notable results

The paper was published in [Quantum 7, 1062 (2023)](https://doi.org/10.22331/q-2023-07-20-1062), and the library remains actively maintained and extended as part of the Munich Quantum Toolkit.
