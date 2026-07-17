---
name: Bell Sampling
tagline: Two-copy benchmark that measures pairs of identical circuit outputs in the Bell basis, yielding fidelity estimates and circuit diagnostics that stay efficient beyond the classically simulable regime.
category: system-level
measures: State fidelity of an n-qubit circuit output, estimated from transversal Bell-basis measurements on two copies prepared in parallel; the same samples give a depth test and a T-count lower bound
introducedBy:
  - Hangleiter & Gullans (QuICS, NIST / University of Maryland)
yearIntroduced: 2023
aliases:
  - Bell sampling from quantum circuits
status: active
papers:
  - title: Bell sampling from quantum circuits
    authors: Hangleiter & Gullans
    year: 2024
    url: https://arxiv.org/abs/2306.00083
  - title: Learning stabilizer states by Bell sampling
    authors: Montanaro
    year: 2017
    url: https://arxiv.org/abs/1707.04012
  - title: Experimental measurement and a physical interpretation of quantum shadow enumerators
    authors: Miller et al.
    year: 2024
    url: https://arxiv.org/abs/2408.16914
  - title: Has quantum advantage been achieved?
    authors: Hangleiter
    year: 2026
    url: https://arxiv.org/abs/2603.09901
related:
  - cross-entropy-benchmarking
---

Bell sampling is a benchmarking and verification protocol introduced by Dominik Hangleiter and Michael Gullans in 2023: prepare the output state of an n-qubit circuit twice in parallel and measure the two copies against each other in the Bell basis. The samples estimate the output-state fidelity directly, and — unlike [cross-entropy benchmarking](/benchmarks/cross-entropy-benchmarking/), whose verification requires classical simulation — the protocol stays efficient beyond the classically simulable regime, and so is positioned as XEB's successor. The [paper](https://arxiv.org/abs/2306.00083) was published as Phys. Rev. Lett. 133, 020601 (2024).

## How it works

Two identical copies of the circuit's output state are prepared side by side, occupying 2n qubits. A single transversal layer then measures qubit i of one copy jointly with qubit i of the other in the two-qubit Bell basis. Hangleiter and Gullans call the resulting dataset a "circuit shadow": from the same samples one can estimate the state fidelity, test the circuit's depth, lower-bound its T-count, and diagnose certain preparation errors. Because Bell samples are argued to be classically intractable to produce, the protocol doubles as an efficiently validated quantum-advantage scheme.

## Strengths and limitations

Verification is sample-efficient with no exponential classical cost, and one dataset yields several diagnostics at once. The price is hardware: an n-qubit benchmark occupies 2n qubits plus a transversal two-qubit measurement layer, doubling the requirements of single-copy schemes like XEB. It produces fidelity estimates and property tests rather than a single branded score, and it is not yet a routine vendor-reported number the way XEB or [Quantum Volume](/benchmarks/quantum-volume/) are. The name predates the benchmark — [Montanaro (2017)](https://arxiv.org/abs/1707.04012) used "Bell sampling" for learning stabilizer states, a result the 2023 protocol builds on — and the naive extension to qudits fails, requiring a [modified unitary](https://arxiv.org/abs/2510.06848). No public reference implementation was found.

## Notable results

Bell-sampling measurements of quantum shadow enumerators ran on a [trapped-ion quantum computer](https://arxiv.org/abs/2408.16914) (Phys. Rev. Research 8, 023318, 2026), qudit generalizations appeared in 2025, and Hangleiter's 2026 review [Has quantum advantage been achieved?](https://arxiv.org/abs/2603.09901) presents Bell-basis measurement of two circuit copies as a route to closing the verification loophole in quantum-advantage claims.
