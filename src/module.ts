import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
	computed?: Array<'localizedFormat' | 'localeData' | 'relativeTime'>
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'nuxt-dayjs-i18n',
		configKey: 'dayjsI18n',
		compatibility: {
			nuxt: '^3.0.0',
		},
	},
	// Default configuration options of the Nuxt module
	defaults: {
		// computed: ['localizedFormat', 'localeData', 'relativeTime'],
	},
	setup(options, nuxt) {
		if (!options.computed) {
			options.computed = ['localizedFormat', 'localeData', 'relativeTime']
		}
		console.log('setup', options)
		nuxt.options.runtimeConfig.public.dayjsI18n = options
		const resolver = createResolver(import.meta.url)
		addPlugin(resolver.resolve('./runtime/plugin'))
	},
})
