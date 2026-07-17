---
name: QASMBench
tagline: PNNL's collection of OpenQASM 2 circuits, spanning chemistry to cryptography at 2 to 433+ qubits, used to evaluate NISQ hardware, compilers, and simulators.
category: application-level
measures: Execution fidelity of NISQ devices and compiler/simulator performance over a tiered OpenQASM 2 circuit collection; no single prescribed figure of merit
introducedBy:
  - Li, Stein, Krishnamoorthy & Ang (Pacific Northwest National Laboratory)
yearIntroduced: 2020
aliases:
  - QASMBench suite
  - PNNL QASMBench
status: active
papers:
  - title: "QASMBench: A Low-level QASM Benchmark Suite for NISQ Evaluation and Simulation"
    authors: Li, Stein, Krishnamoorthy & Ang
    year: 2020
    url: https://arxiv.org/abs/2005.13018
  - title: "QASMBench: A Low-Level Quantum Benchmark Suite for NISQ Evaluation and Simulation"
    authors: Li, Stein, Krishnamoorthy & Ang
    year: 2023
    url: https://doi.org/10.1145/3550488
code:
  - name: pnnl/QASMBench
    url: https://github.com/pnnl/QASMBench
related:
  - mqt-bench
  - supermarq
  - qed-c-benchmarks
---

QASMBench is a low-level benchmark suite of OpenQASM 2 circuits assembled at Pacific Northwest National Laboratory, drawing quantum routines and kernels from chemistry, simulation, linear algebra, search, optimization, arithmetic, machine learning, fault tolerance, and cryptography. Introduced in 2020 and published in ACM Transactions on Quantum Computing in 2023, it has become a stock circuit collection for evaluating NISQ hardware, compilers, and simulators.

## How it works

QASMBench groups the circuits by width into small (2–10 qubits), medium (11–27), and large (28–433+) tiers. It prescribes no protocol or score: users select circuits, run them on the device, compiler, or simulator under test, and report their own metrics, most commonly execution fidelity against noiseless simulation, or transpilation and simulation cost. To help interpret results, the suite characterizes each circuit with four metrics (gate density, retention lifespan, measurement density, and entanglement variance) that summarize how demanding it is; the [original paper](https://arxiv.org/abs/2005.13018) used them to profile executions on IBM Q, Rigetti, IonQ, and Quantinuum platforms.

## Strengths and limitations

Breadth and portability are the draw: plain OpenQASM 2 runs almost anywhere, and the [repository](https://github.com/pnnl/QASMBench) remains maintained (release v1.4, community contributions merged into 2025) and widely used in compiler- and simulator-evaluation literature. The absence of a prescribed figure of merit is the corresponding weakness (numbers from different papers are generally not comparable), and although it is filed with application-level suites, many entries are kernel-scale routines rather than end-to-end applications. Circuits are native OpenQASM 2, not OpenQASM 3. Two citation pitfalls: the arXiv version was substantially expanded after v1 (v2 in 2021, v3 in 2022), so early citations describe a smaller suite, and the journal version is often dated 2022 (online-first) versus its assigned issue of February 2023. Scored alternatives include [SupermarQ](/benchmarks/supermarq/) and the [QED-C suite](/benchmarks/qed-c-benchmarks/), while [MQT Bench](/benchmarks/mqt-bench/) covers similar ground for compiler and software benchmarking.
