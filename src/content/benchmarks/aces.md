---
name: ACES
tagline: Scalable characterization protocol that estimates the Pauli error rates of every gate and measurement on a processor simultaneously from a small set of shallow Clifford circuits
category: characterization
measures: Pauli error rates of every gate and measurement across a whole processor, estimated simultaneously from averaged circuit eigenvalues
introducedBy:
  - Flammia (AWS Center for Quantum Computing / Caltech)
yearIntroduced: 2021
aliases:
  - Averaged circuit eigenvalue sampling
  - Average circuit eigenvalue sampling
status: active
papers:
  - title: Averaged circuit eigenvalue sampling
    authors: Flammia
    year: 2022
    url: https://arxiv.org/abs/2108.05803
  - title: Average circuit eigenvalue sampling on NISQ devices
    authors: Pelaez, Omole, Gokhale, Rines, Smith, Perlin & Hashim
    year: 2024
    url: https://arxiv.org/abs/2403.12857
  - title: Scalable noise characterization of syndrome-extraction circuits with averaged circuit eigenvalue sampling
    authors: Hockings, Doherty & Harper
    year: 2025
    url: https://arxiv.org/abs/2404.06545
  - title: Fermionic Averaged Circuit Eigenvalue Sampling
    authors: Chapman & Flammia
    year: 2026
    url: https://arxiv.org/abs/2504.01936
code:
  - name: QuantumACES.jl
    url: https://github.com/evanhockings/QuantumACES.jl
  - name: ACES (original Mathematica notebook)
    url: https://github.com/sflammia/ACES
related:
  - cycle-error-reconstruction
  - cycle-benchmarking
  - gate-set-tomography
---

ACES (averaged circuit eigenvalue sampling) is a characterization protocol introduced by Steven Flammia at the AWS Center for Quantum Computing that estimates the Pauli error rates of every gate and measurement on a processor at once. Where [randomized benchmarking](/benchmarks/randomized-benchmarking/) and its interleaved and simultaneous variants each isolate one gate or qubit subset at a time, ACES strictly generalizes them into whole-device noise metrology — a detailed noise model rather than a headline score, sitting in the QCVV toolbox alongside [gate set tomography](/benchmarks/gate-set-tomography/) and [cycle benchmarking](/benchmarks/cycle-benchmarking/).

## How it works

The device runs a small set of shallow random Clifford circuits. Under Pauli noise, each circuit damps Pauli observables by an averaged circuit eigenvalue that is a product of the eigenvalues of the gates it contains. Estimating enough circuit eigenvalues gives a linear system (in the logarithms) that inverts to per-gate and per-measurement Pauli error rates across the whole processor. The [original paper](https://arxiv.org/abs/2108.05803) demonstrated the scheme numerically on 100 qubits using fewer than 20 circuits; QuantumACES.jl automates circuit design and fitting for large devices.

## Strengths and limitations

ACES recovers a full Pauli noise model of a processor from remarkably few circuits, strictly generalizing component-level randomized benchmarks. It reconstructs stochastic Pauli noise: implementations typically tailor noise with Pauli twirling (the IBM-device demonstration characterized Pauli channels without twirling), so coherent errors enter only through their averaged Pauli-channel effect. Two bibliographic traps: the primary paper appeared as a six-page extended abstract in Proc. TQC 2022 — the ACES paper published in the journal Quantum is the 2026 fermionic extension — and follow-up work spells the name both "averaged" and "average".

## Notable results

ACES has run on IBM's Algiers and Osaka processors ([Pelaez et al., 2024](https://arxiv.org/abs/2403.12857)) and on coupled superconducting qubits, with estimates verified against [interleaved randomized benchmarking](/benchmarks/interleaved-randomized-benchmarking/) ([Palomaki et al., 2025](https://arxiv.org/abs/2510.02454)). An extension to syndrome-extraction circuits appeared in PRX Quantum 6, 010334 (2025) alongside the maintained QuantumACES.jl package, and a fermionic generalization in Quantum 10, 2053 (2026). For per-cycle rather than per-gate error profiles, see [cycle error reconstruction](/benchmarks/cycle-error-reconstruction/).
