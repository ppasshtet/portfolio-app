module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/valid-v-slot': ['error', {
      allowModifiers: false
    }],
    'vue/no-dupe-keys': ['error', {
      groups: []
    }]
  }
}
