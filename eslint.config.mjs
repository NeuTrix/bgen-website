import nextPlugin from '@next/eslint-plugin-next';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', '.next', 'dist'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
];

