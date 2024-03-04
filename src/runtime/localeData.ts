import type dayjs from 'dayjs'
import type plugin from 'dayjs/plugin/localeData'
import { defineNuxtPlugin, useNuxtApp } from '#app'
import { useDayjs } from '#dayjs'

export const localeDataPlugin: typeof plugin = (option, dayjsClass, dayjsFactory) => {
  const { $i18n: i18n } = useNuxtApp()

  // eslint-disable-next-line ts/unbound-method
  const localeData = dayjsClass.prototype.localeData

  dayjsClass.prototype.localeData = function (): dayjs.InstanceLocaleDataReturn {
    return i18n.locale.value ? localeData.bind(this)() : dayjsFactory.localeData()
  }
}

export default defineNuxtPlugin({
  name: 'nuxt-dayjs-i18n-computed-localeData-plugin',
  hooks: {
    'app:created'() {
      useDayjs().extend(localeDataPlugin)
    },
  },
})
