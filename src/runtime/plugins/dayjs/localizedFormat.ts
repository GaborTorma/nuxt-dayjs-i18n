import { computed } from 'vue'
import plugin from 'dayjs/plugin/localizedFormat'
import { useNuxtApp } from '#app'

export const localizedFormatPlugin: typeof plugin = (option, dayjsClass, d) => {
	const format = dayjsClass.prototype.format
	dayjsClass.prototype.format = function (template?: string): string {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => {
			return i18n.locale.value && format.bind(this)(template)
		}).value
	}
}
