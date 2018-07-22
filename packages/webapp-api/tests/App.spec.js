const request = require('supertest')
const App = require('../src/App')

const app = new App()

beforeAll(async () => {
  await app.start()
})

afterAll(async () => {
  await app.stop()
})

describe('Application server', () => {
  it('Start with empty routes application server', async () => {
    const response = await request(app.callback()).get('/')
    expect(response.status).toBe(404)
  })
})
