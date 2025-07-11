export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'vi';
export const locales = ['en', 'vi', 'de', 'es', 'fr', 'ja', 'ko', 'th', 'zh-Hans', 'zh-Hant'] as const;
