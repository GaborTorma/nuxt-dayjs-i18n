import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { createPage, setup } from '@nuxt/test-utils/e2e'

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

await setup({
  rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
})

describe('i18n', () => {
  it('welcome', async () => await testContent('welcome', {
    en: 'Welcome',
    hu: 'Üdv',
  }))
})

describe('dayjs-format', () => {
  const expected: Expected = {
    en: '11/08/2023 14:22:00',
    hu: '2023.08.11. 14:22:00',
  }

  it('format', async () => await testContent('format', expected))
  it('format-in-slot', async () => await testContent('format-in-slot', expected))
  it('df', async () => await testContent('df', expected))
  it('df-in-slot', async () => await testContent('df-in-slot', expected))
  it('formatInComputed', async () => await testContent('formatInComputed', expected))
  it('formatInComputed-in-slot', async () => await testContent('formatInComputed-in-slot', expected))
})

describe('dayjs-relativeTime', () => {
  const expected: Expected = {
    en: 'in 7 months',
    hu: '7 hónap múlva',
  }

  it('from', async () => await testContent('from', expected))
  it('from-in-slot', async () => await testContent('from-in-slot', expected))
  it('fromInComputed', async () => await testContent('fromInComputed', expected))
  it('fromInComputed-in-slot', async () => await testContent('fromInComputed-in-slot', expected))
})

describe('dayjs-localData', () => {
  describe('longDateFormat', () => {
    const expected: Expected = {
      en: 'DD/MM/YYYY',
      hu: 'YYYY.MM.DD.',
    }

    it('longDateFormat', async () => await testContent('longDateFormat', expected))
    it('longDateFormat-in-slot', async () => await testContent('longDateFormat-in-slot', expected))
    it('longDateFormatInComputed', async () => await testContent('longDateFormatInComputed', expected))
    it('longDateFormatInComputed-in-slot', async () => await testContent('longDateFormatInComputed-in-slot', expected))
  })

  describe('months', () => {
    const expected: Expected = {
      en: '[\n  "January",\n  "February",\n  "March",\n  "April",\n  "May",\n  "June",\n  "July",\n  "August",\n  "September",\n  "October",\n  "November",\n  "December"\n]',
      hu: '[\n  "január",\n  "február",\n  "március",\n  "április",\n  "május",\n  "június",\n  "július",\n  "augusztus",\n  "szeptember",\n  "október",\n  "november",\n  "december"\n]',
    }

    it('months', async () => await testContent('months', expected))
    it('months-in-slot', async () => await testContent('months-in-slot', expected))
    it('monthsInComputed', async () => await testContent('monthsInComputed', expected))
    it('monthsInComputed-in-slot', async () => await testContent('monthsInComputed-in-slot', expected))
  })
})
