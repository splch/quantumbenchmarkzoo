---
name: Logical error rate per round
tagline: "The headline figure of QEC memory experiments: the probability per round of error correction that the decoded logical qubit suffers a logical flip."
category: error-correction
measures: Probability per syndrome-extraction round that the decoded logical qubit flips, fit from the decay of logical fidelity with round count
introducedBy:
  - Google Quantum AI
yearIntroduced: 2021
aliases:
  - εL
  - ε_L
  - logical error per round
  - logical error per cycle
  - error per cycle of error correction
  - per-round logical error rate
  - LER per round
status: active
papers:
  - title: Exponential suppression of bit or phase flip errors with repetitive error correction
    authors: Google Quantum AI
    year: 2021
    url: https://arxiv.org/abs/2102.06132
  - title: Suppressing quantum errors by scaling a surface code logical qubit
    authors: Google Quantum AI
    year: 2022
    url: https://arxiv.org/abs/2207.06431
  - title: Quantum error correction below the surface code threshold
    authors: Google Quantum AI and Collaborators
    year: 2024
    url: https://arxiv.org/abs/2408.13687
  - title: Demonstration of logical qubits and repeated error correction with better-than-physical error rates
    authors: Paetznick, da Silva, Ryan-Anderson et al. (Microsoft Azure Quantum & Quantinuum)
    year: 2024
    url: https://arxiv.org/abs/2404.02280
related:
  - error-suppression-factor
  - stability-experiment
  - decoder-bench
---

The logical error rate per round — written ε_L, or "error per cycle of error correction" — is the headline number of a quantum error-correction memory experiment: the probability per syndrome-extraction round that the decoded logical qubit suffers a logical flip. The per-round quantity appears in surface-code theory long before any hardware demonstration, but [Google Quantum AI's 2021 repetition-code experiment](https://arxiv.org/abs/2102.06132), reporting "reducing logical error per round by more than 100x", made it the standard experimental reporting convention. A metric and convention rather than a benchmark protocol in its own right, it is the number that below-threshold claims and the [error-suppression factor Λ](/benchmarks/error-suppression-factor/) are built from.

## How it works

A memory experiment prepares a logical qubit in an eigenstate of a logical observable, runs n rounds of stabilizer measurement, then reads out the data qubits and decodes the full syndrome history to decide whether the logical observable flipped. Sweeping n over many shots gives a logical fidelity that decays exponentially with rounds; fitting the decay — F(n) ∝ (1 − 2ε)^n — yields the per-round logical error ε, typically averaged over X- and Z-basis memory. Comparing ε across code distances gives Λ.

## Strengths and limitations

The metric is operational and decoder-inclusive: qubits, syndrome-extraction circuits, and the classical decoder must all perform for ε_L to fall. But conventions vary — "per round" vs "per cycle", the fit model, X/Z averaging, and per-logical-qubit normalization in multi-logical-qubit codes — so cross-paper comparisons need care. It also scores idle memory only: the [stability experiment](/benchmarks/stability-experiment/) probes the complementary spacelike task, and [DecoderBench](/benchmarks/decoder-bench/) isolates the classical decoding side.

## Notable results

[Google's below-threshold surface code](https://arxiv.org/abs/2408.13687) reports 0.143% ± 0.003% error per cycle at distance 7 (Nature, 2025), following the distance-scaling groundwork of [its 2022 predecessor](https://arxiv.org/abs/2207.06431). [Microsoft Azure Quantum and Quantinuum](https://arxiv.org/abs/2404.02280) report per-cycle logical error rates below physical baselines on trapped ions, extended to graph states of up to 12 logical qubits with a [tesseract code](https://arxiv.org/abs/2409.04628); 2025 qLDPC and bosonic demonstrations report the same per-cycle figure.
