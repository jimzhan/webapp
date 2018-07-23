import App from './App'

const app = new App()

app.use((ctx) => {
  ctx.body = { data: 'Hello from Koa Server' }
})

app.start()
