module.exports = {
  env: {
    browser: false,
    es6: true,
  },
  extends: [
    // 'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
      // 'immutable',
  ],
  rules: {
      'immutable/no-mutation': 2,
  },
};
