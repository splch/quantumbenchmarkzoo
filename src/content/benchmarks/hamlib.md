---
name: HamLib
tagline: More than 1.5 million pre-encoded qubit Hamiltonians — spin models, chemistry, and combinatorial optimization — supplying standardized problem instances for application-level quantum benchmarking.
category: application-level
measures: Nothing itself — supplies standardized, pre-encoded Hamiltonian problem instances (2–1000 qubits) that downstream benchmarks score against
introducedBy:
  - Sawaya & colleagues (Intel Labs, LBNL/NERSC, Sandia, NASA Ames, Oxford & others)
yearIntroduced: 2023
aliases:
  - Hamiltonian Library
  - HamLib dataset
status: active
papers:
  - title: "HamLib: A library of Hamiltonians for benchmarking quantum algorithms and hardware"
    authors: Sawaya, Marti-Dafcik, Ho, Tabor, Bernal Neira et al.
    year: 2023
    url: https://arxiv.org/abs/2306.13126
  - title: A Comprehensive Cross-Model Framework for Benchmarking the Performance of Quantum Hamiltonian Simulations
    authors: Chatterjee, Rappaport, Giri, Johri, Proctor, Bernal Neira, Sathe & Lubinski
    year: 2024
    url: https://arxiv.org/abs/2409.06919
  - title: A Practical Framework for Assessing the Performance of Observable Estimation in Quantum Simulation
    authors: Niu, Kökcü, Johri, Ramesh, Chatterjee, Bernal Neira, Camps & Lubinski
    year: 2025
    url: https://arxiv.org/abs/2504.09813
code:
  - name: HamLib dataset (NERSC portal, zipped HDF5 by domain)
    url: https://portal.nersc.gov/cfs/m888/dcamps/hamlib/
  - name: hamlib_functions (helpers for reading and using HamLib)
    url: https://github.com/Azulene-Labs/hamlib_functions
  - name: QED-C QC-App-Oriented-Benchmarks (HamLib-based benchmark)
    url: https://github.com/SRI-International/QC-App-Oriented-Benchmarks
related:
  - qed-c-benchmarks
  - qb-gsee-benchmark
---

HamLib is a problem-instance library, not a benchmark protocol: it defines no circuits and produces no score. It earns a place in an application-level catalog because it has become a standard source of inputs for benchmarks that do — most visibly the [QED-C Application-Oriented Benchmarks](/benchmarks/qed-c-benchmarks/), whose Hamiltonian-simulation benchmark draws its Hamiltonians from HamLib. Assembled by Sawaya and 15 co-authors across Intel Labs, Lawrence Berkeley National Laboratory, Sandia, NASA Ames, Oxford, and other institutions, the dataset packages more than 1.5 million pre-encoded qubit Hamiltonians for benchmarking quantum algorithms and hardware ([arXiv:2306.13126](https://arxiv.org/abs/2306.13126); published in Quantum 8, 1559 (2024)).

## How it works

The library spans condensed-matter models (transverse-field Ising, Heisenberg, Fermi–Hubbard, Bose–Hubbard), electronic- and vibrational-structure chemistry, and combinatorial optimization (MaxCut, Max-k-SAT, Max-k-Cut, QMaxCut, traveling salesperson), at sizes from 2 to 1000 qubits. Every instance is already mapped to qubit operators — with Jordan–Wigner, parity, and Bravyi–Kitaev fermionic mappings and unary/Gray/binary encodings where relevant — and distributed as zipped HDF5 files from a NERSC-hosted portal. A benchmark built on HamLib picks instances, runs an algorithm or device on them, and applies its own figure of merit: the QED-C Hamiltonian-simulation benchmark, for example, uses five HamLib models (TFIM, Heisenberg, Fermi–Hubbard, Bose–Hubbard, Max3SAT).

## Strengths and limitations

HamLib's value is standardization — it removes instance-preparation work and makes results reproducible and comparable across papers, the role a shared instance library also plays for the [QB GSEE Benchmark](/benchmarks/qb-gsee-benchmark/) in chemistry. The flip side: "the HamLib benchmark" is a common misnomer, since the scoring protocols live elsewhere. Dataset versioning is informal (the paper notes "small changes in v1.1 of dataset"), so instance-level reproducibility across revisions is worth checking, and generic web searches collide with the unrelated Hamlib amateur-radio library.

## Notable results

The dataset remains live at NERSC as of mid-2026, and QED-C work keeps building on it: a cross-model Hamiltonian-simulation benchmarking framework ([arXiv:2409.06919](https://arxiv.org/abs/2409.06919)) and a 2025 observable-estimation framework ([arXiv:2504.09813](https://arxiv.org/abs/2504.09813)) both draw their problem instances from HamLib.
