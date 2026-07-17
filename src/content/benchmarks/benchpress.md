---
name: Benchpress
tagline: IBM's open-source suite of 1,000+ timed tests comparing how fast quantum SDKs construct, manipulate, and transpile circuits — and the quality of the compiled output.
category: software-stack
measures: Speed of circuit construction, manipulation, and transpilation across quantum SDKs, plus compiled-output quality such as two-qubit gate counts
introducedBy:
  - IBM Quantum
yearIntroduced: 2024
status: active
papers:
  - title: Benchmarking the performance of quantum computing software
    authors: Nation, Saki, Brandhofer, Bello, Garion, Treinish & Javadi-Abhari
    year: 2024
    url: https://arxiv.org/abs/2409.08844
  - title: Benchmarking the performance of quantum computing software for quantum circuit creation, manipulation and compilation
    authors: Nation, Saki, Brandhofer, Bello, Garion, Treinish & Javadi-Abhari
    year: 2025
    url: https://doi.org/10.1038/s43588-025-00792-y
code:
  - name: Qiskit/benchpress (Apache-2.0)
    url: https://github.com/Qiskit/benchpress
related:
  - mqt-bench
  - queko
  - ftcircuitbench
---

Benchpress is IBM Quantum's open-source suite for benchmarking quantum software: how fast SDKs and compilers construct, manipulate, and transpile quantum circuits, and how good the compiled output is. Introduced by Nation and colleagues in 2024, it replaced scattered, per-paper compiler comparisons — including Red Queen, the earlier Qiskit-community compiler benchmark it superseded — with one reproducible harness. Despite the shared vocabulary, it measures the classical software stack, not any quantum hardware.

## How it works

The suite comprises 1,000+ standardized timed tests covering circuit construction, manipulation and conversion, and device-aware transpilation. Workloads are drawn from [QASMBench](/benchmarks/qasmbench/), the Feynman circuit set, and [HamLib](/benchmarks/hamlib/) Hamiltonians, reaching 930 qubits and on the order of 10^6 two-qubit gates. Every package runs the same tests in a unified execution framework, yielding wall-clock times plus output-quality metrics such as two-qubit gate counts after transpilation. As of July 2026 the repository targets eight frameworks: BQSKit, Braket, Cirq, Qiskit, the Qiskit IBM Transpiler service, pyqpanda3, Staq, and Tket.

## Strengths and limitations

Its coverage and openness set the standard for SDK benchmarking: tests, workloads, and configuration are all Apache-2.0 on GitHub, so any reported ranking can be rerun. Unlike [QUEKO](/benchmarks/queko/), whose circuits have known-optimal depth, Benchpress scores tools relative to one another, so results are snapshots that shift as SDK versions evolve.

The provenance caveat is real: IBM authored the suite, and IBM's Qiskit topped the headline results — [IBM's September 2024 announcement](https://www.ibm.com/quantum/blog/qiskit-performance) claimed roughly 13× faster transpilation with about 24% fewer two-qubit gates than second-place Tket. Open source makes the numbers independently reproducible, but readers should note who publishes them. The arXiv and journal titles also differ: the journal version appends "for quantum circuit creation, manipulation and compilation."

## Notable results

Published in Nature Computational Science 5, 427–435 (April 2025), and actively maintained under the Qiskit GitHub organization, with new SDK targets (pyqpanda3, Qiskit IBM Transpiler) added since the paper. For the fault-tolerant-era analogue, see [FTCircuitBench](/benchmarks/ftcircuitbench/); for the workload-library side, see [MQT Bench](/benchmarks/mqt-bench/).
