---
name: Speckle purity benchmarking
tagline: Reads the decoherence-limited fidelity of a gate straight out of cross-entropy benchmarking data by estimating state purity from the speckle contrast of measured bitstring probabilities.
category: component-level
measures: Average output-state purity of random XEB circuits versus depth, from the variance of measured bitstring probabilities against the ideal Porter-Thomas distribution
introducedBy:
  - Arute et al. (Google AI Quantum)
yearIntroduced: 2019
aliases:
  - SPB
  - Purity XEB
  - XEB purity
status: active
papers:
  - title: 'Supplementary information for "Quantum supremacy using a programmable superconducting processor"'
    authors: Arute et al. (Google AI Quantum)
    year: 2019
    url: https://arxiv.org/abs/1910.11333
  - title: Realization of high-fidelity CZ gates in extensible superconducting qubits design with a tunable coupler
    authors: Ye, Cao, Wu, Chen, Zhu et al.
    year: 2021
    url: https://arxiv.org/abs/2109.05680
  - title: Phase transition in Random Circuit Sampling
    authors: Morvan et al. (Google Quantum AI)
    year: 2024
    url: https://arxiv.org/abs/2304.11119
  - title: A practical introduction to benchmarking and characterization of quantum computers
    authors: Hashim et al.
    year: 2025
    url: https://arxiv.org/abs/2408.12064
code:
  - name: Cirq (cirq.experiments.purity_from_probabilities)
    url: https://github.com/quantumlib/Cirq/blob/main/cirq-core/cirq/experiments/purity_estimation.py
  - name: ReCirq (XEB benchmarks with speckle purity)
    url: https://github.com/quantumlib/ReCirq
related:
  - unitarity-randomized-benchmarking
  - cross-entropy-benchmarking
---

Speckle purity benchmarking (SPB) estimates how much of a gate's error is decoherence, using no data beyond what [cross-entropy benchmarking (XEB)](/benchmarks/cross-entropy-benchmarking/) already collects. It was defined in the two-qubit gate metrology section of the [supplementary information](https://arxiv.org/abs/1910.11333) to Google's 2019 quantum-supremacy experiment, and, as an estimator applied to XEB measurement data rather than a standalone circuit protocol, it has become a standard ingredient of Google-style error budgeting.

## How it works

Deep random circuits ideally produce bitstring probabilities following the Porter-Thomas distribution, whose wide spread makes a histogram of measured probabilities look "speckled." Decoherence mixes the output toward the uniform distribution and washes the speckle out. SPB models the output as a depolarized pure state, ρ = p·|ψ⟩⟨ψ| + (1 − p)·I/D, whose purity is p², and extracts p from the speckle contrast: the variance of measured bitstring probabilities relative to the ideal Porter-Thomas variance. Fitting p against circuit depth turns an XEB dataset into a per-cycle purity decay: the fidelity the device would show if decoherence were its only error, with no experiments beyond XEB itself.

## Strengths and limitations

The comparison it enables is the point: the gap between speckle purity and the measured XEB fidelity is attributed to coherent control error, the same coherent-versus-incoherent split as [unitarity randomized benchmarking](/benchmarks/unitarity-randomized-benchmarking/), but obtained from XEB data instead of Clifford-sequence purity measurements. Its limits follow from its assumptions: it is a statistical estimator, not a tomographic purity, valid when ideal outputs are Porter-Thomas and errors act like a depolarizing mixture, and it is by design insensitive to coherent errors. Many papers report the same quantity simply as "XEB purity" or "purity XEB," without the word speckle.

## Notable results

SPB is a standard part of Google's gate metrology, used in the [random-circuit-sampling phase-transition paper](https://arxiv.org/abs/2304.11119) (Nature 634, 328 (2024)) and shipped in [Cirq](https://github.com/quantumlib/Cirq/blob/main/cirq-core/cirq/experiments/purity_estimation.py) as purity_from_probabilities. It has also spread beyond Google, for example to [CZ-gate error budgeting in tunable-coupler transmons](https://arxiv.org/abs/2109.05680).
