import type { Dayjs } from 'dayjs'
import { useNuxtApp, defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-provide-format-plugin',
	hooks: {
		'app:created'() {
			const nuxtApp = useNuxtApp()
			const { $dayjs: dayjs } = nuxtApp

			nuxtApp.provide('df', (date: string | number | Date | Dayjs, template: string): string =>
				dayjs(date).format(template)
			)
		},
	},
})
