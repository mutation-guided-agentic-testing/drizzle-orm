// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'pnpm',
  testRunner: 'vitest',
  mutate: [
    'src/*.ts',
    'src/query-builders/**/*.ts',
    'src/sql/**/*.ts',
    '!src/**/*.d.ts',
    '!src/type-tests/**/*.ts',
  ],
  testFiles: ['test/**/*.test.ts'],
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true,
  },
};
export default config;
