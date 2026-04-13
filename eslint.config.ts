import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
    { ignores: ["dist", "node_modules"] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            prettierConfig,
        ],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
        },
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            prettier,
        },
        rules: {
            // React
            ...reactPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

            // TypeScript
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "error",

            // General
            "no-console": "warn",
            "prefer-const": "error",
            "no-duplicate-imports": "error",

            // Prettier (runs Prettier as an ESLint rule)
            "prettier/prettier": "error",
        },
        settings: {
            react: { version: "detect" },
        },
    }
);