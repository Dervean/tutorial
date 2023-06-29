module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:vue/essential',
    '@vue/typescript/recommended',
    // '@vue/typescript/recommended',
    // '@vue/typescript/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
