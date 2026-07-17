---
name: Logical magic state benchmarking
tagline: Proposed protocols that estimate the infidelity of a prepared logical magic state to multiplicative precision using only fault-tolerantly implementable Clifford operations.
category: error-correction
measures: Infidelity of a prepared logical magic state, estimated to multiplicative precision with O(1/ε) sample complexity
introducedBy:
  - Lee, Yuan, Chen, Tsubouchi & Jiang (University of Chicago / University of Tokyo)
yearIntroduced: 2025
aliases:
  - Efficient benchmarking of logical magic state
  - Logical magic state infidelity benchmarking
status: proposal
papers:
  - title: Efficient benchmarking of logical magic state
    authors: Lee, Yuan, Chen, Tsubouchi & Jiang
    year: 2025
    url: https://arxiv.org/abs/2505.09687
  - title: Efficient Benchmarking of Logical Magic State (Phys. Rev. Lett. 136, 050602)
    authors: Lee, Yuan, Chen, Tsubouchi & Jiang
    year: 2026
    url: https://doi.org/10.1103/fwjt-mw2c
related:
  - logical-randomized-benchmarking
  - logical-error-per-round
---

Logical magic state benchmarking is a proposed protocol family for measuring how well an error-corrected processor prepares logical magic states — the resource states that make encoded computation universal. Introduced in May 2025 by Lee, Yuan, Chen, Tsubouchi & Jiang (University of Chicago / University of Tokyo), it plays the role for magic state preparation that [randomized benchmarking](/benchmarks/randomized-benchmarking/) plays for gates: a component-level score, catalogued with error-correction benchmarks because everything happens at the encoded layer. The name is a catalog coinage — the paper is titled "Efficient benchmarking of logical magic state," and no community shorthand has stuck yet.

## How it works

Both variants use only Clifford operations a code can implement fault-tolerantly, and both measure projections onto stabilizer states orthogonal to the ideal magic state, so each projection outcome flags an error. The two-copy variant prepares two twirled copies of the state and performs Bell measurements between them; the single-copy variant directly measures a twirled multi-qubit magic state. The orthogonal-projection statistics estimate the state's infidelity to multiplicative precision from O(1/ε) samples. The paper proves this optimal, alongside an Ω(1/ε²) lower bound for single-copy-per-round schemes on single-qubit magic states — the bound the twirled multi-qubit variant circumvents.

## Strengths and limitations

The protocol demands nothing beyond fault-tolerant Cliffords, so it can certify distilled magic states in situ without tomography, at provably optimal O(1/ε) sample cost ([Lee et al. 2025](https://arxiv.org/abs/2505.09687)). It complements [logical randomized benchmarking](/benchmarks/logical-randomized-benchmarking/), which scores logical gates rather than resource states.

As of July 2026 it remains a proposal: validated by the authors in numerical simulation under realistic noise models, with no independent experimental deployment of these exact protocols and no public reference implementation. It is also easily confused with the broader magic-state verification and certification literature.

## Notable results

The paper was peer-reviewed into Physical Review Letters 136, 050602 (2026). Independently, a trapped-ion experiment ([Daguerre et al., PRX 15, 041008 (2025)](https://arxiv.org/abs/2506.14169)) used a closely related two-copy logical Bell-measurement certification without citing this work — a sign the underlying idea is entering experimental practice ahead of the named protocol.
