import { relativeTimePlugin } from './dayjs/relativeTime'
import { useNuxtApp, defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-relativeTime-plugin',
	hooks: {
		'app:created'() {
			useNuxtApp().$dayjs.extend(relativeTimePlugin)
		},
	},
})
