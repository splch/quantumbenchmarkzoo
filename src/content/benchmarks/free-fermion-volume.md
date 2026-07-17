---
name: Free Fermion Volume
tagline: Proposed companion to Clifford Volume that scores a device by the largest random free-fermion circuit it executes faithfully, verified scalably through Majorana-mode expectation values.
category: system-level
measures: Largest qubit count n at which the device faithfully executes random n-qubit free-fermion (matchgate) circuits, verified scalably via Majorana-operator expectation values; the score is n itself
introducedBy:
  - Portik, Kálmán, Monz & Zimborás (EU Quantum Flagship)
yearIntroduced: 2025
aliases:
  - FFV
  - Free-Fermion Volume
status: proposal
papers:
  - title: "Clifford Volume and Free Fermion Volume: Complementary Scalable Benchmarks for Quantum Computers"
    authors: Portik, Kálmán, Monz & Zimborás
    year: 2025
    url: https://arxiv.org/abs/2512.19413
code:
  - name: EQCB — European Quantum Computing Benchmarks
    url: https://gitlab.com/qcpi/eqcb
related:
  - clifford-volume
  - matchgate-benchmarking
  - quantum-volume
---

Free Fermion Volume (FFV) is the proposed companion of [Clifford Volume](/benchmarks/clifford-volume/): the same volumetric, classically verifiable scoring idea applied to random free-fermion (matchgate) circuits instead of Clifford circuits. Both were introduced in the [same December 2025 paper](https://arxiv.org/abs/2512.19413) by Portik, Kálmán, Monz and Zimborás within the EU Quantum Flagship's benchmarking work. FFV remains a proposal: the protocol is fully specified and implemented, but no hardware-measured FFV score had been published as of July 2026, and unlike Clifford Volume it is not among the four core EU Quantum Flagship KPIs.

## How it works

Random free-fermion circuits — random SO(2n) rotations of the device's Majorana modes, compiled into Givens rotations under the Jordan–Wigner mapping — are run at width n. Free-fermion dynamics are efficiently classically simulable, so the ideal transformation of every Majorana operator is known exactly; the test checks that measured Majorana-operator expectation values match it, requiring parallel combinations to stay above a 1/e-style threshold while orthogonal combinations stay near zero. The score is the largest n passed, reported as the raw qubit count rather than 2^n.

## Strengths and limitations

Like Clifford Volume, FFV keeps verification scalable to any width, and the pair are complementary: at fixed width, free-fermion circuits probe shallower depths and different connectivity sensitivity than Clifford circuits. Because matchgate circuits are classically simulable, a high FFV certifies faithful execution rather than quantum advantage. Watch the details: the authors write both "Free Fermion Volume" and "Free-Fermion Volume"; the score of 34 reported on Quantinuum's H2-1 is a [Clifford Volume](/benchmarks/clifford-volume/), sometimes misattributed to both benchmarks; and FFV is a whole-device test, distinct from component-level [matchgate benchmarking](/benchmarks/matchgate-benchmarking/) protocols.

## Notable results

Simulation-only so far: the [introducing paper](https://arxiv.org/abs/2512.19413) validates FFV with noise-model simulations on a virtual backend, and an open-source implementation (`freefermion_volume_benchmark`) ships in the Apache-2.0 [EQCB suite](https://gitlab.com/qcpi/eqcb).
