import { PluginFunc } from 'dayjs'
import { computed } from 'vue'
import { useNuxtApp } from '#app'

export const computedPlugin: PluginFunc = (option, dayjsClass, d) => {
	dayjsClass.prototype.computedFormat = function (args: string | undefined) {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => {
			return i18n.locale.value && dayjsClass.prototype.format.bind(this)(args)
		}).value
	}
}
