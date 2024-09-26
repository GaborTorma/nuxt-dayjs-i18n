import { fileURLToPath } from 'node:url'
import { createPage, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

interface Expected {
  en: string
  hu: string
}

async function testContent(testId: string, { hu, en }: Expected) {
  const page = await createPage('/')

  async function switchLocale(locale: string) {
    await page.getByTestId('locale').selectOption(locale)
    await page.waitForTimeout(10)
  }

  async function testText(expected: string) {
    const text = await page.getByTestId(testId).textContent()
    expect(text).toContain(expected)
  }

  await switchLocale('en-gb')
  await testText(en)
  await switchLocale('hu')
  await testText(hu)
  await switchLocale('en-gb')
  await testText(en)
  await page.close()
}

// eslint-disable-next-line antfu/no-top-level-await
await setup({
  rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
})

describe('i18n', () => {
  it('welcome', async () => testContent('welcome', {
    en: 'Welcome',
    hu: 'Üdv',
  }))
})

describe('dayjs-format', () => {
  const expected: Expected = {
    en: '11/08/2023 14:22:00',
    hu: '2023.08.11. 14:22:00',
  }

  it('format', async () => testContent('format', expected))
  it('format-in-slot', async () => testContent('format-in-slot', expected))
  it('df', async () => testContent('df', expected))
  it('df-in-slot', async () => testContent('df-in-slot', expected))
  it('formatInComputed', async () => testContent('formatInComputed', expected))
  it('formatInComputed-in-slot', async () => testContent('formatInComputed-in-slot', expected))
})

describe('dayjs-relativeTime', () => {
  const expected: Expected = {
    en: 'in 7 months',
    hu: '7 hónap múlva',
  }

  it('from', async () => testContent('from', expected))
  it('from-in-slot', async () => testContent('from-in-slot', expected))
  it('fromInComputed', async () => testContent('fromInComputed', expected))
  it('fromInComputed-in-slot', async () => testContent('fromInComputed-in-slot', expected))
})

describe('dayjs-localData', () => {
  describe('longDateFormat', () => {
    const expected: Expected = {
      en: 'DD/MM/YYYY',
      hu: 'YYYY.MM.DD.',
    }

    it('longDateFormat', async () => testContent('longDateFormat', expected))
    it('longDateFormat-in-slot', async () => testContent('longDateFormat-in-slot', expected))
    it('longDateFormatInComputed', async () => testContent('longDateFormatInComputed', expected))
    it('longDateFormatInComputed-in-slot', async () => testContent('longDateFormatInComputed-in-slot', expected))
  })

  describe('months', () => {
    const expected: Expected = {
      en: '[\n  "January",\n  "February",\n  "March",\n  "April",\n  "May",\n  "June",\n  "July",\n  "August",\n  "September",\n  "October",\n  "November",\n  "December"\n]',
      hu: '[\n  "január",\n  "február",\n  "március",\n  "április",\n  "május",\n  "június",\n  "július",\n  "augusztus",\n  "szeptember",\n  "október",\n  "november",\n  "december"\n]',
    }

    it('months', async () => testContent('months', expected))
    it('months-in-slot', async () => testContent('months-in-slot', expected))
    it('monthsInComputed', async () => testContent('monthsInComputed', expected))
    it('monthsInComputed-in-slot', async () => testContent('monthsInComputed-in-slot', expected))
  })
})
