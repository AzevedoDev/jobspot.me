module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'airbnb-typescript-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-underscore-dangle": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/no-var-requires": "off",
    "camelcase": "off",
    "no-plusplus": "off"
  },
  settings: {
    "import/resolver": {
      "node": {
          "extensions": [".js",".jsx",".ts",".tsx"]
      }
    },
    react: {
      version: 'detect'
    }
  }
}
