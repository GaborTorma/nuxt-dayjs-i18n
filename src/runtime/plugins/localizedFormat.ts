import { defineNuxtPlugin } from '#app'
import { localizedFormatPlugin } from './dayjs/localizedFormat'
import { useDayjs } from '#imports'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-localizedFormat-plugin',
	hooks: {
		'app:created'() {
			useDayjs().extend(localizedFormatPlugin)
		},
	},
})
