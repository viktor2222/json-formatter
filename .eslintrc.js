module.exports = {
  extends: ["standard", "prettier"],
  plugins: ["standard", "react", "prettier"],
  rules: {
    "no-var": "error",
    "no-unused-vars": 1,
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    indent: ["error", 2],
    quotes: [
      "error",
      "single",
      {
        allowTemplateLiterals: true
      }
    ],
    "standard/object-curly-even-spacing": ["error", "either"],
    "standard/array-bracket-even-spacing": ["error", "either"],
    "standard/computed-property-even-spacing": ["error", "even"],
    "standard/no-callback-literal": ["error", ["cb", "callback"]],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-max-props-per-line": [
      1,
      {
        maximum: 1,
        when: "multiline"
      }
    ],
    "jsx-quotes": ["error", "prefer-single"],
    camelcase: 0
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8
  },
  globals: {
    analytics: true,
    fbq: true,
    Intercom: true,
    _GUARANTEE: true
  }
};
