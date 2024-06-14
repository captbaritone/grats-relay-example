import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import relay from "eslint-plugin-relay";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.jsx"],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
  ...fixupConfigRules(pluginReactConfig),
  {
    ignores: ["dist/**/*"],
  },
  {
    plugins: {
      relay: fixupPluginRules(relay),
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        // Allow unused variables for things like resolvers on Query
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "react/react-in-jsx-scope": "off",

      // Relay rules
      "relay/graphql-syntax": "error",
      "relay/must-colocate-fragment-spreads": "error",
      "relay/no-future-added-value": "error",
      "relay/unused-fields": "error",
    },
  },
];
