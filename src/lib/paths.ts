/** Normalize Astro BASE_URL so asset joins never drop the slash. */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  const root = base.endsWith('/') ? base : `${base}/`;
  if (!path || path === '/' || path === './') return root;
  return `${root}${path.replace(/^\//, '')}`;
}
