import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

export default [
    js.configs.recommended,
    {
        plugins: {
            prettier: prettier,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                process: 'readonly',
                console: 'readonly',
            },
        },
        rules: {
            'prettier/prettier': ['error'],
            'no-console': 'warn',
            'prefer-destructuring': [
                'error',
                {
                    VariableDeclarator: { array: true, object: true },
                    AssignmentExpression: { array: true, object: true },
                },
            ],
            'max-len': ['error', { code: 100 }],
            quotes: ['error', 'single'],
            indent: ['error', 4],
        },
    },
    configPrettier,
]
