---
name: QB GSEE Benchmark
tagline: "DARPA Quantum Benchmarking program's ground-state energy estimation benchmark: classical and quantum solvers are scored on solvability, accuracy, and runtime over a shared library of molecular Hamiltonians."
category: application-level
measures: Solvability (probability of reaching chemical accuracy within runtime limits), accuracy, and runtime across a molecular Hamiltonian library, plus logical-qubit and T-gate estimates for quantum solvers
introducedBy:
  - DARPA Quantum Benchmarking program (Bellonzi et al. — L3Harris, Zapata AI, University of Toronto, HRL & others)
yearIntroduced: 2024
aliases:
  - QB Ground State Energy Estimation Benchmark
  - QB-GSEE-Benchmark
  - QB-GSEE
status: active
papers:
  - title: QB Ground State Energy Estimation Benchmark
    authors: Bellonzi, Cantin, Jangrouei, Kunitsa et al.
    year: 2025
    url: https://arxiv.org/abs/2508.10873
  - title: "Planted Solutions in Quantum Chemistry: Generating Non-Trivial Hamiltonians with Known Ground States"
    authors: Wang, Cantin, Patel, Loaiza, Huang & Izmaylov
    year: 2025
    url: https://arxiv.org/abs/2507.15166
code:
  - name: isi-usc-edu/qb-gsee-benchmark
    url: https://github.com/isi-usc-edu/qb-gsee-benchmark
related:
  - hamlib
  - qoblib
---

The QB GSEE Benchmark scores classical and quantum solvers on the same concrete task: estimate molecular ground-state energies to chemical accuracy within runtime requirements. It was developed under DARPA's Quantum Benchmarking (QB) program by a team spanning L3Harris, Zapata AI, the University of Toronto, HRL Laboratories, Boeing, and others ([Bellonzi et al.](https://arxiv.org/abs/2508.10873)), with the repository hosted by USC ISI, the program's test-and-evaluation organization. "QB" is the program, not a vendor — and this benchmark is distinct from the same program's BenchQ resource-estimation framework and from DARPA's separate Quantum Benchmarking Initiative (QBI).

## How it works

The benchmark ships a library of molecular electronic-structure Hamiltonians — 228 instances with reference solutions, plus unsolved "guidestar" instances — following the instance-library pattern of [HamLib](/benchmarks/hamlib/) and [QOBLIB](/benchmarks/qoblib/). The Hamiltonian FCIDUMP files sit on an L3Harris SFTP server (credentials required); metadata, schemas, scripts, and results live on GitHub. Solvers submit results and are scored on solvability — the probability of reaching chemical accuracy within the runtime requirement — along with accuracy and runtime. Quantum solvers additionally report estimated logical-qubit and T-gate utilization: today the quantum side is evaluated through logical resource estimates for double-factorized quantum phase estimation, not hardware runs. Planted-solution instances with known ground states ([Wang et al.](https://arxiv.org/abs/2507.15166)) keep hard instances checkable.

## Strengths and limitations

Pitting quantum projections against strong classical baselines is the point, and the first results are sobering: the 2025 paper found fully optimized SHCI (classical) achieves near-universal solvability on the current instance set, so the benchmark does not yet expose a quantum-advantage frontier; the authors plan to add more strongly correlated instances. Quantum "results" remain projections rather than executions, and the credentialed SFTP hosting of instance files adds friction.

## Notable results

The repository has been public since October 2024 — note the dates: alpha releases (v0.1.0-alpha.1, December 2024; alpha.2, February 2025) preceded the August 2025 companion paper — with commits through June 2026, and the framework remains open to new solver submissions from classical and quantum developers.
