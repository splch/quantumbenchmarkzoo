export type CategoryId =
  | 'component-level'
  | 'system-level'
  | 'application-level'
  | 'error-correction'
  | 'software-stack'
  | 'platform-specific'
  | 'characterization';

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
}

/** Display order. Keep in sync with the enum in src/content.config.ts. */
export const CATEGORIES: Category[] = [
  {
    id: 'component-level',
    label: 'Component-level',
    description:
      'Characterize individual gates, qubits, and operations in isolation: error rates, coherence, and calibration quality. Home of the randomized benchmarking family.',
  },
  {
    id: 'system-level',
    label: 'System-level',
    description:
      'Exercise a whole processor with structured or random circuits to produce holistic scores that reflect qubit count, fidelity, connectivity, and the compiler together.',
  },
  {
    id: 'application-level',
    label: 'Application-level',
    description:
      'Measure end-to-end performance on programs representative of real workloads, from algorithm subroutines to full application suites.',
  },
  {
    id: 'error-correction',
    label: 'Error correction',
    description:
      'Score the error-corrected layer: how fast logical errors fall as codes scale, what logical qubits and fault-tolerant primitives cost, and whether decoders keep up.',
  },
  {
    id: 'software-stack',
    label: 'Software stack',
    description:
      'Benchmark the classical software around the QPU (compilers, transpilers, SDKs, and verification tools) on circuit corpora with known baselines or optima.',
  },
  {
    id: 'platform-specific',
    label: 'Platform-specific',
    description:
      'Benchmarks built for hardware outside the digital gate model: quantum annealers, photonic samplers, and analog quantum simulators.',
  },
  {
    id: 'characterization',
    label: 'Characterization',
    description:
      'Diagnostic protocols (tomography, fidelity estimation, noise learning) that reconstruct what a device actually does: the toolbox that score-style benchmarks build on.',
  },
];

export function categoryLabel(id: CategoryId): string {
  const found = CATEGORIES.find((c) => c.id === id);
  return found ? found.label : id;
}
