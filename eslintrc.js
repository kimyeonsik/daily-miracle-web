module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/prop-types": 0,
    "no-console": "off",
    "no-unused-vars": 1,
    "no-shadow": 1,
    "linebreak-style": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  },
  scripts: {
    format: "prettier --write src/**/*.ts{,x}",
    lint: "tsc --noEmit && eslint src/**/*.ts{,x}"
  }
};
