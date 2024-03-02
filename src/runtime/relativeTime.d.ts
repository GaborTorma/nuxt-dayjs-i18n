import type { ComputedRef } from 'vue'
import plugin from 'dayjs/plugin/relativeTime'

declare module 'dayjs' {
	interface Dayjs {
		computedFrom(compared: ConfigType, withoutSuffix?: boolean): ComputedRef<string>
		computedFromNow(withoutSuffix?: boolean): ComputedRef<string>
		computedTo(compared: ConfigType, withoutSuffix?: boolean): ComputedRef<string>
		computedToNow(withoutSuffix?: boolean): ComputedRef<string>
	}
}

export const relativeTimePlugin: typeof plugin

declare const _default: any
export default _default
