import { PluginFunc } from 'dayjs'

export const localePlugin: PluginFunc = (option, dayjsClass, d) => {
	const locale = d.locale
	d.locale = function (
		preset?: string | ILocale,
		object?: Partial<ILocale>,
		isLocal?: boolean
	): string {
		if (preset) {
			console.warn('Use i18n.setLocale insted of dayjs.locale')
		}
		return locale()
	}
}
