import { useNuxtApp, defineNuxtPlugin } from '#app'
import { localeDataPlugin } from './dayjs/localeData'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-localeData-plugin',
	hooks: {
		'app:created'() {
			useNuxtApp().$dayjs.extend(localeDataPlugin)
		},
	},
})
