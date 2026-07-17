---
name: Deceptive cluster loops
tagline: Frustrated cluster loops with a tunable coupling scale λ that conceals the planted structure, built to test whether annealer speedups survive against structure-exploiting classical solvers.
category: platform-specific
measures: Whole-annealer time-to-solution (99% success) on Chimera FCL instances whose inter-cell couplers are scaled by a structure-concealing factor λ, versus state-of-the-art classical heuristics
introducedBy:
  - Mandrà (NASA Ames) & Katzgraber (Texas A&M)
yearIntroduced: 2017
aliases:
  - DCL
  - deceptive cluster loop problems
status: historical
papers:
  - title: A deceptive step towards quantum speedup detection
    authors: Mandrà & Katzgraber
    year: 2017
    url: https://arxiv.org/abs/1711.01368
  - title: "Chook: A comprehensive suite for generating binary optimization problems with planted solutions"
    authors: Perera, Akpabio, Hamze, Mandrà, Rose, Aramon & Katzgraber
    year: 2020
    url: https://arxiv.org/abs/2005.14344
  - title: Optimization and benchmarking of the thermal cycling algorithm
    authors: Barzegar, Kankani, Mandrà & Katzgraber
    year: 2020
    url: https://arxiv.org/abs/2012.09801
code:
  - name: Chook (includes DCL generator)
    url: https://github.com/dilinanp/chook
related:
  - frustrated-cluster-loops
  - chook
  - time-to-solution
---

Deceptive cluster loops (DCL) are the adversarial refinement of [frustrated cluster loops](/benchmarks/frustrated-cluster-loops/), introduced by [Mandrà and Katzgraber](https://arxiv.org/abs/1711.01368) in "A deceptive step towards quantum speedup detection" (2017; Quantum Sci. Technol. 2018). After classical solvers aware of FCL's planted cluster structure erased D-Wave's reported advantage, DCL posed the sharper question: does an annealer still win when that structure is hidden?

## How it works

DCL instances are FCL problems on the Chimera graph with one extra dial: intra-cell couplers keep magnitude 1, while every inter-cell coupler is scaled by a factor λ. Small λ collapses each K4,4 cell into a single virtual spin, so cluster-style algorithms win; large λ makes chains across cells dominate, favoring chain-aware mappings; intermediate λ defeats both shortcuts while leaving the planted problem intact. Performance is scored as [time-to-solution](/benchmarks/time-to-solution/) at 99% success probability against state-of-the-art classical heuristics: the Hamze–de Freitas–Selby algorithm and parallel tempering with isoenergetic cluster moves.

## Strengths and limitations

DCL directly probes whether an annealer's edge survives once structure exploitation is off the table, and near λ ≈ 7 the D-Wave 2000Q outperformed all classical heuristics then known. That headline is easy to overread: the advantage was a constant factor only, with the authors stating that a scaling improvement "remains elusive", yet DCL is often miscited as a demonstrated quantum speedup. Like its parent class, it names a planted-instance problem family scored via time-to-solution comparisons, not a fixed protocol producing a single-number score.

## Notable results

DCL is of historical interest today: it is defined for the Chimera topology of the retired D-Wave 2000Q/2X (current machines use Pegasus and Zephyr), the [Chook](/benchmarks/chook/) suite that ships its generator has been dormant since v0.2.0 (March 2021), and no 2024–2026 study appears to run DCL instances. It survives as a cited milestone in the quantum-speedup-detection debate and in classical-solver benchmarking such as the [thermal cycling algorithm study](https://arxiv.org/abs/2012.09801).
