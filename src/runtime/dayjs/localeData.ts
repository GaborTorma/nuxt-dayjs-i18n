import plugin from 'dayjs/plugin/localeData'
import dayjs from 'dayjs'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useNuxtApp } from '#app'

export const localeDataPlugin: typeof plugin = (option, dayjsClass, dayjsFactory) => {
	dayjsClass.prototype.computedLocaleData = function (): ComputedRef<dayjs.InstanceLocaleDataReturn> {
		const { $i18n: i18n } = useNuxtApp()
		return computed<dayjs.InstanceLocaleDataReturn>(() =>
			this.locale(i18n.locale.value).localeData()
		)
	}
}
