import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  prettier,
  ...astro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
