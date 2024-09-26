export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '../src/module',
    'dayjs-nuxt',
    '@nuxtjs/i18n',
    ['@nuxt/devtools', { enabled: false }],
  ],

  eslint: {
    checker: {
      configType: 'flat', // workaround for https://github.com/nuxt/eslint/issues/338
    },
    config: {
      standalone: false,
    },
  },

  i18n: {
    locales: [
      { code: 'en-gb', language: 'en-GB', file: 'en-gb.ts', name: 'English' },
      { code: 'hu', language: 'hu-HU', file: 'hu.ts', name: 'Magyar' },
    ],
    lazy: true,
    strategy: 'no_prefix',
    langDir: 'locales',
    defaultLocale: 'en-gb',
    debug: false,
    types: 'composition',
  },

  dayjs: {
    plugins: ['localizedFormat', 'relativeTime', 'localeData'],
    // locales: locales.map(({ code }) => code), // locales not needed, it automatically comes from i18n
    // defaultLocale: 'en'  // don't use defaultLocale, it comes from i18n
  },

  dayjsI18n: {
    // computed: ['localizedFormat', 'relativeTime'],
    // provideFormat: false,
  },

  vite: {
    clearScreen: false,
  },

  compatibilityDate: '2024-09-26',
})
