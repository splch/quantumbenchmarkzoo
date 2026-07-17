---
name: Cross-Entropy Benchmarking
tagline: Estimates circuit fidelity by checking how often a device samples the high-probability bitstrings of random quantum circuits — the metric behind Google's quantum supremacy claim.
category: system-level
measures: Linear cross-entropy fidelity, F_XEB = 2^n · ⟨p_ideal(x)⟩ − 1, averaged over sampled bitstrings x
introducedBy:
  - Google Quantum AI
yearIntroduced: 2016
aliases:
  - XEB
  - Linear XEB
status: active
papers:
  - title: Characterizing quantum supremacy in near-term devices
    authors: Boixo et al.
    year: 2018
    url: https://arxiv.org/abs/1608.00263
  - title: Quantum supremacy using a programmable superconducting processor
    authors: Arute et al. (Google AI Quantum)
    year: 2019
    url: https://www.nature.com/articles/s41586-019-1666-5
  - title: Solving the sampling problem of the Sycamore quantum circuits
    authors: Pan, Chen & Zhang
    year: 2022
    url: https://arxiv.org/abs/2111.03011
code:
  - name: Cirq XEB tools
    url: https://quantumai.google/cirq/noise/qcvv/xeb_theory
  - name: ReCirq (supremacy circuit experiments)
    url: https://github.com/quantumlib/ReCirq
related:
  - quantum-volume
  - randomized-benchmarking
  - speckle-purity-benchmarking
  - loschmidt-echo-benchmark
  - quantum-echoes
---

Cross-entropy benchmarking (XEB) scores a device on random circuit sampling: run a random circuit many times, then ask whether the observed bitstrings are biased toward the outputs the ideal circuit makes likely. It is both a practical calibration tool (per-gate-pair XEB is core to Google's tune-up workflow) and the headline metric of the 2019 quantum supremacy experiment.

## How it works

For a random circuit on `n` qubits, ideal output probabilities follow the exponential (Porter–Thomas) distribution, so a perfect device samples "heavy" bitstrings noticeably more often than chance. The linear cross-entropy fidelity is

```text
F_XEB = 2^n · ⟨ p_ideal(x) ⟩ − 1
```

where the average runs over the bitstrings `x` the device actually produced, and `p_ideal` is computed by classical simulation. A perfect device gives `F_XEB ≈ 1`; a device emitting uniform noise gives `F_XEB ≈ 0`. (The [2016 proposal](https://arxiv.org/abs/1608.00263) scored the logarithmic cross-entropy; the linear estimator above arrived with the 2019 supremacy experiment and is now the standard form.) Under a white-noise (depolarizing) model, `F_XEB` estimates total circuit fidelity, and small variants of the estimator trade statistical efficiency for robustness. The [Cirq XEB documentation](https://quantumai.google/cirq/noise/qcvv/xeb_theory) walks through the theory and a reference implementation.

## Strengths and limitations

XEB works on circuits far too entangled for tomography and needs only sampled bitstrings plus classical simulation — which is also its central limitation: computing `p_ideal` is exponentially hard, so XEB is directly verifiable only up to circuit sizes a classical supercomputer can still simulate. Beyond that regime, quoted fidelities rest on extrapolation.

The metric's adversarial robustness is an active research area. Tensor-network "spoofing" results, notably [Pan, Chen & Zhang (2022)](https://arxiv.org/abs/2111.03011), cut the classical cost of matching Sycamore's XEB scores by orders of magnitude, and later theoretical work showed that under a constant noise rate, polynomial-time classical algorithms can achieve nontrivial XEB values. High XEB on its own is therefore weaker evidence of quantum advantage than originally hoped, though it remains a standard, sensitive full-stack calibration signal.

## Notable results

Google's 53-qubit Sycamore processor reported `F_XEB ≈ 0.2%` at depth 20 in the [2019 Nature experiment](https://www.nature.com/articles/s41586-019-1666-5) — small in absolute terms, but statistically far from classical spoofing baselines at the time. Follow-up random-circuit-sampling experiments by Google (67–70 qubits, 2023–24) and USTC's Zuchongzhi processors pushed the verifiable and extrapolated regimes further while the classical-simulation frontier advanced in parallel.
