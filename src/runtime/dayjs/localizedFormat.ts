import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import plugin from 'dayjs/plugin/localizedFormat'
import { useNuxtApp } from '#app'

export const localizedFormatPlugin: typeof plugin = (option, dayjsClass, d) => {
	dayjsClass.prototype.computedFormat = function (template?: string): ComputedRef<string> {
		const { $i18n: i18n } = useNuxtApp()
		return computed<string>(
			() => this.locale(i18n.locale.value).format(template),
		)
	}
}
