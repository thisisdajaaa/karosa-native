module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    "react-native/react-native": true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-hooks",
    "testing-library",
    "jest",
    "react",
    "react-native",
    "import",
    "promise",
    "react-native-a11y",
  ],
  extends: [
    "@react-native-community",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:import/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // custom rules based on project coding convention
    "@typescript-eslint/no-use-before-define": ["off"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-redeclare": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/naming-convention": [
      // Enforce interface names that should begin with an 'I'
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: { regex: "^I[A-Z]", match: true },
      },
    ],
    "no-console": ["error", { allow: ["warn"] }],
    "no-shadow": "off",
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "warn",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
    "react-native/no-raw-text": "warn",
    "react-native/no-single-element-style-arrays": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-disabled-tests": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-duplicates": "error",
    "import/named": "off",
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: true,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: false,
        allowObject: false,
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {},
    },
  ],
};
