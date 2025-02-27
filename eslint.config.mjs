import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:storybook/recommended",
      'next/core-web-vitals',
      'next/typescript'
    ],
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      "react/self-closing-comp": ["warn", {
        "component": true,
        "html": true
      }],
      "@typescript-eslint/no-empty-object-type": "off"
    }
  }),
];

export default eslintConfig;
