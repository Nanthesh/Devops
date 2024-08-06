import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      // Intentionally leave out all custom rules to see if the error persists
    }
  }
];

