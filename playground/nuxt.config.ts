import type { LocaleObject } from '@nuxtjs/i18n'

const locales: LocaleObject[] = [
  { code: 'en-gb', iso: 'en-GB', file: 'en-gb.ts', name: 'English' },
  { code: 'hu', iso: 'hu-HU', file: 'hu.ts', name: 'Magyar' },
]

export default defineNuxtConfig({
  modules: [
    '../src/module',
    'dayjs-nuxt',
    '@nuxtjs/i18n',
    ['@nuxt/devtools', { enabled: false }],
  ],

  i18n: {
    locales,
    lazy: true,
    strategy: 'no_prefix',
    langDir: 'locales',
    defaultLocale: 'en-gb',
    debug: false,
    types: 'composition',
  },

  dayjs: {
    locales: locales.map(({ code }) => code),
    plugins: ['localizedFormat', 'relativeTime', 'localeData'],
    // defaultLocale: 'en'  // don't use defaultLocale, it comes from i18n
  },

  dayjsI18n: {
    // computed: ['localizedFormat', 'relativeTime'],
    // provideFormat: false,
    debug: true,
  },

  vite: {
    clearScreen: false,
  },
})
