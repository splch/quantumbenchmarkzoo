---
name: Quantum process tomography
tagline: "The textbook protocol for fully characterizing a quantum gate: apply it to an informationally complete set of input states, tomograph the outputs, and reconstruct the complete channel."
category: characterization
measures: The complete quantum channel (process matrix) of a gate or operation, from which figures of merit like average gate fidelity and diamond distance are derived
introducedBy:
  - Chuang & Nielsen
  - Poyatos, Cirac & Zoller
yearIntroduced: 1996
aliases:
  - QPT
  - Process tomography
  - Standard quantum process tomography
  - SQPT
status: active
papers:
  - title: Prescription for experimental determination of the dynamics of a quantum black box
    authors: Chuang & Nielsen
    year: 1997
    url: https://arxiv.org/abs/quant-ph/9610001
  - title: "Complete Characterization of a Quantum Process: the Two-Bit Quantum Gate"
    authors: Poyatos, Cirac & Zoller
    year: 1997
    url: https://arxiv.org/abs/quant-ph/9611013
  - title: Quantum process tomography of a controlled-NOT gate
    authors: O'Brien, Pryde, Gilchrist, James, Langford, Ralph & White
    year: 2004
    url: https://arxiv.org/abs/quant-ph/0402166
  - title: "Quantum Process Tomography: Resource Analysis of Different Strategies"
    authors: Mohseni, Rezakhani & Lidar
    year: 2008
    url: https://arxiv.org/abs/quant-ph/0702131
code:
  - name: Qiskit Experiments (ProcessTomography)
    url: https://github.com/qiskit-community/qiskit-experiments
related:
  - quantum-state-tomography
  - gate-set-tomography
---

Quantum process tomography (QPT) reconstructs the complete quantum channel implemented by a gate or operation: every coherent and incoherent way it deviates from the ideal. It was proposed independently in late 1996 by [Chuang & Nielsen](https://arxiv.org/abs/quant-ph/9610001), who framed it as determining the dynamics of a "quantum black box," and by [Poyatos, Cirac & Zoller](https://arxiv.org/abs/quant-ph/9611013) (both published 1997). It is a characterization protocol rather than a benchmark: it yields a full mathematical description, and comparative scores like average gate fidelity or diamond distance are computed afterward from the reconstruction.

## How it works

Prepare each state in an informationally complete input set (for each qubit, e.g., |0⟩, |1⟩, |+⟩, and |+i⟩), apply the process to every input, and run [quantum state tomography](/benchmarks/quantum-state-tomography/) on each output. Because the inputs span the space of density matrices, the input–output data determine the channel, typically expressed as a process (χ) matrix via linear inversion or maximum-likelihood fitting. An n-qubit channel has of order 16^n parameters, so full QPT is practical only for one to three qubits ([Mohseni, Rezakhani & Lidar](https://arxiv.org/abs/quant-ph/0702131) analyze the resource costs of the main variants).

## Strengths and limitations

QPT's payoff is completeness: it distinguishes coherent miscalibrations from stochastic noise and shows what kind of error a gate makes, not just how much. Its central flaw is that it is not SPAM-robust: it assumes perfectly known input states and measurements, so state-preparation and measurement errors are silently absorbed into the reconstructed channel. That self-consistency failure is what motivated [gate set tomography](/benchmarks/gate-set-tomography/), and for scalable average error rates QPT has largely ceded to [randomized benchmarking](/benchmarks/randomized-benchmarking/). "QPT" also names a family (ancilla-assisted, compressed-sensing, and self-consistent variants) of which this entry covers the standard prepare-and-measure scheme.

## Notable results

[O'Brien et al.'s 2004 full QPT of an optical CNOT gate](https://arxiv.org/abs/quant-ph/0402166) was a landmark two-qubit demonstration. QPT remains the default for reconstructing one- and two-qubit channels: Qiskit Experiments maintains a ProcessTomography experiment, and it is still routinely applied to entangling gates in current hardware papers.
