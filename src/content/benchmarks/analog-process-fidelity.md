---
name: Analog process fidelity
tagline: Estimates the many-body fidelity of an analog quantum simulator's quench dynamics from about a thousand bitstring samples, doing for Hamiltonian evolution what XEB does for random digital circuits.
category: platform-specific
measures: Many-body fidelity F_d of the device's time-evolved state against exact classical simulation of ergodic quench dynamics, estimated from bitstring statistics
introducedBy:
  - Mark, Choi, Shaw, Endres & Choi (MIT / Caltech / Stanford)
yearIntroduced: 2022
aliases:
  - Analogue process fidelity
  - QCMet M10.1
  - Fidelity estimation via ergodic quantum dynamics
  - F_d estimator
status: active
papers:
  - title: Benchmarking quantum simulators using ergodic quantum dynamics
    authors: Mark, Choi, Shaw, Endres & Choi
    year: 2022
    url: https://arxiv.org/abs/2205.12211
  - title: Preparing random states and benchmarking with many-body quantum chaos
    authors: Choi et al.
    year: 2021
    url: https://arxiv.org/abs/2103.03535
  - title: Benchmarking highly entangled states on a 60-atom analogue quantum simulator
    authors: Shaw et al.
    year: 2023
    url: https://arxiv.org/abs/2308.07914
  - title: "A Review and Collection of Metrics and Benchmarks for Quantum Computers: definitions, methodologies and software"
    authors: Lall et al.
    year: 2025
    url: https://arxiv.org/abs/2502.06717
related:
  - cross-entropy-benchmarking
  - many-body-quantum-score
---

Analog process fidelity is a whole-device fidelity benchmark for analog quantum simulators: machines that evolve continuously under a native Hamiltonian and cannot run gate-based protocols like [randomized benchmarking](/benchmarks/randomized-benchmarking/) or [cross-entropy benchmarking](/benchmarks/cross-entropy-benchmarking/) (XEB). Introduced by [Mark, Choi, Shaw, Endres & Choi in 2022](https://arxiv.org/abs/2205.12211) (published as PRL 131, 110601), it lets ergodic quench dynamics play the role that random circuits play in XEB. "Analog process fidelity" is the label the QCMet metrics collection assigned it (metric M10.1); the source literature calls it fidelity estimation via ergodic quantum dynamics, so search under that name too.

## How it works

The device quenches a simple initial state under its native, ergodic Hamiltonian, then samples roughly 1,000 bitstrings. The same evolution is simulated classically to get each sampled bitstring's ideal probability. Under chaotic dynamics, outcome probabilities rescaled by their infinite-time averages follow Porter–Thomas statistics (the same universal fluctuations random circuits produce), so an XEB-style estimator applied to the rescaled probabilities yields the many-body fidelity F_d between the device's state and the ideal one. Percent-level precision needs only about 10^3 samples, independent of system size.

## Strengths and limitations

The protocol needs no gates, ancillas, or hardware changes (just native dynamics and bitstring readout), and it applies to a wide class of analog simulators, not only the neutral-atom platforms QCMet groups it with. The same data supports Hamiltonian learning and noise calibration, demonstrated on Rydberg arrays in [Choi et al., Nature 613, 468 (2023)](https://arxiv.org/abs/2103.03535). Its core assumption is also its main limit: dynamics must be ergodic enough to produce Porter–Thomas statistics, so the estimator can fail for weakly or non-ergodic evolution and for correlated non-local errors. It also requires classical simulation of the target dynamics, though [Shaw et al.](https://arxiv.org/abs/2308.07914) showed that extrapolating approximate simulations extends it beyond exactly simulable sizes.

## Notable results

Shaw et al. benchmarked highly entangled states on a 60-atom Rydberg simulator (Nature 628, 71 (2024)). The February 2025 [QCMet standardization collection](https://arxiv.org/abs/2502.06717) adopted it as metric M10.1. For a holistic score built on analog simulators, see the [Many-Body Quantum Score](/benchmarks/many-body-quantum-score/).
