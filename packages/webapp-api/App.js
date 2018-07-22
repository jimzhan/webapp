import Koa from 'koa'
import cors from '@koa/cors'
import chalk from 'chalk'
import settings from './settings'

const { log } = console
const port = settings.get('port')

class App extends Koa {
  constructor() {
    super()
    this.server = null
    this.use(cors())
  }

  start() {
    return new Promise((resolve) => {
      this.server = this.listen(port)
      log(`${chalk.green('[@webapp/api]')} Server started <port: ${chalk.underline.yellow(port)}>`)
      resolve(this.server)
    })
  }

  stop() {
    return new Promise((resolve) => {
      if (this.server) {
        this.server.close()
      }
      log(`${chalk.green('[@webapp/api]')} Server stopped <port: ${chalk.underline.yellow(port)}>`)
      resolve()
    })
  }
}

export default App
