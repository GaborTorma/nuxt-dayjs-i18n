import type { NuxtI18nOptions } from '@nuxtjs/i18n/dist/module'
import { fallbackLocale, defaultLocale, locales } from './locales'

export const i18nConfig: Partial<NuxtI18nOptions> = {
	locales,
	lazy: true,
	strategy: 'no_prefix',
	detectBrowserLanguage: {
		fallbackLocale,
		useCookie: true,
	},
	langDir: 'locales',
	defaultLocale,
	debug: false,
	types: 'composition',
	vueI18n: './config/i18n/i18n.ts',
}
