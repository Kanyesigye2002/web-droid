module.exports = {
  extends: ['wesbos'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.', 'components', 'styles'],
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  root: true,
};

//! Below is viable alternative as .eslintrc.json
// {
//   "env": {
//     "browser": true,
//     "es2021": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:@next/next/recommended",
//     "next/core-web-vitals",
//     "prettier"
//   ],
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     "ecmaVersion": 12,
//     "sourceType": "module"
//   },
//   "plugins": [
//     "react",
//     "@next/eslint-plugin-next"
//   ],
//   "rules": {
//     "@next/next/no-img-element": 0,
//     "arrow-body-style": 1,
//     "import/no-unresolved": 2,
//     "import/no-useless-path-segments": 1,
//     "no-unused-vars": [
//       1,
//       {
//         "ignoreRestSiblings": false
//       }
//     ],
//     "react/display-name": 0,
//     "react/no-children-prop": 0,
//     "react/no-unescaped-entities": 0,
//     "react/prop-types": 1,
//     "react/react-in-jsx-scope": 0,
//     "react/self-closing-comp": 2
//   }
// }
