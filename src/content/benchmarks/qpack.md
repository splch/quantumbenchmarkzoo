---
name: QPack
tagline: TU Delft benchmark suite that runs QAOA and VQE optimization workloads end to end and scores runtime, accuracy, scalability, and capacity.
category: application-level
measures: Runtime, accuracy, scalability, and capacity sub-scores from end-to-end QAOA and VQE runs on combinatorial-optimization problems
introducedBy:
  - Mesman, Al-Ars & Möller (TU Delft)
yearIntroduced: 2021
aliases:
  - QPack Scores
status: historical
papers:
  - title: "QPack: Quantum Approximate Optimization Algorithms as universal benchmark for quantum computers"
    authors: Mesman, Al-Ars & Möller
    year: 2021
    url: https://arxiv.org/abs/2103.17193
  - title: "QPack Scores: Quantitative performance metrics for application-oriented quantum computer benchmarking"
    authors: Donkers, Mesman, Al-Ars & Möller
    year: 2022
    url: https://arxiv.org/abs/2205.12142
  - title: "QuAS: Quantum Application Score for benchmarking the utility of quantum computers"
    authors: Mesman, van der Schoot, Möller & Neumann
    year: 2024
    url: https://arxiv.org/abs/2406.03905
code:
  - name: koenmesman/QPack (Python reference implementation)
    url: https://github.com/koenmesman/QPack
  - name: xacc_qaoa_benchmarks (cross-platform XACC port)
    url: https://github.com/huub-d96/xacc_qaoa_benchmarks
related:
  - q-score
  - qed-c-benchmarks
---

QPack is a benchmark suite from TU Delft that treats variational algorithms as end-to-end workloads: it runs QAOA and VQE applications on a quantum computer or simulator and distills the execution data into practical performance scores. Mesman, Al-Ars and Möller introduced it in 2021, arguing that QAOA's mix of qubit demands, circuit depth, and hybrid classical optimization makes it a natural all-round stress test for NISQ machines.

## How it works

The [2021 paper](https://arxiv.org/abs/2103.17193) defines scalable QAOA workloads on MaxCut, dominating-set, and traveling-salesman problems, run at increasing problem sizes through a hardware-agnostic stack (a cross-platform XACC implementation targets multiple vendors' backends). The [2022 QPack Scores paper](https://arxiv.org/abs/2205.12142) added VQE workloads and supplied the actual scoring: execution data (job timings, solution quality, and how both degrade with problem size) are converted into four sub-scores: runtime, accuracy, scalability, and capacity (the largest problem size the system can solve).

## Strengths and limitations

QPack scores the whole hybrid pipeline on genuine optimization workloads, closer to user experience than component metrics. But the two papers are often conflated: the original is QAOA-only and defers concrete scoring, with VQE and the four-part scoring arriving only in the 2022 follow-up. Both appear to be arXiv-only, "universal benchmark" is the authors' own framing, and adoption beyond the TU Delft group amounts to citations rather than independent runs. The name also collides with QPACK (RFC 9204), the unrelated HTTP/3 header-compression standard.

## Notable results

QPack is now of historical interest: both public implementations have been dormant since late 2021, though the suite is still cited in benchmarking surveys. Its scoring approach was folded into [QuAS (2024)](https://arxiv.org/abs/2406.03905), an application score co-designed by QPack's lead author with the TNO [Q-score](/benchmarks/q-score/) team that integrates the strong points of both rather than formally replacing QPack. Among application-oriented suites, the [QED-C benchmarks](/benchmarks/qed-c-benchmarks/) fill a similar role today.
