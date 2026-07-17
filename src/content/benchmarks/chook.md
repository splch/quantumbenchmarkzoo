---
name: Chook
tagline: Open-source Python suite that generates Ising, QUBO, and higher-order optimization problems with planted, a-priori-known ground states and tunable hardness across five planting schemes.
category: platform-specific
measures: Solver performance on generated instances with planted optima; the scoring metric (success probability, time-to-solution, residual energy) is chosen per study
introducedBy:
  - Perera, Katzgraber & colleagues
yearIntroduced: 2020
status: active
papers:
  - title: "Chook: A comprehensive suite for generating binary optimization problems with planted solutions"
    authors: Perera, Akpabio, Hamze, Mandrà, Rose, Aramon & Katzgraber
    year: 2020
    url: https://arxiv.org/abs/2005.14344
  - title: "Benchmarking the Operation of Quantum Heuristics and Ising Machines: Scoring Parameter Setting Strategies on Optimization Applications"
    authors: Bernal Neira, Brown, Sathe, Wudarski, Pavone, Rieffel & Venturelli
    year: 2024
    url: https://arxiv.org/abs/2402.10255
code:
  - name: dilinanp/chook (GitHub, Apache-2.0)
    url: https://github.com/dilinanp/chook
  - name: chook on PyPI
    url: https://pypi.org/project/chook/
related:
  - frustrated-cluster-loops
  - deceptive-cluster-loops
  - time-to-solution
---

Chook is the reference open-source suite for generating binary optimization problems with planted solutions, published by [Perera, Katzgraber and colleagues in 2020](https://arxiv.org/abs/2005.14344). Because the ground state is known by construction, quantum annealers, Ising machines, and classical heuristics can be scored end-to-end at sizes where exact classical solving is impossible. It targets optimization platforms rather than gate-model QPUs (hence its filing here), and it is an instance generator rather than a scored protocol.

## How it works

Chook unifies five planting schemes introduced in earlier papers by overlapping authors: tile planting (2D/3D lattices composed from solved subproblem tiles), the Wishart planted ensemble (fully connected, with a tunable hardness peak), equation planting (k-regular k-XORSAT systems verifiable by Gaussian elimination), [deceptive cluster loops](/benchmarks/deceptive-cluster-loops/) for Chimera-graph annealers, and k-local planting for higher-order (HOBO) cost functions. A pip-installable Python tool emits Ising/QUBO instance files together with the planted ground-state energy; each study then picks its own figure of merit (success probability, [time-to-solution](/benchmarks/time-to-solution/), or residual energy) for recovering the known optimum.

## Strengths and limitations

Planted optima provide an answer key at any scale, and the hardness knobs let studies dial difficulty. But Chook's value is comparable inputs, not comparable scores: it defines no metric or pass/fail protocol, so results across different planting schemes, parameters, and metrics are not directly comparable. Hardness realism is also debated: the posiform-planting line of work (2023–2025) was motivated partly by limitations of existing planted generators, and a [2024 Communications Physics study](https://www.nature.com/articles/s42005-024-01870-9) argues such planted ensembles cannot characterize the physical systems' evolution. Development is dormant (last release v0.2.0, March 2021; the paper remains arXiv-only), yet use continues: a [2024 benchmarking study](https://arxiv.org/abs/2402.10255) generated its Wishart-planted instances with Chook to score a coherent-Ising-machine simulator against parallel tempering, and recent planting papers still cite it as the reference generator.
