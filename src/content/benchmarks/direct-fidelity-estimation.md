---
name: Direct fidelity estimation
tagline: Estimates how close a lab state or gate is to its ideal pure target from a few importance-sampled Pauli measurements, sidestepping the exponential cost of full tomography.
category: characterization
measures: Fidelity between an implemented state or process and a pure target state or unitary, to constant additive error, from a few random Pauli expectation values
introducedBy:
  - Flammia & Liu
  - da Silva, Landon-Cardinal & Poulin
yearIntroduced: 2011
aliases:
  - DFE
  - Monte Carlo quantum process certification
status: active
papers:
  - title: Direct Fidelity Estimation from Few Pauli Measurements
    authors: Flammia & Liu
    year: 2011
    url: https://arxiv.org/abs/1104.4695
  - title: Practical characterization of quantum devices without tomography
    authors: da Silva, Landon-Cardinal & Poulin
    year: 2011
    url: https://arxiv.org/abs/1104.3835
  - title: Experimental Monte Carlo Quantum Process Certification
    authors: Steffen, da Silva, Fedorov, Baur & Wallraff
    year: 2012
    url: https://arxiv.org/abs/1202.5196
  - title: Optimizing resource bounds in direct fidelity estimation
    authors: Barel, Peleg, Kadish, Ben Kish & Shapira
    year: 2026
    url: https://arxiv.org/abs/2606.16336
code:
  - name: Cirq example (direct_fidelity_estimation.py)
    url: https://github.com/quantumlib/Cirq/blob/main/examples/direct_fidelity_estimation.py
  - name: forest-benchmarking (Rigetti)
    url: https://forest-benchmarking.readthedocs.io/en/latest/dfe.html
related:
  - quantum-state-tomography
  - cross-platform-verification
  - ghz-state-fidelity
---

Direct fidelity estimation (DFE) answers the certification question — how close is my state or gate to the one I meant to make? — without paying for full [quantum state tomography](/benchmarks/quantum-state-tomography/). It was proposed twice, independently, in April 2011: [da Silva, Landon-Cardinal & Poulin](https://arxiv.org/abs/1104.3835) posted first (PRL 107, 210404), and the name comes from [Flammia & Liu](https://arxiv.org/abs/1104.4695) (PRL 106, 230501); cite both. The da Silva formulation is also known as Monte Carlo (process) certification, after the [2012 Steffen et al. experiment](https://arxiv.org/abs/1202.5196).

## How it works

The fidelity to a pure target expands as a sum over Pauli operators of the target's Pauli coefficients times the lab state's. DFE samples a small number of Pauli operators with probability proportional to the target's squared coefficients (importance sampling), estimates each sampled Pauli expectation value on hardware, and averages, giving the fidelity to constant additive error. The number of measurement settings is constant in system size. Total shot cost depends on the target: stabilizer states such as [GHZ states](/benchmarks/ghz-state-fidelity/) are especially cheap. Gates are certified the same way through the entanglement fidelity of the corresponding channel.

## Strengths and limitations

For certification, DFE is exponentially cheaper than tomography, and it remains a standard primitive 15 years on, with implementations shipping in Cirq and Rigetti's forest-benchmarking. But it returns one number for a user-chosen target: there is no fixed workload or standardized device score, so it is measurement machinery for fidelity-based benchmarks rather than a benchmark itself, and it offers no diagnosis of what went wrong. The original protocols assume a pure target state or unitary — a [2024 generalization](https://arxiv.org/abs/2412.07623) extends DFE to generic mixed states — and shot cost is target- and precision-dependent, with [tightened resource bounds](https://arxiv.org/abs/2606.16336) still an active topic in 2026. Beware a naming collision: Superstaq's "DFE" tool implements the randomized-measurement [cross-platform verification](/benchmarks/cross-platform-verification/) protocol of Elben et al., a distinct method sharing the acronym; classical shadows offer yet another route to fidelity estimation.
