import type { NuxtOptions } from '@nuxt/schema'
import { addPlugin, createResolver, defineNuxtModule, hasNuxtModule, installModule } from '@nuxt/kit'

const computedPlugins = ['localizedFormat', 'localeData', 'relativeTime'] as const
type TComputedPlugin = (typeof computedPlugins)[number]

// Module options TypeScript interface definition
export interface ModuleOptions {
  computedPlugins?: true | Array<TComputedPlugin>
  provideFormat?: boolean
  debug?: boolean
}

function getDayjsPluginOptions(options: NuxtOptions): Array<string> {
  if (Array.isArray(options?.dayjs?.plugins))
    return options.dayjs.plugins

  for (const module of options.modules) {
    if (Array.isArray(module)
      && module[0] === 'dayjs-nuxt'
      && Array.isArray(module?.[1]?.plugins)
      && module[1].plugins.every(v => typeof v === 'string'))
      return module[1].plugins as Array<string>
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
  async setup(options, nuxt) {
    const debug = (message: string) => options.debug && console.log(`nuxt-dayjs-i18n: ${message}`)
    debug('setup started')

    // check module dependencies
    if (!hasNuxtModule('dayjs-nuxt')) {
      if (nuxt.options._prepare)
        await installModule('dayjs-nuxt')
      else
        throw new Error('nuxt-dayjs module is missing.\n Please use it at the modules section in nuxt.config.ts.')
    }
    if (!hasNuxtModule('@nuxtjs/i18n')) {
      if (nuxt.options._prepare)
        await installModule('@nuxtjs/i18n')
      else
        throw new Error('@nuxtjs/i18n module is missing.\n Please use it at the modules section in nuxt.config.ts.')
    }

    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/locale'))

    if (options.provideFormat) {
      addPlugin(resolver.resolve('./runtime/provideFormat'))
      debug(`provideFormat plugin added`)
    }

    const plugins: string[] = []
    const dayjsPluginOptions = getDayjsPluginOptions(nuxt.options)
    for (const plugin of computedPlugins) {
      const allComputedPluginIncluded = options.computedPlugins === true
      const thisComputedPluginIncluded = Array.isArray(options.computedPlugins) && options.computedPlugins.includes(plugin)
      const computedPluginIncluded = allComputedPluginIncluded || thisComputedPluginIncluded
      const dayjsPluginIncluded = dayjsPluginOptions.includes(plugin)

      if (computedPluginIncluded && dayjsPluginIncluded)
        plugins.push(plugin)
    }

    plugins.forEach((plugin) => {
      addPlugin(resolver.resolve(`./runtime/${plugin}`))
      debug(`${plugin} computed dayjs plugin added`)
    })
  },
})
