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
          jsx: true, // Enable JSX syntax
        },
        requireConfigFile: true, // Explicitly require Babel config
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // For React 17+
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error"
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  }
];
