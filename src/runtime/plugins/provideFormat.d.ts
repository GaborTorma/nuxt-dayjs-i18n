import { Dayjs } from 'dayjs'

declare module '#app' {
	interface NuxtApp {
		$df(date: string | number | Date | Dayjs, template: string): string
	}
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$df(date: string | number | Date | Dayjs, template: string): string
	}
}
