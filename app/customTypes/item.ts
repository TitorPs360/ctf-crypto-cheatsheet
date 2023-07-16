import { EncrytpionAlgorithm } from './crypto';

export const ItemTypes = {
  CARD: 'card',
};

interface EncrytpionAlgorithmItem {
  id: string;
  algorithm: EncrytpionAlgorithm;
}

export type { EncrytpionAlgorithmItem };
