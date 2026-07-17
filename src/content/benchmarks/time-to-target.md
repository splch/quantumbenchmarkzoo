---
name: Time-to-target
tagline: D-Wave's relaxation of time-to-solution that times solvers to a target energy — originally set by quantiles of a reference annealer's short-run samples — rather than to the exact ground state.
category: platform-specific
measures: Expected time — total wall-clock (TTT_total) or anneal-only (TTT_anneal) — for a solver to find a solution at or below a target energy with 99% confidence
introducedBy:
  - King, Yarkoni, Nevisi, Hilton & McGeoch (D-Wave)
yearIntroduced: 2015
aliases:
  - TTT
  - TTT_total
  - TTT_anneal
status: active
papers:
  - title: Benchmarking a quantum annealing processor with the time-to-target metric
    authors: King, Yarkoni, Nevisi, Hilton & McGeoch
    year: 2015
    url: https://arxiv.org/abs/1508.05087
  - title: Improved Sparse Ising Optimization
    authors: Zick
    year: 2023
    url: https://arxiv.org/abs/2311.09275
  - title: Performance analysis of classical adiabatic annealing on Ising machines
    authors: Lamers, Verschaffelt & Van der Sande
    year: 2026
    url: https://arxiv.org/abs/2606.07331
related:
  - time-to-solution
  - frustrated-cluster-loops
---

Time-to-target (TTT) is D-Wave's deliberate relaxation of [time-to-solution](/benchmarks/time-to-solution/): on hard instances an annealer may almost never sample the exact ground state, so [King, Yarkoni, Nevisi, Hilton and McGeoch (2015)](https://arxiv.org/abs/1508.05087) instead timed solvers to a target energy that the annealer itself sets. Strictly a named metric with a target-setting procedure rather than a standalone scored benchmark, it is filed here alongside the annealing benchmarks it serves.

## How it works

The 2015 protocol lets the quantum annealer set the bar. Sample a reference annealer (a D-Wave 2X in the study) for a short fixed time — 15 to 352 ms — and place the target energy at a low quantile (q = 0.001, 0.01, or 0.1) of the sampled energy distribution. Competing solvers then race to produce a solution at or below that target, reported as the expected time to reach it: TTT_total (wall clock including programming and readout) or TTT_anneal (anneal time only), computed from the companion samples-to-target (STT) count. Modern usage is looser — typically `TTT(T) = T · log(0.01) / log(1 − P(T))` for a chosen target energy, i.e. the TTS formula with the ground-state requirement swapped out.

## Strengths and limitations

TTT rewards what annealers are actually good at — fast, decent-quality samples — and the metric remains in active use in Ising-machine benchmarking, from a [2023 sparse-Ising optimization study](https://arxiv.org/abs/2311.09275) to a [2026 analysis of classical adiabatic annealing](https://arxiv.org/abs/2606.07331). The caveats are real, though. The introducing paper is vendor-authored — five D-Wave employees benchmarking D-Wave's own 2X against single-threaded CPU software — and its headline 2–15x total-time (8–600x anneal-only) results come with an explicit disclaimer of any quantum-speedup claim; the paper was never journal-published. Deriving targets from a reference annealer's samples also bakes that machine's strengths into the test. And the name has drifted: later papers often drop the quantile procedure (and the King et al. citation), so a reported "TTT" is not always this protocol — nor is it the older classical time-to-target plots of Aiex, Resende and Ribeiro (2002), which share only the name.
