![eWay-CRM Logo](https://www.eway-crm.com/wp-content/themes/eway/img/email/logo_grey.png)
# eWay-CRM ESLint Rules for TypeScript

## Installation

```
npm i --save-dev eslint@8 @eway-crm/eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Configuration

Add configuration to your ```.eslintrc.json``` project file:

```
{
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": [
            "./tsconfig.json"
        ]
    },
    "extends": [
        "@eway-crm/eslint-config"
    ]
}
```

Test configuration:

```
npx eslint src
```