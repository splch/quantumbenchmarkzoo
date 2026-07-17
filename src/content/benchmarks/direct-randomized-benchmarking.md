---
name: Direct randomized benchmarking
tagline: Benchmarks random layers of native gates directly instead of compiled multi-qubit Cliffords, measuring gates as they are actually used and scaling well beyond standard RB.
category: component-level
measures: Average infidelity of randomly sampled layers of native gates (error per layer)
introducedBy:
  - Proctor, Rudinger & colleagues (Sandia)
yearIntroduced: 2018
aliases:
  - DRB
  - Direct RB
status: active
papers:
  - title: Direct randomized benchmarking for multi-qubit devices
    authors: Proctor, Carignan-Dugas, Rudinger, Nielsen, Blume-Kohout & Young
    year: 2019
    url: https://arxiv.org/abs/1807.07975
  - title: A Theory of Direct Randomized Benchmarking
    authors: Polloreno, Carignan-Dugas, Hines, Blume-Kohout, Young & Proctor
    year: 2025
    url: https://arxiv.org/abs/2302.13853
code:
  - name: pyGSTi (direct RB)
    url: https://github.com/sandialabs/pyGSTi
related:
  - randomized-benchmarking
  - mirror-randomized-benchmarking
  - binary-randomized-benchmarking
  - layer-fidelity
---

Direct randomized benchmarking (DRB) benchmarks a processor's native gates as they are actually used, instead of hiding them inside compiled constructs. In standard [randomized benchmarking](/benchmarks/randomized-benchmarking/), each random n-qubit Clifford compiles into a long sequence of native gates, so the reported "error per Clifford" describes bulky compiled objects and the protocol becomes impractical beyond a few qubits. Proctor, Rudinger and colleagues at Sandia introduced DRB in 2018 to fix both problems.

## How it works

A depth-m DRB circuit has three parts: a short circuit preparing a uniformly random n-qubit stabilizer state; m layers of native gates sampled from a user-chosen distribution Ω (for example, random single-qubit gates plus a set density of two-qubit gates); and a final stabilizer circuit mapping the state back to a computational basis state. Success probability versus depth is fit to an exponential decay `P_m = A + B·p^m`, and the decay constant is converted into an error per layer: the average infidelity of Ω-distributed layers. Because Ω is customizable, the benchmark can be tailored to the gate mix of the circuits a user actually intends to run. [A Theory of Direct Randomized Benchmarking](https://arxiv.org/abs/2302.13853) later proved the decay is reliably single-exponential and corresponds to average layer infidelity, without requiring full group twirling.

## Strengths and limitations

DRB measures the native layers users actually run, and its random layers need no compilation, so it scales much further than Clifford RB. But its endpoints still grow with width: the stabilizer preparation and inversion circuits contribute their own error, which in practice limits DRB to intermediate qubit counts. [Mirror RB](/benchmarks/mirror-randomized-benchmarking/) replaces the inversion with a motion-reversal structure and [binary RB](/benchmarks/binary-randomized-benchmarking/) removes it entirely, extending the same idea to much larger devices. A DRB error rate is also defined relative to the chosen layer distribution Ω, so numbers from differently chosen samplers are not directly comparable.

## Notable results

Simultaneous DRB on chains of qubits is the measurement underneath IBM's [layer fidelity](/benchmarks/layer-fidelity/) benchmark, which IBM reports across its fleet as a headline per-layer error metric. Reference implementations ship in Sandia's pyGSTi.
