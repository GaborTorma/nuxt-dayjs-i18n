import antfu from '@gabortorma/antfu-eslint-config'
import withNuxt from './playground/.nuxt/eslint.config.mjs'

export default withNuxt(antfu())
