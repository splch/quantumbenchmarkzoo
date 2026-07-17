---
name: Gaussian boson sampling
tagline: "Photonic quantum-advantage benchmark: sample photon-number patterns from squeezed light sent through a large random interferometer, a task whose probabilities are #P-hard matrix hafnians."
category: platform-specific
measures: Ability to sample from a squeezed-light random interferometer's photon-number distribution, reported as detected photons and modes, sampling speed, and estimated classical-simulation cost
introducedBy:
  - Hamilton, Kruse, Sansoni, Barkhofen, Silberhorn & Jex
yearIntroduced: 2016
aliases:
  - GBS
status: active
papers:
  - title: Gaussian Boson Sampling
    authors: Hamilton, Kruse, Sansoni, Barkhofen, Silberhorn & Jex
    year: 2016
    url: https://arxiv.org/abs/1612.01199
  - title: The Computational Complexity of Linear Optics
    authors: Aaronson & Arkhipov
    year: 2010
    url: https://arxiv.org/abs/1011.3245
  - title: Quantum computational advantage using photons
    authors: Zhong et al. (USTC)
    year: 2020
    url: https://arxiv.org/abs/2012.01625
  - title: Quantum computational advantage with a programmable photonic processor
    authors: Madsen et al. (Xanadu)
    year: 2022
    url: https://www.nature.com/articles/s41586-022-04725-x
code:
  - name: The Walrus (hafnian/Torontonian computation and GBS sampling)
    url: https://github.com/XanaduAI/thewalrus
  - name: Strawberry Fields (archived Jan 2026)
    url: https://github.com/XanaduAI/strawberryfields
related:
  - cross-entropy-benchmarking
---

Gaussian boson sampling (GBS) is the flagship quantum-computational-advantage benchmark for photonic platforms — the photonic counterpart of the random-circuit sampling scored by [cross-entropy benchmarking](/benchmarks/cross-entropy-benchmarking/). Proposed by [Hamilton and colleagues in 2016](https://arxiv.org/abs/1612.01199), it replaces the single-photon inputs of [Aaronson–Arkhipov boson sampling](https://arxiv.org/abs/1011.3245) with squeezed vacuum, which photon sources produce far more readily, and swaps matrix permanents for matrix hafnians. It underpins the advantage claims of USTC's Jiuzhang machines and Xanadu's Borealis.

## How it works

Squeezed-vacuum states are injected into the modes of a large random interferometer and photon numbers are counted at the outputs. The probability of each detection pattern is the hafnian of a submatrix of a matrix fixed by the squeezing and the interferometer — #P-hard to compute (threshold-detector experiments like Jiuzhang sample the related Torontonian; Borealis used photon-number-resolving detectors). Full-size probabilities cannot be computed, so there is no single score: experiments report detected-photon and mode counts and sampling speed, validate small instances against exact simulation, run statistical tests to reject classical spoofing hypotheses (thermal, distinguishable-photon, uniform samplers), and estimate the classical cost of simulation.

## Strengths and limitations

GBS scales past the classical-verification wall that caps benchmarks like [Quantum Volume](/benchmarks/quantum-volume/) — that is its point — but the same fact makes validation contestable. Loss-exploiting tensor-network spoofers ([Oh et al. 2023](https://arxiv.org/abs/2306.03709); Nature Physics 2024) sampled closer to the ideal distribution than the original Jiuzhang and Borealis experiments themselves. GBS machines are special-purpose, non-universal samplers, so results do not translate into gate-model metrics, and proposed applications — vibronic spectra, dense-subgraph and graph-similarity problems, molecular docking — remain heuristic, with no proven speedup.

## Notable results

[Jiuzhang's 2020 run](https://arxiv.org/abs/2012.01625) (76 detected photons) was the first photonic advantage claim; [Borealis (2022)](https://www.nature.com/articles/s41586-022-04725-x) made the interferometer programmable, detecting up to 219 photons. The arms race with classical simulation continues: [Jiuzhang 4.0](https://arxiv.org/abs/2508.09092) (2025) reports 1024 squeezed states across 8176 modes with up to 3050 detected photons, engineered explicitly to outrun tensor-network spoofers. Xanadu's The Walrus remains maintained (v0.22.0, May 2025); Strawberry Fields was archived in January 2026.
