import { ref, watch } from 'vue'
import plugin from 'dayjs/plugin/localeData'
import { useNuxtApp } from '#app'

export const localeDataPlugin: typeof plugin = (option, dayjsClass, dayjsFactory) => {
	const weekdays = dayjsFactory.weekdays
	dayjsFactory.weekdays = function (localOrder?: boolean) {
		const { $i18n: i18n } = useNuxtApp()
		const result = ref()
		watch(
			() => i18n.locale.value,
			() => (result.value = weekdays.bind(this)(localOrder)),
			{ immediate: true }
		)
		return result.value
	}

	const weekdaysShort = dayjsFactory.weekdaysShort
	dayjsFactory.weekdaysShort = function (localOrder?: boolean) {
		const { $i18n: i18n } = useNuxtApp()
		const result = ref()
		watch(
			() => i18n.locale.value,
			() => (result.value = weekdaysShort.bind(this)(localOrder)),
			{ immediate: true }
		)
		return result.value
	}

	const weekdaysMin = dayjsFactory.weekdaysMin
	dayjsFactory.weekdaysMin = function (localOrder?: boolean) {
		const { $i18n: i18n } = useNuxtApp()
		const result = ref()
		watch(
			() => i18n.locale.value,
			() => (result.value = weekdaysMin.bind(this)(localOrder)),
			{ immediate: true }
		)
		return result.value
	}

	const monthsShort = dayjsFactory.monthsShort
	dayjsFactory.monthsShort = function () {
		const { $i18n: i18n } = useNuxtApp()
		const result = ref()
		watch(
			() => i18n.locale.value,
			() => (result.value = monthsShort.bind(this)()),
			{ immediate: true }
		)
		return result.value
	}

	const months = dayjsFactory.months
	dayjsFactory.months = function () {
		const { $i18n: i18n } = useNuxtApp()
		const result = ref()
		watch(
			() => i18n.locale.value,
			() => (result.value = months.bind(this)()),
			{ immediate: true }
		)
		return result.value
	}

	const localeData = dayjsFactory.localeData
	dayjsFactory.localeData = function () {
		const { $i18n: i18n } = useNuxtApp()
		const result = ref()
		watch(
			() => i18n.locale.value,
			() => (result.value = localeData.bind(this)()),
			{ immediate: true }
		)
		return result.value
	}

	const localeDataProto = dayjsClass.prototype.localeData
	dayjsClass.prototype.localeData = function () {
		const { $i18n: i18n } = useNuxtApp()
		const result = ref()
		watch(
			() => i18n.locale.value,
			() => (result.value = localeDataProto.bind(this)()),
			{ immediate: true }
		)
		return result.value
	}
}
