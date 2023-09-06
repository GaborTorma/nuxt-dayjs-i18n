import { localizedFormatPlugin } from './dayjs/localizedFormat'
import { useNuxtApp, defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-localizedFormat-plugin',
	hooks: {
		'app:created'() {
			useNuxtApp().$dayjs.extend(localizedFormatPlugin)
		},
	},
})
