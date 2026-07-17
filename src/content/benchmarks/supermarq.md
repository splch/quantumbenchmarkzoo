---
name: SupermarQ
tagline: Scalable, hardware-agnostic suite of eight application-level benchmarks, with a six-dimensional feature vector that profiles how each workload stresses a device.
category: application-level
measures: Per-application figures of merit (e.g. state fidelity, Mermin inequality violation, logical error rate) across eight scalable programs
introducedBy:
  - Super.tech (now Infleqtion)
  - University of Chicago (EPiQC)
yearIntroduced: 2022
aliases: []
status: active
papers:
  - title: "SupermarQ: A Scalable Quantum Benchmark Suite"
    authors: Tomesh, Gokhale, Omole, Ravi, Smith, Viszlai, Wu, Hardavellas, Martonosi & Chong
    year: 2022
    url: https://arxiv.org/abs/2202.11045
code:
  - name: SupermarQ (in Infleqtion's client-superstaq)
    url: https://github.com/Infleqtion/client-superstaq
related:
  - qed-c-benchmarks
  - qasmbench
  - ghz-state-fidelity
  - quantum-volume
---

SupermarQ brings classical benchmarking methodology (in the spirit of SPEC and LINPACK) to quantum computing. Instead of one synthetic score, it measures devices on a curated set of applications with domain-meaningful figures of merit, presented at [HPCA 2022](https://arxiv.org/abs/2202.11045) as the first systematic application of classical benchmark-suite design principles to the quantum domain.

## How it works

The suite contains eight benchmarks chosen to span application domains and hardware stress patterns: GHZ state preparation, Mermin–Bell inequality tests, bit-flip and phase-flip error-correction subroutines, QAOA in two variants (vanilla and fermionic-swap), VQE, and Hamiltonian simulation. Each benchmark is *scalable* (defined for any qubit count) and scored by an application-level figure of merit rather than a generic fidelity: a Mermin–Bell benchmark scores the inequality violation, the error-correction benchmarks score logical error suppression, and so on.

SupermarQ's distinctive contribution is its **feature vector**: every benchmark is profiled along six dimensions: program communication, critical depth, entanglement ratio, parallelism, liveness, and measurement. This places workloads in a feature space, makes the suite's coverage auditable, and lets practitioners correlate device performance with workload structure instead of relying on a single aggregate number.

## Strengths and limitations

Because scores are end-to-end and application-shaped, SupermarQ reflects what users of a machine actually experience, including compiler and runtime effects, and the original study reported results across superconducting and trapped-ion platforms (IBM, IonQ, and AQT at LBNL). The trade-offs mirror classical suite benchmarking: results depend on chosen problem sizes and transpilation settings, no single headline number ranks devices, and the suite's applications target NISQ-scale workloads.

## Status

SupermarQ is open source and actively maintained by [Infleqtion](https://infleqtion.com/quantum-software/) as part of the Superstaq platform, alongside related characterization tools such as interleaved randomized benchmarking and XEB experiments.
