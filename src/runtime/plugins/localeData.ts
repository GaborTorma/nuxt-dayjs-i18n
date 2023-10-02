import { defineNuxtPlugin } from '#app'
import { localeDataPlugin } from './dayjs/localeData'
import { useDayjs } from '#imports'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-localeData-plugin',
	hooks: {
		'app:created'() {
			useDayjs().extend(localeDataPlugin)
		},
	},
})
