---
name: Clifford Volume
tagline: Volumetric benchmark that scores a device by the largest random Clifford circuit it executes faithfully, using stabilizer simulation to keep verification scalable far past Quantum Volume's ceiling.
category: system-level
measures: Largest qubit count n at which the device faithfully executes random n-qubit Clifford circuits, verified scalably via stabilizer-formalism simulation; the score is n itself
introducedBy:
  - Portik, Kálmán, Monz & Zimborás (EU Quantum Flagship)
yearIntroduced: 2025
aliases:
  - CLV
status: active
papers:
  - title: "Clifford Volume and Free Fermion Volume: Complementary Scalable Benchmarks for Quantum Computers"
    authors: Portik, Kálmán, Monz & Zimborás
    year: 2025
    url: https://arxiv.org/abs/2512.19413
  - title: The EU Quantum Flagship's Key Performance Indicators for Quantum Computing
    authors: Zimborás, Portik, Aguirre et al.
    year: 2025
    url: https://arxiv.org/abs/2512.19653
code:
  - name: EQCB (European Quantum Computing Benchmarks)
    url: https://gitlab.com/qcpi/eqcb
related:
  - quantum-volume
  - free-fermion-volume
  - volumetric-benchmarking
---

Clifford Volume (CLV) is a volumetric whole-device benchmark introduced in December 2025 by [Portik, Kálmán, Monz and Zimborás](https://arxiv.org/abs/2512.19413) within the EU Quantum Flagship's benchmarking work. It keeps the random-circuit, whole-stack spirit of [Quantum Volume](/benchmarks/quantum-volume/) but swaps the circuit family for Clifford circuits, which the stabilizer formalism simulates efficiently at any size; that removes the classical-verification ceiling that caps Quantum Volume near 30–40 qubits.

## How it works

The device runs random n-qubit Clifford circuits. Because each ideal output is a stabilizer state, its stabilizer group is classically computable at any width; the test measures expectation values of the output state's stabilizer and destabilizer operators. The device passes at width n if measured stabilizer expectation values stay above 1/e while destabilizer values stay near zero (below a threshold of 1/(2e)), with statistical margins. The score is the largest n passed, reported as the raw qubit count, not 2^n as in Quantum Volume. Compilation is deliberately unprescribed, so the compiler and the rest of the stack are scored along with the hardware.

## Strengths and limitations

Verification scales: where Quantum Volume's heavy-output test needs classical simulation of the ideal circuit, CLV can certify faithful execution at widths far beyond the simulable regime. The flip side is that Clifford circuits are themselves classically simulable, so a high CLV certifies faithful large-circuit execution and scalable verification, not quantum advantage. CLV and QV numbers are not comparable (raw n versus 2^m), compiler quality is folded into the score, and the benchmark is distinct from Clifford-group [randomized benchmarking](/benchmarks/randomized-benchmarking/), which targets components rather than whole devices. As of July 2026 no independent third-party hardware scores had been published. Its companion, [Free Fermion Volume](/benchmarks/free-fermion-volume/), probes a complementary circuit family.

## Notable results

The introducing paper demonstrated CLV = 34 on Quantinuum's H2-1 trapped-ion machine. Clifford Volume was adopted as one of the [four core EU Quantum Flagship KPI benchmarks](https://arxiv.org/abs/2512.19653), and an open-source implementation ships in the Apache-2.0 [EQCB suite](https://gitlab.com/qcpi/eqcb).
