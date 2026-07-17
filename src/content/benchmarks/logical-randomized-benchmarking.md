---
name: Logical randomized benchmarking
tagline: "Randomized benchmarking lifted to the logical layer: random logical Clifford sequences with QEC cycles interleaved yield an average error per logical gate of an encoded qubit."
category: error-correction
measures: Average error per logical Clifford gate, from the decay of logical survival probability over random logical Clifford sequences (the original analysis also splits out correctable vs uncorrectable error probabilities)
introducedBy:
  - Combes, Granade, Ferrie & Flammia
yearIntroduced: 2017
aliases:
  - LRB
  - Logical RB
status: proposal
papers:
  - title: Logical Randomized Benchmarking
    authors: Combes, Granade, Ferrie & Flammia
    year: 2017
    url: https://arxiv.org/abs/1702.03688
  - title: Non-Exponential Behaviour in Logical Randomized Benchmarking
    authors: Ceasura, Iyer, Wallman & Pashayan
    year: 2022
    url: https://arxiv.org/abs/2212.05488
  - title: Scaling and logic in the color code on a superconducting quantum processor
    authors: Lacroix et al. (Google Quantum AI)
    year: 2024
    url: https://arxiv.org/abs/2412.14256
  - title: Benchmarking logical three-qubit quantum Fourier transform encoded in the Steane code on a trapped-ion quantum computer
    authors: Mayer et al. (Quantinuum)
    year: 2024
    url: https://arxiv.org/abs/2404.08616
related:
  - randomized-benchmarking
  - logical-error-per-round
  - logical-magic-state-benchmarking
---

Logical randomized benchmarking (LRB) transplants [randomized benchmarking](/benchmarks/randomized-benchmarking/) to the logical layer of an error-corrected device, proposed in 2017 by Combes, Granade, Ferrie & Flammia ([arXiv:1702.03688](https://arxiv.org/abs/1702.03688)). Like physical RB it isolates an average per-gate error — component-level in spirit — but the gates are logical Cliffords on a QEC-encoded qubit, so the score folds in the code's syndrome-extraction and decoding machinery, which is why it sits with error-correction benchmarks here.

## How it works

Sample random sequences of logical Clifford gates of increasing length, apply them to an encoded qubit with error-correction cycles interleaved, append the inverting Clifford, and measure whether the logical state survives. Fitting the decay of logical survival probability against sequence length yields the average error per logical Clifford gate; the original analysis additionally estimates the average probabilities of correctable and uncorrectable errors.

## Strengths and limitations

LRB inherits RB's virtues — insensitivity to state-preparation and measurement errors, and a single interpretable figure of merit — at the level users of a fault-tolerant machine actually care about. But its guarantees rest on assumptions that can fail: [Ceasura, Iyer, Wallman & Pashayan](https://arxiv.org/abs/2212.05488) showed that QEC machinery such as syndrome qubits coupled to a decoder can make the LRB signal oscillate rather than decay exponentially, breaking the standard exponential fit. The name is also used loosely for any RB run on encoded qubits, and experiments do not necessarily implement the full Combes et al. analysis. No dedicated open-source implementation exists.

## Notable results

As a complete protocol, LRB remains a proposal — the 2017 paper is a v1-only preprint that was never journal-published. Logical-gate RB in the broader sense has entered practice, though: Google's color-code experiment used logical randomized benchmarking to report an average transversal logical Clifford error of 0.0027(3) ([arXiv:2412.14256](https://arxiv.org/abs/2412.14256); Nature 645, 614 (2025)), and Quantinuum ran RB on a logical two-qubit gate in the [[7,1,3]] Steane code on H2-1 ([arXiv:2404.08616](https://arxiv.org/abs/2404.08616)). Compare [logical error per round](/benchmarks/logical-error-per-round/) for logical memory rather than gates, and [logical magic state benchmarking](/benchmarks/logical-magic-state-benchmarking/) for the non-Clifford side.
