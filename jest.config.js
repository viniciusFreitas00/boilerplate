module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  coveragePathIgnorePatterns: ['_app.tsx', '_document.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
