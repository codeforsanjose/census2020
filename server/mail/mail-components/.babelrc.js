module.exports = {
  "extends": "../../../.babelrc.js",
  "presets": [
    [
      "@babel/env",
      {
        "modules": "commonjs",
        "targets": {
          "node": true
        }
      }
    ]
  ]
};
