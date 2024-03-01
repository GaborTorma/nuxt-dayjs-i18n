import { defineNuxtPlugin } from '#app'
import { useDayjs } from '#dayjs'
import { localeDataPlugin } from './dayjs/localeData'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-computed-localeData-plugin',
	hooks: {
		'app:created'() {
			useDayjs().extend(localeDataPlugin)
		},
	},
})
