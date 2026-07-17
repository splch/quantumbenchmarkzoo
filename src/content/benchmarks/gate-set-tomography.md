---
name: Gate set tomography
tagline: Calibration-free tomography that reconstructs every gate, state preparation, and measurement in a gate set simultaneously and self-consistently, yielding predictive error models rather than a single score.
category: characterization
measures: Complete, self-consistent process matrices and error generators for every operation (gates and SPAM) in a gate set
introducedBy:
  - Merkel, Gambetta & colleagues (IBM)
  - Blume-Kohout & colleagues (Sandia)
yearIntroduced: 2012
aliases:
  - GST
status: active
papers:
  - title: Gate Set Tomography
    authors: Nielsen, Gamble, Rudinger, Scholten, Young & Blume-Kohout
    year: 2021
    url: https://arxiv.org/abs/2009.07301
  - title: Self-Consistent Quantum Process Tomography
    authors: Merkel, Gambetta, Smolin, Poletto, Córcoles, Johnson, Ryan & Steffen
    year: 2013
    url: https://arxiv.org/abs/1211.0322
  - title: Robust, self-consistent, closed-form tomography of quantum logic gates on a trapped ion qubit
    authors: Blume-Kohout, Gamble, Nielsen, Mizrahi, Sterk & Maunz
    year: 2013
    url: https://arxiv.org/abs/1310.4492
code:
  - name: pyGSTi
    url: https://github.com/sandialabs/pyGSTi
related:
  - quantum-process-tomography
  - robust-phase-estimation
  - randomized-benchmarking
---

Gate set tomography (GST) is the most detailed gate characterization protocol in routine use. First-generation versions appeared in 2012–13 from [Merkel et al. at IBM](https://arxiv.org/abs/1211.0322) and [Blume-Kohout et al. at Sandia](https://arxiv.org/abs/1310.4492), and Sandia's Quantum Performance Lab developed it into its modern form, consolidated in the [2021 *Quantum* paper](https://arxiv.org/abs/2009.07301). It fixes a circularity in [quantum process tomography](/benchmarks/quantum-process-tomography/): standard tomography assumes pre-calibrated state preparations and measurements, and Merkel et al. showed it becomes grossly inaccurate when those carry the same systematic errors as the gates. GST instead characterizes all operations in a gate set simultaneously and self-consistently, relative to each other, with no calibration assumptions.

## How it works

GST runs a structured set of circuits: short "germ" sequences of gates repeated 1, 2, 4, ... times, sandwiched between fiducial preparation and measurement sequences. Repetition amplifies small coherent errors in proportion to depth, so long circuits pin down gate parameters with Heisenberg-like precision. Maximum-likelihood estimation over all outcomes then fits a single model containing every gate, preparation, and measurement. The output is not one score but full process matrices, error generators separating coherent from stochastic contributions, and a predictive model whose goodness-of-fit against the data is itself reported.

## Strengths and limitations

GST is self-calibrating and diagnostic: it can say which gate has which error and predict the behavior of unseen circuits. The flip side of self-consistency is gauge freedom: a gate set is determined only up to a gauge transformation, so per-gate metrics like fidelity are not gauge-invariant and need careful interpretation ([Nielsen et al.](https://arxiv.org/abs/2009.07301)). It is also expensive: long-form GST requires thousands of circuits and is practical up to about two qubits. For a quick average error rate, [randomized benchmarking](/benchmarks/randomized-benchmarking/) is far cheaper; for one targeted parameter, [robust phase estimation](/benchmarks/robust-phase-estimation/) suffices. Sandia's open-source [pyGSTi](https://github.com/sandialabs/pyGSTi) is the reference implementation, used across trapped-ion, superconducting, and spin-qubit platforms.
