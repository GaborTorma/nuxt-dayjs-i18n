import plugin from 'dayjs/plugin/relativeTime'
import type { ComputedRef } from 'vue'

declare module 'dayjs' {
	interface Dayjs {
		computedFrom(compared: dayjs.ConfigType, withoutSuffix?: boolean): ComputedRef<string>
		computedFromNow(withoutSuffix?: boolean): ComputedRef<string>
		computedTo(compared: dayjs.ConfigType, withoutSuffix?: boolean): ComputedRef<string>
		computedToNow(withoutSuffix?: boolean): ComputedRef<string>
	}
}

export const relativeTimePlugin: typeof plugin
