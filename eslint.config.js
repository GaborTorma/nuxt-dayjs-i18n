import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
  },
  arrowParens: true,
  markdown: false,
  rules: {
    'object-shorthand': ['error', 'always', {
      avoidQuotes: false,
    }],
    'ts/method-signature-style': ['error', 'method'],
    'no-console': 'off',
    'unused-imports/no-unused-vars': 'warn',
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false,
    }],
    'vue/max-attributes-per-line': ['warn', {
      singleline: 100,
      multiline: 1,
    }],
    'max-len': [
      'warn',
      {
        code: 125,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true,
      },
    ],
  },
  formatters: {
    markdown: 'prettier',
  },

})
