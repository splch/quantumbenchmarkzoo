---
name: Quantum accreditation
tagline: Verification protocol that interleaves a target circuit with randomized Clifford trap circuits to certify its outputs, bounding their variation distance from ideal at chosen confidence
category: characterization
measures: Upper bound, at user-chosen confidence, on the total variation distance between a target circuit's noisy output distribution and its ideal distribution
introducedBy:
  - Ferracin, Kapourniotis & Datta (University of Warwick)
yearIntroduced: 2018
aliases:
  - Accreditation protocol
  - AP
status: active
papers:
  - title: Accrediting outputs of noisy intermediate-scale quantum computing devices
    authors: Ferracin, Kapourniotis & Datta
    year: 2019
    url: https://arxiv.org/abs/1811.09709
  - title: Experimental accreditation of outputs of noisy quantum computers
    authors: Ferracin, Merkel, McKay & Datta
    year: 2021
    url: https://arxiv.org/abs/2103.06603
  - title: Accreditation of analogue quantum simulators
    authors: Jackson, Kapourniotis & Datta
    year: 2024
    url: https://arxiv.org/abs/2306.03060
  - title: Quantum Accreditation with Non-Clifford Two-qubit Gates
    authors: Jackson, Kapourniotis & Datta
    year: 2026
    url: https://arxiv.org/abs/2605.19205
code:
  - name: Qiskit Ignis accreditation module (archived June 2023)
    url: https://github.com/qiskit-community/qiskit-ignis
related:
  - cross-entropy-benchmarking
  - randomized-mirror-circuits
---

Quantum accreditation is a verification protocol from Ferracin, Kapourniotis & Datta at the University of Warwick that certifies the outputs of a single quantum computation: an accept/reject verdict plus an upper bound, at user-chosen confidence and accuracy, on the total variation distance between a target circuit's noisy output distribution and its ideal one. It is a certification protocol rather than a device benchmark: the [2025 NPL-led metrics review](https://arxiv.org/abs/2502.06717) catalogues its output as metric M4.4, "upper bound on the variation distance".

## How it works

The target circuit runs interleaved with randomized Clifford "trap" circuits built so that a noiseless device passes every trap deterministically; as with [randomized mirror circuits](/benchmarks/randomized-mirror-circuits/), the traps' ideal outcomes are efficiently predictable. Random single-qubit gates twirl the noise into a classically trackable form. From the trap acceptance rate and measured error rates, the protocol computes the variation-distance bound for the target's outputs; the number of traps depends only on the desired confidence and accuracy, not on circuit size.

## Strengths and limitations

Accreditation certifies the computation you actually care about and needs no quantum communication or trusted quantum server, unlike blind interactive verification schemes. Its guarantees are conditional on noise assumptions: the original protocol requires single-qubit-gate noise bounded in diamond norm, while SPAM and two-qubit-gate noise may be arbitrary and correlated; later variants relax these to [limited adversarial noise](https://arxiv.org/abs/2409.03995) and to [non-Clifford two-qubit gates such as fSim/XY](https://arxiv.org/abs/2605.19205). It certifies one computation, not the device. The only widely distributed implementation, in Qiskit Ignis, was archived in 2023 and never migrated to Qiskit Experiments. "Accreditation" here is a term of art for output certification, unrelated to laboratory accreditation.

## Notable results

The protocol was [demonstrated on IBM devices](https://arxiv.org/abs/2103.06603) (Phys. Rev. A 104, 042603, 2021), extended to [analogue quantum simulators](https://arxiv.org/abs/2306.03060) (PNAS, 2024), and adopted as metric M4.4 in the NPL-led review (2025). A May 2026 extension by the Warwick group covers non-Clifford fSim/XY-style gates like those used in [cross-entropy benchmarking](/benchmarks/cross-entropy-benchmarking/) experiments.
