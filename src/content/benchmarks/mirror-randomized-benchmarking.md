---
name: Mirror randomized benchmarking
tagline: Scalable RB variant built from mirror circuits — motion-reversal sequences with random Pauli layers — that avoids compiling expensive inversion gates and extends layer-error estimates to many-qubit widths.
category: component-level
measures: Average infidelity of a many-qubit layer of native Clifford gates, from the effective-polarization decay of mirror circuits
introducedBy:
  - Proctor, Seritan & colleagues (Sandia)
yearIntroduced: 2021
aliases:
  - MRB
  - Mirror RB
status: active
papers:
  - title: Scalable randomized benchmarking of quantum computers using mirror circuits
    authors: Proctor, Seritan, Rudinger, Nielsen, Blume-Kohout & Young
    year: 2022
    url: https://arxiv.org/abs/2112.09853
code:
  - name: pyGSTi (mirror RB)
    url: https://github.com/sandialabs/pyGSTi
related:
  - randomized-benchmarking
  - direct-randomized-benchmarking
  - randomized-mirror-circuits
  - mirror-benchmarking
---

Mirror randomized benchmarking (mirror RB) makes randomized benchmarking scalable by building its random sequences as mirror circuits: each circuit runs a sequence of random layers and then retraces it in reverse, so no large multi-qubit inversion ever has to be compiled. Introduced by Proctor and colleagues at Sandia (posted 2021, published in PRL in 2022), it extends RB-style error-per-layer estimates far beyond the widths where standard or [direct RB](/benchmarks/direct-randomized-benchmarking/) are feasible.

## How it works

A mirror RB circuit applies random layers of native Clifford gates for half its depth, then the inverse of each layer in reverse order, with layers of uniformly random Pauli gates interleaved throughout (as in randomized compiling) and random single-qubit gates at the start and end. Ideally the circuit maps its input to one known target bit string. Rather than raw success probability, each circuit's results are summarized by the effective polarization — a Hamming-distance-weighted statistic that discounts outcomes that land near the target by luck — and its decay against benchmark depth is fit to estimate the average infidelity of a random layer. The interleaved Pauli layers twirl the noise so the decay is a reliable single exponential.

## Strengths and limitations

Mirror circuits are trivially invertible, so circuits are cheap to generate at any width: the [introducing paper](https://arxiv.org/abs/2112.09853) validated the method in simulations of up to 225 qubits and ran it on up to 16 qubits of a cloud device, where comparison against few-qubit results revealed substantial crosstalk error. The caveats: the error per layer is defined relative to the chosen layer-sampling distribution, and the standard protocol covers Clifford layer sets. Because the second half mirrors the first, motion reversal could in principle echo away coherent errors; the random Pauli layers are designed to scramble such cancellations, and [binary RB](/benchmarks/binary-randomized-benchmarking/) later removed the mirror structure altogether.

Naming note: this component-level protocol is distinct from [randomized mirror circuits](/benchmarks/randomized-mirror-circuits/) as used in Sandia's full-device capability benchmarks (Nature Physics, 2022), and from Quantinuum's [mirror benchmarking](/benchmarks/mirror-benchmarking/), a related but separate protocol.
