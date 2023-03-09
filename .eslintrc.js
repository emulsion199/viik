/** @type {import('eslint').Linter.ConfigOverride} */
const TSConfig = {
  files: ["*.ts", "*.tsx"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      { allowNumber: true },
    ],
    "@typescript-eslint/require-await": "off",
  },
};

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ["next/core-web-vitals"],
  overrides: [TSConfig],
};

module.exports = config;
