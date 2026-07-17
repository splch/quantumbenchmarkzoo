---
name: Deterministic Benchmarking
tagline: Deterministic single-qubit protocol that separates coherent from incoherent gate errors with a handful of fixed two-pulse sequences instead of the random circuits of RB.
category: component-level
measures: Four parameters splitting a single-qubit gate set's coherent (calibration/control) and incoherent (decoherence) errors, fit from fidelity decays of fixed pulse-pair sequences
introducedBy:
  - Tripathi, Levenson-Falk, Lidar & colleagues (USC)
yearIntroduced: 2024
aliases:
  - DB
status: proposal
papers:
  - title: Deterministic Benchmarking of Quantum Gates
    authors: Tripathi, Kowsari, Saurav, Zhang, Levenson-Falk & Lidar
    year: 2024
    url: https://arxiv.org/abs/2407.09942v1
  - title: Benchmarking Quantum Gates and Circuits
    authors: Tripathi, Kowsari, Saurav, Zhang, Levenson-Falk & Lidar
    year: 2025
    url: https://doi.org/10.1021/acs.chemrev.4c00870
related:
  - randomized-benchmarking
  - gate-set-tomography
  - unitarity-randomized-benchmarking
---

Deterministic benchmarking (DB) is a single-qubit gate-set benchmark proposed in 2024 by Tripathi, Kowsari, Saurav, Zhang, Levenson-Falk and Lidar at the University of Southern California. It is positioned as a cheaper, deterministic alternative to [randomized benchmarking](/benchmarks/randomized-benchmarking/): instead of averaging over many random gate sequences, it runs a small fixed set of two-pulse sequences and separates the gate set's coherent (calibration and control) errors from its incoherent (decoherence) errors.

## How it works

DB tracks state fidelity under repeated two-pulse blocks built from the gate set under test — dynamical-decoupling-style sequences of increasing length. Fitting the decay curves to the authors' analytical model yields four error parameters that jointly characterize the coherent and incoherent error channels of the single-qubit gate set, including coherent errors that a conventional RB decay can miss. Because the sequences are fixed rather than sampled, the protocol needs far fewer experimental runs than RB while remaining resilient to state-preparation and measurement (SPAM) errors. The authors demonstrated it on a USC superconducting transmon, with master-equation simulations backing the analytical model.

## Strengths and limitations

DB's appeal is diagnostic information per shot: one inexpensive experiment splits an error budget that a single RB number conflates, placing it between RB and full characterization methods like [gate set tomography](/benchmarks/gate-set-tomography/). Its output is a four-parameter decomposition rather than one scalar score — like [unitarity RB](/benchmarks/unitarity-randomized-benchmarking/), it distinguishes coherent from incoherent noise, but deterministically.

So far it is defined and demonstrated only for single-qubit gate sets; the two-qubit extension is explicitly future work, and no public reference implementation exists. One citation trap: v1 of [arXiv:2407.09942](https://arxiv.org/abs/2407.09942) (July 2024) is the protocol paper "Deterministic Benchmarking of Quantum Gates", but v2 became the broader Chemical Reviews survey "Benchmarking quantum gates and circuits" — DB is the novel protocol inside that review, so citations of the review are not necessarily uses of DB.

## Notable results

As of July 2026 DB remains a proposal: demonstrated by its authors on one superconducting qubit, published within the review at [Chem. Rev. 125, 5745 (2025)](https://doi.org/10.1021/acs.chemrev.4c00870), and disseminated through seminars and press coverage, but with no independent third-party deployments reported.
