---
name: Time-to-solution
tagline: "The standard quantum-annealing benchmark: wall-clock time to find the ground state at least once with 99% probability, compared against optimized classical solvers to test for quantum speedup."
category: platform-specific
measures: Wall-clock time to reach the ground state (or a target energy) at least once with 99% probability, at the optimal anneal time, compared against classical solvers' TTS scaling with problem size
introducedBy:
  - Rønnow, Lidar, Troyer & colleagues
yearIntroduced: 2014
aliases:
  - TTS
  - TTS99
  - "time-to-99%-success-probability"
status: active
papers:
  - title: Defining and detecting quantum speedup
    authors: Rønnow, Wang, Job, Boixo, Isakov, Wecker, Martinis, Lidar & Troyer
    year: 2014
    url: https://arxiv.org/abs/1401.2910
  - title: What is the Computational Value of Finite Range Tunneling?
    authors: Denchev, Boixo, Isakov, Ding, Babbush, Smelyanskiy, Martinis & Neven
    year: 2016
    url: https://arxiv.org/abs/1512.02206
  - title: Demonstration of a scaling advantage for a quantum annealer over simulated annealing
    authors: Albash & Lidar
    year: 2018
    url: https://arxiv.org/abs/1705.07452
  - title: Scaling Advantage in Approximate Optimization with Quantum Annealing
    authors: Munoz Bauza & Lidar
    year: 2025
    url: https://arxiv.org/abs/2401.07184
related:
  - time-to-target
  - frustrated-cluster-loops
  - chook
  - q-score
---

Time-to-solution (TTS) is the framework in which quantum annealers — and Ising-machine heuristics generally — are benchmarked against classical optimization. Defined by [Rønnow and colleagues in 2014](https://arxiv.org/abs/1401.2910) while testing the D-Wave Two, it measures how long until the problem is actually solved and, by tracking how that time scales with problem size, gives "quantum speedup" a testable meaning. System-level in spirit, it is filed as platform-specific: it is native to analog optimizers, not gate-model devices.

## How it works

Run the solver repeatedly on an instance and estimate the per-run probability `p` of reaching the ground state (or a chosen target energy). TTS is the time per run multiplied by the repetitions needed for at least one success with 99% probability: `R99 = ln(1 − 0.99) / ln(1 − p)`. Two rules make the number meaningful. First, evaluate at the optimal anneal time: the 2014 paper shows that hardware whose minimum anneal time exceeds the optimum produces scaling curves that can fake or mask speedup. Second, aggregate over quantiles of a random-instance ensemble — median and 99th percentile behave very differently — and compare TTS scaling against optimized classical solvers, classifying any speedup as provable, strong, potential, or limited.

## Strengths and limitations

TTS charges for actual solving time rather than proxies, so the annealing speedup debate is conducted almost entirely in it. But there is no canonical instance set: every study fixes its own problem class, quantile, and classical reference solver and hardware, so TTS numbers — and speedup claims — are relative to those choices. Where ground states are rarely reached, deliberate relaxations take over: [time-to-target](/benchmarks/time-to-target/) (2015) and time-to-epsilon (2024). Planted-instance generators such as [frustrated cluster loops](/benchmarks/frustrated-cluster-loops/) and [Chook](/benchmarks/chook/) supply verifiable problem ensembles.

## Notable results

The 2014 study itself found no evidence of quantum speedup on the D-Wave Two. Later headline claims — [Google's ~10^8 speedup on finite-range-tunneling instances](https://arxiv.org/abs/1512.02206), [Albash and Lidar's scaling advantage over simulated annealing](https://arxiv.org/abs/1705.07452), and [Munoz Bauza and Lidar's time-to-epsilon result](https://arxiv.org/abs/2401.07184) (PRL, 2025) — have each been contested or matched by improved classical baselines, most recently a [2026 simulated-bifurcation rebuttal](https://arxiv.org/abs/2505.22514) argued under the same TTS-style run-time accounting.
