import { i18nConfig } from './config/i18n'
import { dayjsConfig } from './config/dayjs'

export default defineNuxtConfig({
	modules: [
		['dayjs-nuxt', dayjsConfig],
		['@nuxtjs/i18n', i18nConfig],
		['@nuxt/devtools', { enabled: false }],
		'../src/module',
	],
	dayjsI18n: {
		// computed: ['localizedFormat', 'relativeTime'],
		debug: true,
	},
	watch: [/config\/.*\.ts/],
	devtools: { enabled: false },

	vite: {
		clearScreen: false,
	},
})
