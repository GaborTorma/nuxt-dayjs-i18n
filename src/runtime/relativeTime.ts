import dayjs from 'dayjs'
import plugin from 'dayjs/plugin/relativeTime'
import { defineNuxtPlugin, useNuxtApp } from '#app'
import { useDayjs } from '#dayjs'

export const relativeTimePlugin: typeof plugin = (option, dayjsClass, dayjsFactory) => {
	const { $i18n: i18n } = useNuxtApp()

	const from = dayjsClass.prototype.from
	dayjsClass.prototype.from = function (compared: dayjs.ConfigType, withoutSuffix?: boolean): string {
		return i18n.locale.value && from.bind(this)(compared, withoutSuffix)
	}

	const fromNow = dayjsClass.prototype.fromNow
	dayjsClass.prototype.fromNow = function (withoutSuffix?: boolean): string {
		return i18n.locale.value && fromNow.bind(this)(withoutSuffix)
	}

	const to = dayjsClass.prototype.to
	dayjsClass.prototype.to = function (compared: dayjs.ConfigType, withoutSuffix?: boolean): string {
		return i18n.locale.value && to.bind(this)(compared, withoutSuffix)
	}

	const toNow = dayjsClass.prototype.toNow
	dayjsClass.prototype.toNow = function (withoutSuffix?: boolean): string {
		return i18n.locale.value && toNow.bind(this)(withoutSuffix)
	}
}

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-i18n-computed-relativeTime-plugin',
	hooks: {
		'app:created'() {
			useDayjs().extend(relativeTimePlugin)
		},
	},
})
