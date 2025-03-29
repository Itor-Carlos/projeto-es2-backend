export default {
    testEnvironment: "node",
    transform: {},
    extensionsToTreatAsEsm: [".ts"],
    modulePaths: ["<rootDir>"],
    moduleNameMapper: {
      "^src/(.*)$": "<rootDir>/src/$1"
    },
    testMatch: ["**/test/**/**/*.js"],
    transformIgnorePatterns: [],
    setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
};
  