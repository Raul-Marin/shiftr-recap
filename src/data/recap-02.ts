import type { Recap } from './types';

/**
 * Stub for Recap [2] — fill with session content when ready.
 * Same shape as recap-01; RecapPage renders both identically.
 */
export const recap02: Recap = {
  slug: '2',
  number: 2,
  title: 'Recap [2] — Research Report · Shift+R',
  pageTitle: 'Recap [2] — Research Report · Shift+R',
  heroLabel: '[2] — Research',
  headline: 'Próximamente',
  headlineEm: 'contenido de la sesión 2',
  subtitleHtml:
    'Misma estructura que Recap [1]. El contenido de la sesión del <strong>11 de mayo</strong> se publicará aquí cuando esté listo.',
  meta: [
    { label: 'Fecha', value: '11 May 2026' },
    { label: 'Duración', value: '—' },
    { label: 'Participantes', value: '—' },
    { label: 'Método', value: 'Debate cualitativo' },
  ],
  announce: {
    href: './',
    textHtml: '[1] · <strong>Ver sesión anterior</strong>',
  },
  navCta: 'Ver conclusiones',
  ideHeader: '// estado_emocional · recap_02 · 11.05.2026 · pendiente',
  ideSignals: [],
  kpis: [],
  charts: {
    temas: { labels: [], data: [], colors: [], fallback: '' },
    radar: { labels: [], data: [], fallback: '' },
  },
  heatmap: [],
  tensions: [],
  verbatims: [],
  insights: [],
  cta: {
    title: 'Contenido en preparación.',
    titleEm: 'Vuelve pronto.',
    body: 'Cuando tengas el informe de la sesión 2, lo volcamos en `src/data/recap-02.ts` y la página queda lista con el mismo diseño.',
    recs: [],
  },
  footerMeta: 'Recap [2] · 11 de mayo de 2026 · Comunidad Shift+R',
  published: false,
};
