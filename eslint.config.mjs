import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Define necessary globals
      },
    },
    plugins: {
      react: pluginReact,
      jest: pluginJest,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // If using React 17+ JSX Transform
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        // Include other Jest globals if needed
      },
    },
    rules: {
      // Add or override rules specific to test files here
    },
  },
];
