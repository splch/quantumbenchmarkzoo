---
name: Algorithmic Qubits
tagline: IonQ's single-number application metric — the largest width at which a six-algorithm circuit suite clears a 1/e fidelity bar — retired in 2025 in favor of industry-standard metrics.
category: application-level
measures: Largest n for which every suite circuit with width ≤ n and ≤ n^2 two-qubit gates keeps normalized fidelity, minus statistical error, above 1/e ≈ 0.37
introducedBy:
  - IonQ
yearIntroduced: 2020
aliases:
  - "#AQ"
  - AQ
  - Algorithmic Qubit
status: superseded
papers:
  - title: Application-Oriented Performance Benchmarks for Quantum Computing
    authors: Lubinski, Johri, Varosy, Coleman, Zhao, Necaise, Baldwin, Mayer & Proctor
    year: 2021
    url: https://arxiv.org/abs/2110.03137
  - title: Benchmarking a trapped-ion quantum computer with 30 qubits
    authors: Chen, Nielsen, Ebert, Inlek, Wright, Chaplin, Maksymov, Páez, Poudel, Maunz & Gamble
    year: 2023
    url: https://arxiv.org/abs/2308.05071
code:
  - name: IonQ #AQ reference implementation (QED-C suite fork with AQ.md spec)
    url: https://github.com/ionq/QC-App-Oriented-Benchmarks
  - name: QED-C QC-App-Oriented-Benchmarks (upstream)
    url: https://github.com/SRI-International/QC-App-Oriented-Benchmarks
related:
  - qed-c-benchmarks
  - ionq-application-benchmarking
  - quantum-volume
  - volumetric-benchmarking
---

Algorithmic Qubits (#AQ) was IonQ's headline performance metric from 2022 through 2025: a single number meant to capture the largest useful application circuit a machine can run. IonQ sketched it in its December 2020 scaling roadmap as a successor to log2-style summaries of [Quantum Volume](/benchmarks/quantum-volume/) and made it operational in February 2022 on top of the QED-C application suite. No other vendor adopted it.

## How it works

#AQ pins a six-algorithm subset of the [QED-C suite](/benchmarks/qed-c-benchmarks/): quantum Fourier transform, phase estimation, amplitude estimation, Monte Carlo sampling, VQE, and Hamiltonian simulation. A machine scores #AQ = n if every suite circuit with width up to n and up to n^2 two-qubit CX gates achieves normalized output fidelity, minus statistical error, above 1/e ≈ 0.37. Only two-qubit gates count toward the budget; results are typically drawn as a pass region on a [volumetric-benchmarking](/benchmarks/volumetric-benchmarking/)-style plot. Error mitigation is allowed if disclosed — IonQ's headline numbers used debiasing by default. The authoritative definition is [IonQ's web spec](https://ionq.com/resources/algorithmic-qubits-a-better-single-number-metric) and the AQ.md file in IonQ's QED-C fork; no peer-reviewed paper defines the metric.

## Strengths and limitations

Scoring application-style circuits rather than random ones was the appeal; being vendor-defined and vendor-reported was the weakness. Quantinuum's ["Debunking algorithmic qubits"](https://www.quantinuum.com/blog/debunking-algorithmic-qubits) argues the score is dominated by error mitigation and aggressive compilation — Forte at AQ 9 versus H2-1 at AQ 26 when both run unmitigated, a 992-entangling-gate benchmark compiled down to 141 gates — and notes that upstream QED-C methodology forbids those techniques, so #AQ scores are not comparable to unmitigated QED-C results; the 1/e threshold is also criticized as a low bar. IonQ countered that mitigation reflects real usage. Despite the name, #AQ counts neither physical nor logical qubits.

## Notable results

IonQ reported Aria at #AQ 20 (2022), Forte at [#AQ 29 (2023)](https://arxiv.org/abs/2308.05071), #AQ 35 and 36 (2024), and Tempo at [#AQ 64 in October 2025](https://www.ionq.com/blog/ionq-hits-aq-64-milestone-ahead-of-schedule-and-sets-its-sights-even-higher) — the roadmap endpoint. In the same announcement IonQ retired #AQ as its headline number, saying it will instead report industry-standard metrics — physical qubits, median two-qubit gate fidelity, logical qubits, and logical error rates — plus [application-specific benchmarks](/benchmarks/ionq-application-benchmarking/).
