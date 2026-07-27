import { recap01 } from './recap-01';
import { recap02 } from './recap-02';
import type { Recap } from './types';

export const recaps: Recap[] = [recap01, recap02];

export function getRecap(slug: string): Recap | undefined {
  return recaps.find((r) => r.slug === slug);
}
