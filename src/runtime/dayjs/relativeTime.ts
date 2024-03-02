import dayjs from 'dayjs'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import plugin from 'dayjs/plugin/relativeTime'
import { useNuxtApp } from '#app'

export const relativeTimePlugin: typeof plugin = (option, dayjsClass, dayjsFactory) => {
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
