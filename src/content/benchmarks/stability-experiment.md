---
name: Stability experiment
tagline: "The dual of the QEC memory experiment: instead of preserving a logical observable over time, it scores how well syndrome extraction and the decoder determine a product of stabilizers across space."
category: error-correction
measures: Logical error rate of the decoded product of a region of stabilizers as a function of round count, with rounds playing the role of code distance
introducedBy:
  - Craig Gidney (Google Quantum AI)
yearIntroduced: 2022
status: active
papers:
  - title: "Stability Experiments: The Overlooked Dual of Memory Experiments"
    authors: Gidney
    year: 2022
    url: https://arxiv.org/abs/2204.13834
  - title: Demonstrating real-time and low-latency quantum error correction with superconducting qubits
    authors: Caune, Skoric, Blunt et al. (Riverlane & Rigetti)
    year: 2024
    url: https://arxiv.org/abs/2410.05202
code:
  - name: Source code, circuits & statistics for the paper (Zenodo)
    url: https://zenodo.org/records/6859486
  - name: Stim circuit data references
    url: https://github.com/quantumlib/Stim/blob/main/doc/circuit_data_references.md
related:
  - logical-error-per-round
  - error-suppression-factor
---

The stability experiment is the dual of the standard QEC memory experiment, introduced by Craig Gidney (Google Quantum AI) in [a 2022 paper](https://arxiv.org/abs/2204.13834) (Quantum 6, 786). Where a memory experiment checks that a logical observable survives across time, a stability experiment checks that the error-correction system (syndrome-extraction circuits, measurement, and the classical decoder acting together) can correctly determine the product of a large region of stabilizers across space. That operation underlies moving logical qubits and lattice surgery, so the benchmark certifies a capability fault-tolerant computation needs but memory experiments never exercise. Though the patches are modest, what it certifies is collective: combining many stabilizer measurements into one correct product, not any individual gate or qubit.

## How it works

Run a patch whose boundary conditions make the product of a region of stabilizers a known, fixed global invariant. Measure syndromes for a varying number of rounds, decode, and check whether the decoder reconstructs the invariant correctly; the score is the logical error rate of that decoded product versus round count. Space and time swap roles relative to a memory experiment: adding rounds suppresses the failure probability (rounds act as the effective code distance) while patch size plays the role that duration plays in a memory experiment.

## Strengths and limitations

It probes timelike failure mechanisms (measurement and decoding errors) that memory experiments under-weight, is cheap to run, and scores the full QEC stack including real-time decoding. Because the roles of space and time are exchanged, its numbers are not directly comparable to a memory experiment's [logical error per round](/benchmarks/logical-error-per-round/). Adoption is growing but still partial (flagship results such as [Google's below-threshold paper](https://arxiv.org/abs/2408.13687) report only memory experiments), and the original paper validated the protocol in Stim simulation, with hardware demonstrations following from 2024. Not to be confused with "stability" as device-parameter drift in NISQ benchmarking.

## Notable results

Riverlane and Rigetti ran an 8-qubit stability experiment with up to 25 decoding rounds to validate a real-time FPGA decoder ([arXiv:2410.05202](https://arxiv.org/abs/2410.05202); Nature Communications, June 2026). Reference circuits ship with [Stim's circuit data references](https://github.com/quantumlib/Stim/blob/main/doc/circuit_data_references.md), and the protocol appears across recent surface-code, color-code, and lattice-surgery literature.
