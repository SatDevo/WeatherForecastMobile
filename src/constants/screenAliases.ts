export const SCREEN_ALIASES = {
  TIMELINES: 'TIMELINES',
  TIMELINES_ENTRY: 'TIMELINES_ENTRY',
} as const;

export type ScreenName = typeof SCREEN_ALIASES[keyof typeof SCREEN_ALIASES];

