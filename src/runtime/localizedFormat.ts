import plugin from 'dayjs/plugin/localizedFormat'
import { defineNuxtPlugin, useNuxtApp } from '#app'
import { useDayjs } from '#dayjs'

export const localizedFormatPlugin: typeof plugin = (option, dayjsClass, dayjsFactory) => {
	const { $i18n: i18n } = useNuxtApp()

	const format = dayjsClass.prototype.format

	dayjsClass.prototype.format = function (template?: string): string {
		return i18n.locale.value && format.bind(this)(template)
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
