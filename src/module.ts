import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
	computed?: boolean
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
		computed: false,
	},
	setup(options, nuxt) {
		console.log('setup')
		nuxt.hook('prepare:types', ({ references }) => {
			if (options.computed) {
				// const plugins = options.plugins.map((p) => ({ types: `@gabortorma/nuxt-dayjs-i18n/runtime/plugins/computed` }))
				references.push({ types: `@gabortorma/nuxt-dayjs-i18n/runtime/plugins/computed` })
			}
		})

		nuxt.options.runtimeConfig.public.dayjsI18n = options
		const resolver = createResolver(import.meta.url)
		addPlugin(resolver.resolve('./runtime/plugin'))
	},
})
