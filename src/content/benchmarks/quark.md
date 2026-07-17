---
name: QUARK
tagline: BMW Group's open-source framework for defining, orchestrating, and reproducing application-level quantum benchmarks drawn from industry use cases.
category: application-level
measures: Per-application solution quality and runtime of quantum hardware, simulators, and algorithms on industry-derived workloads, executed through configurable, reproducible benchmarking pipelines
introducedBy:
  - Finžgar, Ross, Klepsch & Luckow (BMW Group)
yearIntroduced: 2022
aliases:
  - QUantum computing Application benchmaRK
  - QUARK framework
status: active
papers:
  - title: "QUARK: A Framework for Quantum Computing Application Benchmarking"
    authors: Finžgar, Ross, Hölscher, Klepsch & Luckow
    year: 2022
    url: https://arxiv.org/abs/2202.03028
  - title: Application-Oriented Benchmarking of Quantum Generative Learning Using QUARK
    authors: Kiwit, Marso, Ross, Riofrío, Klepsch & Luckow
    year: 2023
    url: https://arxiv.org/abs/2308.04082
  - title: "Benchmarking Quantum Generative Learning: A Study on Scalability and Noise Resilience using QUARK"
    authors: Kiwit, Wolf, Marso, Ross, Lorenz, Riofrío & Luckow
    year: 2024
    url: https://arxiv.org/abs/2403.18662
code:
  - name: QUARK-framework/QUARK (through v2.1.7, now legacy)
    url: https://github.com/QUARK-framework/QUARK
  - name: QUARK-framework (3.0+ core module)
    url: https://github.com/QUARK-framework/QUARK-framework
related:
  - qed-c-benchmarks
  - qoblib
  - supermarq
---

QUARK (QUantum computing Application benchmaRK) is an open-source framework introduced by BMW Group researchers for designing, implementing, executing, and analyzing quantum application benchmarks, presented at [IEEE QCE 2022](https://arxiv.org/abs/2202.03028). It approaches benchmarking from an industrial angle: rather than fixing a suite of circuits, it standardizes the pipeline by which application benchmarks are defined, run, and reproduced — strictly a framework rather than a benchmark, though it is often tabulated alongside scored suites.

## How it works

A QUARK benchmark is assembled from pluggable modules: an application — reference workloads include robot-path optimization (PVC sealing), vehicle-option optimization (auto carrier loading), TSP, maximum independent set, set cover, MaxSAT, and quantum generative learning — a mapping into a solver-ready formulation, a solver or algorithm, and a target quantum device or simulator. From a configuration file, the framework executes every requested combination, records the results reproducibly, and reports per-application metrics for solution quality and runtime. There is deliberately no aggregate device score.

## Strengths and limitations

QUARK's workloads descend from real industrial use cases rather than textbook kernels, and its emphasis on orchestration and reproducibility addresses a genuine weakness of ad-hoc application benchmarking. The corresponding limitation is comparability: results are per application and depend on the configured modules, so cross-device numbers only make sense under identical configurations. Two citation pitfalls: the author list varies by arXiv version (v1 and v2 list four authors; Leonhard Hölscher was added in v3, the version published at IEEE QCE 2022), and no paper is titled "QUARK 2.0" — the 2.x line's generative-learning extensions are described in [Kiwit et al. 2023](https://arxiv.org/abs/2308.04082) and a follow-up [scalability and noise-resilience study](https://arxiv.org/abs/2403.18662). It is unrelated to other things named Quark, such as the lightweight cryptographic hash family.

## Notable results

Development is active: the [original repository](https://github.com/QUARK-framework/QUARK) (Apache-2.0) released v2.1.7 in July 2025 and is now labeled the legacy code base, while a rewritten [core module for QUARK 3.0+](https://github.com/QUARK-framework/QUARK-framework) is in pre-release development. Fixed-suite counterparts include the [QED-C benchmarks](/benchmarks/qed-c-benchmarks/) and [SupermarQ](/benchmarks/supermarq/); [QOBLIB](/benchmarks/qoblib/) standardizes optimization problem instances on the adjacent library side.
