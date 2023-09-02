import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export as namespace plugin
export = plugin

declare module 'dayjs' {
	interface Dayjs {
		computedFormat(template?: string): string
	}
}
