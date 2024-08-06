import babelParser from "@babel/eslint-parser";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          plugins: ["@babel/plugin-syntax-jsx"],
        },
        requireConfigFile: false,
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  }
];
