---
name: Layer fidelity
tagline: "IBM's scale-friendly quality benchmark: the fidelity of one full layer of simultaneous two-qubit gates across an N-qubit chain, reported per gate as EPLG."
category: system-level
measures: Fidelity LF of a full layer of simultaneous two-qubit gates on an N-qubit chain, normalized per gate as EPLG = 1 − LF^(1/N_2q) (N_2q = 99 on IBM's best 100-qubit chain)
introducedBy:
  - McKay, Hincks & colleagues (IBM)
yearIntroduced: 2023
aliases:
  - LF
  - EPLG
  - Error per layered gate
status: active
papers:
  - title: Benchmarking Quantum Processor Performance at Scale
    authors: McKay, Hincks, Pritchett, Carroll, Govia & Merkel
    year: 2023
    url: https://arxiv.org/abs/2311.05933
  - title: Updating how we measure quantum quality and speed
    authors: Wack & McKay
    year: 2023
    url: https://www.ibm.com/quantum/blog/quantum-metric-layer-fidelity
code:
  - name: qiskit-device-benchmarking (layer fidelity)
    url: https://github.com/qiskit-community/qiskit-device-benchmarking
  - name: Qiskit Experiments
    url: https://github.com/qiskit-community/qiskit-experiments
related:
  - direct-randomized-benchmarking
  - simultaneous-randomized-benchmarking
  - clops
  - quantum-volume
---

Layer fidelity (LF) is IBM's benchmark for gate quality at scale, introduced by [McKay, Hincks, Pritchett, Carroll, Govia and Merkel in 2023](https://arxiv.org/abs/2311.05933). It scores the fidelity of one full layer of simultaneous two-qubit gates across an N-qubit chain (gates firing together, as they would inside a real circuit), so crosstalk and spectator errors that isolated gate benchmarks miss count against the score. Since late 2023 it has been IBM's headline quality metric (with [CLOPS](/benchmarks/clops/) for speed), displacing [Quantum Volume](/benchmarks/quantum-volume/) in the company's device reporting.

## How it works

Pick a connected chain of N qubits. The full layer of two-qubit gates along the chain cannot run all at once (interior qubits belong to two gates), so it is split into disjoint sub-layers of non-overlapping gates. Each sub-layer is measured with [direct randomized benchmarking](/benchmarks/direct-randomized-benchmarking/) run simultaneously on all of its gates, in the spirit of [simultaneous RB](/benchmarks/simultaneous-randomized-benchmarking/), so the fitted error rates include crosstalk. The measured fidelities multiply into the layer fidelity LF. For comparison across devices and sizes, IBM reports the error per layered gate, `EPLG = 1 − LF^(1/N_2q)`; the best 100-qubit chain has N_2q = 99 two-qubit gates, so `EPLG = 1 − LF^(1/99)`.

## Strengths and limitations

LF runs at full device scale with no classical simulation, inherits RB's resilience to state-preparation and measurement errors, and is decomposable: the same data localizes which qubit pairs drag the chain down. Because gates run simultaneously, it exposes crosstalk that per-pair benchmarks understate ([McKay et al.](https://arxiv.org/abs/2311.05933)). Its scope is deliberately narrow: one layer type on a 1D chain exercises neither full connectivity nor the depth-and-permutation structure of Quantum Volume circuits, and quoting the best 100-qubit chain makes headline EPLG a best-case figure. It also inherits direct RB's noise assumptions.

## Notable results

The introducing paper demonstrated LF on the 127-qubit Eagle device ibm_sherbrooke (EPLG 1.7 × 10^−2) and a 133-qubit tunable-coupler Heron (EPLG 6.2 × 10^−3 to 1.2 × 10^−2). IBM has reported EPLG on the best 100-qubit chain for its fleet [since late 2023](https://www.ibm.com/quantum/blog/quantum-metric-layer-fidelity), and IQM has adopted it in its [iqm-benchmarks](https://github.com/iqm-finland/iqm-benchmarks) suite.
