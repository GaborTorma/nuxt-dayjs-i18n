import { defineNuxtPlugin } from '#app'
import { relativeTimePlugin } from './dayjs/relativeTime'
import { useDayjs } from '#imports'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-relativeTime-plugin',
	hooks: {
		'app:created'() {
			useDayjs().extend(relativeTimePlugin)
		},
	},
})
