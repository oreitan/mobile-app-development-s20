# Eslint - Coding Style Standards

In  this course, we will be using the great `eslint` linter. Code linting is one of the great tools to enforce code style standards and code uniformity.

ESLint is an open source project originally created by [Nicholas C. Zakas](http://nczonline.net/) in June 2013. Its goal is to provide a pluggable linting utility for JavaScript. Read more about it [here](https://eslint.org/)

## Setup in your projects
1. run the following command to install relevant eslint modules:
```
npm install --save-dev eslint eslint-plugin-react eslint-config-react eslint-plugin-react-native eslint-config-react-native
```
2. create a `.eslintrc` file as follows
```json
{
  "env": {
    "react-native/react-native": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react", "react-native"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-native"
  ],
  "rules": {
    "react/prefer-stateless-function": 0,
    "class-methods-use-this": 0,
    "react-native/no-color-literals": 0,
    "import/no-commonjs": 0
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "it": true
  }
}
```

3. run `eslint` from the command line to make sure everything works well.
```
eslint .
```

For your convenient, feel free to add a `lint` script in your `scripts` section in your project's `package.json`

for example
```json
"script": {
    "lint": "eslint --cache --format codeframe --ext .js ."
}
```
