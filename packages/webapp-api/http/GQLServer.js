import Koa from 'koa'
import chalk from 'chalk'

const { log } = console

export default class GQLServer extends Koa {
  start(port) {
    return new Promise((resolve, reject) => {
      log(`${chalk.green('[@webapp/api]')} Application server started <port: ${chalk.underline.blue(port)}>`)
      this.listen(port)
    })
  }
}
