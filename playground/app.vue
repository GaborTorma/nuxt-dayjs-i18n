<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from '#i18n'
import { useDayjs } from '#dayjs'

const i18n = useI18n()
const dayjs = useDayjs()

const locale = ref(i18n.locale.value)

watch(() => locale.value, i18n.setLocale)

const date = ref(new Date('2023-08-11 14:22'))
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
		<div>Computed format:</div>
		<div class="bold" data-test="format">{{ dayjs(date).format('L LTS') }}</div>
		<code>dayjs(date).format('L LTS')</code>
		<div style="margin-top: 10px">Locally en format:</div>
		<div class="bold" data-test="locally-format">
			{{ $dayjs(date).locale('en-gb').format('L LTS') }}
		</div>
		<code>dayjs(date).locale('en').format('L LTS')</code>
		<div style="margin-top: 10px">Computed relative time from 2023-01-01:</div>
		<div class="bold" data-test="relative-time">{{ $dayjs(date).from('2023-01-01') }}</div>
		<code>dayjs(date).from('2023-01-01')</code>
		<div style="margin-top: 10px">Computed locale data (weekdays):</div>
		<div class="bold" data-test="weekdays">{{ dayjs.localeData().weekdays() }}</div>
		<code>dayjs.localeData().weekdays()</code>
		<div style="margin-top: 10px">Computed format by providet function $df:</div>
		<div class="bold" data-test="dt">{{ $df(date, 'LLLL') }}</div>
		<code>$df(date, 'LLLL')</code>

		<div style="margin-top: 10px">
			Button for set dayjs.locale. It will nothing happen, only showing the following message in
			console: <i>Use i18n.setLocale instead of dayjs.locale</i>
		</div>
		<button @click="dayjs.locale('en')">en</button>
	</div>
</template>

<style>
.bold {
	font-weight: bold;
}
</style>
