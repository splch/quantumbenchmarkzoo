---
name: qml-benchmarks
tagline: Xanadu's suite for benchmarking quantum machine-learning models against out-of-the-box classical baselines — which the classical baselines won on every task tested.
category: application-level
measures: Test accuracy (and, since v0.2, generative-model performance) of quantum models versus out-of-the-box classical baselines
introducedBy:
  - Bowles, Ahmed & Schuld (Xanadu)
yearIntroduced: 2024
aliases:
  - "Better than classical?"
  - Xanadu QML benchmarks
status: active
papers:
  - title: "Better than classical? The subtle art of benchmarking quantum machine learning models"
    authors: Bowles, Ahmed & Schuld
    year: 2024
    url: https://arxiv.org/abs/2403.07059
code:
  - name: XanaduAI/qml-benchmarks
    url: https://github.com/XanaduAI/qml-benchmarks
related:
  - qbas-score
  - supermarq
---

qml-benchmarks is Xanadu's open-source suite for testing whether quantum machine-learning models actually beat classical baselines. Built by Bowles, Ahmed and Schuld for the 2024 paper ["Better than classical?"](https://arxiv.org/abs/2403.07059), it is as much a benchmarking methodology — and a critique of sloppy QML comparisons — as a scoring suite: its headline finding is that out-of-the-box classical models outperformed every quantum model tested.

## How it works

The suite re-implements 12 quantum classifiers from the literature and pits them against standard classical models across six binary-classification task families that generate 160 datasets of varying difficulty. Every model, quantum or classical, goes through the same systematic hyperparameter search, and everything runs in classical simulation on PennyLane, JAX, and scikit-learn — the object under test is the model, not a quantum processor. Version 0.2 (March 2025) extended the framework to classical and quantum generative models and added Ising and spin-blob dataset families.

## Strengths and limitations

Its discipline — same data, same tuning budget, honest classical baselines — is the main contribution: the [paper](https://arxiv.org/abs/2403.07059) found that removing entanglement from the quantum models often matches or improves performance, and it is widely cited as evidence against near-term QML advantage claims rather than used as a leaderboard. The limitations are the flip side: experiments are small-scale and purely simulated, so it says nothing about hardware performance (hardware-oriented application suites like [SupermarQ](/benchmarks/supermarq/) measure that), and the tasks are deliberately simple. The paper remains arXiv-only as of mid-2026, and later third-party quantum-versus-classical studies that build on its methodology are distinct works.

## Notable results

The [repository](https://github.com/XanaduAI/qml-benchmarks) is maintained by Xanadu — v0.1 (June 2024) reproduces the paper, v0.2 (March 2025) added generative-model benchmarking — and the paper is a standard reference in QML-benchmarking discussions, a modern successor to single-task generative scores like the [qBAS score](/benchmarks/qbas-score/).
