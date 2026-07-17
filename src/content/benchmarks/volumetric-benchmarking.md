---
name: Volumetric benchmarking
tagline: Sandia framework that generalizes Quantum Volume from square circuits to the full width × depth plane, mapping the frontier of circuit shapes a device can execute.
category: system-level
measures: The region of circuit shapes (width w, depth d) at which a device passes a chosen test suite's success criterion, plotted as capability regions with a Pareto frontier
introducedBy:
  - Blume-Kohout & Young (Sandia)
yearIntroduced: 2019
status: active
papers:
  - title: A volumetric framework for quantum computer benchmarks
    authors: Blume-Kohout & Young
    year: 2020
    url: https://arxiv.org/abs/1904.05546
  - title: Measuring the Capabilities of Quantum Computers
    authors: Proctor, Rudinger, Young, Nielsen & Blume-Kohout
    year: 2020
    url: https://arxiv.org/abs/2008.11294
code:
  - name: pyGSTi (volumetric benchmark designs and plots)
    url: https://github.com/sandialabs/pyGSTi
related:
  - quantum-volume
  - randomized-mirror-circuits
  - qed-c-benchmarks
---

Volumetric benchmarking is a framework introduced by Robin Blume-Kohout and Kevin Young at Sandia in 2019 that generalizes IBM's [Quantum Volume](/benchmarks/quantum-volume/) from square circuits to the whole width × depth plane. Instead of compressing a processor's power into one number, it maps which circuit shapes — how many qubits, for how many layers — the device can execute, exposing the space-time trade-offs that any single-number benchmark hides.

## How it works

A volumetric benchmark is a mapping from circuit shapes (width `w`, depth `d`) to test suites plus a pass criterion: for each shape it specifies an ensemble of test circuits, a success metric for each circuit, and a threshold. The device runs suites over a grid of shapes, each shape is marked pass or fail, and the results are plotted as a region in the width × depth plane whose boundary is a Pareto frontier of achievable shapes. The framework deliberately subsumes many circuit families — random, periodic, and algorithm-inspired — and Quantum Volume is recovered as the special case of square random circuits with the heavy-output criterion. The [defining paper](https://arxiv.org/abs/1904.05546) was published as Quantum 4, 362 (2020).

## Strengths and limitations

Its strength is showing the shape of capability: two devices with equal QV can have very different frontiers — one wide and shallow, the other narrow and deep — and volumetric plots put random-circuit tests and algorithm-inspired suites on the same axes. The flexibility is also the caveat: a volumetric result is defined only relative to the chosen circuit family, success metric, and threshold, so plots from different studies are not comparable unless the full specification matches. Frontiers also depend strongly on the ensemble — Sandia's mirror-circuit experiments found structured test circuits failing at shapes up to an order of magnitude smaller than random ones ([Proctor et al.](https://arxiv.org/abs/2008.11294)).

## Notable results

The framework has become a standard presentation for whole-device results: Sandia's [randomized mirror circuits](/benchmarks/randomized-mirror-circuits/) mapped capability regions of twelve IBM and Rigetti processors, the [QED-C application suite](/benchmarks/qed-c-benchmarks/) plots its results volumetrically, and IonQ's [algorithmic qubits](/benchmarks/algorithmic-qubits/) (#AQ) is reported in this framing.
