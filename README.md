# Nuxt Dayjs i18n

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
[![code style][code-style-src]][code-style-href]

Extend [dayjs-nuxt](https://github.com/fumeapp/dayjs) plugin with automatic i18n locale switching, computed plugins and provide format function.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [👾 &nbsp;Playground](https://stackblitz.com/edit/nuxt-dayjs-i18n)

## Instructions

<!-- Highlight some of the features your module provide here -->

- It automatically call `dayjs.locale('en')` when `i18n.setLocale('en')` is called.
- Always use `i18n.setLocale('en')` function instead of setting `i18n.locale.value = 'en'`,
  because value setting not fire the `i18n:beforeLocaleSwitch` and `i18n:localeSwitched` nuxt hooks.
- Don't use `dayjs.locale` function, because it doesn't called back the `i18n.setLocale`.
- You can change locales locally with `dayjs().locale('en')` function.

## Quick Setup

1. Add `nuxt-dayjs-i18n` dependency to your project

```bash
# Using pnpm
pnpm add -D @gabortorma/nuxt-dayjs-i18n

# Using yarn
yarn add --dev @gabortorma/nuxt-dayjs-i18n

# Using npm
npm install --save-dev @gabortorma/nuxt-dayjs-i18n
```

2. Add `nuxt-dayjs-i18n` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@gabortorma/nuxt-dayjs-i18n', '@nuxtjs/i18n', 'nuxt-dayjs'],
})
```

## Configuration

You can specify the plugins, set ato provide format function and debug

```js
export default defineNuxtConfig({
  ...
  i18n: {
    locales: [{
        code: 'en-gb',
        iso: 'en-GB',
        file: 'en-gb.ts',
        name: 'English',
      },
      {
        // use same code with dayjs locale file names:
        // https://github.com/iamkun/dayjs/tree/dev/src/locale
        code: 'hu',
        iso: 'hu-HU',
        file: 'hu.ts',
        name: 'Magyar',
    }],
    ...
  },
  dayjs : {
    locales: ['en-gb', 'hu'],
    // defaultLocale: 'en'
    // !! don't use defaultLocale, it comes from i18n
    ...
  },
  dayjsI18n: {
    computedPlugins: true, // you can specify in array: ['localiztedFormat', 'relativeTime', 'localeData']
    provideFormat: true, // provide $df for Vue
    debug: false,
  }
  ...
})
```

## Basic usage

You can check [dayjs-nuxt](https://github.com/fumeapp/dayjs#basic-usage)

## Usage in computed value

Original dayjs function lost reactivity in computed value and does not change when the locale is changed.
These three computed plugin provides a solution for this.

### Localized format

```js
const formatInComputed = computed(() => dayjs(new Date()).format('L LTS'))
// still reactive, format result value changes when locale is changed by i18n.setLocale
```

### Relative time

#### computedFrom

```js
const fromInComputed = computed(() => dayjs(new Date()).from('2023-01-01'))
// still reactive, from result value changes when locale is changed by i18n.setLocale
```

#### computedFromNow

```js
const fromNowInComputed = computed(() => dayjs(new Date()).fromNow())
// still reactive, fromNow result value changes when locale is changed by i18n.setLocale
```

#### computedTo

```js
const toInComputed = computed(() => dayjs(new Date()).to('2023-01-01'))
// still reactive, to result value changes when locale is changed by i18n.setLocale
```

#### computedToNow

```js
const toNowInComputed = computed(() => dayjs(new Date()).toNow())
// still reactive, toNow result value changes when locale is changed by i18n.setLocale
```

### Locale data

```js
const monthsInComputed = computed(() => dayjs.localeData().months())
// still reactive, months result value changes when locale is changed by i18n.setLocale

dayjs.localeData().xxxx()
// still reactive, result value of any function of localeData changes when locale is changed by i18n.setLocale
```

You can check more examples in [Playground](https://stackblitz.com/edit/nuxt-dayjs-i18n)

## Provided format

You can use the provided format function anywhere.

```vue
<template>
  <div>
    {{ $df('2023-09-07 15:00:02', 'L LTS') }}
    // en-US output: 09/07/2023 3:00:02 PM
  </div>
</template>
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@gabortorma/nuxt-dayjs-i18n/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@gabortorma/nuxt-dayjs-i18n
[npm-downloads-src]: https://img.shields.io/npm/dm/@gabortorma/nuxt-dayjs-i18n.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@gabortorma/nuxt-dayjs-i18n
[license-src]: https://img.shields.io/npm/l/@gabortorma/nuxt-dayjs-i18n.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@gabortorma/nuxt-dayjs-i18n
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/antfu/eslint-config
