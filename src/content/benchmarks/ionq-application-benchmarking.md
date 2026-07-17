---
name: IonQ application-centric benchmarking
tagline: IonQ's MLPerf-inspired framework scoring whole quantum workloads end to end by solution quality and time-to-solution — wall time from job submission to a result that meets a predefined quality threshold.
category: application-level
measures: Solution quality and Time-to-Solution (full-pipeline wall time from job submission to a predefined quality threshold) across 13+ workload families; Energy- and Cost-to-Solution defined for future releases
introducedBy:
  - IonQ (Aboumrad and colleagues)
yearIntroduced: 2026
aliases:
  - IonQ Application-Centric Benchmarking Framework
  - Measuring What Matters
  - apps-benchmark
status: active
papers:
  - title: "Measuring what matters: A scalable framework for application-level quantum benchmarking"
    authors: Aboumrad, Girotto, Goings, Zhao et al. (IonQ)
    year: 2026
    url: https://arxiv.org/abs/2604.11781
  - title: "IonQ Benchmark Verification Report: Independent Review by Kearney"
    authors: Kearney, with Cascade Quantum
    year: 2026
    url: https://www.ionq.com/resources/application-centric-benchmark-verification-report-by-kearney
code:
  - name: ionq-publications/apps-benchmark
    url: https://github.com/ionq-publications/apps-benchmark
related:
  - algorithmic-qubits
  - qed-c-benchmarks
  - supermarq
---

IonQ's application-centric benchmarking framework scores complete quantum workloads end to end, introduced in the April 2026 white paper "Measuring what matters" ([arXiv:2604.11781](https://arxiv.org/abs/2604.11781)). Where component metrics isolate gates and system-level tests run random circuits, this framework times the whole pipeline against a solution-quality bar — and it now backs the results IonQ publishes on its live quantum-benchmarks page.

## How it works

The suite launched with 13 workload families spanning optimization, chemistry, machine learning, data loading, simulation, and foundational algorithms; a fourteenth (a neutrinoless-double-beta-decay physics workload) was added by mid-2026. Each is scored on solution quality and Time-to-Solution: wall-clock time from job submission through pre-processing, execution, and post-processing until the result meets a predefined quality threshold. Borrowing MLPerf's design, closed benchmarks fix the implementation for like-for-like hardware comparison, while open benchmarks fix only the success criterion and let implementations vary. Energy-to-Solution and Cost-to-Solution are defined but deferred to future releases. A Qiskit-based implementation is public.

## Strengths and limitations

Full-pipeline timing captures compilation, orchestration, and classical overheads that circuit-only benchmarks miss. But the framework is vendor-authored: IonQ designed it and ran the launch comparisons (IonQ Forte-generation systems versus unnamed superconducting devices). The independent review by Kearney — code review, result reproduction, and live validation runs — covered the procedures and four benchmarks (QFT, Hidden Shift, LR-QAOA, VQE), not the full suite. Closed- and open-mode scores are not mutually comparable, the benchmark count is a moving target, and the code's CC BY-NC-ND 4.0 license bars commercial use and derivatives. IonQ has not called the framework a successor to its [Algorithmic Qubits](/benchmarks/algorithmic-qubits/) metric, but #AQ no longer appears on its benchmarks page; the framework is likewise distinct from the [QED-C suite](/benchmarks/qed-c-benchmarks/) underlying #AQ, and its workload-suite philosophy parallels [SupermarQ](/benchmarks/supermarq/).
