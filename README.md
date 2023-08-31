# Nuxt Dayjs i18n

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Extend [dayjs-nuxt](https://github.com/fumeapp/dayjs) plugin with automatic i18n locale switching.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Instructions

<!-- Highlight some of the features your module provide here -->

- It automatically call `dayjs.locale('en')` when `i18n.setLocale('en')` is called.
- Always use `i18n.setLocale('en')` function instead of setting `i18n.locale.value = 'en'`, because value setting not fire the `i18n:beforeLocaleSwitch` and `i18n:localeSwitched` nuxt hooks.
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
	modules: ['nuxt-dayjs-i18n'],
})
```

That's it! You can now use Nuxt Dayjs i18n in your Nuxt app.

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
