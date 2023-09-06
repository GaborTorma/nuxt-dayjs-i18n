import { localeDataPlugin } from './dayjs/localeData'
import { useNuxtApp, defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-localeData-plugin',
	hooks: {
		'app:created'() {
			useNuxtApp().$dayjs.extend(localeDataPlugin)
		},
	},
})
