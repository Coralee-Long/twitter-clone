import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx,json}"]},
  {languageOptions: { globals: globals.browser, rules: {
    "no-trailing-spaces": "error", // Removes trailing whitespace
    "no-multiple-empty-lines": [
      "error",
      { "max": 0, "maxEOF": 0, "maxBOF": 0 }
    ]
  }, }},

  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];