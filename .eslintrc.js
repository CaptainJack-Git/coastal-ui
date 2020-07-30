module.exports = {
  parser: '@typescript-eslint/parser', // 提供对TS语法的解析
  extends: [
    'plugin:react/recommended', // 使用推荐的React lint的规则
    'plugin:@typescript-eslint/recommended', // 使用推荐的typescript lint规则
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: [
    '@typescript-eslint', // 提供一些TS的自定义规则
    'react-hooks' // react hooks的规则
  ],
  parserOptions: {
    ecmaVersion: '2019',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // ESLint添加JSX语法解析
    }
  },
  // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
  env: {
    es6: true
  },
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // https://cn.eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      'warn',
      {
        consistent: true,
        multiline: true
      }
    ],
    'react/jsx-no-target-blank': [0],
    'array-callback-return': 'off',
    'anchor-has-content': 'off',
  }
}