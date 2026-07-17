---
name: QUEKO
tagline: Synthetic circuits built backward from a device's coupling graph so the optimal mapped depth is known exactly, exposing how far layout-synthesis tools sit from optimal
category: software-stack
measures: "Optimality gap of layout-synthesis (qubit-mapping) tools: ratio of compiled circuit depth to the circuit's known optimal depth"
introducedBy:
  - Tan & Cong (UCLA VAST lab)
yearIntroduced: 2020
aliases:
  - QUEKO benchmarks
  - QUantum Mapping Examples with Known Optimal
status: active
papers:
  - title: Optimality Study of Existing Quantum Computing Layout Synthesis Tools
    authors: Tan & Cong
    year: 2020
    url: https://arxiv.org/abs/2002.09783
  - title: Optimality Study of Existing Quantum Computing Layout Synthesis Tools (IEEE Transactions on Computers version)
    authors: Tan & Cong
    year: 2021
    url: https://doi.org/10.1109/TC.2020.3009140
  - title: Assessing Quantum Layout Synthesis Tools via Known Optimal-SWAP Cost Benchmarks
    authors: Ping, Lin, Tan & Cong
    year: 2025
    url: https://arxiv.org/abs/2502.08839
code:
  - name: UCLA-VAST/QUEKO-benchmark (GitHub)
    url: https://github.com/UCLA-VAST/QUEKO-benchmark
  - name: QUEKO benchmarks page (UCLA VAST lab)
    url: https://vast.cs.ucla.edu/software/queko-benchmarks
related:
  - qknob
  - qubikos
  - benchpress
---

QUEKO (QUantum Mapping Examples with Known Optimal) is a suite of synthetic OpenQASM circuits from Bochen Tan and Jason Cong at UCLA that hands layout-synthesis tools an exam with a known answer key. The circuits are never executed on a device: QUEKO grades the compiler stage that maps an idealized circuit onto a processor's limited connectivity, a step whose quality directly sets how much a real program's depth and gate count inflate.

## How it works

Each benchmark is constructed backward from a target device's coupling graph: gates are placed so that, by construction, a mapping exists that needs zero SWAPs and achieves a known optimal circuit depth (and gate count). A layout-synthesis tool compiles the circuit for that device, and its score is the ratio of output depth to the known optimum, where 1x is optimal. Three subfamilies probe different regimes: BNTF (near-term feasible, depths 5–45), BSS (scalability study, depths 100–900), and BIGD (gate-density sweep at fixed depth 45), on the Rigetti Aspen-4 (16-qubit), IBM Tokyo (20), IBM Rochester (53), and Google Sycamore (54) graphs.

## Strengths and limitations

Because the optimum is known, QUEKO measures absolute rather than relative suboptimality: the [original study](https://arxiv.org/abs/2002.09783) found Cirq, Qiskit, and t|ket⟩ missing optimal depth by 1.5–12x on 16–20 qubit devices and 5–45x on 53–54 qubit ones, and proved layout synthesis NP-complete. The flip side is that every QUEKO circuit admits a SWAP-free optimal mapping, so SWAP-count optimization goes untested: the same group's [QUBIKOS](/benchmarks/qubikos/) (2025) adds provably optimal SWAP counts, and the independent [QKNOB](/benchmarks/qknob/) suite argues that near-optimal, nonzero-overhead circuits give a less biased evaluation. The circuits are also synthetic and random-like, not application workloads.

## Notable results

QUEKO remains a standard optimality-gap testbed as of 2025–2026: 18 QUEKO circuits form part of the 33-circuit evaluation set in the SAT 2025 work on depth-optimal layout synthesis, the paper has roughly 104 citations, and the originating UCLA group extended the line with QUBIKOS in 2025.
