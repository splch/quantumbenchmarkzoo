---
name: QED-C Application-Oriented Benchmarks
tagline: Open-source consortium suite that scores devices on ~16 algorithm workloads, from Bernstein-Vazirani to VQE and MaxCut, via normalized fidelity on width-by-depth volumetric plots.
category: application-level
measures: Normalized result fidelity per algorithm benchmark as a function of circuit width and depth, shown on volumetric plots, alongside execution-time metrics
introducedBy:
  - QED-C (Quantum Economic Development Consortium)
yearIntroduced: 2021
aliases:
  - QED-C Application-Oriented Performance Benchmarks
  - Application-Oriented Performance Benchmarks
  - QC-App-Oriented-Benchmarks
  - QED-C benchmarks
status: active
papers:
  - title: Application-Oriented Performance Benchmarks for Quantum Computing
    authors: Lubinski, Johri, Varosy, Coleman, Zhao, Necaise, Baldwin, Mayer & Proctor
    year: 2023
    url: https://arxiv.org/abs/2110.03137
  - title: Optimization Applications as Quantum Performance Benchmarks
    authors: Lubinski, Coffrin, McGeoch, Sathe, Apanavicius & Bernal Neira
    year: 2024
    url: https://arxiv.org/abs/2302.02278
code:
  - name: SRI-International/QC-App-Oriented-Benchmarks
    url: https://github.com/SRI-International/QC-App-Oriented-Benchmarks
related:
  - supermarq
  - algorithmic-qubits
  - volumetric-benchmarking
  - hamlib
---

The QED-C application-oriented benchmarks are an open-source suite from the Quantum Economic Development Consortium's Technical Advisory Committee on Standards and Performance Metrics, first released in 2021 with Thomas Lubinski as lead author ([Lubinski et al.](https://arxiv.org/abs/2110.03137), published in IEEE Transactions on Quantum Engineering in 2023). Where random-circuit tests score a device in the abstract, this suite asks how well it runs recognizable quantum programs, and it has become a de facto reference point for application-level comparison, to the extent that IonQ's [Algorithmic Qubits](/benchmarks/algorithmic-qubits/) metric is a pinned derivative of it.

## How it works

The suite comprises roughly 16 algorithm benchmarks: Deutsch-Jozsa, Bernstein-Vazirani, hidden shift, QFT, phase and amplitude estimation, Grover search, HHL, Monte Carlo sampling, Hamiltonian simulation (including [HamLib](/benchmarks/hamlib/) instances), VQE, Shor period finding, MaxCut, hydrogen lattice, and image recognition. Each is swept over problem sizes, and every run's measured output distribution is compared with the classically computed ideal to produce a normalized result fidelity. Scores are positioned on width-by-depth [volumetric plots](/benchmarks/volumetric-benchmarking/), so application performance can be read against the circuit shapes a device sustains, and execution-time metrics are recorded alongside. The [reference repository](https://github.com/SRI-International/QC-App-Oriented-Benchmarks) (Apache-2.0) implements the suite for Qiskit, Cirq, Amazon Braket, Q#, and CUDA-Q.

## Strengths and limitations

Its strengths are vendor neutrality, breadth, and upkeep: the suite is consortium-governed, spans five programming frameworks, remains under active release (v2.0.4, May 2026), and keeps growing through follow-on studies on [combinatorial optimization](https://arxiv.org/abs/2302.02278) and a continuing series of further application areas ([2402.08985](https://arxiv.org/abs/2402.08985), [2409.06919](https://arxiv.org/abs/2409.06919), [2504.09813](https://arxiv.org/abs/2504.09813), [2510.08469](https://arxiv.org/abs/2510.08469)). The limitations are structural. Normalized fidelity requires the classically simulated ideal distribution, so verifiable scores stop where classical simulation does; the workloads are simplified, small-instance versions of their namesake applications; and the suite prescribes no single summary number, the gap Algorithmic Qubits fills at the cost of pinning parameters. Peer suites cover adjacent ground: [SupermarQ](/benchmarks/supermarq/) scores feature-mapped applications, while [QASMBench](/benchmarks/qasmbench/) offers an unscored circuit collection.
