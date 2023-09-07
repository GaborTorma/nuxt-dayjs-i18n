import { LocaleObject } from '#i18n'

export const fallbackLocale = 'en'

export const defaultLocale = 'en'

export const locales: LocaleObject[] = [
	{
		code: 'en',
		iso: 'en-US',
		file: 'en.ts',
		name: 'English',
	},
	{
		code: 'hu',
		iso: 'hu-HU',
		file: 'hu.ts',
		name: 'Magyar',
	},
]

export const availableLocales: string[] = locales.map(({ code }) => code)
