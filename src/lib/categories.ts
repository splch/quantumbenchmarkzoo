export type CategoryId = 'component-level' | 'system-level' | 'application-level';

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'component-level',
    label: 'Component-level',
    description:
      'Characterize individual gates, qubits, and operations in isolation — error rates, coherence, and calibration quality.',
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
];

export function categoryLabel(id: CategoryId): string {
  const found = CATEGORIES.find((c) => c.id === id);
  return found ? found.label : id;
}
