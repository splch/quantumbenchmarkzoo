---
name: Interleaved randomized benchmarking
tagline: Estimates the error of one specific quantum gate by interleaving it between random Cliffords and comparing the resulting decay against a reference randomized benchmarking curve.
category: component-level
measures: Average error rate of a single target Clifford gate, from the ratio of interleaved and reference RB decays
introducedBy:
  - Magesan, Gambetta & colleagues (IBM / Raytheon BBN)
yearIntroduced: 2012
aliases:
  - IRB
status: active
papers:
  - title: Efficient measurement of quantum gate error by interleaved randomized benchmarking
    authors: Magesan, Gambetta, Johnson et al.
    year: 2012
    url: https://arxiv.org/abs/1203.4550
code:
  - name: Qiskit Experiments (InterleavedRB)
    url: https://github.com/qiskit-community/qiskit-experiments
related:
  - randomized-benchmarking
  - cycle-benchmarking
  - direct-randomized-benchmarking
---

Interleaved randomized benchmarking (IRB) is the standard protocol for attaching an error rate to one specific gate rather than to a whole gate set. Introduced in 2012 by Magesan and colleagues at IBM and Raytheon BBN, it is the source of most per-gate fidelities quoted on hardware spec sheets, in particular the two-qubit gate fidelities that headline platform comparisons.

## How it works

IRB is a two-part experiment. First, standard [randomized benchmarking](/benchmarks/randomized-benchmarking/) is run to fit the reference decay parameter `p_ref` of random Clifford sequences. The experiment is then repeated with the target gate `C` inserted after every random Clifford, giving a second decay parameter `p_C`. Because the extra copies of `C` are the only difference between the two experiments, comparing the decays isolates its error: the estimate is `r_C = (d − 1)(1 − p_C/p_ref)/d` with `d = 2^n`. The original paper also derives systematic bounds that should be reported alongside the point estimate.

## Strengths and limitations

IRB inherits standard RB's insensitivity to state-preparation and measurement errors and needs only one extra set of decay curves; hence it became the default way to report single- and two-qubit gate fidelities across superconducting, trapped-ion, and spin-qubit platforms.

Its key weakness is that the point estimate assumes the target gate's error composes with the random Cliffords' in a roughly depolarizing way. When errors are coherent, the true gate error can lie anywhere within systematic bounds that are often loose, in unfavorable cases spanning orders of magnitude around the estimate. See the bounds in [Magesan et al.](https://arxiv.org/abs/1203.4550) and the worked comparison of IRB's assumptions and failure modes in [Hashim et al., Table IV](https://arxiv.org/abs/2408.12064). The target must also be a Clifford gate. For putting error bars on a whole multi-qubit cycle rather than one inserted gate, [cycle benchmarking](/benchmarks/cycle-benchmarking/) is the closely related alternative, and [direct randomized benchmarking](/benchmarks/direct-randomized-benchmarking/) benchmarks native-gate layers without Clifford compilation.
