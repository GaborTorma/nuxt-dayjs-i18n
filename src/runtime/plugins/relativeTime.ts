import { useNuxtApp, defineNuxtPlugin } from '#app'
import { relativeTimePlugin } from './dayjs/relativeTime'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-relativeTime-plugin',
	hooks: {
		'app:created'() {
			useNuxtApp().$dayjs.extend(relativeTimePlugin)
		},
	},
})
