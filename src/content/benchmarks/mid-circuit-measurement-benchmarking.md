---
name: Mid-circuit measurement benchmarking
tagline: IBM's randomized-benchmarking suite that quantifies the error a mid-circuit measurement adds to the measured qubit and the dephasing and crosstalk it inflicts on unmeasured spectator qubits.
category: component-level
measures: Error per mid-circuit measurement, non-QND error under repeated measurement, and measurement-induced dephasing and crosstalk on spectator qubits, from compared RB decays
introducedBy:
  - Govia, Jurcevic & colleagues (IBM Quantum)
yearIntroduced: 2022
aliases:
  - Mid-circuit measurement randomized benchmarking
  - Mid-circuit measurement RB
  - MCM-RB
  - mcm-rb suite
  - MCM benchmarking
status: active
papers:
  - title: A randomized benchmarking suite for mid-circuit measurements
    authors: Govia, Jurcevic, Wood, Kanazawa, Merkel & McKay
    year: 2022
    url: https://arxiv.org/abs/2207.04836
  - title: Randomized benchmarking protocol for dynamic circuits
    authors: Shirizly, Govia & McKay
    year: 2024
    url: https://arxiv.org/abs/2408.07677
  - title: Measuring error rates of mid-circuit measurements
    authors: Hothem, Hines, Baldwin, Gresh, Blume-Kohout & Proctor
    year: 2024
    url: https://arxiv.org/abs/2410.16706
  - title: A generalized cycle benchmarking algorithm for characterizing mid-circuit measurements
    authors: Zhang, Chen, Liu & Jiang
    year: 2024
    url: https://arxiv.org/abs/2406.02669
code:
  - name: qiskit-device-benchmarking (notebooks/mcm_rb.ipynb)
    url: https://github.com/qiskit-community/qiskit-device-benchmarking
  - name: Paper data and analysis code (Zenodo)
    url: https://doi.org/10.5281/zenodo.6815663
related:
  - randomized-benchmarking
  - interleaved-randomized-benchmarking
---

Mid-circuit measurement benchmarking — the "mcm-rb suite" of Govia, Jurcevic and colleagues at IBM Quantum — was the first randomized-benchmarking-based benchmark for measurements performed partway through a circuit. Mid-circuit measurements (MCMs) are the primitive behind error correction and dynamic circuits, and terminal-readout metrics miss both of their failure modes: the extra error a measurement adds to the measured qubit, and the backaction — dephasing and crosstalk — it inflicts on unmeasured neighbors.

## How it works

The suite compares exponential decays from three sequence types run on an ancilla and nearby spectator qubits. mcm-rb interleaves a mid-circuit measurement of the ancilla into standard Clifford RB sequences; delay-rb replaces each measurement with a delay of equal duration; and mcm-rep repeats measurements back-to-back to expose non-QND error. Comparing the mcm-rb and delay-rb decays isolates what the measurement itself adds, in the style of [interleaved RB](/benchmarks/interleaved-randomized-benchmarking/): an error per measurement for the measured qubit, subject to interleaved-RB-like systematic bounds, plus measurement-induced dephasing and crosstalk rates for each spectator. The [original demonstration](https://arxiv.org/abs/2207.04836) characterized 23 of the 27 qubits of ibm_peekskill (a Falcon R8 device), running the suite simultaneously on up to 17 qubits (five ancilla-plus-control sets).

## Strengths and limitations

The suite extends RB's SPAM-robust decay-comparison logic to a neglected primitive and yields actionable per-qubit and per-pair rates — component-level numbers, not a whole-processor score. The name is also used as a generic topic label: this entry anchors on the IBM suite, but distinct MCM benchmarks now exist, including Sandia and Quantinuum's [scalable many-qubit MCM RB](https://arxiv.org/abs/2410.16706) (Nat. Commun. 16, 5761 (2025)), a [generalized cycle benchmarking for MCMs](https://arxiv.org/abs/2406.02669) (PRX Quantum 6, 010310 (2025)), and [Pauli noise learning for MCMs](https://arxiv.org/abs/2406.09299) (PRL 134, 020602 (2025)). It was demonstrated on superconducting hardware but is not platform-specific in principle, and it is distinct from the same group's [dynamic-circuits RB](https://arxiv.org/abs/2408.07677), which additionally benchmarks feedforward.

## Notable results

Published as New J. Phys. 25, 123016 (2023), with a maintained reference implementation (mcm_rb.ipynb) in [qiskit-device-benchmarking](https://github.com/qiskit-community/qiskit-device-benchmarking). The Sandia-led [review of quantum-computer benchmarking](https://arxiv.org/abs/2407.08828) (Nature Reviews Physics 7, 105 (2025)) names mid-circuit measurements among the fault-tolerance primitives that benchmarks must cover.
