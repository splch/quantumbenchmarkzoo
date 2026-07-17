---
name: FTCircuitBench
tagline: Suite of 160+ algorithm instances compiled into Clifford+T and Pauli-based computation forms to score fault-tolerant resource costs for surface-code and qLDPC architectures.
category: error-correction
measures: Fault-tolerant resource costs of compiled algorithm circuits — T-count, gate counts, depth, rotation-synthesis fidelity, space-time volume, and structural metrics
introducedBy:
  - Harkness et al. (Pacific Northwest National Laboratory & academic collaborators)
yearIntroduced: 2026
status: proposal
papers:
  - title: "FTCircuitBench: A Benchmark Suite for Fault-Tolerant Quantum Compilation and Architecture"
    authors: Harkness, Kan, Liu, Wang, Martyn, Xu, Chamaki, Decker, Mao, Zuluaga, Terlaky, Li & Stein
    year: 2026
    url: https://arxiv.org/abs/2601.03185
code:
  - name: Official repository (404 as of July 2026)
    url: https://github.com/AdrianHarkness/FTCircuitBench
  - name: Community mirror (preserves original commit history)
    url: https://github.com/peizhiliu168/FTCircuitBench
related:
  - ftprimitivebench
  - benchpress
  - mqt-bench
---

FTCircuitBench is a proposed benchmark suite for the fault-tolerant compilation stack: whole algorithm circuits are compiled end-to-end and scored on logical resource costs, with no device ever run. Released in January 2026 by a PNNL-led team with university collaborators, it targets the gap left by NISQ-era circuit suites — once circuits must be expressed in Clifford+T or Pauli-based computation and laid out on an error-corrected architecture, the metrics that matter change entirely. It is catalogued under error correction because its subject is QEC-era compilation and architecture, though its unit of evaluation is a full algorithm circuit, in the tradition of software suites like [Benchpress](/benchmarks/benchpress/) and [MQT Bench](/benchmarks/mqt-bench/).

## How it works

The suite provides 160+ benchmark instances — ripple-carry adders, QFT, Hamiltonian simulation, phase estimation, HHL, and QSVT circuits — plus a pipeline that compiles each into Clifford+T and Pauli-based computation (PBC) forms targeting surface-code and qLDPC architectures. Compiled outputs are scored on fault-tolerant resource costs — T-count, gate counts, depth, rotation-synthesis fidelity, and space-time volume — alongside structural metrics such as Pauli weight and modularity that indicate how a workload maps onto a given architecture.

## Strengths and limitations

It is among the first suites built for the fault-tolerant era rather than retrofitting NISQ workloads, and covering both Clifford+T and PBC targets lets architecture studies compare paradigms on equal workloads ([Harkness et al. 2026](https://arxiv.org/abs/2601.03185)). All metrics come from compilation and numerical analysis, never from executing circuits on quantum hardware, and results reflect toolchain versions at test time.

Its standing is precarious: a January 2026 proposal with no journal version or arXiv revision, whose official GitHub repository (footnoted in the paper) went dark sometime before July 2026 — it now returns 404, and only third-party mirrors preserve the MIT-licensed commit history. It was presented at Unitary Foundation's Quantum Wednesday seminar in February 2026, but independent adoption is not yet established. Not to be confused with [QASMBench](/benchmarks/qasmbench/), the same group's NISQ-era circuit suite, or [FTPrimitiveBench](/benchmarks/ftprimitivebench/), an overlapping team's suite for logical primitives under biased noise.
