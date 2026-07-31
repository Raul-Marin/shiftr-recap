import { recap01 } from './recap-01';
import { recap02 } from './recap-02';
import { recap03 } from './recap-03';
import type { Recap, UpcomingSession } from './types';

export const recaps: Recap[] = [recap01, recap02, recap03];

/** Sessions already scheduled/held but not yet written up. Shown as "coming soon" on the home page. */
export const upcomingSessions: UpcomingSession[] = [
  { number: 4, date: 'Finales Sep 2026', dateISO: '2026-09-30', note: 'Tras el verano' },
];

export function getRecap(slug: string): Recap | undefined {
  return recaps.find((r) => r.slug === slug);
}
