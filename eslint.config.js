import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                node: true,
                process: true
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            // Você pode adicionar regras extras aqui se quiser
        }
    }
];