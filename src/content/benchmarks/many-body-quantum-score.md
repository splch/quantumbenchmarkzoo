---
name: Many-body Quantum Score
tagline: Scores digital and analog quantum processors by the largest system size at which they reproduce quenched transverse-field Ising correlation functions within a chosen error threshold.
category: application-level
measures: Largest system size L whose average relative error on TFIM two-point correlation functions after a quench stays below a threshold ε, checked against exact classical references
introducedBy:
  - Erbin, Burdeau, Bertrand, Ayral & Misguich (Eviden Quantum Lab & IPhT, Université Paris-Saclay)
yearIntroduced: 2026
aliases:
  - MBQS
status: proposal
papers:
  - title: "Many-body Quantum Score: a scalable benchmark for digital and analog quantum processors and first test on a commercial neutral atom device"
    authors: Erbin, Burdeau, Bertrand, Ayral & Misguich
    year: 2026
    url: https://arxiv.org/abs/2601.03461
related:
  - q-score
  - analog-process-fidelity
---

The Many-body Quantum Score (MBQS) benchmarks a processor on a physically meaningful simulation task: reproducing the correlation dynamics of a quenched quantum magnet. Proposed in January 2026 by Erbin, Burdeau, Bertrand, Ayral & Misguich of Eviden Quantum Lab and IPhT (Université Paris-Saclay) ([arXiv:2601.03461](https://arxiv.org/abs/2601.03461)), it is defined "in the spirit of" Eviden's [Q-score](/benchmarks/q-score/) (the score is the largest size passing an error threshold), but it measures many-body simulation accuracy rather than optimization performance, and it runs on analog as well as gate-based machines.

## How it works

Prepare a product state (the paper defines initial-state variants MBQS₊ and MBQS↓), quench it under the 1D transverse-field Ising Hamiltonian, and measure two-point connected correlation functions. Because the model is integrable, exact reference values are classically computable in polynomial time at any size. The device's average relative correlation error P2(L) is compared against a threshold ε, and the score S is the largest system size L for which P2(L) stays below ε. Error mitigation is permitted, with results reported both with and without it.

## Strengths and limitations

Classically checkable references let the benchmark scale with no simulability cap, but for the same reason it certifies simulation accuracy, not quantum advantage. It is restricted to 1D geometry, measurement cost grows with system size as correlation peaks shrink, and the score is parameterized: quoted values must state both ε and the initial state. Applicability to analog devices, where few standardized benchmarks exist (compare [analog process fidelity](/benchmarks/analog-process-fidelity/)), is a distinguishing feature. Despite the name and shared Eviden provenance, MBQS is not a Q-score variant, and no public reference implementation exists.

## Notable results

MBQS is a proposal: a single arXiv preprint, with no journal publication, independent adoption, or follow-up as of July 2026. The introducing paper contains the first hardware test, on Pasqal's commercial Ruby analog Rydberg-atom QPU (Pasqal researchers were not co-authors), where the device reached S = 10 at threshold ε = 0.5 with readout error mitigation.
