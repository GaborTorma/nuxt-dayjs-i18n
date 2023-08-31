import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

declare module 'dayjs' {
	// eslint-disable-next-line no-unused-vars
	interface Dayjs {
		computedFormat(template?: string): string
	}
}

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'nuxt-dayjs-i18n',
		configKey: 'nuxtDayjsI18n',
		compatibility: {
			nuxt: '^3.0.0',
		},
	},
	// Default configuration options of the Nuxt module
	defaults: {},
	setup(options, nuxt) {
		console.log('setup')
		const resolver = createResolver(import.meta.url)
		addPlugin(resolver.resolve('./runtime/plugin'))
	},
})
