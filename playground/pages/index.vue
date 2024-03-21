<script setup lang="ts">
import { computed, ref, watch } from 'vue'
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
  onTrigger: e => console.log('formatInComputed triggered', e),
  onTrack: e => console.log('formatInComputed tracked', e),
})
const fromInComputed = computed(() => dayjs(date.value).from('2023-01-01'))
const longDateFormatInComputed = computed(() => dayjs(date.value).localeData().longDateFormat('L'))
const monthsInComputed = computed(() => dayjs(date.value).localeData().months())
</script>

<template>
  <div>
    <h2>
      i18n welcome message: <span data-testid="welcome"> {{ $t('welcome') }} </span>
    </h2>
    <h3>Select language:</h3>
    <select v-model="locale" data-testid="locale">
      <option value="en-gb">
        en-gb
      </option>
      <option value="hu">
        hu
      </option>
    </select>
    <h3>Test date: {{ date }}</h3>

    <h3>Format with localized data:</h3>
    <h4>Usage in template:</h4>
    <div class="bold" data-testid="format">
      {{ $dayjs(date).format('L LTS') }}
    </div>
    <InSlot data-testid="format-in-slot">
      {{ $dayjs(date).format('L LTS') }}
    </InSlot>
    <code>$dayjs(date).format('L LTS')</code>
    <div class="bold" data-testid="df">
      {{ $df(date, 'L LTS') }}
    </div>
    <InSlot data-testid="df-in-slot">
      {{ $df(date, 'L LTS') }}
    </InSlot>
    <code>$df(date, 'L LTS')</code>
    <h4>Usage in computed value:</h4>
    <div class="bold" data-testid="formatInComputed">
      {{ formatInComputed }}
    </div>
    <InSlot data-testid="formatInComputed-in-slot">
      {{ formatInComputed }}
    </InSlot>
    <code>const formatInComputed = computed(() => dayjs(date.value).format('L LTS'))</code>

    <h3>RelativeTime:</h3>
    <h4>Usage in template:</h4>
    <div class="bold" data-testid="from">
      {{ $dayjs(date).from('2023-01-01') }}
    </div>
    <InSlot data-testid="from-in-slot">
      {{ $dayjs(date).from('2023-01-01') }}
    </InSlot>
    <code>$dayjs(date).from('2023-01-01')</code>
    <h4>Usage in computed value:</h4>
    <div class="bold" data-testid="fromInComputed">
      {{ fromInComputed }}
    </div>
    <InSlot data-testid="fromInComputed-in-slot">
      {{ fromInComputed }}
    </InSlot>
    <code>const fromInComputed = computed(() => dayjs(date.value).from('2023-01-01'))</code>

    <h3>LocaleData:</h3>
    <h4>Usage in template:</h4>
    <div class="bold" data-testid="longDateFormat">
      {{ $dayjs(date).localeData().longDateFormat('L') }}
    </div>
    <InSlot data-testid="longDateFormat-in-slot">
      {{ $dayjs(date).localeData().longDateFormat('L') }}
    </InSlot>
    <code>$dayjs(date).localeData().longDateFormat('L')</code>
    <div class="bold" data-testid="months">
      {{ $dayjs(date).localeData().months() }}
    </div>
    <InSlot data-testid="months-in-slot">
      {{ $dayjs(date).localeData().months() }}
    </InSlot>
    <code>$dayjs(date).localeData().months()</code>
    <h4>Usage in computed value:</h4>
    <div class="bold" data-testid="longDateFormatInComputed">
      {{ longDateFormatInComputed }}
    </div>
    <InSlot data-testid="longDateFormatInComputed-in-slot">
      {{ longDateFormatInComputed }}
    </InSlot>
    <code>const localDataInComputed = computed(() => dayjs(date.value).localeData().longDateFormat('L'))</code>
    <div class="bold" data-testid="monthsInComputed">
      {{ monthsInComputed }}
    </div>
    <InSlot data-testid="monthsInComputed-in-slot">
      {{ monthsInComputed }}
    </InSlot>
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
</style>
