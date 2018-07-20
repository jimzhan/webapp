import App from './App'

const app = new App()

beforeAll(async () => {
  await app.start()
})

afterAll(async () => {
  await app.stop()
})

describe('Application server', () => {
  it('Start with empty routes application server', async () => {

  })
})
