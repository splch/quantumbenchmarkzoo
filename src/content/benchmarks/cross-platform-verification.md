---
name: Cross-platform verification
tagline: Randomized-measurement protocol that estimates the fidelity between quantum states prepared on two different devices using only classically communicated random unitaries and measurement outcomes
category: characterization
measures: Fidelity between quantum states prepared on two different devices (or device vs. theory), from cross-correlated randomized measurements
introducedBy:
  - Elben, Vermersch, Zoller & colleagues (Innsbruck)
yearIntroduced: 2019
aliases:
  - Cross-platform fidelity estimation
  - Cross-platform comparison
  - Cross-platform fidelity
status: active
papers:
  - title: Cross-Platform Verification of Intermediate Scale Quantum Devices
    authors: Elben, Vermersch, van Bijnen, Kokail, Brydges, Maier, Joshi, Blatt, Roos & Zoller
    year: 2019
    url: https://arxiv.org/abs/1909.01282
  - title: Cross-Platform Comparison of Arbitrary Quantum Computations
    authors: Zhu, Cian, Noel & colleagues
    year: 2021
    url: https://arxiv.org/abs/2107.11387
  - title: Cross-Platform Comparison of Arbitrary Quantum Processes
    authors: Zheng, Yu & Wang
    year: 2023
    url: https://arxiv.org/abs/2303.13911
  - title: "RandomMeas.jl: A Julia Package for Randomized Measurements in Quantum Devices"
    authors: Elben & Vermersch
    year: 2025
    url: https://arxiv.org/abs/2509.12749
code:
  - name: RandomMeas.jl (includes cross-platform verification example)
    url: https://github.com/bvermersch/RandomMeas.jl
  - name: RandomMeas (Python scripts)
    url: https://github.com/bvermersch/RandomMeas
related:
  - direct-fidelity-estimation
  - quantum-state-tomography
---

Cross-platform verification is a randomized-measurement protocol from Elben, Vermersch and colleagues in the Innsbruck ion-trap and theory groups for estimating the fidelity between quantum states prepared on two different, possibly remote, devices. No quantum link and no full tomography are required: the platforms exchange only classical descriptions of random unitaries and measurement outcomes. Its output is a pairwise fidelity between two specific preparations, a characterization result rather than a standalone device score.

## How it works

Both devices prepare nominally the same state, apply the same random local unitaries (sampled from a unitary 2-design and shared classically), and measure in the computational basis. Cross-correlating the two outcome distributions estimates the overlap Tr(rho1 rho2), and the same data yield each state's purity; the reported figure is the max-normalized overlap F_max = Tr(rho1 rho2) / max{Tr(rho1^2), Tr(rho2^2)}. The measurement budget scales as roughly 2^(bN) with b ≈ 0.6–0.8, far below the b ≥ 2 of full [quantum state tomography](/benchmarks/quantum-state-tomography/) but still exponential, so direct whole-state comparisons top out around 10–15 qubits; larger devices are compared through subsystem fidelities.

## Strengths and limitations

The protocol's distinctive move is cross-correlating two experimental datasets directly, where [cross-entropy benchmarking](/benchmarks/cross-entropy-benchmarking/) scores a single device against an ideal classical simulation. Caveats: F_max is the max-normalized overlap, not the Uhlmann fidelity, and the two can differ for mixed states; results are relative to the partner device or simulation; and because the two experiments may be separated in time, drift between them enters the comparison. Like [direct fidelity estimation](/benchmarks/direct-fidelity-estimation/), it trades tomographic completeness for a targeted estimate.

## Notable results

The original paper, published as Phys. Rev. Lett. 124, 010504 (2020), measured experiment–theory fidelities of entangled 10-qubit trapped-ion states. [Zhu et al.](https://arxiv.org/abs/2107.11387) compared trapped-ion machines against IBM superconducting processors on 7- and 13-qubit [Quantum Volume](/benchmarks/quantum-volume/)-style circuits (Nature Communications, 2022), and [Zheng, Yu & Wang](https://arxiv.org/abs/2303.13911) extended the method from states to arbitrary quantum processes (npj Quantum Information, 2023). The protocol ships as a worked example in the maintained RandomMeas.jl package (v0.3.1, April 2026; companion paper in Quantum 10, 2086).
