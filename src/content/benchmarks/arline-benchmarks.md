---
name: Arline Benchmarks
tagline: Automated head-to-head comparison of quantum compilers (Qiskit, Tket, Cirq, Quilc, PyZX) on gate counts, depth, circuit cost, and runtime, with auto-generated LaTeX reports
category: software-stack
measures: Post-compilation gate count, circuit depth, hardware-dependent circuit cost, and per-stage compiler runtime for each compilation framework
introducedBy:
  - Kharkov, Ivanova, Mikhantiev & Kotelnikov (Arline / Turation Ltd)
yearIntroduced: 2020
aliases:
  - arline_benchmarks
status: historical
papers:
  - title: "Arline Benchmarks: Automated Benchmarking Platform for Quantum Compilers"
    authors: Kharkov, Ivanova, Mikhantiev & Kotelnikov
    year: 2022
    url: https://arxiv.org/abs/2202.14025
code:
  - name: ArlineQ/arline_benchmarks (GitHub)
    url: https://github.com/ArlineQ/arline_benchmarks
  - name: arline-benchmarks (PyPI)
    url: https://pypi.org/project/arline-benchmarks/
related:
  - benchpress
  - mqt-bench
---

Arline Benchmarks was an automated benchmarking platform for quantum compilers, released in mid-2020 by the quantum software startup Arline (named for Arline Greenbaum Feynman) and described in a [2022 preprint](https://arxiv.org/abs/2202.14025). Like the other compiler benchmarks in this catalog, it scores software rather than quantum hardware: it answered, in one reproducible run, which compilation framework produced the cheapest circuits for a given target.

## How it works

The platform compiles a shared suite of circuits (random circuits plus structured workloads such as VQE ansätze, Trotter decompositions, Grover search, and option pricing via amplitude estimation) through several frameworks (IBM Qiskit, CQC Tket, Google Cirq, Rigetti Quilc, PyZX) to fixed hardware gate sets. For each run it records post-optimization gate counts, circuit depth, hardware-dependent circuit cost functions, and compiler runtime broken down by compilation stage, then assembles everything into an auto-generated LaTeX report. It also introduced composite pipelines that chain optimization subroutines from different compilers, letting users hunt for cross-compiler combinations that beat any single framework.

## Strengths and limitations

Arline was among the first tools to make compiler comparison push-button and apples-to-apples, and it saw early industrial use: Oxford Quantum Circuits used it for compiler testing, per the [project README](https://github.com/ArlineQ/arline_benchmarks). Its published comparisons, however, reflect 2020–2022 framework versions and are long stale. The paper remains an arXiv preprint, and the platform is unmaintained: the last GitHub push was March 2022, the last PyPI release June 2020, and the company domain no longer resolves. Note that Arline Quantum, the companion open-source circuit library released alongside it, is a distinct package.

## Notable results

The platform is of historical interest today. Its niche, standardized and automated quantum-SDK performance comparison, is now served by IBM's [Benchpress](/benchmarks/benchpress/) (2024), while curated circuit suites such as [MQT Bench](/benchmarks/mqt-bench/) cover the workload side.
