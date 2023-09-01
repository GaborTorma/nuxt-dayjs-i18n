import { i18nPlugin } from './computed'
import { useNuxtApp, defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-plugin',
	// enforce: 'pre', // or 'post'
	setup(nuxtApp) {
		console.log('plugin loaded')
		nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => {
			const { $dayjs: dayjs } = useNuxtApp()
			dayjs.locale(newLocale)
		})
	},
	hooks: {
		// You can directly register Nuxt app hooks here
		'app:created'() {
			const nuxtApp = useNuxtApp()
			const { $dayjs: dayjs, $i18n: i18n } = nuxtApp
			if (!dayjs) {
				throw new Error('nuxt-dayjs module not found')
			}
			if (!i18n) {
				throw new Error('@nuxtjs/i18n module not found')
			}
			const { locale } = nuxtApp.$i18n
			if (locale.value !== dayjs.locale()) {
				dayjs.locale(locale.value)
			}
			dayjs.extend(i18nPlugin)
		},
	},
})
