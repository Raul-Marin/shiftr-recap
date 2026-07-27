export type SignalLevel = 'high' | 'mid' | 'low';
export type BadgeTone = 'critical' | 'high' | 'low' | 'minimal';
export type TensionLevel = 'thinking' | 'edit' | 'grep' | 'read' | 'done';
export type HeatLevel = 1 | 2 | 3 | 4 | 5;

export interface MetaItem {
  label: string;
  value: string;
}

export interface IdeSignal {
  key: string;
  value: string;
  level: SignalLevel;
  comment: string;
}

export interface KpiCard {
  label: string;
  value: string;
  note: string;
  dark?: boolean;
  badge?: { text: string; tone: BadgeTone };
}

export interface HeatCell {
  label: string;
  level: HeatLevel;
}

export interface Tension {
  level: TensionLevel;
  levelLabel: string;
  left: string;
  right: string;
  desc: string;
}

export interface Verbatim {
  text: string;
  tag: string;
  tone: TensionLevel;
}

export interface Insight {
  num: string;
  title: string;
  body: string;
}

export interface RecCard {
  label: string;
  text: string;
}

export interface ChartBar {
  labels: string[];
  data: number[];
  colors: string[];
  fallback: string;
}

export interface ChartRadar {
  labels: string[];
  data: number[];
  fallback: string;
}

export interface Recap {
  slug: string;
  number: number;
  /** Brand accent color for this session (hex). Overrides --primary to give each recap a subtle identity. */
  accent: string;
  /** Darker/active variant of accent (hex). Overrides --primary-active. */
  accentActive: string;
  /** Filename (in public/images/) of this session's cover illustration. */
  cover: string;
  title: string;
  pageTitle: string;
  heroLabel: string;
  headline: string;
  headlineEm: string;
  subtitleHtml: string;
  /** Plain-text one-liner used on the home page session cards. */
  teaser: string;
  meta: MetaItem[];
  navCta: string;
  ideHeader: string;
  ideSignals: IdeSignal[];
  kpis: KpiCard[];
  charts: {
    temas: ChartBar;
    radar: ChartRadar;
  };
  heatmap: HeatCell[];
  tensions: Tension[];
  verbatims: Verbatim[];
  insights: Insight[];
  cta: {
    title: string;
    titleEm: string;
    body: string;
    recs: RecCard[];
  };
  footerMeta: string;
  published: boolean;
}

/** A session that's announced but not yet published — shown as "coming soon" on the home page. */
export interface UpcomingSession {
  number: number;
  date: string;
  note?: string;
}
