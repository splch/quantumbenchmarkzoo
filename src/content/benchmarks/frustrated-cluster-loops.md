---
name: Frustrated cluster loops
tagline: "Planted-solution Ising benchmark of the D-Wave 2000Q era: frustrated loops laid over ferromagnetic qubit clusters with tunable ruggedness, scored by time-to-solution against classical solvers."
category: platform-specific
measures: Whole-QPU time-to-solution on Chimera-native Ising instances with planted ground states, at tunable loop density (alpha), precision (rho), and ruggedness (R)
introducedBy:
  - D-Wave Systems (King, McGeoch & colleagues)
yearIntroduced: 2017
aliases:
  - FCL
  - FCL problems
  - frustrated cluster loop problems
status: historical
papers:
  - title: Quantum Annealing amid Local Ruggedness and Global Frustration
    authors: King, Yarkoni, Raymond, Ozfidan, King, Nevisi, Hilton & McGeoch
    year: 2017
    url: https://arxiv.org/abs/1701.04579
  - title: Probing for quantum speedup in spin-glass problems with planted solutions
    authors: Hen, Job, Albash, Rønnow, Troyer & Lidar
    year: 2015
    url: https://arxiv.org/abs/1502.01663
  - title: A deceptive step towards quantum speedup detection
    authors: Mandrà & Katzgraber
    year: 2018
    url: https://arxiv.org/abs/1711.01368
  - title: "Chook: A comprehensive suite for generating binary optimization problems with planted solutions"
    authors: Perera, Akpabio, Hamze, Mandrà, Rose, Aramon & Katzgraber
    year: 2020
    url: https://arxiv.org/abs/2005.14344
code:
  - name: Chook (ships the FCL-derived deceptive cluster loop generator)
    url: https://github.com/dilinanp/chook
  - name: dimod.generators.frustrated_loop (D-Wave Ocean)
    url: https://docs.dwavequantum.com/en/latest/ocean/api_ref_dimod/generated/dimod.generators.frustrated_loop.html
related:
  - deceptive-cluster-loops
  - time-to-solution
  - chook
---

Frustrated cluster loop (FCL) problems were the standard synthetic inputs for benchmarking quantum annealers in the D-Wave 2000Q era. Introduced in D-Wave's 2017 study [Quantum Annealing amid Local Ruggedness and Global Frustration](https://arxiv.org/abs/1701.04579), they extend the frustrated-loop instances of [Hen et al.](https://arxiv.org/abs/1502.01663) by planting loops across ferromagnetically coupled qubit clusters; the ground state of every instance is known in advance. FCL is a whole-QPU test, system-level in character, filed here as an annealer-native benchmark.

## How it works

The generator lays random loops over the cluster structure of the Chimera graph (each ferromagnetically tied K4,4 unit cell acts as one logical spin), frustrates one coupler per loop, and sums the loop Hamiltonians. Three knobs tune hardness: loop density alpha (the clauses-to-variables ratio), precision rho (coupler range), and ruggedness R. Because the ground state is planted, success is checkable at full device size without classical simulation. The annealer and classical solvers (simulated annealing, quantum Monte Carlo, spin-vector Monte Carlo, the Hamze–de Freitas–Selby algorithm) are then scored by [time-to-solution](/benchmarks/time-to-solution/), anneal time divided by ground-state success probability, at matched parameter settings.

## Strengths and limitations

Planted solutions and tunable ruggedness made FCL a rare annealer benchmark that scales past classical verification. But FCL names an input class, not a score: results are time-to-solution comparisons meaningful only at matched (alpha, rho, R) and solver tuning. [Mandrà and Katzgraber](https://arxiv.org/abs/1711.01368) then showed that classical solvers exploiting the planted cluster structure erase the reported D-Wave advantage, which directly motivated [deceptive cluster loops](/benchmarks/deceptive-cluster-loops/). Do not confuse FCL with Hen et al.'s single-qubit frustrated loops, nor with the logical-planted instances of Albash and Lidar's 2018 scaling-advantage study, which did not use FCL.

## Notable results

D-Wave reported its 2000Q finding planted ground states up to ~2600x faster in pure anneal time than the classical field at rugged settings. FCL is of historical interest today: the construction targets the retired Chimera topology, and recent planted-instance work favors DCL, tile, Wishart, and posiform planting. No widely used generator ships plain FCL: [Chook](/benchmarks/chook/) ships the DCL variant, and D-Wave's dimod ships only the generic frustrated-loop primitive.
