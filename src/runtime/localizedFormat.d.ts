import type { ComputedRef } from 'vue'

declare module 'dayjs' {
  interface Dayjs {
    computedFormat(template?: string): ComputedRef<string>
  }
}

declare const _default: any
export default _default
