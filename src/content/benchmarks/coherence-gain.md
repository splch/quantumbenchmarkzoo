---
name: Coherence gain
tagline: "Single-number score for error-corrected quantum memories: how many times longer the logical qubit keeps quantum information than the best uncorrected element in the same device, with G = 1 the break-even point."
category: error-correction
measures: G = (error-corrected logical-qubit lifetime) / (lifetime of the best uncorrected element in the same device); G > 1 is beyond break-even
introducedBy:
  - Sivak, Eickbusch & colleagues (Yale, Devoret group)
yearIntroduced: 2022
aliases:
  - QEC gain
  - Lifetime gain
  - Break-even gain
  - Beyond-break-even gain
status: active
papers:
  - title: Real-time quantum error correction beyond break-even
    authors: Sivak, Eickbusch, Royer, Singh, Tsioutsios, Ganjam, Miano, Brock, Ding, Frunzio, Girvin, Schoelkopf & Devoret
    year: 2023
    url: https://arxiv.org/abs/2211.09116
  - title: Demonstrating Quantum Error Correction that Extends the Lifetime of Quantum Information
    authors: Ofek et al.
    year: 2016
    url: https://arxiv.org/abs/1602.04768
  - title: Beating the break-even point with a discrete-variable-encoded logical qubit
    authors: Ni et al.
    year: 2023
    url: https://arxiv.org/abs/2211.09319
  - title: Quantum error correction below the surface code threshold
    authors: Acharya et al. (Google Quantum AI)
    year: 2025
    url: https://arxiv.org/abs/2408.13687
related:
  - error-suppression-factor
  - logical-error-per-round
---

Coherence gain, written G, is the single-number score of an error-corrected quantum memory: how many times longer the corrected logical qubit preserves quantum information than the best uncorrected element in the same device. [Sivak et al.](https://arxiv.org/abs/2211.09116) (Yale, Devoret group) named it in their 2022 demonstration of real-time GKP-code error correction — "beating the best of them with a coherence gain of G = 2.27" — while the break-even comparison against a system's best component goes back to [Ofek et al.'s 2016 cat-code experiment](https://arxiv.org/abs/1602.04768). It is a named figure of merit extracted from device-specific lifetime measurements, not a portable benchmark protocol.

## How it works

Encode a logical qubit and keep it alive with repeated error correction — measurement-based feedback or autonomous dissipation — while measuring how the stored information decays with wait time (channel or process-fidelity decay, or effective lifetime). Measure the same decay for the best passive alternative in the same hardware and take the ratio: Sivak et al. define G = Γ_01 / Γ_GKP, the decay rate of the oscillator's Fock {0,1} encoding divided by that of the corrected GKP qubit.

## Strengths and limitations

G is holistic — encoding, ancillas, readout, and real-time feedback must all work for G > 1 — and it is the cleanest statement that QEC helps rather than hurts. But it is not standardized: papers differ in the decay quantity (fidelity vs T1/T2) and in the baseline — best passive encoding ([Sivak et al.](https://arxiv.org/abs/2211.09116)), best physical qubit ([Google](https://arxiv.org/abs/2408.13687)), or both ([Li et al.](https://arxiv.org/abs/2504.16746)) — so values are not strictly comparable across papers. It covers idle memory only; beyond-break-even storage implies nothing about error-corrected gates. Distinct from the [error-suppression factor Λ](/benchmarks/error-suppression-factor/), which tracks how the [logical error per round](/benchmarks/logical-error-per-round/) falls with code distance.

## Notable results

GKP qubit G = 2.27 ± 0.07 (Sivak et al., Nature 2023); binomial code ~16% beyond break-even ([Ni et al.](https://arxiv.org/abs/2211.09319), Nature 2023); GKP qutrit and ququart gains of 1.82 and 1.87 ([Brock et al.](https://arxiv.org/abs/2409.15065), Nature 2025); Google's distance-7 surface code exceeding its best physical qubit's lifetime by 2.4 ± 0.3 (Nature 2025); trapped-ion autonomous QEC at roughly 13x the physical qubit (11.6 ms vs 0.9 ms; [Li et al.](https://arxiv.org/abs/2504.16746), 2025).
