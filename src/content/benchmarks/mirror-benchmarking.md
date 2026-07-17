---
name: Mirror Benchmarking
tagline: Quantinuum's system-level benchmark that fits the exponential decay of mirrored random circuits' survival probability, with a decay rate that also gauges how coherent the noise is.
category: system-level
measures: Exponential decay rate, with depth, of the survival probability of mirrored random circuits spanning the processor; the rate is quadratic in the error channel and equals the unitarity for certain noise
introducedBy:
  - Mayer, Hall & colleagues (Honeywell Quantum Solutions, now Quantinuum)
yearIntroduced: 2021
aliases:
  - MB
  - Quantinuum mirror benchmarking
  - Honeywell mirror benchmarking
status: active
papers:
  - title: Theory of mirror benchmarking and demonstration on a quantum computer
    authors: Mayer, Hall, Gatterman, Halit, Lee, Bohnet, Gresh, Hankin, Gilmore, Gerber & Gaebler
    year: 2021
    url: https://arxiv.org/abs/2108.10431
  - title: A Race Track Trapped-Ion Quantum Processor
    authors: Moses et al. (Quantinuum)
    year: 2023
    url: https://arxiv.org/abs/2305.03828
  - title: "Helios: A 98-qubit trapped-ion quantum computer"
    authors: Quantinuum
    year: 2025
    url: https://arxiv.org/abs/2511.05465
code:
  - name: Quantinuum H2 benchmark data and analysis (mirror_benchmarking)
    url: https://github.com/CQCL/quantinuum-hardware-h2-benchmark
related:
  - randomized-mirror-circuits
  - mirror-randomized-benchmarking
  - quantum-volume
---

Mirror benchmarking (MB) is Honeywell Quantum Solutions' (now Quantinuum) system-level benchmark, introduced by Mayer and colleagues in 2021 and built on self-inverting random circuits spanning the whole processor. Despite the near-identical name it is a distinct protocol from Sandia's [randomized mirror circuits](/benchmarks/randomized-mirror-circuits/) (the paper credits the mirror-circuit construction to Proctor et al.) and from [mirror RB](/benchmarks/mirror-randomized-benchmarking/). Its contribution is the theory: when the survival probability of such circuits must decay exponentially, and what the rate means.

## How it works

Circuits are built from layers of random single-qubit Cliffords plus native two-qubit gates on random all-to-all qubit pairings (a natural fit for trapped ions), followed by the inverse of each layer in reverse order, with Pauli randomized compiling. The fraction of shots returning the ideal bitstring, the survival probability, is measured versus depth and fit to an exponential. The [theory](https://arxiv.org/abs/2108.10431) shows that if the twirling group forms a 2-design, then under a uniform-noise assumption the decay is exponential, with a rate quadratic in the error channel (equal to the unitarity for certain noise), so the same data also estimates how coherent the noise is.

## Strengths and limitations

MB scales without classical simulation and extracts a noise-coherence estimate for free from the quadratic decay law. Its assumptions are real, though: uniform noise across layers, 2-design twirling, and a rate that equals the unitarity only for certain error types. The name causes chronic confusion: "mirror benchmarking" is often an umbrella term for the whole mirror-circuit family (NPL's 2025 metrics review uses it that way); this entry is the Quantinuum protocol. The theory paper remains arXiv-only as of July 2026; the flagship deployments are the peer-reviewed record, and Quantinuum's current documentation headlines [Quantum Volume](/benchmarks/quantum-volume/) and [GHZ state fidelity](/benchmarks/ghz-state-fidelity/) rather than MB.

## Notable results

MB debuted on Honeywell's H1 at 6–10 qubits ([Mayer et al. 2021](https://arxiv.org/abs/2108.10431)) and was one of four system-level tests in Quantinuum's H2 launch benchmarking at 20–32 qubits (Phys. Rev. X 13, 041052 (2023)), with [public data and analysis code](https://github.com/CQCL/quantinuum-hardware-h2-benchmark). Quantinuum's 98-qubit [Helios random-circuit-sampling benchmark](https://arxiv.org/abs/2511.05465) cites it for mirrored-circuit fidelity estimation.
