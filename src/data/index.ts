import { recap01 } from './recap-01';
import { recap02 } from './recap-02';
import type { Recap, UpcomingSession } from './types';

export const recaps: Recap[] = [recap01, recap02];

/** Sessions already scheduled/held but not yet written up. Shown as "coming soon" on the home page. */
export const upcomingSessions: UpcomingSession[] = [{ number: 3, date: '29 Jul 2026', dateISO: '2026-07-29' }];

export function getRecap(slug: string): Recap | undefined {
  return recaps.find((r) => r.slug === slug);
}
