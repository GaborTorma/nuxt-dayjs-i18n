import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('ssr', async () => {
	await setup({
		rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
	})

	it('Check Welcome message', async () => {
		// Get response to a server-rendered page with `$fetch`.
		const html = await $fetch('/')
		expect(html).toContain('Welcome!')
	})
})
