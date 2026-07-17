---
name: BACQ
tagline: MetriQs-France benchmark suite scoring whole quantum stacks on optimization, linear systems, many-body simulation, and factoring, aggregated into one user-weighted figure of merit.
category: application-level
measures: Sub-scores on four application pillars plus energy efficiency, aggregated into a user-preference-weighted global figure of merit
introducedBy:
  - BACQ consortium coordinated by Thales (with Eviden, CEA, CNRS, Teratec & LNE)
yearIntroduced: 2023
aliases:
  - Application-oriented Benchmarks for Quantum Computing
  - Benchmarks for Application-Centric Quantum Computing
status: active
papers:
  - title: "BACQ: Application-oriented Benchmarks for Quantum Computing"
    authors: Barbaresco, Rioux, Labreuche et al.
    year: 2024
    url: https://arxiv.org/abs/2403.12205
  - title: "BACQ: Application-Oriented Benchmarks for Quantum Computing"
    authors: Barbaresco et al.
    year: 2026
    url: https://link.springer.com/chapter/10.1007/978-3-032-13852-1_22
  - title: "Application of Multi-criteria Decision Aiding to Quantum Benchmarking: Some Results on Scale Invariance"
    authors: Labreuche
    year: 2026
    url: https://link.springer.com/chapter/10.1007/978-3-032-13852-1_24
related:
  - q-score
  - qed-c-benchmarks
---

BACQ (Application-oriented Benchmarks for Quantum Computing) is a French benchmark suite that scores a whole quantum computing stack on reference application problems and aggregates the results into a single, user-weighted figure of merit. It is the flagship benchmarking effort of the MetriQs-France program under France 2030: a consortium coordinated by Thales with Eviden, CEA, CNRS, Teratec, and the national metrology lab LNE, announced in May 2023 with roughly 4 million EUR over three years and publicly defined in a [March 2024 paper](https://arxiv.org/abs/2403.12205).

## How it works

BACQ scores four application pillars, plus energy efficiency as a resource cost: combinatorial optimization (a MaxCut benchmark that adopts and extends Eviden's [Q-score](/benchmarks/q-score/)), linear-system solving, quantum many-body physics simulation, and prime factorization. The sub-scores are then aggregated into a global figure of merit with MYRIAD, Thales' multi-criteria decision-analysis tool, which weights the pillars by user preferences instead of forcing one universal ranking; [Labreuche's QUEST-IS 2025 paper](https://link.springer.com/chapter/10.1007/978-3-032-13852-1_24) works out scale-invariance properties of that aggregation.

## Strengths and limitations

The multi-criteria aggregation is the distinctive contribution: no single number serves everyone, so different users can weight optimization against simulation or factoring. Suites like the [QED-C benchmarks](/benchmarks/qed-c-benchmarks/), by contrast, publish per-application results without an aggregate. The trade-off is maturity: as of July 2026 BACQ has no dedicated public code repository (the open-source code the project cites is Q-score's) and no published machine ranking; the consolidated suite, leaderboard, and final results are still rolling out. The acronym's expansion also varies by source (Eviden materials used "Benchmarks for Application-Centric Quantum Computing"), and BACQ should not be confused with Q-score itself, which it subsumes as one pillar.

## Notable results

The funded project runs September 2023 through 2026, with international TQCI seminars in June 2024 and June 2025, and BACQ papers presented at QUEST-IS 2025 appeared in the [Springer proceedings in 2026](https://link.springer.com/chapter/10.1007/978-3-032-13852-1_22). The January 2026 [Many-body Quantum Score](/benchmarks/many-body-quantum-score/) (from Eviden/CEA authors overlapping BACQ's team, matching its many-body pillar) stops short of billing itself as a BACQ deliverable.
