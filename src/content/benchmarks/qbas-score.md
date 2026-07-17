---
name: qBAS score
tagline: Early hybrid quantum-classical benchmark scoring how well a trained shallow circuit samples the bars-and-stripes distribution, reported as an F1 score of precision and recall.
category: application-level
measures: F1 score (harmonic mean of precision and recall) for sampling the uniform bars-and-stripes distribution within a fixed read budget
introducedBy:
  - Benedetti, Perdomo-Ortiz & colleagues
yearIntroduced: 2018
aliases:
  - qBAS
  - qBAS(n,m)
  - qBAS22
status: historical
papers:
  - title: A generative modeling approach for benchmarking and training shallow quantum circuits
    authors: Benedetti, Garcia-Pintos, Perdomo, Leyton-Ortega, Nam & Perdomo-Ortiz
    year: 2019
    url: https://arxiv.org/abs/1801.07686
  - title: Training of Quantum Circuits on a Hybrid Quantum Computer
    authors: Zhu, Linke, Benedetti, Landsman, Nguyen, Alderete, Perdomo-Ortiz, Korda, Garfoot, Brecque, Egan, Perdomo & Monroe
    year: 2019
    url: https://arxiv.org/abs/1812.08862
  - title: Generative model benchmarks for superconducting qubits
    authors: Hamilton, Dumitrescu & Pooser
    year: 2019
    url: https://arxiv.org/abs/1811.09905
  - title: Generalization Metrics for Practical Quantum Advantage in Generative Models
    authors: Gili, Mauri & Perdomo-Ortiz
    year: 2022
    url: https://arxiv.org/abs/2201.08770
related:
  - qml-benchmarks
---

The qBAS score is one of the earliest application-level benchmarks for hybrid quantum-classical machines, introduced in 2018 by Benedetti, Perdomo-Ortiz and colleagues. Rather than isolating gates or qubits, it deliberately scores the whole hybrid stack — quantum device, circuit ansatz, and classical optimizer trained together — on a representative generative-modeling task: learning to sample bars-and-stripes (BAS) images.

## How it works

A shallow parameterized circuit is trained by data-driven quantum circuit learning (DDQCL) to sample the uniform distribution over n-by-m bars-and-stripes images. The trained circuit is then measured within a fixed read budget — canonically N_reads = N_BAS × H(N_BAS), the coupon-collector expectation for the 2^n + 2^m − 2 valid patterns — and scored by F1: the harmonic mean of precision (the fraction of samples that are valid BAS patterns) and recall (the fraction of all BAS patterns observed). qBAS22 denotes the 2×2 instance on four qubits, first demonstrated on a University of Maryland trapped-ion device in the [original paper](https://arxiv.org/abs/1801.07686).

## Strengths and limitations

The paper bills qBAS as a hardware-independent metric, but since it scores the entire pipeline, ansatz and optimizer choices confound pure hardware comparisons, and the paper's own supplementary material notes the cost-function optimization does not scale favorably with system size. Recall depends directly on the read budget, so scores computed with other read counts are not comparable. It is also often confused with the BAS dataset itself: many later papers train on BAS but report KL divergence or other losses rather than the qBAS F1 protocol. No official reference implementation was released.

## Notable results

qBAS was a landmark early-NISQ benchmark, quickly extended to [superconducting qubits](https://arxiv.org/abs/1811.09905) and [hybrid trapped-ion training](https://arxiv.org/abs/1812.08862). It is now of historical interest: no recent publications report new qBAS scores, evaluation of quantum generative models has shifted toward [generalization-based metrics](https://arxiv.org/abs/2201.08770), and systematic quantum-versus-classical comparisons now run through suites like [qml-benchmarks](/benchmarks/qml-benchmarks/).
