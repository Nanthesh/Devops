import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";

export default {
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
      test: "readonly",
      expect: "readonly"
    }
  },
  plugins: {
    react: pluginReact,
    jest: pluginJest,
  },
  rules: {
    ...pluginReact.configs.recommended.rules, // Include recommended rules from react plugin
    ...pluginJest.configs.recommended.rules, // Include recommended rules from jest plugin
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
