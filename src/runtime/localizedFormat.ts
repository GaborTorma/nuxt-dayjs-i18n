import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import plugin from 'dayjs/plugin/localizedFormat'
import { defineNuxtPlugin, useNuxtApp } from '#app'
import { useDayjs } from '#dayjs'

export const localizedFormatPlugin: typeof plugin = (option, dayjsClass, dayjsFactory) => {
	dayjsClass.prototype.computedFormat = function (template?: string): ComputedRef<string> {
		const { $i18n: i18n } = useNuxtApp()
		return computed<string>(
			() => this.locale(i18n.locale.value).format(template),
		)
	}
}

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-computed-localizedFormat-plugin',
	hooks: {
		'app:created'() {
			useDayjs().extend(localizedFormatPlugin)
		},
	},
})
