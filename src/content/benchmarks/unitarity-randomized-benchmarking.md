---
name: Unitarity randomized benchmarking
tagline: Randomized-benchmarking variant that fits the decay of output-state purity to measure how coherent a gate set's noise is, splitting error budgets into miscalibration and decoherence.
category: component-level
measures: Unitarity — the coherence of gate-set noise — from the decay of output-state purity with random Clifford sequence length
introducedBy:
  - Wallman, Granade, Harper & Flammia
yearIntroduced: 2015
aliases:
  - Unitarity RB
  - Purity Benchmarking
  - Purity RB
  - Purity Randomized Benchmarking
  - XRB
  - Extended Randomized Benchmarking
status: active
papers:
  - title: Estimating the coherence of noise
    authors: Wallman, Granade, Harper & Flammia
    year: 2015
    url: https://arxiv.org/abs/1503.07865
  - title: Estimating the coherence of noise in quantum control of a solid-state qubit
    authors: Feng, Wallman, Buonacorsi, Cho, Park, Xin, Lu, Baugh & Laflamme
    year: 2016
    url: https://arxiv.org/abs/1603.03761
  - title: Efficient unitarity randomized benchmarking of few-qubit Clifford gates
    authors: Dirkse, Helsen & Wehner
    year: 2019
    url: https://arxiv.org/abs/1808.00850
  - title: A practical introduction to benchmarking and characterization of quantum computers
    authors: Hashim et al.
    year: 2025
    url: https://arxiv.org/abs/2408.12064
code:
  - name: forest-benchmarking (Rigetti) — unitarity RB
    url: https://github.com/rigetti/forest-benchmarking
  - name: True-Q by Keysight — XRB protocol (commercial)
    url: https://trueq.quantumbenchmark.com/guides/error_diagnostics/xrb.html
related:
  - randomized-benchmarking
  - speckle-purity-benchmarking
  - gate-set-tomography
---

Unitarity randomized benchmarking asks not how large a gate set's error is, but how *coherent* it is. Introduced by Wallman, Granade, Harper and Flammia in 2015, it reuses the random-Clifford machinery of standard [randomized benchmarking](/benchmarks/randomized-benchmarking/) but scores the coherence of the noise — making it as much a noise diagnostic as a performance benchmark. Combined with the ordinary RB error rate, it splits a gate's error budget into coherent miscalibration and irreversible decoherence.

## How it works

Random Clifford sequences of increasing length m are applied to one or a few qubits, and instead of a survival probability the experimenter estimates the output state's *purity* — the squared length of its generalized Bloch vector — via state tomography or two-copy measurements. The average purity decays as A + B·u^(m−1), and the fitted base u is the unitarity: u = 1 for purely coherent (unitary) noise, smaller as the noise becomes stochastic. [Wallman et al.](https://arxiv.org/abs/1503.07865) show that u bounds the lowest infidelity reachable by recalibration alone — so an RB error rate far above the u-implied floor flags calibration errors worth hunting, while a rate at the floor says decoherence dominates.

## Strengths and limitations

Unitarity is a property of the noise, not a ranking: u = 1 means the noise is perfectly coherent, not that the gates are good. Purity estimation is the costly part — tomography or two copies — so published uses are mostly one and two qubits; [Dirkse, Helsen and Wehner](https://arxiv.org/abs/1808.00850) reduce the sample complexity for few-qubit Clifford gates. Two naming traps: "XRB" is the True-Q product name for this same protocol, not a distinct method, and [speckle purity benchmarking](/benchmarks/speckle-purity-benchmarking/) measures the same coherent-versus-incoherent split from XEB data rather than from purity measurements after Clifford sequences.

## Notable results

First demonstrated on a [solid-state qubit in 2016](https://arxiv.org/abs/1603.03761), it is now routine for error budgeting: a [1110-hour purity-benchmarking noise study](https://arxiv.org/abs/2407.07960) of a superconducting qubit appeared in APL Quantum in 2024, the protocol ships commercially as [True-Q's XRB](https://trueq.quantumbenchmark.com/guides/error_diagnostics/xrb.html), it is covered as a standard QCVV protocol in the [Hashim et al. tutorial](https://arxiv.org/abs/2408.12064), and Rigetti's [forest-benchmarking](https://github.com/rigetti/forest-benchmarking) carries an open-source implementation.
