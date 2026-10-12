// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'pnpm',
  reporters: ['html', 'clear-text', 'progress', 'dashboard', 'json'],
  testRunner: 'vitest',
  coverageAnalysis: 'perTest',
  buildCommand: 'pnpm run build',
  plugins: [
    '@stryker-mutator/vitest-runner',
    '@stryker-mutator/typescript-checker',
  ],
  mutate: [
    'src/*.ts',
    'src/query-builders/**/*.ts',
    'src/sql/**/*.ts',
    '!src/**/*.d.ts',
    '!src/type-tests/**/*.ts',
  ],
  testFiles: ['test/**/*.test.ts'],
  ignoreStatic: true,
  jsonReporter: {
    fileName: '../reports/drizzle-orm/stryker-mutations.json',
  },
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true,
  },
  incremental: true,
};
export default config;
