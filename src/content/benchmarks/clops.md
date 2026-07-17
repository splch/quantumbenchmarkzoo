---
name: CLOPS
tagline: "IBM's speed benchmark: the sustained number of circuit layers per second a quantum system and its classical stack execute while running a batch of parameterized model circuits."
category: system-level
measures: Circuit layers per second across the full stack, CLOPS = M × K × S × D / total time for M templates × K parameter updates × S shots × D layers
introducedBy:
  - IBM Quantum (Wack, Paik, Javadi-Abhari & colleagues)
yearIntroduced: 2021
aliases:
  - Circuit Layer Operations Per Second
  - CLOPS_v
  - CLOPS_h
  - CLOPSv
  - CLOPSh
status: active
papers:
  - title: "Quality, Speed, and Scale: three key attributes to measure the performance of near-term quantum computers"
    authors: Wack, Paik, Javadi-Abhari, Jurcevic, Faro, Gambetta & Johnson
    year: 2021
    url: https://arxiv.org/abs/2110.14108
  - title: Benchmarking Quantum Processor Performance at Scale
    authors: McKay, Hincks, Pritchett, Carroll, Govia & Merkel
    year: 2023
    url: https://arxiv.org/abs/2311.05933
  - title: Updating how we measure quantum quality and speed
    authors: Wack & McKay
    year: 2023
    url: https://www.ibm.com/quantum/blog/quantum-metric-layer-fidelity
code:
  - name: qiskit-device-benchmarking (IBM's CLOPS implementation)
    url: https://github.com/qiskit-community/qiskit-device-benchmarking/tree/main/qiskit_device_benchmarking/clops
  - name: iqm-benchmarks (CLOPS among IQM's holistic benchmarks)
    url: https://github.com/iqm-finland/iqm-benchmarks
related:
  - quantum-volume
  - layer-fidelity
---

CLOPS (Circuit Layer Operations Per Second) is IBM's speed benchmark, proposed by Wack and colleagues in 2021 as one of the [three headline attributes (quality, speed, and scale)](https://arxiv.org/abs/2110.14108) for measuring near-term quantum computers. It deliberately measures the whole stack, not just the QPU: compilation, parameter binding, data movement, and execution all count against the clock, mirroring how iterative workloads such as variational algorithms run.

## How it works

The protocol executes a large batch of parameterized model circuits: `M` circuit templates, each updated with `K` sets of parameters, run for `S` shots at `D` layers deep, giving `CLOPS = M × K × S × D / (total wall-clock time)`. In the original 2021 definition the templates were [Quantum Volume](/benchmarks/quantum-volume/) circuits with `D = log2(QV)`, retroactively called CLOPS_v. In 2023 IBM [redefined the benchmark around hardware-aware circuits](https://www.ibm.com/quantum/blog/quantum-metric-layer-fidelity) (CLOPS_h): 100 qubits × 100 layers, each layer a round of two-qubit gates parallelizable on the device's actual connectivity plus parameterized single-qubit rotations, adopting the layer notion of [layer fidelity](/benchmarks/layer-fidelity/). IBM now reports CLOPS_h simply as "CLOPS".

## Strengths and limitations

CLOPS captures a dimension quality benchmarks ignore, throughput of the full hybrid loop, and leaves execution optimization to the vendor by design: it scores the system as delivered. The costs: two incompatible definitions share one name (about 2.4K CLOPS_v versus about 200K CLOPS_h on the same IBM Heron device), so cross-definition comparisons are meaningless. Because the classical stack is included, scores shift with software updates and are hard to compare across vendors, and the hardware-aware layer definition can flatter sparsely connected architectures. The [defining paper](https://arxiv.org/abs/2110.14108) is an arXiv draft explicitly requesting feedback, never journal-published; the redefinition lives only in an IBM blog post and documentation.

## Notable results

As of July 2026 the IBM Quantum Platform lists a CLOPS value for every deployed QPU (roughly 24K to 340K across Heron and Nighthawk systems), shown alongside layered two-qubit error (derived from layer fidelity) and a newer measurement-cycles-per-second (MCPS) metric. IQM's [iqm-benchmarks](https://github.com/iqm-finland/iqm-benchmarks) suite also lists CLOPS among its holistic benchmarks.
