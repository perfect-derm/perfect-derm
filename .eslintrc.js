module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/strongly-recommended",
    "plugin:tailwind/recommended"
  ],
  plugins: [
    'vue'
  ],
  rules: {
    "vue/no-v-html": "off"
  }
}
