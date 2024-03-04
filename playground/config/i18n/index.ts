import type { NuxtI18nOptions } from '@nuxtjs/i18n'
import { defaultLocale, locales } from './locales'

export const i18nConfig: Partial<NuxtI18nOptions> = {
  locales,
  lazy: true,
  strategy: 'no_prefix',
  langDir: 'locales',
  defaultLocale,
  debug: false,
  types: 'composition',
  vueI18n: './config/i18n/i18n.ts',
}
