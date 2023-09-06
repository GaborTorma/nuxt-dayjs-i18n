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
		<h3>Computed now: {{ now }}</h3>
		<h3>Locally en format: {{ dayjs(date).locale('en').format('L LTS') }}</h3>
		<p>Format: {{ dayjs().format('L LTS') }}</p>
		<p>Computed: {{ now }}</p>
		<p>ComputedFormat: {{ dayjs(new Date()).format('L LTS') }}</p>
		<p>fromNow: {{ dayjs().fromNow() }}</p>
		<p>fromNow: {{ dayjs().from(new Date('2023')) }}</p>
		<p>toNow: {{ dayjs().toNow() }}</p>
		<p>monthsShort: {{ dayjs.monthsShort() }}</p>
		<p>weekdays: {{ dayjs.weekdays() }}</p>
		<p>longDateFormat: {{ dayjs().localeData().longDateFormat('L') }}</p>
		<p>localeData().weekdays: {{ dayjs.localeData().weekdays() }}</p>
		<button @click="dayjs.locale('en')">en</button>
	</div>
</template>
