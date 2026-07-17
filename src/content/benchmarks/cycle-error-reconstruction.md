---
name: Cycle error reconstruction
tagline: Keysight True-Q diagnostic that reconstructs the probabilities of the individual Pauli errors afflicting a cycle of parallel gates, with multiplicative precision
category: characterization
measures: Probabilities of individual Pauli errors (up to weight K, on chosen qubit subsets) afflicting a specific cycle of parallel gates
introducedBy:
  - Quantum Benchmark Inc. (now part of Keysight Technologies)
  - Carignan-Dugas, Emerson, Wallman & colleagues
yearIntroduced: 2020
aliases:
  - CER
  - K-body noise reconstruction
  - KNR
status: active
papers:
  - title: The Error Reconstruction and Compiled Calibration of Quantum Computing Cycles
    authors: Carignan-Dugas, Dahlen, Hincks, Ospadov, Beale, Ferracin, Skanes-Norman, Emerson & Wallman
    year: 2023
    url: https://arxiv.org/abs/2303.17714
  - title: Characterizing large-scale quantum computers via cycle benchmarking
    authors: Erhard, Wallman, Postler, Meth, Stricker, Martinez, Schindler, Monz, Emerson & Blatt
    year: 2019
    url: https://arxiv.org/abs/1902.08543
  - title: Estimating Coherent Contributions to the Error Profile Using Cycle Error Reconstruction
    authors: Carignan-Dugas, Ranu & Dreher
    year: 2024
    url: https://arxiv.org/abs/2303.09945
  - title: Enhancing Decoding Performance using Efficient Error Learning
    authors: Iyer, Jain, Bartlett & Emerson
    year: 2025
    url: https://arxiv.org/abs/2507.08536
code:
  - name: "True-Q docs: K-body Noise Reconstruction (KNR)"
    url: https://trueq.quantumbenchmark.com/guides/error_diagnostics/knr.html
  - name: True-Q software record (Zenodo)
    url: https://zenodo.org/records/3945250
related:
  - cycle-benchmarking
  - aces
---

Cycle error reconstruction (CER) is the diagnostic companion to [cycle benchmarking](/benchmarks/cycle-benchmarking/): where cycle benchmarking compresses the noise on a cycle of parallel gates into a single fidelity, CER reconstructs which Pauli errors afflict the cycle and with what probabilities — an error profile rather than a benchmark score. Developed at Quantum Benchmark Inc. (now part of Keysight Technologies) by Carignan-Dugas, Emerson, Wallman and colleagues, it was patented and shipped in the True-Q software in 2020 under its original name, K-body noise reconstruction (KNR); the [formal paper](https://arxiv.org/abs/2303.17714) followed in 2023.

## How it works

CER interleaves the cycle under study with random Pauli-twirling cycles, exactly as in cycle benchmarking, and fits the resulting exponential decays for many Pauli observables at once. Combining the fitted decay rates yields the marginal probabilities of individual Pauli errors — up to a chosen weight K, on chosen subsets of qubits — with multiplicative precision, so even small error rates are resolved to useful relative accuracy. Because the data come from twirled circuits, the reconstruction describes the dressed cycle: the noise as tailored by randomized compiling.

## Strengths and limitations

CER turns decay data into an actionable error profile — which errors, on which qubits, at what rates. The trade-offs: the protocol is patented and implemented only in Keysight's closed-source True-Q package, with no open reference implementation; per the True-Q documentation, some Pauli errors are resolved only as degenerate sets whose probabilities are summed; and it characterizes the twirled (dressed) cycle rather than bare gates. It is commonly confused with independent Pauli-noise-learning methods (Flammia–Wallman channel estimation, Harper–Flammia–Wallman noise learning, IBM's sparse Pauli–Lindblad models), which pursue the same goal differently; [ACES](/benchmarks/aces/) estimates related per-gate Pauli error rates processor-wide. As of July 2026 the 2023 paper remains preprint-only.

## Notable results

A CER-based method for [estimating coherent contributions to the error profile](https://arxiv.org/abs/2303.09945) was published in Quantum 8, 1367 (2024), and CER-learned error models have been used to sharpen decoders for quantum error correction ([Iyer et al., 2025](https://arxiv.org/abs/2507.08536)). CER has been part of True-Q's error-diagnostics suite since 2020.
