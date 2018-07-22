import { signals } from '@webapp/core'
import App from './App'

const app = new App()

app.use((ctx) => {
  ctx.body = { data: 'Message from Koa Server' }
})

app.start()

signals.terminated.forEach((signal) => {
  process.on(signal, () => {
    app.stop()
    process.exit()
  })
})
