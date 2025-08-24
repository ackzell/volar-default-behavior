import antfu from '@antfu/eslint-config';

export default antfu({
  type: 'lib',
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
  typescript: true,
  vue: true,
  jsonc: true,
  yaml: true,
  ignores: [
    '**/fixtures',
  ],
}, {
  files: ['**/*.vue'],
  rules: {
    // ... your other rules

    // Catch undefined components
    'vue/no-undef-components': ['error', {
      ignorePatterns: ['router-link', 'router-view'], // Ignore global components
    }],
  },
});
