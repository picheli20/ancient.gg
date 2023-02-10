module.exports = {
  globals: {
    "ts-jest": {
      allowSyntheticDefaultImports: true,
    },
  },
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
