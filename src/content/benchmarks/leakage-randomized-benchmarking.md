---
name: Leakage randomized benchmarking
tagline: Modified randomized benchmarking that tracks population escaping the computational subspace, separating per-gate leakage and seepage rates from ordinary computational error.
category: component-level
measures: Per-Clifford leakage (L1) and seepage (L2) rates, plus a leakage-aware average gate error, from modified RB decays
introducedBy:
  - Wood & Gambetta (IBM)
yearIntroduced: 2017
aliases:
  - Leakage RB
status: active
papers:
  - title: Quantification and Characterization of Leakage Errors
    authors: Wood & Gambetta
    year: 2018
    url: https://arxiv.org/abs/1704.03081
  - title: Characterization of Leakage Errors via Randomized Benchmarking
    authors: Wallman, Barnhill & Emerson
    year: 2016
    url: https://arxiv.org/abs/1412.4126
related:
  - randomized-benchmarking
---

Standard [randomized benchmarking](/benchmarks/randomized-benchmarking/) assumes errors keep a qubit inside its two-dimensional computational subspace. Real qubits are truncations of larger systems (a transmon can end up in its |2⟩ state), and such leakage both skews RB's exponential-decay model and is disproportionately harmful to quantum error correction. Leakage randomized benchmarking extends the protocol to measure it; the now-standard formulation is due to [Wood and Gambetta](https://arxiv.org/abs/1704.03081) at IBM, building on an earlier RB-based proposal by [Wallman, Barnhill and Emerson](https://arxiv.org/abs/1412.4126).

## How it works

The experiment runs ordinary random Clifford sequences of increasing length m, but the readout also tracks how much population remains in the computational subspace (for a transmon, by resolving the |2⟩ level). Two decays are fit. The subspace population decays as A + B·λ1^m with λ1 = 1 − L1 − L2, where L1 is the leakage rate (probability per Clifford of escaping the subspace) and L2 the seepage rate (probability of returning); the asymptote fixes their ratio, so both rates come out of one curve. The usual survival probability is then fit with a model that includes this extra leakage decay, yielding an average gate error that stays meaningful when leakage is present. As in standard RB, the extracted rates are robust to state-preparation and measurement error.

## Strengths and limitations

Its value is separation: unmodeled leakage silently biases plain RB numbers, and leakage calls for different fixes (reset protocols, pulse shaping) than subspace decoherence, so an error budget that lumps them together misleads. The requirements are the flip side: readout must resolve or infer leakage population, and the simple decay model treats leakage as roughly uniform across the Clifford set and confined to a small leakage subspace. The earlier [Wallman–Barnhill–Emerson protocol](https://arxiv.org/abs/1412.4126) estimates coherent and incoherent leakage rates from similar sequence decays; Wood and Gambetta's leakage/seepage definitions are the ones later work generally adopts.
