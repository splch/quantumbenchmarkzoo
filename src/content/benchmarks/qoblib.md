---
name: QOBLIB
tagline: Open library of ten classically hard, practically motivated optimization problem classes (the Intractable Decathlon) with common reporting rules for quantum and classical solvers.
category: application-level
measures: Best feasible objective value, success rate, and wall-clock time-to-solution per instance across ten hard optimization problem classes
introducedBy:
  - Quantum Optimization Working Group (Zuse Institute Berlin, IBM Quantum & partners)
yearIntroduced: 2025
aliases:
  - Quantum Optimization Benchmarking Library
  - Quantum Optimization Benchmark Library
  - Intractable Decathlon
status: active
papers:
  - title: "Quantum Optimization Benchmarking Library: The Intractable Decathlon"
    authors: Koch, Bernal Neira, Chen, Cortiana, Egger et al.
    year: 2025
    url: https://arxiv.org/abs/2504.03832
  - title: The Quantum Optimization Benchmarking Library
    authors: Koch et al. (Quantum Optimization Working Group)
    year: 2026
    url: https://www.nature.com/articles/s43588-026-00991-1
code:
  - name: ZIB-AOPT/QOBLIB (GitHub, current home)
    url: https://github.com/ZIB-AOPT/QOBLIB
  - name: QOBLIB on ZIB GitLab (original repository)
    url: https://git.zib.de/qopt/qoblib-quantum-optimization-benchmarking-library
related:
  - q-score
  - quark
  - qb-gsee-benchmark
---

QOBLIB, the Quantum Optimization Benchmarking Library, is an open instance library and reporting standard for tracking whether quantum methods are gaining ground on classically hard optimization. The Quantum Optimization Working Group (Koch and 26 co-authors spanning the Zuse Institute Berlin, IBM Quantum, and some fifteen partner organizations) released it on [arXiv in April 2025](https://arxiv.org/abs/2504.03832) and published it in [Nature Computational Science in June 2026](https://www.nature.com/articles/s43588-026-00991-1).

## How it works

The library curates instances from ten problem classes, dubbed the Intractable Decathlon: market split, low-autocorrelation binary sequences, minimum Birkhoff decomposition, Steiner tree packing, sports tournament scheduling, portfolio optimization, maximum independent set, network design, vehicle routing, and topology design. Instances span roughly under 100 to 100,000 decision variables and are chosen to be empirically hard for state-of-the-art classical methods already at small sizes, while staying close to practice. Any solver, quantum or classical, can submit results; reporting covers best feasible objective value, success rate over repeated runs, and wall-clock time-to-solution broken down by hardware type. The [repository](https://github.com/ZIB-AOPT/QOBLIB) supplies the instances, verification tools, and per-instance track records.

## Strengths and limitations

QOBLIB is model- and hardware-independent, with classical solvers competing on the same instances, which keeps quantum-advantage claims honest. It deliberately produces no single device score: results are per-instance track records rather than one aggregate number like [Q-score](/benchmarks/q-score/), and it supplies instances plus reporting conventions rather than an execution harness (frameworks like [QUARK](/benchmarks/quark/) handle orchestration). "Intractable" means classically hard, not quantum-advantaged: classical baselines currently lead, and the library exists to track progress toward advantage. Note the arXiv v1 title said "Benchmark Library"; v2 and the journal version say "Benchmarking Library".

## Notable results

Community solution submissions are actively merged, with entries from Q-CTRL, Kipu Quantum, and Q-Bridge SA landing through July 2026. The [QB-GSEE benchmark](/benchmarks/qb-gsee-benchmark/) takes a similar instances-plus-reporting approach for ground-state energy estimation.
