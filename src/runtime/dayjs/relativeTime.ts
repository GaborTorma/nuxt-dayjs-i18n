import dayjs from 'dayjs'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import plugin from 'dayjs/plugin/relativeTime'
import { useNuxtApp } from '#app'

declare module 'dayjs' {
	// eslint-disable-next-line no-unused-vars
	interface Dayjs {
		computedFrom(compared: dayjs.ConfigType, withoutSuffix?: boolean): ComputedRef<string>
		computedFromNow(withoutSuffix?: boolean): ComputedRef<string>
		computedTo(compared: dayjs.ConfigType, withoutSuffix?: boolean): ComputedRef<string>
		computedToNow(withoutSuffix?: boolean): ComputedRef<string>
	}
}

export const relativeTimePlugin: typeof plugin = (option, dayjsClass, d) => {
	dayjsClass.prototype.computedFrom = function (compared: dayjs.ConfigType, withoutSuffix?: boolean): ComputedRef<string> {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => this.locale(i18n.locale.value).from(compared, withoutSuffix))
	}

	dayjsClass.prototype.computedFromNow = function (withoutSuffix?: boolean): ComputedRef<string> {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => this.locale(i18n.locale.value).fromNow(withoutSuffix))
	}

	dayjsClass.prototype.computedTo = function (compared: dayjs.ConfigType, withoutSuffix?: boolean): ComputedRef<string> {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => this.locale(i18n.locale.value).to(compared, withoutSuffix))
	}

	dayjsClass.prototype.computedToNow = function (withoutSuffix?: boolean): ComputedRef<string> {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => this.locale(i18n.locale.value).toNow(withoutSuffix))
	}
}
