import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 🔹 Ignore build & dependency folders (replaces .eslintignore)
  {
    ignores: ["node_modules", "dist", "build"],
  },

  // 🔹 Base ESLint + TypeScript configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  configPrettier, // 👈 disables conflicting ESLint formatting rules

  // 🔹 Project-specific rules
  {
    files: ["src/**/*.ts"],
    plugins: { prettier: pluginPrettier },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      allowObjectTypes: true,
      "prettier/prettier": ["error"], // 👈 makes Prettier errors visible in ESLint
    },
  },
]);
