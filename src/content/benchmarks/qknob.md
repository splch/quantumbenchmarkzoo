---
name: QKNOB
tagline: Compiler-stress circuits with provably near-optimal SWAP and depth overheads built in, generalizing QUEKO to benchmark qubit mapping on instances that genuinely need routing
category: software-stack
measures: "Optimality gap of quantum circuit transformation (qubit-mapping) algorithms: SWAP-count and depth overhead versus each circuit's built-in near-optimal cost"
introducedBy:
  - Li, Zhou & Feng (UTS, Nanjing Tech & Tsinghua)
yearIntroduced: 2023
aliases:
  - QUEKNO
  - Qubit Mapping Benchmark with Known Near-Optimality
status: active
papers:
  - title: Benchmarking Quantum Circuit Transformation with QKNOB Circuits
    authors: Li, Zhou & Feng
    year: 2023
    url: https://arxiv.org/abs/2301.08932
  - title: Benchmarking Quantum Circuit Transformation With QKNOB Circuits (IEEE Transactions on Quantum Engineering version)
    authors: Li, Zhou & Feng
    year: 2025
    url: https://doi.org/10.1109/TQE.2025.3527399
code:
  - name: ebony72/quekno (GitHub)
    url: https://github.com/ebony72/quekno
related:
  - queko
  - qubikos
---

QKNOB (Qubit mapping Benchmark with Known Near-Optimality) is a family of benchmark circuits from Sanjiang Li, Xiangzhen Zhou, and Yuan Feng (UTS Centre for Quantum Software and Information, Nanjing Tech, and Tsinghua) for grading qubit-mapping ("quantum circuit transformation") algorithms against a built-in, provably near-optimal answer. The benchmarks were introduced in January 2023 under the name QUEKNO ("quantum examples with known near-optimality") and renamed QKNOB in the December 2024 arXiv revision and the published IEEE Transactions on Quantum Engineering version; the GitHub repository still carries the old quekno name. Like [QUEKO](/benchmarks/queko/), it scores compiler software; no quantum hardware is involved.

## How it works

The construction algorithm generates each circuit together with a transformation onto a target coupling graph whose SWAP count and depth overhead are provably close to the true optimum. A compiler under test (Qiskit's SABRE, t|ket⟩'s router, and similar tools) maps the circuit onto the same device graph (53-qubit IBM Q Rochester, Google Sycamore, IBM Q Tokyo), and its SWAP and depth overheads are compared against the circuit's built-in near-optimal cost. The released suites cover two gate sets (QSE and TKT) and both SWAP-count and depth objectives, shipping pre-generated QASM files with their near-optimal solutions.

## Strengths and limitations

Where QUEKO circuits admit a zero-SWAP optimal mapping (so a tool could in principle ace them by placement alone), QKNOB instances carry nonzero but provably near-optimal costs, which the [authors argue](https://arxiv.org/abs/2301.08932) makes them a less biased test of routing on more general circuits. The bounds are near-optimal rather than exact, so measured gaps carry some slack, and the circuits remain synthetic constructions rather than application workloads; UCLA's [QUBIKOS](/benchmarks/qubikos/) (2025) takes the complementary approach of exactly optimal SWAP counts. The suite is recently maintained, with journal publication in IEEE Transactions on Quantum Engineering (vol. 6, January 2025), though the repository shows no heavy ongoing development.
