---
name: GHZ State Fidelity
tagline: Whole-device entanglement test that prepares an N-qubit GHZ state and certifies genuine multipartite entanglement whenever the measured fidelity clears 0.5.
category: system-level
measures: Fidelity of a prepared N-qubit GHZ state (populations plus coherences), with F > 0.5 certifying genuine N-partite entanglement; reported as fidelity at N and the largest N certified
introducedBy:
  - Community practice; earliest deterministic demonstration by Sackett et al. (NIST)
yearIntroduced: 2000
aliases:
  - GHZ benchmark
  - Greenberger–Horne–Zeilinger state fidelity
  - N-qubit GHZ benchmark
status: active
papers:
  - title: Experimental entanglement of four particles
    authors: Sackett, Kielpinski, King et al.
    year: 2000
    url: https://www.nature.com/articles/35005011
  - title: "14-qubit entanglement: creation and coherence"
    authors: Monz, Schindler, Barreiro et al.
    year: 2011
    url: https://arxiv.org/abs/1009.6126
  - title: Verifying multipartite entangled GHZ states via multiple quantum coherences
    authors: Wei, Lauer, Srinivasan et al.
    year: 2020
    url: https://arxiv.org/abs/1905.05720
  - title: Generation and verification of 27-qubit Greenberger-Horne-Zeilinger states in a superconducting quantum computer
    authors: Mooney, White, Hill & Hollenberg
    year: 2021
    url: https://arxiv.org/abs/2101.08946
code:
  - name: Quantinuum H2 benchmarking data (GHZ system-level benchmark)
    url: https://github.com/CQCL/quantinuum-hardware-h2-benchmark
  - name: Quantinuum hardware specifications data
    url: https://github.com/Quantinuum/quantinuum-hardware-specifications
related:
  - supermarq
  - qusquare
---

GHZ state fidelity is the oldest whole-device entanglement benchmark still in routine use: prepare an N-qubit Greenberger–Horne–Zeilinger state spanning the processor, then measure how faithfully it was made. No single paper defines it. The prepare-and-certify protocol traces to [Sackett et al.'s deterministic four-ion entanglement](https://www.nature.com/articles/35005011) at NIST in 2000, was scaled to [14 ions by Monz et al.](https://arxiv.org/abs/1009.6126), and is now a named system-level benchmark in [Quantinuum's hardware documentation](https://docs.quantinuum.com/systems/user_guide/hardware_user_guide/benchmarks/system_benchmarks.html) alongside [Quantum Volume](/benchmarks/quantum-volume/). Because it engages every qubit and the entangling-gate set at once, the largest certified N is a community-tracked cross-platform record.

## How it works

An N-qubit GHZ state, (|0…0⟩ + |1…1⟩)/√2, is prepared, typically via a logarithmic-depth entangling circuit. Fidelity is estimated as F = (P + C)/2: populations P come from computational-basis measurements of the all-zeros and all-ones weights, and coherences C from parity oscillations or [multiple-quantum-coherence measurements](https://arxiv.org/abs/1905.05720), avoiding full tomography. F > 0.5 witnesses genuine N-partite entanglement, so results are reported as the fidelity at a given N and the largest N certified.

## Strengths and limitations

The test stresses the whole machine at once — entangling gates, crosstalk, correlated decoherence — with verification cost that stays modest as N grows. But it is community practice, not a standard: preparation circuits, estimation methods (tomography, parity oscillations, MQC, direct fidelity estimation), and error-mitigation choices vary by group and materially change the score. [Mooney et al.'s 27-qubit IBM result](https://arxiv.org/abs/2101.08946) clears 0.5 only with quantum readout error mitigation, while Quantinuum reports without SPAM correction, so check methodology before comparing platforms. F > 0.5 is a sufficient, not necessary, witness; and the bare fidelity is just a metric — the prepare-N/certify protocol and largest-certified-N record are what function as the benchmark.

## Notable results

Quantinuum's [system benchmarks documentation](https://docs.quantinuum.com/systems/user_guide/hardware_user_guide/benchmarks/system_benchmarks.html) reports H2-1 at 56 qubits with fidelity 0.6156 ± 0.0082, uncorrected (see also the [H2 racetrack paper](https://arxiv.org/abs/2305.03828)); superconducting records reached [60 qubits with readout correction](https://mariokrenn.wordpress.com/2021/01/29/reference-list-for-records-in-large-entanglement-generation-number-of-qubits-in-ghz-states/) by 2024. At the Helios launch (November 2025), Quantinuum's [blog reported](https://www.quantinuum.com/blog/introducing-helios-the-most-accurate-quantum-computer-in-the-world) 94 logical qubits fully entangled via the Iceberg code — not directly comparable to physical-qubit fidelities. Application suites such as [SupermarQ](/benchmarks/supermarq/) include GHZ preparation among their tests.
