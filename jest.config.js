module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "./components$1",
    "^@pages(.*)$": "./pages$1",
    "^@hooks(.*)$": "./hooks$1",
  },
  testEnvironment: 'jsdom',
};