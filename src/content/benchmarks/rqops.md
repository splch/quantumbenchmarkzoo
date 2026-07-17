---
name: rQOPS
tagline: "Microsoft's proposed FLOPS analogue for fault-tolerant quantum computers: logical qubits times logical clock frequency, qualified by a maximum tolerable logical error rate."
category: error-correction
measures: Logical qubits × logical clock frequency (Hz) at a stated maximum logical error rate; a projected, not measured, throughput figure
introducedBy:
  - Microsoft Azure Quantum (Krysta Svore)
yearIntroduced: 2023
aliases:
  - Reliable Quantum Operations Per Second
  - reliable QOPS
  - RQOPS
status: proposal
papers:
  - title: Microsoft achieves first milestone towards a quantum supercomputer
    authors: Microsoft Azure Quantum
    year: 2023
    url: https://azure.microsoft.com/en-us/blog/quantum/2023/06/21/microsoft-achieves-first-milestone-towards-a-quantum-supercomputer/
  - title: Using Azure Quantum Resource Estimator for Assessing Performance of Fault Tolerant Quantum Computation
    authors: van Dam, Mykhailova & Soeken
    year: 2023
    url: https://arxiv.org/abs/2311.05801
  - title: Assessing requirements to scale to practical quantum advantage
    authors: Beverland, Murali, Troyer, Svore et al.
    year: 2022
    url: https://arxiv.org/abs/2211.07629
  - title: Benchmarking fault-tolerant quantum computing hardware via QLOPS
    authors: Kong, Zhang & Chen
    year: 2025
    url: https://arxiv.org/abs/2507.12024
code:
  - name: Microsoft Quantum Development Kit (resource estimator)
    url: https://github.com/microsoft/qdk
related:
  - qlops
  - teraquop-footprint
  - clops
---

rQOPS (reliable Quantum Operations Per Second) is Microsoft's proposed figure of merit for fault-tolerant quantum computers, introduced by Krysta Svore at Microsoft Azure Quantum's [June 21, 2023 roadmap announcement](https://azure.microsoft.com/en-us/blog/quantum/2023/06/21/microsoft-achieves-first-milestone-towards-a-quantum-supercomputer/) and positioned as the quantum analogue of FLOPS. It multiplies the number of logical qubits by the logical clock frequency, qualified by a maximum tolerable logical error rate. Microsoft set at least 1 million rQOPS at a logical error rate of 10^-12 as its bar for a "quantum supercomputer" and rated every machine of the day at an rQOPS of zero.

## How it works

rQOPS has no measurement protocol: it is a formula applied to a machine's (so far, always projected) fault-tolerant specifications, a named metric rather than a runnable benchmark. Pick an architecture and QEC code, work out how many logical qubits it yields and the logical clock speed (the rate of logical operations, set by syndrome extraction and decoding), multiply, and state the logical error rate at which the count holds. In practice values came from resource estimation: the classic [Azure Quantum Resource Estimator](https://arxiv.org/abs/2311.05801) reported projected rQOPS in its results summary, building on the [Beverland et al. framework](https://arxiv.org/abs/2211.07629), which predates and never uses the term.

## Strengths and limitations

The metric usefully shifts attention from raw qubit counts to reliable logical throughput, in units roughly comparable across architectures, a fault-tolerant-era counterpart to speed benchmarks like [CLOPS](/benchmarks/clops/). But it is estimated, never measured: no protocol specifies how to obtain the logical clock frequency or error rate on hardware, the headline thresholds are Microsoft roadmap targets rather than community standards, and no arXiv or journal paper defines the metric: the defining paper cited as "in preparation, 2024" in [arXiv:2311.05801](https://arxiv.org/abs/2311.05801) never appeared. The [QLOPS](/benchmarks/qlops/) authors additionally fault it for ignoring decoder throughput, latency, and code rate.

## Notable results

Still a forward-looking proposal as of July 2026: no processor has reported a nonzero measured rQOPS, Microsoft's bar remains unmet industry-wide, and the redesigned QDK resource-estimator documentation no longer surfaces the metric; 2025–26 literature engages it mainly as prior art to critique. See the [teraquop footprint](/benchmarks/teraquop-footprint/) for a simulation-projected QEC figure in a similar spirit.
