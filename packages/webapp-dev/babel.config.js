module.exports = {
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime'
  ],
  presets: [
    ['@babel/preset-env',  { "targets": { "node": "current" } }]
  ]
}