import { defineNuxtPlugin } from '#app'
import { useDayjs } from '#dayjs'
import { localizedFormatPlugin } from './dayjs/localizedFormat'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-computed-localizedFormat-plugin',
	hooks: {
		'app:created'() {
			useDayjs().extend(localizedFormatPlugin)
		},
	},
})
