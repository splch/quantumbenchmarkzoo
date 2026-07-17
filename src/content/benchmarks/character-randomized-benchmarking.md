---
name: Character randomized benchmarking
tagline: Uses group character theory to isolate clean exponential decays, extending randomized benchmarking to gate sets that form groups beyond the multi-qubit Cliffords.
category: component-level
measures: Average fidelity of gates from a benchmarking group other than the full Clifford group, via character-weighted decay fits
introducedBy:
  - Helsen, Wehner & colleagues (QuTech, Delft)
yearIntroduced: 2018
aliases:
  - CRB
status: active
papers:
  - title: A new class of efficient randomized benchmarking protocols
    authors: Helsen, Xue, Vandersypen & Wehner
    year: 2019
    url: https://arxiv.org/abs/1806.02048
  - title: Benchmarking Gate Fidelities in a Si/SiGe Two-Qubit Device
    authors: Xue, Watson, Helsen et al.
    year: 2019
    url: https://arxiv.org/abs/1811.04002
related:
  - randomized-benchmarking
  - matchgate-benchmarking
---

Character randomized benchmarking (character RB) extends randomized benchmarking to gate groups other than the multi-qubit Clifford group. Standard [randomized benchmarking](/benchmarks/randomized-benchmarking/) relies on its random gates twirling errors into a single exponential decay, which effectively ties it to the Clifford group and to gates compiled from it. Helsen, Xue, Vandersypen and Wehner (QuTech, Delft) showed in 2018 how representation theory lets RB work with much smaller, hardware-friendlier groups.

## How it works

When RB is run with a group whose action on errors is reducible — for example, the group of parallel single-qubit Cliffords, into which a two-qubit gate of interest can be interleaved — the measured signal is a sum of several exponential decays that cannot be fit reliably. Character RB separates them. Each random sequence is preceded by one extra gate drawn at random from a (possibly larger) auxiliary group, and each circuit's outcome is reweighted by a character — a number supplied by the group's representation theory — associated with that extra gate. Averaging with these weights projects the data onto a single irreducible representation, so each fit becomes a clean single exponential; the fitted decays are then combined into an average fidelity for the benchmarked gates. The paper shows this character averaging converges with modest sampling overhead.

## Strengths and limitations

Character RB keeps RB's insensitivity to state-preparation and measurement errors and its rigorous guarantees while dropping the assumption that the gates form the full Clifford group, so native gates can be benchmarked directly rather than through costly Clifford compilation. Its first experimental use was in silicon spin qubits: [Xue et al.](https://arxiv.org/abs/1811.04002) combined standard and character RB to obtain more reliable two-qubit gate fidelities in a Si/SiGe device. The trade-offs: the group's representation structure and characters must be worked out case by case; projected signals can have small amplitude for some irreps, costing extra samples; and the cleanest guarantees still assume Markovian, gate-independent noise. Its machinery underpins later group-specific protocols such as [matchgate benchmarking](/benchmarks/matchgate-benchmarking/).
