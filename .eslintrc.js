module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  extends: ["react-app", "airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  rules: {
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "react/button-has-type": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "eqeqeq": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
       rootPathSuffix: "src"
      },
    }
   }
};
