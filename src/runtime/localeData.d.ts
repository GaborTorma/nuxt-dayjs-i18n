import type { ComputedRef } from 'vue'
import plugin from 'dayjs/plugin/localeData'

declare module 'dayjs' {
  interface Dayjs {
    computedLocaleData(): ComputedRef<InstanceLocaleDataReturn>
  }
}

declare const _default: any
export default _default
