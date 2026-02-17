module.exports = {
    extends: ["plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking"],
    rules: {
        "no-var": "error",
        "no-undef-init": "error",
        "no-irregular-whitespace": "error",
        "no-throw-literal": "error",
        "eqeqeq": ["error", "always"],
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/restrict-template-expressions": [
            "error",
            {
                allowNumber: true,
                allowBoolean: true,
                allowNullish: true,
            },
        ],
        semi: "off",
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/no-extra-non-null-assertion": ["error"],
        "@typescript-eslint/no-for-in-array": ["error"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/unbound-method": [
            "error",
            {
                ignoreStatic: true,
            },
        ],
        "@typescript-eslint/no-unused-vars": "warn",
        "prefer-const": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "object-curly-newline": [
            "error",
            {
                ObjectExpression: {
                    multiline: true,
                    consistent: true,
                },
            },
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                max: 1,
                maxEOF: 0,
                maxBOF: 0,
            },
        ],
        "key-spacing": ["error", { beforeColon: false, afterColon: true, mode: "strict" }],
        "no-multi-spaces": "error",
        "no-trailing-spaces": "error",
        "padding-line-between-statements": ["error", { blankLine: "never", prev: "return", next: "*" }],
    },
};
