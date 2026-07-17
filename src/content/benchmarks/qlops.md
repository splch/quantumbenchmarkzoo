---
name: QLOPS
tagline: Proposed fault-tolerant throughput metric that scores logical operations per second with the classical decoder's accuracy, throughput, and latency folded in.
category: error-correction
measures: Logical throughput Q = k / ((ceil(t_r/t_SEC) + d) · t_SEC), set by syndrome-extraction cycle time, decoder reaction time, code distance, and code rate
introducedBy:
  - Kong, Zhang & Chen (Zhongguancun Laboratory & Tsinghua University)
yearIntroduced: 2025
aliases:
  - Quantum Logical Operations Per Second
  - logical operations per second
status: proposal
papers:
  - title: Benchmarking fault-tolerant quantum computing hardware via QLOPS
    authors: Kong, Zhang & Chen
    year: 2025
    url: https://arxiv.org/abs/2507.12024
related:
  - rqops
  - clops
  - teraquop-footprint
---

QLOPS — Quantum Logical Operations Per Second — is a proposed metric for benchmarking fault-tolerant quantum computers, introduced in 2025 by Linghang Kong and Fang Zhang (Zhongguancun Laboratory) and Jianxin Chen (Tsinghua University) in [arXiv:2507.12024](https://arxiv.org/abs/2507.12024). It scores a machine's logical throughput — logical qubits times the rate of logical operations per second — with the classical decoding stack's accuracy, throughput, and latency folded in, factors the authors fault Microsoft's [rQOPS](/benchmarks/rqops/) for ignoring. A whole-machine throughput score in spirit, it sits here alongside the fault-tolerant error-correction metrics it builds on.

## How it works

QLOPS is computed by modeling the full hardware-code-decoder stack rather than running a circuit protocol. For a code block encoding k logical qubits at distance d, with syndrome-extraction cycle time t_SEC and decoder reaction time t_r, a logical operation takes about ceil(t_r/t_SEC) + d cycles, giving Q = k / ((ceil(t_r/t_SEC) + d) · t_SEC) logical operations per second. Decoder accuracy enters through the achievable distance and logical error rate; code rate enters through k. The paper evaluates the metric on a Willow-like superconducting surface-code stack and a neutral-atom machine running generalized bicycle codes, grounded in a resource analysis of factoring RSA-2048.

## Strengths and limitations

QLOPS is the first named fault-tolerant throughput metric to price in the classical decoder pipeline and code rate, and unlike rQOPS it has a peer-reviewed definition ([ACM Transactions on Quantum Computing 7(2), article 14, 2026](https://dl.acm.org/doi/10.1145/3797968)). So far, though, it is a modeling exercise: scores are computed for hypothesized stacks rather than measured by a vendor-run protocol, and results inherit the architecture model's assumptions. It is easily confused with rQOPS (2023), which counts reliable operations at a target logical error rate without modeling the decoder; it complements memory-level figures like the [logical error rate per round](/benchmarks/logical-error-per-round/) rather than replacing them.

## Notable results

A maintained proposal, not yet an adopted standard: peer-reviewed in ACM Transactions on Quantum Computing (April 2026; arXiv v2, April 22, 2026), but as of July 2026 no hardware vendor reports QLOPS figures. IBM's measured [CLOPS](/benchmarks/clops/) remains the nearest NISQ-era analogue.
