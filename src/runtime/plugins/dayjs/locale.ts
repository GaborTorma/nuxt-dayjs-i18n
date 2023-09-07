import { PluginFunc } from 'dayjs'

export const localePlugin: PluginFunc = (option, dayjsClass, dayjsFactory) => {
	const locale = dayjsFactory.locale
	dayjsFactory.locale = function (
		preset?: string | ILocale,
		object?: Partial<ILocale>,
		isLocal?: boolean
	): string {
		if (preset) {
			console.warn('Use i18n.setLocale instead of dayjs.locale')
		}
		return locale()
	}
}
