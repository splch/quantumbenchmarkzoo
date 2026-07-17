---
name: Randomized Mirror Circuits
tagline: Sandia's scalable whole-processor test that runs self-inverting random circuits across the width × depth plane and maps where a device still returns the right bitstring.
category: system-level
measures: Average polarization P = (S − 1/2^w)/(1 − 1/2^w) of mirror circuits at each width w and depth d, mapped as volumetric capability regions
introducedBy:
  - Proctor, Rudinger, Young, Nielsen & Blume-Kohout (Sandia)
yearIntroduced: 2020
aliases:
  - Mirror circuit benchmarks
  - Mirror circuits
  - Mirrored circuits average polarization
  - Periodic mirror circuits
status: active
papers:
  - title: Measuring the Capabilities of Quantum Computers
    authors: Proctor, Rudinger, Young, Nielsen & Blume-Kohout
    year: 2020
    url: https://arxiv.org/abs/2008.11294
  - title: Scalable randomized benchmarking of quantum computers using mirror circuits
    authors: Proctor, Seritan, Rudinger, Nielsen, Blume-Kohout & Young
    year: 2021
    url: https://arxiv.org/abs/2112.09853
  - title: "A Review and Collection of Metrics and Benchmarks for Quantum Computers: definitions, methodologies and software"
    authors: Lall et al. (NPL and collaborators)
    year: 2025
    url: https://arxiv.org/abs/2502.06717
code:
  - name: pyGSTi (mirror circuit benchmarks and fidelity estimation)
    url: https://github.com/sandialabs/pyGSTi
  - name: QCMet (NPL mirrored-circuits metric)
    url: https://github.com/qcmet/qcmet
related:
  - mirror-randomized-benchmarking
  - mirror-benchmarking
  - volumetric-benchmarking
  - quantum-volume
---

Randomized mirror circuits are the Sandia Quantum Performance Lab's scalable whole-processor benchmark, introduced by Proctor, Rudinger, Young, Nielsen and Blume-Kohout in 2020 and published as Nature Physics 18, 75 (2022). They attack the scaling wall of [Quantum Volume](/benchmarks/quantum-volume/)-style tests — verifying a generic random circuit's output requires classical simulation — by making every test circuit undo itself, so the ideal output is a known bitstring at any size.

## How it works

Each mirror circuit is a random circuit followed by a uniformly random Pauli layer and then the first half's layer-by-layer quasi-inverse, all wrapped in random single-qubit Clifford layers. Its ideal output is a specific, efficiently computed bitstring. At each shape (width `w`, depth `d`) an ensemble of circuits is run, and the probability `S` of observing the ideal bitstring is rescaled to the polarization `P = (S − 1/2^w)/(1 − 1/2^w)`, which sets random guessing to zero. Average polarization is then mapped over the width × depth plane as capability regions in the [volumetric benchmarking](/benchmarks/volumetric-benchmarking/) framework. Alongside the randomized ensembles, structured "periodic" mirror circuits probe more orderly, algorithm-like programs.

## Strengths and limitations

Because no classical simulation is needed, the benchmark scales to any width, and running full-width layers makes the score reflect crosstalk and contextual errors rather than isolated gate specs. The flagship demonstration on [twelve IBM and Rigetti processors](https://arxiv.org/abs/2008.11294) found structured periodic circuits failing at sizes up to an order of magnitude smaller than random ones — so capability regions depend on the ensemble sampled, and random-circuit results alone can overstate practical capability. Polarization is a rescaled success probability, not a fidelity, and can be zero or negative under coherent errors. The name also needs care: [mirror RB](/benchmarks/mirror-randomized-benchmarking/) is a separate RB-style protocol spun out of this construction, and Quantinuum's [mirror benchmarking](/benchmarks/mirror-benchmarking/) is an independently developed relative.

## Notable results

[NPL's February 2025 metrics review](https://arxiv.org/abs/2502.06717) standardizes the benchmark as metric M4.2, "mirrored circuits average polarization", with an implementation in [QCMet](https://github.com/qcmet/qcmet). Sandia's [pyGSTi](https://github.com/sandialabs/pyGSTi) ships mirror-circuit benchmarking modules, including 2025 mirror circuit fidelity estimation, and 2025 follow-on featuremetric benchmarking builds directly on the construction.
