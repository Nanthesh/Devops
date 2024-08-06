import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";
import babelParser from "@babel/eslint-parser";

export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX support
        },
        babelOptions: {
          plugins: ["@babel/plugin-syntax-jsx"], // Ensure JSX syntax is supported
        },
        requireConfigFile: false,
      },
    },
    plugins: {
      react: pluginReact,
      jest: pluginJest,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error"
    },
    settings: {
      react: {
        version: "detect"
      }
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly"
      }
    }
  }
];
