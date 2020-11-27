module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: [
    'plugin:prettier/recommended',
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
};
