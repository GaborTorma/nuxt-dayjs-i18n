<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useI18n } from '#i18n'
import { useDayjs } from '#dayjs'

function useLocale() {
	const i18n = useI18n()
	const locale = ref(i18n.locale.value)
	watch(() => locale.value, i18n.setLocale)
	return { locale }
}

const { locale } = useLocale()

const dayjs = useDayjs()

const date = ref(new Date('2023-08-11 14:22'))

const formatInComputed = computed(() => dayjs(date.value).format('L LTS'), {
	onTrigger: (e) => console.log('formatInComputed triggered', e),
	onTrack: (e) => console.log('formatInComputed tracked', e),
})
const localDataInComputed = computed(() => dayjs(date.value).localeData().longDateFormat('L'))
const monthsInComputed = computed(() => dayjs(date.value).localeData().months())
const fromInComputed = computed(() => dayjs(date.value).from('2023-01-01'))
</script>

<template>
	<div>
		<h2>
			i18n welcome message: <span data-test="welcome"> {{ $t('welcome') }} </span>
		</h2>
		<h3>Select language:</h3>
		<select v-model="locale">
			<option value="en-gb">en-gb</option>
			<option value="hu">hu</option>
		</select>
		<h3>Test date: {{ date }}</h3>

		<h3>Format with localized data:</h3>
		<h4>Usage in template:</h4>
		<div class="bold" data-test="format"> {{ $dayjs(date).format('L LTS') }} </div>
		<in-slot data-test="format-in-slot">{{ $dayjs(date).format('L LTS') }}</in-slot>
		<code>$dayjs(date).format('L LTS')</code>
		<div class="bold" data-test="df">{{ $df(date, 'L LTS') }}</div>
		<in-slot data-test="df-in-slot">{{ $df(date, 'L LTS') }}</in-slot>
		<code>$df(date, 'L LTS')</code>
		<h4>Usage in computed value:</h4>
		<div class="bold" data-test="formatInComputed"> {{ formatInComputed }} </div>
		<in-slot data-test="formatInComputed-in-slot">{{ formatInComputed }}</in-slot>
		<code>const formatInComputed = computed(() => dayjs(date.value).format('L LTS'))</code>

		<h3>RelativeTime:</h3>
		<h4>Usage in template:</h4>
		<div class="bold" data-test="from">{{ $dayjs(date).from('2023-01-01') }}</div>
		<in-slot data-test="from-in-slot">{{ $dayjs(date).from('2023-01-01') }}</in-slot>
		<code>$dayjs(date).from('2023-01-01')</code>
		<h4>Usage in computed value:</h4>
		<div class="bold" data-test="fromInComputed"> {{ fromInComputed }} </div>
		<in-slot data-test="fromInComputed-in-slot">{{ fromInComputed }}</in-slot>
		<code>const fromInComputed = computed(() => dayjs(date.value).from('2023-01-01'))</code>

		<h3>LocaleData:</h3>
		<h4>Usage in template:</h4>
		<div class="bold" data-test="longDateFormat"> {{ $dayjs(date).localeData().longDateFormat('L') }} </div>
		<in-slot data-test="longDateFormat-in-slot">{{ $dayjs(date).localeData().longDateFormat('L') }}</in-slot>
		<code>$dayjs(date).localeData().longDateFormat('L')</code>
		<div class="bold" data-test="months">{{ $dayjs(date).localeData().months() }}</div>
		<in-slot data-test="months-in-slot">{{ $dayjs(date).localeData().months() }}</in-slot>
		<code>$dayjs(date).localeData().months()</code>
		<h4>Usage in computed value:</h4>
		<div class="bold" data-test="localDataInComputed"> {{ localDataInComputed }} </div>
		<in-slot data-test="localDataInComputed-in-slot">{{ localDataInComputed }}</in-slot>
		<code>const localDataInComputed = computed(() => dayjs(date.value).localeData().longDateFormat('L'))</code>
		<div class="bold" data-test="monthsInComputed"> {{ monthsInComputed }} </div>
		<in-slot data-test="monthsInComputed-in-slot">{{ monthsInComputed }}</in-slot>
		<code>const monthsInComputed = computed(() => dayjs(date.value).localeData().months())</code>
	</div>
</template>

<style scoped>
.bold {
	font-weight: bold;
}

div {
	margin-top: 8px;
}

in-slot {
	margin-left: 20px;
}
</style>
