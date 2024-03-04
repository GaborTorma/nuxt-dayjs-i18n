import type { PluginFunc, locale } from 'dayjs'
import { defineNuxtPlugin, useNuxtApp } from '#app'
import { useDayjs } from '#imports'

const localePlugin: PluginFunc = (_option, _dayjsClass, dayjsFactory) => {
  const locale = dayjsFactory.locale
  dayjsFactory.locale = function (preset?: string | ILocale): string {
    if (preset)
      console.warn('Use i18n.setLocale instead of dayjs.locale')

    const { $i18n: i18n } = useNuxtApp()
    return locale(i18n.locale.value)
  }
}

let setLocale: typeof locale | undefined

export default defineNuxtPlugin({
  name: 'nuxt-dayjs-i18n-plugin',
  hooks: {
    'app:created'() {
      const nuxtApp = useNuxtApp()
      const { $i18n: i18n } = nuxtApp
      const dayjs = useDayjs()

      if (!setLocale)
        setLocale = dayjs.locale

      if (i18n.locale.value !== dayjs.locale())
        setLocale(i18n.locale.value)

      dayjs.extend(localePlugin)
    },

    'i18n:beforeLocaleSwitch'({ newLocale }) {
      if (setLocale)
        setLocale(newLocale)
    },
  },
})
