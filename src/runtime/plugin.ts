import { i18nPlugin } from './computed'
import { useNuxtApp, defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-plugin',
	// enforce: 'pre', // or 'post'
	setup(nuxtApp) {
		nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => {
			const { $dayjs: dayjs } = useNuxtApp()
			dayjs.locale(newLocale)
		})
	},
	hooks: {
		// You can directly register Nuxt app hooks here
		'app:created'() {
			const nuxtApp = useNuxtApp()
			const dayjs = nuxtApp.$dayjs
			const { locale } = nuxtApp.$i18n
			if (locale.value !== dayjs.locale()) {
				dayjs.locale(locale.value)
			}
			dayjs.extend(i18nPlugin)
		},
	},
})
