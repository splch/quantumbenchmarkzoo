---
name: QUBIKOS
tagline: Benchmark circuits whose minimal SWAP count on a given device is provably known, scoring layout-synthesis tools by the factor of extra SWAPs they insert over the optimum
category: software-stack
measures: SWAP optimality gap — ratio of SWAPs a layout-synthesis tool inserts to the circuit's provably known optimal SWAP count (1x = optimal)
introducedBy:
  - Ping, Lin, Tan & Cong (UCLA)
yearIntroduced: 2025
aliases:
  - QUantum Benchmark wIth Known-Optimal SWAP Counts
status: active
papers:
  - title: Assessing Quantum Layout Synthesis Tools via Known Optimal-SWAP Cost Benchmarks
    authors: Ping, Lin, Tan & Cong
    year: 2025
    url: https://arxiv.org/abs/2502.08839
  - title: Assessing Quantum Layout Synthesis Tools via Known Optimal-SWAP Cost Benchmarks (DAC 2025 proceedings version)
    authors: Ping, Lin, Tan & Cong
    year: 2025
    url: https://dl.acm.org/doi/10.1109/DAC63849.2025.11133143
code:
  - name: ping-shuo-hao/qubikos (GitHub)
    url: https://github.com/ping-shuo-hao/qubikos
related:
  - queko
  - qknob
---

QUBIKOS (QUantum Benchmark wIth Known-Optimal SWAP Counts) is the successor to [QUEKO](/benchmarks/queko/) from the same UCLA group — Ping, Lin, Tan & Cong — introduced in February 2025 and published at DAC 2025. It closes QUEKO's blind spot: QUEKO circuits need zero SWAPs by construction, so they never exercise a compiler's routing, whereas QUBIKOS circuits are built so that their minimal SWAP count on a target device is nonzero and provably known. Like its predecessor, it benchmarks classical compiler software, not quantum processors.

## How it works

The generator constructs circuits whose optimal SWAP insertion on a given coupling graph can be proven, then scores a layout-synthesis tool by the ratio of SWAPs it actually inserts to that known optimum, where 1x is optimal. The released set contains 40 circuits per architecture — ten each at optimal SWAP counts of 5, 10, 15, and 20 — for the Rigetti Aspen-4 (16-qubit), IBM Rochester (53), Google Sycamore (54), and IBM Eagle (127) coupling graphs.

## Strengths and limitations

QUBIKOS is the first suite to certify routing (SWAP-count) optimality rather than just mapped depth, and its initial results are sobering: [average optimality gaps](https://arxiv.org/abs/2502.08839) of roughly 63x for LightSabre, 117x for ML-QLS, 250x for QMAP, and 330x for t|ket⟩. Those gaps swing strongly with architecture — LightSabre ranged from about 2x on Sycamore to about 234x on Eagle — and the circuits are deliberately adversarial, so headline gaps need not transfer to typical application workloads. The suite is young: the GitHub repository is minimal and specifies no license, so the arXiv paper is the authoritative reference.

## Notable results

QUBIKOS is already being adopted alongside QUEKO and [QASMBench](/benchmarks/qasmbench/) in 2025–2026 layout-synthesis evaluations (e.g. the multilevel framework of arXiv:2505.24169). The independent [QKNOB](/benchmarks/qknob/) suite covers the related regime of provably near-optimal, rather than exactly optimal, transformation costs.
