---
name: Teraquop footprint
tagline: Projected number of physical qubits per logical qubit a QEC code needs, at a stated physical error rate, to reach a one-in-a-trillion logical error rate — extrapolated from simulation, not measured on hardware.
category: error-correction
measures: Physical qubits per logical qubit to reach a 10^-12 logical error rate per operation at a stated physical error rate, projected from lambda-factor line fits to Monte Carlo simulations
introducedBy:
  - Gidney, Newman, Fowler & Broughton (Google Quantum AI)
yearIntroduced: 2021
aliases:
  - Teraquop qubit count
  - Footprint of a teraquop
status: active
papers:
  - title: A Fault-Tolerant Honeycomb Memory
    authors: Gidney, Newman, Fowler & Broughton
    year: 2021
    url: https://arxiv.org/abs/2108.10457
  - title: Benchmarking the Planar Honeycomb Code
    authors: Gidney, Newman & McEwen
    year: 2022
    url: https://arxiv.org/abs/2202.11845
  - title: A Pair Measurement Surface Code on Pentagons
    authors: Gidney
    year: 2022
    url: https://arxiv.org/abs/2206.12780
  - title: Dynamical codes for hardware with noisy readouts
    authors: Derks, Townsend-Teague, Eisert, Kesselring, Higgott & Brown
    year: 2025
    url: https://arxiv.org/abs/2505.07658
code:
  - name: honeycomb_threshold (Stim + PyMatching analysis code)
    url: https://github.com/strilanc/honeycomb_threshold
related:
  - logical-error-per-round
  - rqops
  - qlops
---

The teraquop footprint is a projected figure of merit for comparing quantum error-correcting codes and decoders: the number of physical qubits per logical qubit a code needs, at a stated physical error rate, to reach a logical error rate of 10^-12 per logical operation — low enough to run a trillion ("teraquop") logical operations and expect them all to succeed. Gidney, Newman, Fowler & Broughton (Google Quantum AI) introduced it as the "teraquop qubit count" in the [2021 honeycomb-memory paper](https://arxiv.org/abs/2108.10457); [later Gidney papers](https://arxiv.org/abs/2206.12780) and most subsequent work say "teraquop footprint". It is a simulation-extrapolated metric rather than a benchmark run on hardware, tabulated here with the error-correction figures it builds on.

## How it works

Logical error rates are Monte Carlo-sampled with a stabilizer simulator (Stim) and a decoder (e.g. PyMatching) at several code distances, under a declared circuit noise model — uniform depolarizing at p = 10^-3, or the superconducting-inspired SI1000 model. The exponential suppression per distance step (the lambda factor, as in the [error-suppression factor Λ](/benchmarks/error-suppression-factor/)) is fit as a line and extrapolated to the distance where logical error crosses 10^-12; the footprint is the physical-qubit count of the code patch at that distance.

## Strengths and limitations

It puts codes and decoders on a common scale at algorithmically relevant error rates that neither direct simulation nor hardware can reach. But it is a projection: values depend on the assumed noise model, the decoder, and the validity of extrapolating exponential suppression far beyond simulated distances, so numbers are only comparable under matched assumptions. Distinguish it from the "teraquop regime" (the kiloquop/megaquop/gigaquop/teraquop machine-scale ladder in roadmap discussions), from the 2025 ["teraquop volume"](https://arxiv.org/abs/2505.07658) spacetime generalization, and from Λ itself, from which footprints are extrapolated.

## Notable results

Routine in code-comparison papers through 2024–2026: a defect-mitigation technique reports a ~3x teraquop-footprint reduction ([arXiv:2412.21000](https://arxiv.org/abs/2412.21000); Phys. Rev. A, 2026), and [Derks et al.](https://arxiv.org/abs/2505.07658) generalize the metric to the teraquop volume — qubits x rounds needed for below-10^-12 spacelike and timelike logical error.
