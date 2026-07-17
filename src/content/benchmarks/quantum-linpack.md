---
name: Quantum LINPACK
tagline: Proposed whole-machine benchmark that scores a device on solving linear systems built from random-circuit block-encoded matrices, in the spirit of classical computing's LINPACK.
category: system-level
measures: Success probability of preparing the solution state of a random-circuit block-encoded (RACBEM) linear system via quantum singular value transformation, compared with the ideal noiseless value
introducedBy:
  - Dong & Lin (UC Berkeley)
yearIntroduced: 2020
aliases:
  - Quantum LINPACK benchmark
  - RACBEM
status: proposal
papers:
  - title: Random circuit block-encoded matrix and a proposal of quantum LINPACK benchmark
    authors: Dong & Lin
    year: 2021
    url: https://arxiv.org/abs/2006.04010
code:
  - name: qsppack/RACBEM (reference Qiskit implementation)
    url: https://github.com/qsppack/RACBEM
related:
  - quantum-volume
  - cross-entropy-benchmarking
---

The quantum LINPACK benchmark is a 2020 proposal by Yulong Dong and Lin Lin (UC Berkeley) to measure the whole-machine performance of a quantum computer on the task at the core of quantum linear algebra: solving a system of linear equations. The name nods to the classical LINPACK benchmark behind the TOP500 supercomputer ranking, though it shares no code or matrices with it: the analogy is the role, a linear-algebra task as the yardstick for a whole machine.

## How it works

The key construction is the RAndom Circuit Block-Encoded Matrix (RACBEM): a random quantum circuit, built directly from the device's native gates and topology, is reinterpreted as the block-encoding of a non-unitary matrix A. Using quantum singular value transformation, the device then applies an approximate inverse of A to an input state (solving A x = b), and the measured success probability of preparing the solution state is compared with the ideal noiseless value. Because the matrix comes from a hardware-efficient random circuit rather than a hand-built application instance, the test adapts to any architecture and scales in principle to any size. [Dong and Lin](https://arxiv.org/abs/2006.04010) demonstrated the protocol on IBM Q devices and simulators, and the paper was published as Phys. Rev. A 103, 062412 (2021). The random-circuit core makes it a cousin of [Quantum Volume](/benchmarks/quantum-volume/) and [cross-entropy benchmarking](/benchmarks/cross-entropy-benchmarking/), but with the score tied to a linear-algebra task rather than to sampling statistics.

## Strengths and limitations

The authors frame success as a minimal requirement: a machine that cannot invert random block-encoded matrices cannot be expected to run useful quantum linear-algebra workloads, while passing says little about real applications, since RACBEMs are synthetic rather than representative matrices. No single headline number analogous to LINPACK's FLOPS was ever standardized. A naming caveat: RACBEM strictly names the input model, not the benchmark, though the reference repository carries that name and the two are often conflated.

It remains a paper proposal. The [reference implementation](https://github.com/qsppack/RACBEM) has had no development since August 2020, and no adoption or reported device scores have surfaced through 2026.
