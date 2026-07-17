---
name: Robust phase estimation
tagline: Heisenberg-limited calibration protocol that pins down individual gate rotation angles and axes from geometrically growing gate repetitions, with provable robustness to SPAM error.
category: characterization
measures: Specific gate phases (over-/under-rotation and rotation-axis errors, in radians) to Heisenberg-limited precision, robust to SPAM errors below fixed thresholds
introducedBy:
  - Kimmel, Low & Yoder
yearIntroduced: 2015
aliases:
  - RPE
status: active
papers:
  - title: Robust Calibration of a Universal Single-Qubit Gate-Set via Robust Phase Estimation
    authors: Kimmel, Low & Yoder
    year: 2015
    url: https://arxiv.org/abs/1502.02677
  - title: Experimental demonstration of cheap and accurate phase estimation
    authors: Rudinger, Kimmel, Lobser & Maunz
    year: 2017
    url: https://arxiv.org/abs/1702.01763
  - title: Consistency testing for robust phase estimation
    authors: Russo, Kirby, Rudinger, Baczewski & Kimmel
    year: 2020
    url: https://arxiv.org/abs/2011.13442
  - title: Heisenberg-limited calibration of entangling gates with robust phase estimation
    authors: Rudinger, Marceaux, Hashim, Santiago, Siddiqi & Young
    year: 2025
    url: https://arxiv.org/abs/2502.06698
code:
  - name: pyRPE (Sandia)
    url: https://gitlab.com/quapack/pyrpe
  - name: pyGSTi (pygsti.extras.rpe)
    url: https://github.com/sandialabs/pyGSTi
  - name: forest-benchmarking (Rigetti)
    url: https://github.com/rigetti/forest-benchmarking
related:
  - gate-set-tomography
  - randomized-benchmarking
---

Robust phase estimation (RPE) is a calibration and characterization protocol, introduced by [Kimmel, Low & Yoder in 2015](https://arxiv.org/abs/1502.02677), that measures specific rotation angles of individual gates (over-/under-rotations and rotation-axis errors) rather than scoring a device. It adapts Higgins et al.'s adaptive-measurement-free phase estimation ([arXiv:0904.3426](https://arxiv.org/abs/0904.3426)) into an ancilla-free gate-calibration routine, and should not be confused with the textbook quantum phase estimation algorithm. The "robust" is a theorem: estimates remain accurate under state-preparation and measurement (SPAM) and additive errors, provided they stay below fixed thresholds.

## How it works

RPE runs non-adaptive sequences that repeat the target gate a geometrically growing number of times (1, 2, 4, ..., 2^K), with two measurement settings per length to read out the accumulated phase. Each generation of sequences halves the ambiguity left by the previous one, so the phase estimate converges with error shrinking as roughly 1/(number of gate applications), the Heisenberg limit, instead of the 1/sqrt(N) shot-noise scaling of naive parameter fits. A handful of such phases suffices to calibrate a universal single-qubit gate set.

## Strengths and limitations

RPE is cheap (few sequences, no ancillas, no adaptivity, simple analysis) and comes with provable error bounds. It is deliberately narrow: it returns targeted phase and axis parameters, not an overall fidelity, so it complements rather than replaces [randomized benchmarking](/benchmarks/randomized-benchmarking/) (average stochastic error) and [gate set tomography](/benchmarks/gate-set-tomography/) (full process reconstruction). Outside its error thresholds, estimates can fail without warning, which motivated a [consistency-testing extension](https://arxiv.org/abs/2011.13442) now included in pyRPE; the original paper's error analysis was later corrected in an erratum, with the approach intact. Bayesian RPE is a [2024 few-shot variant](https://arxiv.org/abs/2407.18339), not an alias.

## Notable results

A [2017 Sandia trapped-ion demonstration](https://arxiv.org/abs/1702.01763) measured phases cheaply and accurately, cross-validated against gate set tomography. In [February 2025](https://arxiv.org/abs/2502.06698), Sandia and the LBNL Advanced Quantum Testbed used RPE for Heisenberg-limited calibration of a two-qubit CZ gate on a transmon processor. Maintained implementations ship in Sandia's pyGSTi and standalone pyRPE.
