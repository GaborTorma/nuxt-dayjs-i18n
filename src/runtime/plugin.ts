import { useDayjs } from '../../node_modules/dayjs-nuxt/dist/runtime/composables/dayjs'
import { i18nPlugin } from './computed'
import { defineNuxtPlugin, useNuxtApp } from '#app'

export default defineNuxtPlugin({
	name: 'nuxt-i18n-dayjs-plugin',
	// enforce: 'pre', // or 'post'
	setup(nuxtApp) {
		nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => {
			const dayjs = useDayjs()
			dayjs.locale(newLocale)
		})
	},
	hooks: {
		// You can directly register Nuxt app hooks here
		'app:created'() {
			const nuxtApp = useNuxtApp()
			const dayjs = useDayjs()
			const { locale } = nuxtApp.$i18n
			if (locale.value !== dayjs.locale()) {
				dayjs.locale(locale.value)
			}
			dayjs.extend(i18nPlugin)
		},
	},
})
