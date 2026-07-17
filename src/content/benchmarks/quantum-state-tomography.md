---
name: Quantum state tomography
tagline: The baseline characterization protocol — reconstructs the full density matrix of a prepared state from repeated measurements in an informationally complete set of bases.
category: characterization
measures: The full density matrix of a prepared quantum state, reconstructed from measurements on many identical copies in an informationally complete basis set
introducedBy:
  - Vogel & Risken (theory)
  - Smithey, Beck, Raymer & Faridani (first experiment)
  - James, Kwiat, Munro & White (standard qubit recipe)
yearIntroduced: 1989
aliases:
  - QST
  - State tomography
  - Density-matrix reconstruction
  - Quantum state estimation
status: active
papers:
  - title: Determination of quasiprobability distributions in terms of probability distributions for the rotated quadrature phase
    authors: Vogel & Risken
    year: 1989
    url: https://doi.org/10.1103/PhysRevA.40.2847
  - title: "Measurement of the Wigner distribution and the density matrix of a light mode using optical homodyne tomography: Application to squeezed states and the vacuum"
    authors: Smithey, Beck, Raymer & Faridani
    year: 1993
    url: https://doi.org/10.1103/PhysRevLett.70.1244
  - title: On the Measurement of Qubits
    authors: James, Kwiat, Munro & White
    year: 2001
    url: https://arxiv.org/abs/quant-ph/0103121
  - title: Continuous-variable optical quantum state tomography
    authors: Lvovsky & Raymer
    year: 2009
    url: https://arxiv.org/abs/quant-ph/0511044
code:
  - name: Qiskit Experiments (StateTomography)
    url: https://github.com/qiskit-community/qiskit-experiments
related:
  - quantum-process-tomography
  - direct-fidelity-estimation
---

Quantum state tomography (QST) is the original quantum characterization protocol: reconstruct the complete density matrix of a prepared state from measurement statistics. It is a characterization tool rather than a benchmark — it returns a matrix, not a score — but most reported state fidelities trace back to it, and it is the readout subroutine inside [quantum process tomography](/benchmarks/quantum-process-tomography/). Attribution is conventional rather than crisp: inferring a state from measurements goes back to the Pauli problem (1933) and Fano (1957), the modern origin is [Vogel & Risken's 1989 homodyne-reconstruction proposal](https://doi.org/10.1103/PhysRevA.40.2847), the word "tomography" arrived with [Smithey et al.'s 1993 experiment](https://doi.org/10.1103/PhysRevLett.70.1244), and [James, Kwiat, Munro & White (2001)](https://arxiv.org/abs/quant-ph/0103121) fixed the standard qubit recipe.

## How it works

Prepare the same state many times and measure the copies in an informationally complete set of bases — for n qubits, typically all 3^n combinations of Pauli measurement settings; in optics, rotated field quadratures via homodyne detection. From the outcome frequencies, estimate the density matrix by linear inversion or, more robustly, by maximum-likelihood or Bayesian estimation that enforces physicality. An n-qubit density matrix has 4^n − 1 real parameters, so measurement and post-processing costs grow exponentially with n.

## Strengths and limitations

QST is maximally informative — the reconstructed density matrix predicts every observable — and tooling is ubiquitous (Qiskit Experiments ships a StateTomography experiment). The costs are equally well known. Exponential scaling confines full QST to a handful of qubits; beyond that, classical shadows, matrix-product-state tomography, and [direct fidelity estimation](/benchmarks/direct-fidelity-estimation/) take over. Estimator choice matters: naive linear inversion can return unphysical (non-positive) matrices, while maximum-likelihood estimation is biased. And QST assumes calibrated measurements, so SPAM errors bias the reconstruction — the self-consistency gap that [gate set tomography](/benchmarks/gate-set-tomography/) was invented to close. Nearly four decades on it remains in active use and development, with recent work on selective multi-qubit and continuous-variable variants.
