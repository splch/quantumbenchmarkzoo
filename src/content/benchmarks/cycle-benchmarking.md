---
name: Cycle benchmarking
tagline: Pauli-twirled decay protocol that measures the process fidelity of an entire cycle of parallel gates at once, scaling to whole devices where interleaved benchmarking cannot.
category: component-level
measures: Composite process fidelity of a cycle of parallel gates under Pauli twirling
introducedBy:
  - Erhard, Wallman & colleagues (Innsbruck & Waterloo)
yearIntroduced: 2019
aliases:
  - CB
status: active
papers:
  - title: Characterizing large-scale quantum computers via cycle benchmarking
    authors: Erhard, Wallman, Postler, Meth, Stricker, Martinez, Schindler, Monz, Emerson & Blatt
    year: 2019
    url: https://arxiv.org/abs/1902.08543
code:
  - name: True-Q cycle benchmarking (Keysight, commercial)
    url: https://www.keysight.com/us/en/products/software/application-sw/quantum-benchmark.html
related:
  - randomized-benchmarking
  - interleaved-randomized-benchmarking
  - cycle-error-reconstruction
---

Cycle benchmarking (CB) measures how well a processor executes a *cycle* (one clock step of gates applied in parallel across a register) rather than a single gate in isolation. Introduced in 2019 by Erhard, Wallman and colleagues at Innsbruck and Waterloo and demonstrated on a trapped-ion system, it was designed as a scalable alternative to [interleaved randomized benchmarking](/benchmarks/interleaved-randomized-benchmarking/) for multiqubit layers, capturing the crosstalk and correlated noise that only appear when everything fires at once.

## How it works

The register is prepared in an eigenstate of a chosen n-qubit Pauli operator. The target cycle is then applied m times, each repetition dressed with a layer of random single-qubit Pauli gates; the twirl converts the cycle's noise into an effective Pauli channel, so the expectation value of the (propagated) Pauli operator decays exponentially in m. Fitting that decay gives a fidelity for one Pauli channel, and averaging the fits over a modest random sample of Pauli operators estimates the composite process fidelity of the whole cycle. Like [randomized benchmarking](/benchmarks/randomized-benchmarking/), the estimate is SPAM-robust: preparation and measurement errors shift the decay's amplitude, not its rate.

## Strengths and limitations

CB scores gates in their real operating context (parallel, with neighbors active) and scales: the [original experiment](https://arxiv.org/abs/1902.08543) benchmarked trapped-ion cycles of 2 to 10 qubits, with process fidelities from 99.6% for two-qubit gates to 86% for a ten-qubit entangling operation, and found error rates consistent as the system grew. The caveats are structural: the standard analysis assumes cycles that map Pauli operators to Pauli operators (Clifford-like cycles), and the score describes the *dressed* cycle under Pauli twirling: the random Pauli layer is folded in, and coherent errors contribute only through their twirled, stochastic component.

## Notable results

CB is commercialized in Keysight's [True-Q suite](https://www.keysight.com/us/en/products/software/application-sw/quantum-benchmark.html) (originally Quantum Benchmark Inc.), where its per-Pauli decays also feed [cycle error reconstruction](/benchmarks/cycle-error-reconstruction/). A [generalized cycle benchmarking](https://arxiv.org/abs/2406.02669) extends the idea to cycles containing [mid-circuit measurements](/benchmarks/mid-circuit-measurement-benchmarking/).
