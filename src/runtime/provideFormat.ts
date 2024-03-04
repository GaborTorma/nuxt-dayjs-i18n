import type { Dayjs } from 'dayjs'
import { defineNuxtPlugin, useNuxtApp } from '#app'
import { useDayjs } from '#dayjs'

declare module '#app' {
  interface NuxtApp {
    /**
     * Format datetime with dayjs.format()
     * Get the formatted date according to the string of tokens passed in.
     *
     * To escape characters, wrap them in square brackets (e.g. [MM]).
     * ```
     * dayjs().format()// => current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'
     * dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')// 'YYYYescape 2019-01-25T00:00:00-02:00Z'
     * dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
     * ```
     * Docs: {@link https://day.js.org/docs/en/display/format}
     * AdvancedFormat: {@link https://day.js.org/docs/en/plugin/advanced-format}
     * LocalizedFormat: {@link https://day.js.org/docs/en/display/format#list-of-localized-formats}
     */
    $df(date: string | number | Date | Dayjs, template: string): string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    /**
     * Format datetime with dayjs.format()
     * Get the formatted date according to the string of tokens passed in.
     *
     * To escape characters, wrap them in square brackets (e.g. [MM]).
     * ```
     * dayjs().format()// => current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'
     * dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')// 'YYYYescape 2019-01-25T00:00:00-02:00Z'
     * dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
     * ```
     * Docs: {@link https://day.js.org/docs/en/display/format}
     * AdvancedFormat: {@link https://day.js.org/docs/en/plugin/advanced-format}
     * LocalizedFormat: {@link https://day.js.org/docs/en/display/format#list-of-localized-formats}
     */
    $df(date: string | number | Date | Dayjs, template: string): string
  }
}

export default defineNuxtPlugin({
  name: 'nuxt-dayjs-i18n-provide-format-plugin',
  hooks: {
    'app:created'() {
      const nuxtApp = useNuxtApp()
      const dayjs = useDayjs()

      nuxtApp.provide('df', (date: string | number | Date | Dayjs, template: string): string => {
        const { $i18n: i18n } = nuxtApp
        return dayjs(date).locale(i18n.locale.value).format(template)
      })
    },
  },
})
