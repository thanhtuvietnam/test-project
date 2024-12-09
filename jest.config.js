// You can learn more about each option below in the Jest docs: https://jestjs.io/docs/configuration.

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.*',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/src/components/**/*.stories.*',
    '!<rootDir>/src/pages/_app.tsx',
  ],
  coverageReporters: ['json', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  moduleNameMapper: {
    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': `<rootDir>/__mocks__/fileMock.js`,

    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks(.*)$': '<rootDir>/hooks$1',
    '^@/lib(.*)$': '<rootDir>/src/lib$1',
    '^@/mocks(.*)$': '<rootDir>/__mocks__$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/tests(.*)$': '<rootDir>/.jest$1',
  },

  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>[/\\\\](node_modules|.next)[/\\\\]',
    '<rootDir>/.jest/test-utils.tsx',
    '<rootDir>/__mocks__/*',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  watchPlugins: ['jest-watch-typeahead/filename'],
};
