---
name: Simultaneous randomized benchmarking
tagline: Runs randomized benchmarking on several subsystems at once and compares with isolated runs, turning the difference in decay rates into a direct measure of crosstalk and addressability.
category: component-level
measures: Change in RB error rates between isolated and simultaneous operation (addressability / crosstalk)
introducedBy:
  - Gambetta, Córcoles & colleagues (IBM / Raytheon BBN)
yearIntroduced: 2012
aliases:
  - SRB
status: active
papers:
  - title: Characterization of addressability by simultaneous randomized benchmarking
    authors: Gambetta, Córcoles, Merkel et al.
    year: 2012
    url: https://arxiv.org/abs/1204.6308
code:
  - name: pyGSTi (simultaneous RB designs)
    url: https://github.com/sandialabs/pyGSTi
related:
  - randomized-benchmarking
  - layer-fidelity
---

Simultaneous randomized benchmarking (SRB) measures how much qubits degrade when their neighbors are driven at the same time. Introduced by Gambetta and colleagues at IBM in 2012 to quantify "addressability", it remains the canonical protocol for measuring crosstalk — the [Sandia benchmarking review](https://arxiv.org/abs/2407.08828) treats it as the standard tool for the job.

## How it works

Standard [randomized benchmarking](/benchmarks/randomized-benchmarking/) is first run on each subsystem (a qubit, a pair, or a larger block) in isolation, with the rest of the device idle, giving a baseline error rate per subsystem. The experiment is then repeated with independent random RB sequences running on all subsystems at once. Each subsystem's decay is fit in both settings, and the comparison is the result: the increase in error rate under simultaneous operation quantifies the crosstalk that subsystem suffers, while correlations between subsystems' outcomes flag correlated errors that individual decay curves miss. The protocol was introduced with experiments on superconducting qubits and transfers unchanged to any platform that can run RB.

## Strengths and limitations

SRB is model-free and operationally meaningful: it reports crosstalk as users experience it — extra error under realistic parallel operation — rather than as a Hamiltonian parameter, and it needs nothing beyond ordinary RB machinery. "Isolated versus simultaneous" error tables built on it are now routine in hardware papers, and the idea underpins scaled-up layer benchmarks: IBM's [layer fidelity](/benchmarks/layer-fidelity/) is measured by running direct RB simultaneously across chains of qubits.

Its limitations are those of sampling. A device has combinatorially many subsets that could be driven together, so any one SRB experiment probes crosstalk only under the specific parallel load chosen, and a clean result does not rule out crosstalk under other loads. The protocol also quantifies crosstalk without identifying its physical mechanism, and single-number summaries can hide strongly non-uniform behavior across a chip.
