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
		<h3>Computed format now: {{ dayjs(date).computedFormat('L LTS') }}</h3>
		<h3>Locally en format: {{ dayjs(date).locale('en').format('L LTS') }}</h3>
		<h3>Locally en computed.format: {{ dayjs(date).locale('en').computedFormat('L LTS') }}</h3>
		<button @click="dayjs.locale('en')">en</button>
	</div>
</template>
