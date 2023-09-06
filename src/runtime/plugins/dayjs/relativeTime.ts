import { ConfigType } from 'dayjs'
import { computed } from 'vue'
import plugin from 'dayjs/plugin/relativeTime'
import { useNuxtApp } from '#app'

export const relativeTimePlugin: typeof plugin = (option, dayjsClass, d) => {
	const from = dayjsClass.prototype.from
	dayjsClass.prototype.from = function (compared: ConfigType, withoutSuffix?: boolean): string {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => {
			return i18n.locale.value && from.bind(this)(compared, withoutSuffix)
		}).value
	}

	const fromNow = dayjsClass.prototype.fromNow
	dayjsClass.prototype.fromNow = function (withoutSuffix?: boolean): string {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => {
			return i18n.locale.value && fromNow.bind(this)(withoutSuffix)
		}).value
	}

	const to = dayjsClass.prototype.to
	dayjsClass.prototype.to = function (compared: ConfigType, withoutSuffix?: boolean): string {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => {
			return i18n.locale.value && to.bind(this)(compared, withoutSuffix)
		}).value
	}

	const toNow = dayjsClass.prototype.toNow
	dayjsClass.prototype.toNow = function (withoutSuffix?: boolean): string {
		const { $i18n: i18n } = useNuxtApp()
		return computed(() => {
			return i18n.locale.value && toNow.bind(this)(withoutSuffix)
		}).value
	}
}
