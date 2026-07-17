---
name: VeriQBench
tagline: OpenQASM circuit suite spanning combinational, dynamic, sequential, and variational circuits, built as standard inputs for quantum software tools from equivalence checkers to debuggers
category: software-stack
measures: No device score of its own; supplies standard OpenQASM circuit inputs for evaluating quantum software verification, simulation, testing, and debugging tools
introducedBy:
  - Chen, Ying & colleagues (Veri-Q project)
yearIntroduced: 2022
aliases:
  - Veri-Q Benchmark
status: active
papers:
  - title: "VeriQBench: A Benchmark for Multiple Types of Quantum Circuits"
    authors: Chen, Fang, Guan, Hong, Huang, Liu, Wang & Ying
    year: 2022
    url: https://arxiv.org/abs/2206.10880
code:
  - name: Veri-Q/Benchmark (GitHub)
    url: https://github.com/Veri-Q/Benchmark
related:
  - mqt-bench
  - qasmbench
---

VeriQBench is a benchmark suite of OpenQASM circuits assembled by the Veri-Q verification group (Chen, Fang, Guan, Hong, Huang, Liu, Wang & Ying, [2022](https://arxiv.org/abs/2206.10880)) as standard inputs for quantum software tools. Where hardware benchmarks produce a device score, VeriQBench produces none: it is a curated test-input dataset for the tools that verify, simulate, test, and debug quantum programs — hence its home among software-stack benchmarks rather than the hardware categories.

## How it works

The suite organizes circuits into four types — combinational, dynamic, sequential, and variational — at small, medium, and large qubit scales (roughly under 20, 20–50, and above 50 qubits, though the thresholds vary between circuit families). All circuits are validated on the Qiskit and QCOR simulators, and some families ship auxiliary artifacts such as .sol solution files for qubit-mapping instances. The intended downstream uses span verification (equivalence checking, model checking), simulation (fault simulation), testing (test-pattern generation), and debugging (runtime assertions).

## Strengths and limitations

Breadth is the draw: dynamic and sequential circuits, which most circuit suites omit, sit alongside the usual combinational and variational fare, making VeriQBench useful for tools that must handle measurement and feedback. Its limits are equally clear. The paper is arXiv-only — v1 (June 2022) is the sole version, with no journal publication as of mid-2026. The suite prescribes no scoring protocol, so results from different tools are comparable only if authors adopt the same methodology. And it is distinct from, though hosted alongside, the same group's broader Veri-Q verification tools. Curated suites such as [MQT Bench](/benchmarks/mqt-bench/) and [QASMBench](/benchmarks/qasmbench/) cover the adjacent compiler- and application-workload niches.

## Notable results

The suite remains maintained and in use: the GitHub repository, created January 2022, was last pushed in May 2026, and 2024–2026 quantum-software papers (QuTuner, QSPE, QReach among them) cite or build on it.
