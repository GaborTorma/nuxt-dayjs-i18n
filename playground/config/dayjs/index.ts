import { ModuleOptions } from 'dayjs-nuxt'
import { availableLocales } from '../i18n/locales'

export const dayjsConfig: Partial<ModuleOptions> = {
	locales: availableLocales,
	plugins: ['localizedFormat', 'relativeTime', 'localeData'],
	defaultLocale: 'hu',
}
