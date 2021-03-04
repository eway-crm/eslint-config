module.exports = {
    "extends": [
        "plugin:@typescript-eslint/recommended",
    ],
    "rules": {
        "no-var": "error",
        "no-undef-init": "error",
        "no-irregular-whitespace": "error",
        "no-throw-literal": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/restrict-template-expressions": [
            "error",
            {
                "allowNumber": true,
                "allowBoolean": true,
                "allowNullish": true
            }
        ],
        "semi": "off",
        "@typescript-eslint/semi": [ "error" ],
        "@typescript-eslint/no-extra-non-null-assertion": [ "error" ],
        "@typescript-eslint/no-for-in-array": [ "error" ]
      }
};