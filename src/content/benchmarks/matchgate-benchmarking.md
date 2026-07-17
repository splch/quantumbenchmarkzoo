---
name: Matchgate benchmarking
tagline: Scalable RB-style protocol that scores the continuous family of matchgate (XY-type, fermionic-simulation) gates by fitting decays of correlation functions over random matchgate circuits.
category: component-level
measures: Fidelity of matchgate (XY-type) circuits, from SPAM-robust decays of correlation functions yielding per-mode Majorana fidelities and an average gate fidelity
introducedBy:
  - Helsen, Nezami, Reagor & Walter
yearIntroduced: 2020
aliases:
  - Matchgate RB
  - Matchgate randomized benchmarking
status: active
papers:
  - title: "Matchgate benchmarking: Scalable benchmarking of a continuous family of many-qubit gates"
    authors: Helsen, Nezami, Reagor & Walter
    year: 2020
    url: https://arxiv.org/abs/2011.13048
  - title: Character randomized benchmarking for non-multiplicity-free groups with applications to subspace, leakage, and matchgate randomized benchmarking
    authors: Claes, Rieffel & Wang
    year: 2020
    url: https://arxiv.org/abs/2011.00007
  - title: A Lightweight Protocol for Matchgate Fidelity Estimation
    authors: Burkat & Strelchuk
    year: 2024
    url: https://arxiv.org/abs/2404.07974
code:
  - name: Original experiment code & data (Helsen, Zenodo)
    url: https://zenodo.org/records/5833362
  - name: jedbur/matchgate-benchmarking (Burkat & Strelchuk lightweight-protocol variant, Qiskit)
    url: https://github.com/jedbur/matchgate-benchmarking
related:
  - randomized-benchmarking
  - character-randomized-benchmarking
  - free-fermion-volume
---

Matchgate benchmarking scores a *continuous* family of gates rather than a discrete gate set: the matchgates, XY-type fermionic-simulation two-qubit gates that generate free-fermion dynamics. Introduced by [Helsen, Nezami, Reagor and Walter](https://arxiv.org/abs/2011.13048) in 2020 and published as Quantum 6, 657 (2022), it brings the SPAM-robust decay-fitting logic of [randomized benchmarking](/benchmarks/randomized-benchmarking/) to the gate family most relevant to fermionic quantum simulation, which Clifford-based RB cannot address directly.

## How it works

Random circuits are drawn from the matchgate group at increasing depths and run on the device. Because matchgate circuits are free-fermionic and hence classically simulable, the ideal behavior can be computed at any width, which makes the protocol scalable. Measured correlation functions decay exponentially with depth; fitting the decays yields a "Majorana fidelity" per fermionic mode, robust to state-preparation and measurement error, and combining them gives an average fidelity over random matchgate circuits (gates of the form XY(θ)).

## Strengths and limitations

Scalability comes precisely from classical simulability, so the certificate stays inside the family: reported fidelities cover matchgates only and say nothing about gates outside it. The hardware demonstration was small (two qubits on Rigetti's Aspen-8, with an average random two-qubit matchgate fidelity of 0.88 ± 0.02), and the original protocol has seen limited hardware redeployment since. Naming needs care: Claes, Rieffel and Wang [independently proposed](https://arxiv.org/abs/2011.00007) a scalable matchgate RB scheme via [character randomized benchmarking](/benchmarks/character-randomized-benchmarking/) a few weeks earlier (PRX Quantum 2, 010351 (2021)), so "matchgate randomized benchmarking" can refer to either scheme. Note also that the GitHub repository named matchgate-benchmarking implements Burkat and Strelchuk's 2024 lightweight variant; the original code lives on [Zenodo](https://zenodo.org/records/5833362).

## Notable results

The line remains active through direct successors: a [lightweight protocol for matchgate fidelity estimation](https://arxiv.org/abs/2404.07974) (updated July 2026) and [Free Fermion Volume](/benchmarks/free-fermion-volume/) (2025), a volumetric whole-processor benchmark built on the same free-fermion circuits; matchgate benchmarking itself outputs a gate-family fidelity rather than a holistic device score.
