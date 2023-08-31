import { LocaleObject } from '#i18n'

export const fallbackLocale = 'hu'

export const defaultLocale = 'hu'

export const locales: LocaleObject[] = [
	{
		code: 'hu',
		iso: 'hu-HU',
		file: 'hu.ts',
		name: 'Magyar',
	},
	{
		code: 'en',
		iso: 'en-US',
		file: 'en.ts',
		name: 'English',
	},
]

export const availableLocales: string[] = locales.map(({ code }) => code)
