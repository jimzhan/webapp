console.log(`[CWD] -> ${process.cwd()}`)

module.export = {
  rootDir: process.cwd(),
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: require.resolve('./jest.setup'),
  testMatch: [
    '<rootDir>/__tests__/**/*.js?(x)',
    '<rootDir>/?(*.)+(spec|test).js?(x)',
  ]
}
