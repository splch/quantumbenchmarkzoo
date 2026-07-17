---
name: Q-score
tagline: "Atos/Eviden's application-level metric: the largest MaxCut instance a quantum system can solve effectively, judged by beating random guessing by a set fraction of optimal-solver scaling."
category: application-level
measures: "Largest MaxCut problem size n passed, where the average QAOA cut over 100 random G(n, 1/2) graphs beats the n²/8 random baseline by β(n) > 0.2 in units of the optimal-solver scaling λn^(3/2), λ = 0.178"
introducedBy:
  - Atos (Martiel, Ayral & Allouche)
yearIntroduced: 2020
aliases:
  - Atos Q-score
  - Eviden Q-score
  - Q-Score
  - Q-score MaxCut
  - Q-score Max-Clique
  - Qs
status: active
papers:
  - title: Benchmarking quantum co-processors in an application-centric, hardware-agnostic and scalable way
    authors: Martiel, Ayral & Allouche
    year: 2021
    url: https://arxiv.org/abs/2102.12973
  - title: Evaluating the Q-score of Quantum Annealers
    authors: van der Schoot, Leermakers, Wezeman, Neumann & Phillipson
    year: 2022
    url: https://arxiv.org/abs/2208.07633
  - title: Extending the Q-score to an Application-level Quantum Metric Framework
    authors: van der Schoot, Wezeman, Neumann, Phillipson & Kooij
    year: 2023
    url: https://arxiv.org/abs/2302.00639
  - title: BACQ — Application-oriented Benchmarks for Quantum Computing
    authors: Barbaresco, Rioux, Labreuche et al.
    year: 2024
    url: https://arxiv.org/abs/2403.12205
code:
  - name: myQLM/qscore (Atos/Eviden reference implementation)
    url: https://github.com/myQLM/qscore
  - name: TNO-Quantum/qscore (gate-based, annealing, and photonic backends)
    url: https://github.com/TNO-Quantum/qscore
related:
  - qpack
  - qoblib
  - bacq
  - many-body-quantum-score
---

Q-score is an application-level benchmark announced by [Atos in December 2020](https://atos.net/en/2020/press-release_2020_12_04/atos-announces-q-score-the-only-universal-metrics-to-assess-quantum-performance-and-superiority) and specified by Martiel, Ayral & Allouche (Atos's quantum business now operates as Eviden). It scores a full quantum system — hardware and software stack together — by the largest MaxCut problem it solves effectively, making it one of the first application-centric, hardware-agnostic single-number metrics.

## How it works

For each candidate size n, the system solves MaxCut on 100 random Erdős–Rényi graphs G(n, 1/2) — n vertices, hence n qubits — and the average cut value C(n) is rescaled as β(n) = (C(n) − n²/8) / (λn^(3/2)): the improvement over random assignment (expected cut n²/8), in units of how an optimal solver's improvement scales (λ = 0.178). A size passes if β(n) > β* = 0.2, and the Q-score is the largest passing n. Both reference values are analytic, so no classical simulation of the quantum run is needed and the test scales to arbitrary size. The [original protocol](https://arxiv.org/abs/2102.12973) runs QAOA with a COBYLA optimizer and 2048 shots; extensions drop that requirement to cover [quantum annealers](https://arxiv.org/abs/2208.07633) and photonic systems, and a [generalized framework](https://arxiv.org/abs/2302.00639) adds a Max-Clique variant.

## Strengths and limitations

Q-score is end-to-end and genuinely cross-paradigm — gate-based, annealing, and photonic machines have all been scored. But results hinge on solver settings: under a 60-second limit, D-Wave's 2000Q and Advantage annealers scored 70 and 140 while classical tabu-search, simulated-annealing, and hybrid solvers scored 2,300–12,500 ([van der Schoot et al.](https://arxiv.org/abs/2208.07633)), so a high Q-score alone is not evidence of quantum advantage. The threshold β* = 0.2 is explicitly arbitrary — ideal depth-1 QAOA passes at every size, giving an infinite Q-score — and since "Q-score" can denote either the original protocol or the broader framework, quoted values are comparable only under identical settings. It is unrelated to the marketing "Q Score".

## Notable results

The [BACQ](/benchmarks/bacq/)/MetriQs-France program (Thales, Eviden, CEA, CNRS, Teratec, LNE) uses Q-score MaxCut and Max-Clique as core KPIs in its [Fast-Track QPU measurement campaign](https://arxiv.org/abs/2403.12205) with IQM, Pasqal, Quandela, TNO, and AQT. TNO maintains a [multi-backend implementation](https://github.com/TNO-Quantum/qscore) (v1.1.0, January 2024), while the original [myQLM repository](https://github.com/myQLM/qscore) has been dormant since March 2023 — and the annual Q-score ranking Atos announced never became a regular publication.
