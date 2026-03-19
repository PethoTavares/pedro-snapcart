import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        fetch: "readonly",
        URL: "readonly",
        process: "readonly",
      },
    },
    files: ["index.js", "index.test.js"]
  }
]