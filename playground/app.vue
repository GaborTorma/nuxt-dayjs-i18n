<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useNuxtApp } from '#app'
import { useI18n } from '#i18n'

const i18n = useI18n()
const { $dayjs: dayjs } = useNuxtApp()

const locale = ref(i18n.locale.value)

watch(() => locale.value, i18n.setLocale)

const date = ref(new Date('2023-02-11 14:22'))

const now = computed(() => i18n.locale.value && dayjs(date.value).format('L LTS'))

const funcs = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'] as const
</script>

<template>
	<div>
		<h2>
			i18n welcome message: <span data-test="welcome">{{ $t('welcome') }}</span>
		</h2>
		<select v-model="locale">
			<option value="en">en</option>
			<option value="hu">hu</option>
		</select>
		<h3>Format: {{ dayjs(date).format('L LTS') }}</h3>
		<h3>Computed now: {{ now }}</h3>
		<!--<h3>Computed format now: {{ dayjs(date).computedFormat('L LTS') }}</h3>-->
		<h3>Locally en format: {{ dayjs(date).locale('en').format('L LTS') }}</h3>
		<!--<h3>Locally en computed.format: {{ dayjs(date).locale('en').computedFormat('L LTS') }}</h3>-->
		<button @click="dayjs.locale('en')">en</button>
		<h4>Locale Data</h4>
		<template v-for="(func, index) in funcs" :key="index">
			<p>dayjs.{{ func }}(): {{ dayjs[func]() }}</p>
		</template>
		<p>{{ dayjs.localeData().firstDayOfWeek() }}</p>

		<p>{{ dayjs().from(dayjs('2023-05-01')) }}</p>
		<p>{{ dayjs().fromNow() }}</p>
		<p>{{ dayjs().to(dayjs('2023-09-16')) }}</p>
		<p>{{ dayjs().toNow() }}</p>
	</div>
</template>
