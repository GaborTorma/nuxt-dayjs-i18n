import { LocaleObject } from '#i18n'

export const fallbackLocale = 'en-gb'

export const defaultLocale = 'en-gb'

export const locales: LocaleObject[] = [
	{
		code: 'en-gb',
		iso: 'en-GB',
		file: 'en-gb.ts',
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
