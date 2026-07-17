---
name: Quantum Volume
tagline: Single-number, full-system benchmark that scores a device by the largest random square circuit it can run while still generating heavy outputs reliably.
category: system-level
measures: Largest square random circuit (width m = depth m) passed, reported as QV = 2^m
introducedBy:
  - IBM
yearIntroduced: 2018
aliases:
  - QV
status: active
papers:
  - title: Validating quantum computers using randomized model circuits
    authors: Cross, Bishop, Sheldon, Nation & Gambetta
    year: 2019
    url: https://arxiv.org/abs/1811.12926
  - title: Re-examining the quantum volume test
    authors: Baldwin, Mayer, Brown, Ryan-Anderson & Hayes
    year: 2022
    url: https://arxiv.org/abs/2110.14808
code:
  - name: Qiskit Experiments (QuantumVolume)
    url: https://github.com/qiskit-community/qiskit-experiments
related:
  - cross-entropy-benchmarking
---

Quantum Volume (QV) is a holistic benchmark introduced by IBM to compare quantum computers across architectures with a single number. Rather than isolating one property, it deliberately entangles many of them: qubit count, gate fidelity, connectivity, crosstalk, calibration quality, and even the compiler all affect the score.

## How it works

A QV test on `m` qubits runs random "model circuits" that are square: `m` layers deep on `m` qubits. Each layer applies a random permutation of the qubits followed by random two-qubit unitaries (drawn from SU(4)) on paired qubits. For each circuit, the ideal output distribution is computed classically, and the *heavy outputs* — bitstrings whose ideal probability is above the median — are identified.

The device passes at width `m` if it produces heavy outputs more than two-thirds of the time, with 97.5% statistical confidence. The quantum volume is `2^m` for the largest `m` the device passes. Full compiler optimization is allowed, so QV measures the whole stack, not just the hardware.

## Strengths and limitations

QV's strength is that it is hard to game with any single spec: adding qubits without fidelity, or fidelity without connectivity, does not raise the score. That made it an early de facto standard for cross-platform comparison.

Its main limitations are structural. Verifying heavy outputs requires classically simulating the ideal circuit, which becomes intractable beyond roughly 30–40 qubits, capping how far the benchmark can scale. The square-circuit shape also under-rewards devices whose qubit count far exceeds their usable depth (or vice versa) — one reason IBM itself has shifted emphasis toward per-layer error metrics such as layer fidelity / errors per layered gate (EPLG) for its larger processors. The [Baldwin et al. re-examination](https://arxiv.org/abs/2110.14808) analyzes the test's statistical assumptions and pass criteria in detail.

## Notable results

Quantinuum's trapped-ion H-Series systems have reported the highest quantum volumes to date, completing a five-year program of increasing QV tenfold per year: [QV 2²³ = 8,388,608 in May 2025](https://thequantuminsider.com/2025/05/13/quantinuum-smashes-through-quantum-volume-milestone-capping-five-year-benchmark-goal/) on System Model H2, followed by a reported [QV of 33,554,432 (2²⁵) in September 2025](https://quantumzeitgeist.com/quantinuum-achieves-highest%E2%80%91ever-33-5%E2%80%91million-quantum-volume/). See [Quantinuum's system benchmarks documentation](https://docs.quantinuum.com/systems/user_guide/hardware_user_guide/benchmarks/system_benchmarks.html) for methodology notes and current figures.
