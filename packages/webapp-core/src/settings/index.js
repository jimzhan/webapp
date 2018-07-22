import register from 'convict-register'

/*
  Arguments
    - abspath: absolute path to the folder with settings modules.
    - recursive: whether to recursively find all settings modules.
    - settings: top level settings values.
*/
export default register(__dirname, false, {
  env: {
    doc: 'Deployment environment',
    format: String,
    default: 'development',
    env: 'NODE_ENV',
  },
  host: {
    format: String,
    default: '0.0.0.0',
    env: 'HOST',
  },
  port: {
    format: 'port',
    default: 9394,
    env: 'PORT',
  },
  keys: {
    doc: 'Application secret keys',
    format: Array,
    default: [],
    env: 'SECRET',
  },
})
