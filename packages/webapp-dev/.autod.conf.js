module.exports = {
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'shelljs',
    'shx',
  ],
  devdep: [
    '@babel/cli',
    '@babel/core',
    '@babel/node',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    '@babel/preset-env',
    '@babel/register',
    '@babel/runtime',
  ],
  /* ------------------------------------------------------------
   * Scoped packages require manual installation via npm registry.
   * @SEE https://github.com/node-modules/autod/issues/34
   * ------------------------------------------------------------*/
  registry: 'https://registry.npm.taobao.org',
}
