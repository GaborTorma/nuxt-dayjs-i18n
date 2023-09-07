import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

const computedPlugins = ['localizedFormat', 'localeData', 'relativeTime'] as const
type TComputedPlugin = (typeof computedPlugins)[number]

// Module options TypeScript interface definition
export interface ModuleOptions {
	computedPlugins?: true | Array<TComputedPlugin>
	provideFormat?: boolean
	debug?: boolean
}

function getDayjsPluginOptions(options: any): Array<string> {
	if (Array.isArray(options.dayjs?.plugins)) {
		return options.dayjs.plugins
	}
	for (const module of options.modules) {
		if (
			Array.isArray(module) &&
			module[0] === 'dayjs-nuxt' &&
			Array.isArray(module?.[1]?.plugins)
		) {
			return module[1].plugins
		}
	}
	return []
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
		computedPlugins: true,
		provideFormat: true,
		debug: false,
	},
	setup(options, nuxt) {
		const debug = (message: string) => options.debug && console.log(`nuxt-dayjs-i18n: ${message}`)
		debug('setup started')

		const resolver = createResolver(import.meta.url)
		addPlugin(resolver.resolve('./runtime/plugin'))

		if (options.provideFormat) {
			addPlugin(resolver.resolve('./runtime/plugins/provideFormat'))
			debug(`provideFormat plugin added`)
		}

		const dayjsPluginOptions = getDayjsPluginOptions(nuxt.options)
		for (const plugin of computedPlugins) {
			const allComputedPluginInclued = options.computedPlugins === true
			const thisComputedPluginInclued =
				Array.isArray(options.computedPlugins) && options.computedPlugins.includes(plugin)
			const computedPluginInclued = allComputedPluginInclued || thisComputedPluginInclued
			const dayjsPluginIncluded = dayjsPluginOptions.includes(plugin)

			if (computedPluginInclued && dayjsPluginIncluded) {
				addPlugin(resolver.resolve(`./runtime/plugins/${plugin}`))
				debug(`${plugin} computed dayjs plugin added`)
			}
		}
	},
})
