import { computedPlugin } from './plugins/computed'
import { localePlugin } from './plugins/locale'
import { useNuxtApp, defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-plugin',
	// enforce: 'pre', // or 'post'
	setup(nuxtApp) {
		console.log('plugin loaded')
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

			dayjs.extend(computedPlugin)

			const setLocale = dayjs.locale

			const { locale } = nuxtApp.$i18n
			if (locale.value !== dayjs.locale()) {
				dayjs.locale(locale.value)
			}

			dayjs.extend(localePlugin)

			nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => {
				setLocale(newLocale)
			})
		},
	},
})
