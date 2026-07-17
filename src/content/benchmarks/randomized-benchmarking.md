---
name: Randomized Benchmarking
tagline: Estimates average gate error from the exponential decay of survival probability over increasingly long random Clifford sequences, robust to state-preparation and measurement errors.
category: component-level
measures: Average error per Clifford gate (per-gate error via the interleaved variant), from the decay constant of sequence fidelity
introducedBy:
  - Emerson, Alicki & Życzkowski
  - Knill et al. (NIST)
  - Magesan, Gambetta & Emerson
yearIntroduced: 2005
aliases:
  - RB
  - Clifford RB
status: active
papers:
  - title: Scalable noise estimation with random unitary operators
    authors: Emerson, Alicki & Życzkowski
    year: 2005
    url: https://arxiv.org/abs/quant-ph/0503243
  - title: Randomized benchmarking of quantum gates
    authors: Knill, Leibfried, Reichle, Britton, Blakestad, Jost, Langer, Ozeri, Seidelin & Wineland
    year: 2008
    url: https://arxiv.org/abs/0707.0963
  - title: Scalable and robust randomized benchmarking of quantum processes
    authors: Magesan, Gambetta & Emerson
    year: 2011
    url: https://arxiv.org/abs/1009.3639
  - title: Efficient measurement of quantum gate error by interleaved randomized benchmarking
    authors: Magesan et al.
    year: 2012
    url: https://arxiv.org/abs/1203.4550
code:
  - name: Qiskit Experiments (StandardRB, InterleavedRB)
    url: https://github.com/qiskit-community/qiskit-experiments
  - name: pyGSTi
    url: https://github.com/sandialabs/pyGSTi
  - name: Cirq experiments module
    url: https://quantumai.google/cirq/noise/qcvv
related:
  - interleaved-randomized-benchmarking
  - direct-randomized-benchmarking
  - mirror-randomized-benchmarking
  - cycle-benchmarking
  - unitarity-randomized-benchmarking
  - cross-entropy-benchmarking
  - gate-set-tomography
---

Randomized benchmarking (RB) is the workhorse protocol for characterizing gate error rates. Vendors' quoted single- and two-qubit fidelities are, more often than not, RB numbers. Its key virtue is separating gate error from state-preparation and measurement (SPAM) error, which plagues naive fidelity estimates.

## How it works

The standard protocol samples random sequences of `m` Clifford gates, appends the single Clifford that inverts the whole sequence, and measures the probability of returning to the initial state. Averaged over many random sequences, this survival probability decays exponentially, as `A·p^m + B`, where the constants `A` and `B` absorb SPAM errors. The decay parameter `p` yields the average error per Clifford, `r = (d − 1)(1 − p)/d` with `d = 2^n`.

Clifford gates are used because they form a unitary 2-design — averaging over them twirls arbitrary noise into an effective depolarizing channel, which is what makes the simple exponential model valid — and because Clifford circuits are efficiently classically simulable, so the inversion gate is cheap to compute.

## The RB family

RB is a family of protocols, not a single benchmark. Named variants with their own entries in this catalog:

- [Interleaved RB](/benchmarks/interleaved-randomized-benchmarking/) — the error of one specific gate.
- [Simultaneous RB](/benchmarks/simultaneous-randomized-benchmarking/) — crosstalk and addressability between subsystems.
- [Direct RB](/benchmarks/direct-randomized-benchmarking/) — layers of native gates, without Clifford compilation.
- [Mirror RB](/benchmarks/mirror-randomized-benchmarking/) — motion-reversal circuits that scale to many qubits.
- [Binary RB](/benchmarks/binary-randomized-benchmarking/) — low-overhead layer errors from pass/fail outcomes.
- [Character RB](/benchmarks/character-randomized-benchmarking/) — gate groups beyond the Cliffords, via character theory.
- [Cycle benchmarking](/benchmarks/cycle-benchmarking/) — process fidelity of a whole cycle of parallel gates.
- [Unitarity RB](/benchmarks/unitarity-randomized-benchmarking/) — how coherent the noise is, from purity decay.
- [Leakage RB](/benchmarks/leakage-randomized-benchmarking/) — leakage out of the computational subspace.
- [Matchgate benchmarking](/benchmarks/matchgate-benchmarking/) — continuous matchgate (free-fermion) gate sets.
- [Mid-circuit measurement benchmarking](/benchmarks/mid-circuit-measurement-benchmarking/) — errors added by mid-circuit measurements.
- [Logical RB](/benchmarks/logical-randomized-benchmarking/) — RB run on encoded, error-corrected qubits.

Further named variants — filtered, real, dihedral, iterative, and error-specific RB — are unified by [Helsen, Roth, Onorati, Werner & Eisert's general framework](https://arxiv.org/abs/2010.07974) (PRX Quantum 2022), and [Hashim et al.'s tutorial](https://arxiv.org/abs/2408.12064) tabulates and compares thirteen of them side by side.

## Strengths and limitations

RB is efficient (polynomial in qubit number), SPAM-robust, and standardized enough that numbers are roughly comparable across labs. Its limitations: it reports an *average* error over the Clifford group, not worst-case behavior; compiling multi-qubit Cliffords into native gates is costly, so plain Clifford RB is mostly practical at one or two qubits; and strongly gate-dependent noise can bias the extracted rate, which is why interpretation subtleties remain an active research topic.
