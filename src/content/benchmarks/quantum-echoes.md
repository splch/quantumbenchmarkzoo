---
name: Quantum Echoes
tagline: Google's second-order OTOC experiment on Willow, framed as a verifiable successor to random-circuit sampling because its echo observable can be re-measured on another quantum computer.
category: system-level
measures: Expectation value of a second-order out-of-time-order correlator, OTOC(2), the echo amplitude surviving a doubled forward-perturb-reverse loop, as a defined, re-measurable observable degraded by hardware noise
introducedBy:
  - Google Quantum AI and collaborators (Abanin et al.)
yearIntroduced: 2025
aliases:
  - OTOC(2)
  - OTOC^(2)
  - Second-order out-of-time-order correlator benchmark
status: active
papers:
  - title: Constructive interference at the edge of quantum ergodic dynamics
    authors: Abanin et al. (Google Quantum AI and Collaborators)
    year: 2025
    url: https://arxiv.org/abs/2506.10191
  - title: Observation of constructive interference at the edge of quantum ergodicity
    authors: Google Quantum AI and Collaborators
    year: 2025
    url: https://www.nature.com/articles/s41586-025-09526-6
  - title: A simplified version of the quantum OTOC(2) problem
    authors: King, Kothari, Babbush, Boixo, Kechedzhi, O'Brien & Smelyanskiy
    year: 2025
    url: https://arxiv.org/abs/2510.19751
  - title: Tensor Networks with Belief Propagation Cannot Feasibly Simulate Google's Quantum Echoes Experiment
    authors: Bermejo, Villalonga, Ware, Vidal & Szasz
    year: 2026
    url: https://arxiv.org/abs/2604.15427
code:
  - name: Zenodo record 15640503 (OTOC(2) circuits and data)
    url: https://zenodo.org/records/15640503
related:
  - cross-entropy-benchmarking
  - loschmidt-echo-benchmark
---

Quantum Echoes is Google Quantum AI's name (coined in its [October 2025 announcement](https://research.google/blog/a-verifiable-quantum-advantage/), not the paper titles) for the second-order out-of-time-order correlator (OTOC(2)) experiment run on 65–103 qubits of the Willow processor and [published in Nature](https://www.nature.com/articles/s41586-025-09526-6). Google brands it a quantum algorithm, but it functions as a system-level benchmark: hardware noise degrades the measured echo amplitude, and unlike the bitstring distributions of [cross-entropy benchmarking](/benchmarks/cross-entropy-benchmarking/), the quantity is a well-defined observable that another quantum computer can in principle re-measure and confirm. That makes it the prospective verifiable successor to random-circuit sampling.

## How it works

A random circuit is run forward, a single-qubit "butterfly" perturbation is applied, and the circuit is run in reverse; traversing this forward–backward loop twice makes the correlator second order. The surviving echo amplitude quantifies operator scrambling as a repeatable expectation value rather than a sampling task, so the same number can be checked by classical simulation at small sizes or by a second quantum computer at full size. Circuits and data are [public on Zenodo](https://zenodo.org/records/15640503).

## Strengths and limitations

As of mid-2026 the hardness claim stands: no published classical simulation or spoof, an [April 2026 analysis](https://arxiv.org/abs/2604.15427) argues belief-propagation tensor networks cannot feasibly simulate it, and Google has posed a [simplified OTOC(2) challenge problem](https://arxiv.org/abs/2510.19751) to invite classical attacks. The caveats are real, though. The headline benchmark use, cross-verifying OTOC(2) values on a second quantum computer, awaits public demonstration. [2026 critiques](https://arxiv.org/abs/2607.07530) note that exact classical verification reached only ~40 qubits while the advantage point is 65, that reported values pass through error-mitigation rescaling, and that no hardness theorem backs the claim, so the speedup could erode as classical methods improve, as happened with earlier RCS claims. Despite the name, it is distinct from Google's first-order OTOC experiment (2021) and from the [Loschmidt echo benchmark](/benchmarks/loschmidt-echo-benchmark/).

## Notable results

Published as Nature 646, 825–830 (October 2025), with Google reporting about [two hours on Willow versus an estimated 3.2 years per data point on the Frontier supercomputer](https://research.google/blog/a-verifiable-quantum-advantage/) (~13,000x). A companion paper applied the echo protocol to [molecular geometry via many-body nuclear spin echoes](https://arxiv.org/abs/2510.19550).
