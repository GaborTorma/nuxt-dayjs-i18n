# Nuxt Dayjs i18n

Extend [dayjs-nuxt](https://github.com/fumeapp/dayjs) plugin with automatic i18n locale switching, computed plugins and provide format function.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [👾 &nbsp;Playground](https://stackblitz.com/edit/nuxt-dayjs-i18n)

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
	modules: [
		'@gabortorma/nuxt-dayjs-i18n',
		'@nuxtjs/i18n',
		'nuxt-dayjs',
	],
})
```

## Configuration

You can specify the plugins, set ato provide format function and debug

```ts
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
