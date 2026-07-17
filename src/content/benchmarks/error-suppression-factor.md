---
name: Error suppression factor (Λ)
tagline: "The factor by which logical error per QEC cycle drops when code distance rises by two — Λ > 1 certifies below-threshold operation, and Λ anchors Google's error-correction roadmap."
category: error-correction
measures: "Λ = ε_d / ε_{d+2} ≈ p_thr / p, fitted from logical memory experiments at successive code distances on one processor; Λ > 1 means exponential error suppression as the code scales"
introducedBy:
  - Kelly, Martinis & colleagues (Martinis group, UCSB/Google)
yearIntroduced: 2014
aliases:
  - Λ
  - Lambda
  - lambda factor
  - exponential suppression factor
status: active
papers:
  - title: State preservation by repetitive error detection in a superconducting quantum circuit
    authors: Kelly, Barends, Fowler et al. (Martinis group, UCSB/Google)
    year: 2014
    url: https://arxiv.org/abs/1411.7403
  - title: Qubit metrology for building a fault-tolerant quantum computer
    authors: Martinis
    year: 2015
    url: https://arxiv.org/abs/1510.01406
  - title: Exponential suppression of bit or phase flip errors with repetitive error correction
    authors: Chen et al. (Google Quantum AI)
    year: 2021
    url: https://arxiv.org/abs/2102.06132
  - title: Quantum error correction below the surface code threshold
    authors: Acharya et al. (Google Quantum AI and collaborators)
    year: 2024
    url: https://arxiv.org/abs/2408.13687
code:
  - name: Google QEC memory-experiment datasets (Zenodo, behind the Λ = 2.14 result)
    url: https://zenodo.org/records/13273331
related:
  - logical-error-per-round
  - coherence-gain
  - stability-experiment
---

The error suppression factor Λ says whether a quantum error-correcting code improves as it grows: the factor by which logical error per QEC cycle drops when the code distance increases by two. Coined in the Martinis group's repetition-code experiment ([Kelly et al., 2014](https://arxiv.org/abs/1411.7403); Nature 519, 66 (2015)) and called "the key metrological figure of merit" by [Martinis in 2015](https://arxiv.org/abs/1510.01406), it organizes Google's QEC roadmap. Λ is a fitted metric rather than a standardized protocol — code family, distances, cycle counts, and decoder vary by paper — but the memory-scaling experiments producing it act as de facto benchmarks of below-threshold operation.

## How it works

Run logical memory experiments at successive code distances (d = 3, 5, 7, say) on one processor, extract the [logical error per round](/benchmarks/logical-error-per-round/) ε_d at each, and fit ε_d = C / Λ^((d+1)/2). Then Λ = ε_d / ε_{d+2} ≈ p_thr / p: Λ > 1 certifies below-threshold operation, and larger Λ means faster exponential suppression as the code scales.

## Strengths and limitations

Λ compresses "are we below threshold, and by how much?" into one number — but it is decoder-dependent: the same Willow dataset yields Λ = 2.14 with a neural-network decoder, 2.04 with ensembled matching, and 2.0 ± 0.1 in real time ([arXiv:2408.13687](https://arxiv.org/abs/2408.13687)). The single-exponential fit assumes uniform, uncorrelated noise — leakage, correlated errors, and cosmic rays violate it — and a 2025 IBM heavy-hex surface-code study argues single-parameter Λ fits can mischaracterize code performance ([arXiv:2510.18847](https://arxiv.org/abs/2510.18847)). Definitions have drifted: repetition-code values (Λ_X = 3.18, Λ_Z = 2.99 in [2021](https://arxiv.org/abs/2102.06132)) are not comparable to surface-code Λ, and the coinage is often misattributed to the 2021–2024 Google papers. [Coherence gain](/benchmarks/coherence-gain/) instead scores a logical qubit against the best physical qubit; the [stability experiment](/benchmarks/stability-experiment/) probes complementary time-like errors.

## Notable results

Kelly et al. measured Λ = 3.2 in a nine-qubit repetition code. Google's first surface-code scaling test saw d = 5 barely edge d = 3 — 2.914% vs 3.028% per cycle ([arXiv:2207.06431](https://arxiv.org/abs/2207.06431)) — before Willow's below-threshold milestone, Λ = 2.14 ± 0.02 at d = 3/5/7 (Nature 638, 920 (2025)), and the first color-code value, Λ_3/5 = 1.56(4) ([arXiv:2412.14256](https://arxiv.org/abs/2412.14256)).
