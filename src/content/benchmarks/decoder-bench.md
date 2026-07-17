---
name: decoder-bench
tagline: Suite of Stim-generated syndrome traces for scoring classical QEC decoders on accuracy and latency across surface, color, and bivariate-bicycle codes plus lattice surgery.
category: error-correction
measures: Accuracy (logical error rate) and latency of classical QEC decoders on a shared set of Stim-generated syndrome traces
introducedBy:
  - Maurya, Viszlai, Raveendran, Das & Tannu (UW-Madison, UChicago, U. Arizona, UT Austin)
yearIntroduced: 2025
aliases:
  - Decoder-Bench
  - DecoderBench
status: active
papers:
  - title: "decoder-bench: Benchmarking Decoders for Quantum Error Correction"
    authors: Maurya, Viszlai, Raveendran, Das & Tannu
    year: 2025
    url: https://ieeexplore.ieee.org/document/11242095/
code:
  - name: decoder-bench (GitHub)
    url: https://github.com/satvikmaurya/decoder-bench
  - name: IISWC 2025 artifact — code and 2.8 GB trace datasets (Zenodo)
    url: https://doi.org/10.5281/zenodo.16914504
related:
  - logical-error-per-round
  - stability-experiment
  - ftprimitivebench
---

decoder-bench (styled lowercase in the paper and repository) is a benchmark suite for the classical half of quantum error correction: the decoders that turn measured syndromes into corrections. Introduced by Maurya, Viszlai, Raveendran, Das & Tannu at IEEE IISWC 2025, it standardizes the inputs on which decoder accuracy and speed are compared — previously each decoder paper generated its own, making results hard to line up. It sits in this catalog's error-correction section, but the object under test is classical decoder software and hardware; no quantum device is measured.

## How it works

The suite fixes the workload. Syndrome traces are generated with Stim for memory experiments on surface codes, color codes, and bivariate bicycle (qLDPC) codes, plus surface-code lattice surgery, under code-capacity, phenomenological, and circuit-level noise. Candidate decoders consume the shared traces and are scored on two axes: accuracy, as the logical error rate achieved, and latency, the time to produce corrections. The MIT-licensed harness lives on GitHub and the 2.8 GB trace dataset is archived on [Zenodo](https://doi.org/10.5281/zenodo.16914504), so comparisons are reproducible trace-for-trace.

## Strengths and limitations

Shared traces make decoder comparisons apples-to-apples, and coverage extends past the usual surface-code memory experiment to lattice surgery and bivariate bicycle codes — where real-time decoding pressure is heading. Scoring latency alongside accuracy reflects the fault-tolerance constraint that decoders must keep pace with syndrome extraction.

Because every trace is simulated, realism is bounded by the noise models; rankings under Stim circuit-level noise need not carry over to hardware data of the kind behind [logical error per round](/benchmarks/logical-error-per-round/) or [stability experiments](/benchmarks/stability-experiment/). The primary paper sits behind the IEEE Xplore paywall with no arXiv preprint, though the artifact is fully open. And the suite is young — released August 2025 — so adoption beyond the authors' groups is not yet established. Not to be confused with qec-lego-bench, a separate decoder benchmarking effort.

## Notable results

Presented at IEEE IISWC 2025 (October 2025); the August 2025 code and dataset release remains the current version as of mid-2026.
