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

const formatInComputed = computed(() => dayjs(date.value).format('L LTS'))
const computedFormat = dayjs(date.value).computedFormat('L LTS')

const localDataInComputed = computed(() => dayjs(date.value).localeData().longDateFormat('L'))
const monthsInComputed = computed(() => dayjs(date.value).localeData().months())
const computedLocaleData = dayjs(date.value).computedLocaleData()
const computedLongDateFormat = computed(() => computedLocaleData.value.longDateFormat('L'))
const computedMonths = computed(() => computedLocaleData.value.months())

const fromInComputed = computed(() => dayjs(date.value).from('2023-01-01'))
const computedFrom = dayjs(date.value).computedFrom('2023-01-01')
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
		<div class="bold" data-test="format">{{ $dayjs(date).format('L LTS') }}</div>
		<code>$dayjs(date).format('L LTS')</code>
		<div class="bold" data-test="df">{{ $df(date, 'L LTS') }}</div>
		<code>$df(date, 'L LTS')</code>
		<h4>Usage in computed value:</h4>
		<div class="bold" data-test="formatInComputed">
			{{ formatInComputed }} <span class="red--text">(reactivity lost, do not use!)</span>
		</div>
		<code>const formatInComputed = computed(() => dayjs(date.value).format('L LTS'))</code>
		<div class="bold" data-test="computedFormat">{{ computedFormat }}</div>
		<code>const computedFormat = dayjs(date.value).computedFormat('L LTS')</code>

		<h3>RelativeTime:</h3>
		<h4>Usage in template:</h4>
		<div class="bold" data-test="from">{{ $dayjs(date).from('2023-01-01') }}</div>
		<code>$dayjs(date).from('2023-01-01')</code>
		<h4>Usage in computed value:</h4>
		<div class="bold" data-test="fromInComputed">
			{{ fromInComputed }} <span class="red--text">(reactivity lost, do not use!)</span>
		</div>
		<code> const fromInComputed = computed(() => dayjs(date.value).from('2023-01-01')) </code>
		<div class="bold" data-test="computedFrom">
			{{ computedFrom }}
		</div>
		<code> const computedFrom = dayjs(date.value).computedFrom('2023-01-01') </code>

		<h3>LocaleData:</h3>
		<h4>Usage in template:</h4>
		<div class="bold" data-test="longDateFormat">{{ $dayjs(date).localeData().longDateFormat('L') }}</div>
		<code>$dayjs(date).localeData().longDateFormat('L')</code>
		<div class="bold" data-test="months">{{ $dayjs(date).localeData().months() }}</div>
		<code>$dayjs(date).localeData().months()</code>
		<h4>Usage in computed value:</h4>
		<div class="bold" data-test="localDataInComputed">
			{{ localDataInComputed }} <span class="red--text">(reactivity lost, do not use!)</span>
		</div>
		<code>
				const localDataInComputed = computed(() => dayjs(date.value).localeData().longDateFormat('L'))
			</code>
		<div class="bold" data-test="computedLocaleData.longDateFormat">
			{{ computedLocaleData.longDateFormat('L') }}
		</div>
		<code>
				script: const computedLocaleData = dayjs(date.value).computedLocaleData()<br />
				template: computedLocaleData.longDateFormat('L')
			</code>
		<div class="bold" data-test="computedLongDateFormat">
			{{ computedLongDateFormat }}
		</div>
		<code>
				const computedLongDateFormat = computed(() => computedLocaleData.value.longDateFormat('L'))
			</code>
		<div class="bold" data-test="monthsInComputed">
			{{ monthsInComputed }} <span class="red--text">(reactivity lost, do not use!)</span>
		</div>
		<code> const monthsInComputed = computed(() => dayjs(date.value).localeData().months()) </code>
		<div class="bold" data-test="localDataInComputed.months">
			{{ computedLocaleData.months() }}
		</div>
		<code>
				script: const computedLocaleData = dayjs(date.value).computedLocaleData()<br />
				template: computedLocaleData.months()
			</code>
		<div class="bold" data-test="computedMonths">
			{{ computedMonths }}
		</div>
		<code> const computedMonths = computed(() => computedLocaleData.value.months()) </code>
	</div>
</template>

<style>
table {
	width: 500px;
}

.bold {
	font-weight: bold;
}

div {
	margin-top: 8px;
}

.red--text {
	color: red;
}

.green--text {
	color: red;
}</style>
