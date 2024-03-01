import type { PluginFunc } from 'dayjs'
import { useNuxtApp } from '#app'

export const localePlugin: PluginFunc = (option, dayjsClass, dayjsFactory) => {
	const locale = dayjsFactory.locale
	dayjsFactory.locale = function (preset?: string | ILocale, object?: Partial<ILocale>, isLocal?: boolean): string {
		if (preset) {
			console.warn('Use i18n.setLocale instead of dayjs.locale')
		}
		const { $i18n: i18n } = useNuxtApp()
		return locale(i18n.locale.value)
	}
}
