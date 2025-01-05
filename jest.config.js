/** @type {import('ts-jest').JestConfigWithTsJest} **/

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript and JSX files
    '^.+\\.(js|jsx)$': 'babel-jest', // Transform JavaScript files
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: ['node_modules', '.next'],
};