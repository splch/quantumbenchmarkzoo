---
name: QuSquare
tagline: Four-test scalable suite scoring pre-fault-tolerant devices on partial-Clifford random circuits, GHZ-state entanglement, Ising-dynamics simulation reach, and quantum neural network classification accuracy.
category: system-level
measures: "Four per-test figures of merit, with no aggregate score: largest circuit fraction μ with infidelity ≤ 0.1, largest GHZ state with fidelity > 1/2, longest TFIM evolution within bounded magnetization error, and average QNN test accuracy"
introducedBy:
  - Aguirre, Peña & Sanz (University of the Basque Country)
yearIntroduced: 2025
aliases:
  - QuSquare Benchmark Suite
status: proposal
papers:
  - title: "QuSquare: Scalable Quality-Oriented Benchmark Suite for Pre-Fault-Tolerant Quantum Devices"
    authors: Aguirre, Peña & Sanz
    year: 2025
    url: https://arxiv.org/abs/2512.19665
  - title: "Benchmarking quantum computers: Towards a standard performance evaluation approach"
    authors: Acuaviva, Aguirre, Peña & Sanz
    year: 2024
    url: https://arxiv.org/abs/2407.10941
code:
  - name: NQUIRE-Center/QuSquare (reference Python implementation)
    url: https://github.com/NQUIRE-Center/QuSquare
  - name: QNN benchmark datasets (Zenodo, CC-BY 4.0)
    url: https://doi.org/10.5281/zenodo.17966787
related:
  - quantum-volume
  - ghz-state-fidelity
---

QuSquare is a proposed benchmark suite for pre-fault-tolerant quantum devices from Aguirre, Peña & Sanz of the NQUIRE group at the University of the Basque Country. It turns the group's earlier [review of what a quantum benchmark should satisfy](https://arxiv.org/abs/2407.10941) into four concrete, scalable tests and deliberately declines to compress a device into a single aggregate number. The name is written "QuSquare" throughout, with no stated expansion.

## How it works

The [specification](https://arxiv.org/abs/2512.19665) defines four tests, plus rules on compilation, error-mitigation disclosure, and reporting:

- **Partial Clifford Randomized**: whole-device random circuits; scores the largest circuit fraction μ that keeps infidelity at or below 0.1.
- **Multipartite Entanglement**: scores the largest GHZ state prepared with fidelity above 1/2, the standard witness of genuine multipartite entanglement.
- **TFIM Hamiltonian Simulation**: quantum-signal-processing simulation of transverse-field Ising dynamics; scores the longest evolution time reached within a bounded magnetization error.
- **Data Re-uploading QNN**: binary classification with data re-uploading quantum neural networks on four mandatory synthetic datasets (circles, spiral, sinus, corners); scores average test accuracy Acc(N, L).

The first two are whole-device tests in the tradition of [Quantum Volume](/benchmarks/quantum-volume/) and [GHZ-state fidelity](/benchmarks/ghz-state-fidelity/); the latter two are application-style workloads closer to suites like [SupermarQ](/benchmarks/supermarq/), giving the suite a foot on both levels.

## Strengths and limitations

The paper is unusually explicit about methodology: each test carries a defined figure of merit, the metrics are analyzed against stated quality attributes, and scalability is a design goal throughout. Against that, QuSquare is so far only a specification. The paper reports no measurements on real hardware, the four constituent tests exist only within the suite rather than as independently established benchmarks, and the lack of an aggregate score rules out simple rankings by design. The [reference implementation](https://github.com/NQUIRE-Center/QuSquare) is public but lacked a license file as of its February 2026 update.

As of mid-2026 the suite remains a proposal: the December 2025 preprint is v1-only with no journal version, and while the authors maintain the code and published the mandatory QNN datasets on Zenodo, no hardware campaign or independent adoption has surfaced yet.
