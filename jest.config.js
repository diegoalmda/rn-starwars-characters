module.exports = {
  preset: "jest-expo",
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.expo/"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],
  testEnvironment: 'jsdom',
  "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js, jsx, tsx}",
    "!**/node_modules/**",
    "!**/android/**",
    "!**/ios/**",
    "!**/.expo/**",
  ],
  coverageReporters: ["lcov", "json"]
};