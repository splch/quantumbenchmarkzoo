---
name: Binary randomized benchmarking
tagline: "Streamlined, fully scalable RB that drops motion reversal entirely: circuits of i.i.d. random layers act on a random Pauli eigenstate, and each shot returns a simple pass/fail outcome."
category: component-level
measures: Average error rate of i.i.d. random layers of native Clifford gates, from the decay of a binary success statistic
introducedBy:
  - Hines, Proctor & colleagues (Sandia / UC Berkeley)
yearIntroduced: 2023
aliases:
  - BiRB
status: active
papers:
  - title: Fully scalable randomized benchmarking without motion reversal
    authors: Hines, Hothem, Blume-Kohout, Whaley & Proctor
    year: 2024
    url: https://arxiv.org/abs/2309.05147
code:
  - name: pyGSTi (binary RB)
    url: https://github.com/sandialabs/pyGSTi
related:
  - direct-randomized-benchmarking
  - mirror-randomized-benchmarking
---

Binary randomized benchmarking (BiRB) strips randomized benchmarking down to its minimum: circuits made almost entirely of independent, identically distributed random layers of native gates, with each shot scored pass or fail. Introduced by Hines, Proctor and colleagues (Sandia / UC Berkeley) in 2023 and published in PRX Quantum in 2024, it removes the motion-reversal structure — the inversion or mirroring step — that earlier scalable RB variants relied on, simplifying both the experiment and the theory behind it.

## How it works

Each BiRB circuit starts from a tensor-product eigenstate of a random n-qubit Pauli operator P, preparable with one layer of single-qubit gates. The circuit then applies m i.i.d. random layers of native Clifford gates. Because the layers are Cliffords, P's image under the circuit can be tracked classically in polynomial time, so the final step simply measures the evolved Pauli operator (single-qubit basis rotations plus readout) and records a binary outcome: whether the measured eigenvalue matches the ideal one. The average of this outcome decays exponentially with depth, and the fitted decay rate yields the average error rate of the sampled layer set.

## Strengths and limitations

With no inversion to compile and no mirror to append, BiRB circuits resemble generic random circuits, and the protocol scales to many more qubits than the most widely used RB methods ([Hines et al.](https://arxiv.org/abs/2309.05147)); its single-exponential decay also rests on a simpler theoretical analysis than mirror RB's. The [Sandia benchmarking review](https://arxiv.org/abs/2407.08828) groups BiRB with [direct RB](/benchmarks/direct-randomized-benchmarking/), [mirror RB](/benchmarks/mirror-randomized-benchmarking/), and [cross-entropy benchmarking](/benchmarks/cross-entropy-benchmarking/) as protocols that measure the average error of a set of native gate layers. Its limitations mirror its relatives': the reported rate is defined relative to the chosen layer distribution, the standard protocol applies to Clifford layer sets, and compressing each shot to a single bit trades away the richer diagnostics of full-bit-string methods.
