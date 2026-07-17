---
name: FTPrimitiveBench
tagline: Stim-based suite that scores logical error rates of surface-code Clifford primitives (memory, lattice surgery, transversal Hadamard, and the S gate) under hardware-motivated biased noise.
category: error-correction
measures: Logical error rates of surface-code Clifford primitives under structured, hardware-motivated noise families, via noisy stabilizer simulation
introducedBy:
  - Kan et al.
yearIntroduced: 2026
status: proposal
papers:
  - title: "FTPrimitiveBench: A Benchmark Suite For Logical Computation Under Hardware-Motivated and Biased Noise Models"
    authors: Kan, Harkness, Du, Rofougaran, Garner, Liu, Mao & Stein
    year: 2026
    url: https://arxiv.org/abs/2605.04049
code:
  - name: FTPrimitiveBench (Python/Stim, GitHub)
    url: https://github.com/ShuwenKan/FTPrimitiveBench
related:
  - ftcircuitbench
  - logical-error-per-round
  - decoder-bench
---

FTPrimitiveBench is a proposed benchmark suite that extends quantum error correction benchmarking from passive memory experiments to the logical operations a fault-tolerant computation actually executes. Posted in May 2026 by Shuwen Kan and colleagues, it scores combinations of code, decoder, and noise model, in HPC-scale simulation, on the primitives from which surface-code Clifford circuits are built. Nothing physical is measured: it is co-design tooling for hardware-aware QEC, catalogued with error-correction benchmarks because that is the stack it evaluates.

## How it works

Four surface-code primitives are benchmarked: logical memory, lattice surgery, the transversal logical Hadamard, and the logical phase (S) gate implemented via lattice surgery. Each is simulated with Stim under structured noise families motivated by real hardware (Pauli bias, measurement bias, spatial non-uniformity, and spatio-temporal non-uniformity) rather than the uniform depolarizing noise of textbook memory studies. The output for each primitive, noise family, and decoder combination is a logical error rate, so the suite can answer questions like how much a given bias structure degrades lattice surgery relative to idle memory.

## Strengths and limitations

Its distinctive contribution is scope: standard practice reports [logical error per round](/benchmarks/logical-error-per-round/) for a memory experiment, while FTPrimitiveBench probes active logical computation, where noise structure can matter differently ([Kan et al. 2026](https://arxiv.org/abs/2605.04049)). The hardware-motivated noise families make it a tool for asking which code and decoder choices stay robust under the biases a given platform exhibits.

It remains a single-group proposal: results characterize codes and decoders under modeled noise, not deployed hardware, and as of July 2026 the open-source Stim-based repository (with tutorial notebooks) is live but sparse, with no third-party adoption yet. Do not confuse it with [FTCircuitBench](/benchmarks/ftcircuitbench/), a separate 2026 suite from an overlapping author team that benchmarks fault-tolerant compilation toolchains rather than logical primitives.
