import type { ComputedRef } from 'vue'
import plugin from 'dayjs/plugin/localizedFormat'

declare module 'dayjs' {
  interface Dayjs {
    computedFormat(template?: string): ComputedRef<string>
  }
}

export const localizedFormatPlugin: typeof plugin
