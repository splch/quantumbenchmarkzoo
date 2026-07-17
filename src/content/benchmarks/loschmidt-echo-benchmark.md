---
name: Loschmidt Echo Benchmark
tagline: Google's quick patch-level test that runs a random circuit and its inverse, fits the decay of the return probability, and scores qubit configurations by effective error per cycle.
category: system-level
measures: Effective gate error per cycle for a qubit patch, fit from the exponential decay of the probability that U followed by U† returns every qubit to zero
introducedBy:
  - Google Quantum AI
yearIntroduced: 2021
aliases:
  - Loschmidt echoes
  - loschmidt.tilted_square_lattice
  - Qubit picking with Loschmidt echoes
status: active
papers:
  - title: Qubit assignment using time reversal
    authors: Peters, Shyamsundar, Li & Perdue
    year: 2022
    url: https://arxiv.org/abs/2201.00445
  - title: Information scrambling in computationally complex quantum circuits
    authors: Mi, Roushan, Quintana et al. (Google Quantum AI)
    year: 2021
    url: https://arxiv.org/abs/2101.08870
code:
  - name: ReCirq loschmidt.tilted_square_lattice module
    url: https://github.com/quantumlib/ReCirq/tree/main/recirq/otoc/loschmidt/tilted_square_lattice
  - name: Cirq tutorial notebook (echoes.ipynb)
    url: https://github.com/quantumlib/Cirq/blob/main/docs/tutorials/google/echoes.ipynb
related:
  - cross-entropy-benchmarking
  - mirror-benchmarking
  - quantum-echoes
---

The Loschmidt echo benchmark is Google Quantum AI's quick test for choosing qubits and catching hardware drift: run a random circuit and its inverse on a patch of qubits, and the decay rate of the "echo" (the probability of returning to the starting state) condenses into a single effective error figure for the whole patch. It has no standalone paper. The authoritative definition is Google's [Cirq tutorial "Qubit picking with Loschmidt echoes"](https://quantumai.google/cirq/tutorials/google/echoes) (2021) and the versioned ReCirq module `loschmidt.tilted_square_lattice`, which grew out of the [OTOC information-scrambling experiment](https://arxiv.org/abs/2101.08870), the same line of work that later produced [Quantum Echoes](/benchmarks/quantum-echoes/).

## How it works

On a tilted-square-lattice block of qubits, a random circuit U with a given number of cycles is applied, followed by its inverse U†, and every qubit is measured. Ideally each shot returns all zeros, so the survival probability p(00…0) tracks accumulated error. Repeating over increasing cycle counts and random instances, then fitting p ≈ A · f^cycles, yields an effective gate error per cycle for the configuration. Sweeping the procedure over candidate patches ranks qubit choices; re-running it over time [flags hardware changes](https://quantumai.google/cirq/tutorials/google/identifying_hardware_changes).

## Strengths and limitations

The echo is self-verifying (the ideal outcome is all zeros, with no classical simulation needed, unlike [cross-entropy benchmarking](/benchmarks/cross-entropy-benchmarking/)) and cheap enough for routine qubit picking and drift detection. The trade-offs: the single fitted number folds gates, idling, and readout into one effective decay rate, and Google's docs position it as a quick, circuit-structure-specific comparison metric rather than a calibrated per-gate error. The name invites confusion: it borrows "Loschmidt echo" from quantum-chaos and many-body physics, and it is conceptually adjacent to, but distinct from, Sandia-style [mirror circuits](/benchmarks/mirror-benchmarking/). The often-cited [Fermilab paper on qubit assignment using time reversal](https://arxiv.org/abs/2201.00445) (PRX Quantum, 2022) combines Loschmidt echoes with simulated annealing and validated the idea on Google hardware; it is closely related, not the benchmark's origin.

## Notable results

Google maintains the benchmark actively: the Cirq echoes tutorial was updated in June 2025 to run on the Willow-generation `willow_pink` virtual device, and the [ReCirq module](https://github.com/quantumlib/ReCirq/tree/main/recirq/otoc/loschmidt/tilted_square_lattice) saw commits through September 2025.
