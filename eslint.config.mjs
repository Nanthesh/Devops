import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest"; // Add this line

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // Add Jest globals
      },
      ecmaVersion: 2021, // Ensure ECMAScript version is set
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      react: pluginReact,
      jest: pluginJest, // Add Jest plugin
    },
    env: {
      browser: true,
      es2021: true,
      jest: true, // Add Jest environment
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Optional, if you are using React 17+
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginJest.configs.recommended, // Add Jest recommended configuration
];
