const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const sortDestructureKeys = require("eslint-plugin-sort-destructure-keys");
const prettier = require("eslint-plugin-prettier");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = [
    {
        ignores: ["**/node_modules", "**/plugins", "**/package.json", "**/package-lock.json"],
    },
    ...compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:@next/next/recommended",
    ),
    {
        languageOptions: {
            globals: {
                ...globals.amd,
                ...globals.browser,
                ...globals.node,
            },
            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        plugins: {
            "simple-import-sort": simpleImportSort,
            "sort-destructure-keys": sortDestructureKeys,
            prettier,
        },

        rules: {
            "@typescript-eslint/explicit-function-return-type": "off",

            "jsx-a11y/anchor-is-valid": ["error", {
                aspects: ["invalidHref", "preferButton"],
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
            }],

            "prettier/prettier": ["error", {}, {
                usePrettierrc: true,
            }],

            "react/jsx-sort-props": ["error", {
                callbacksLast: true,
                ignoreCase: false,
                noSortAlphabetically: false,
                reservedFirst: true,
                shorthandFirst: true,
                shorthandLast: false,
            }],

            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "simple-import-sort/exports": "error",
            "simple-import-sort/imports": "error",
            "sort-destructure-keys/sort-destructure-keys": 2,

            "sort-keys": ["error", "asc", {
                caseSensitive: true,
                minKeys: 2,
                natural: false,
            }],
        },

        settings: {
            react: {
                version: "detect",
            },
        },
    }
];
