import { defineNuxtPlugin } from '#app'
import { useDayjs } from '#dayjs'
import { relativeTimePlugin } from './dayjs/relativeTime'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-computed-relativeTime-plugin',
	hooks: {
		'app:created'() {
			useDayjs().extend(relativeTimePlugin)
		},
	},
})
