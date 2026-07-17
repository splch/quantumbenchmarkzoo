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
  - cross-entropy-benchmarking
---

Randomized benchmarking (RB) is the workhorse protocol for characterizing gate error rates. Vendors' quoted single- and two-qubit fidelities are, more often than not, RB numbers. Its key virtue is separating gate error from state-preparation and measurement (SPAM) error, which plagues naive fidelity estimates.

## How it works

The standard protocol samples random sequences of `m` Clifford gates, appends the single Clifford that inverts the whole sequence, and measures the probability of returning to the initial state. Averaged over many random sequences, this survival probability decays exponentially, as `A·p^m + B`, where the constants `A` and `B` absorb SPAM errors. The decay parameter `p` yields the average error per Clifford, `r = (d − 1)(1 − p)/d` with `d = 2^n`.

Clifford gates are used because they form a unitary 2-design — averaging over them twirls arbitrary noise into an effective depolarizing channel, which is what makes the simple exponential model valid — and because Clifford circuits are efficiently classically simulable, so the inversion gate is cheap to compute.

## Variants

A large family of protocols extends the idea: **interleaved RB** inserts a specific gate between random Cliffords to estimate that gate's individual error; **simultaneous RB** runs RB on neighboring qubits concurrently to expose crosstalk; **direct RB**, **mirror RB**, and **cycle benchmarking** scale the approach to wider circuits and native (non-Clifford) gate sets. See [Helsen et al.'s framework paper](https://www.nature.com/articles/s41534-019-0182-7) for a unified treatment.

## Strengths and limitations

RB is efficient (polynomial in qubit number), SPAM-robust, and standardized enough that numbers are roughly comparable across labs. Its limitations: it reports an *average* error over the Clifford group, not worst-case behavior; compiling multi-qubit Cliffords into native gates is costly, so plain Clifford RB is mostly practical at one or two qubits; and strongly gate-dependent noise can bias the extracted rate, which is why interpretation subtleties remain an active research topic.
