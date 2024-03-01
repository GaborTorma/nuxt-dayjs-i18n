import type { Dayjs } from 'dayjs'
import { defineNuxtPlugin, useNuxtApp } from '#app'
import { useDayjs } from '#dayjs'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-provide-format-plugin',
	hooks: {
		'app:created'() {
			const nuxtApp = useNuxtApp()
			const dayjs = useDayjs()

			nuxtApp.provide('df', (date: string | number | Date | Dayjs, template: string): string => {
				const { $i18n: i18n } = nuxtApp
				return dayjs(date).locale(i18n.locale.value).format(template)
			})
		},
	},
})
