import request from 'supertest'
import App from '@webapp/api/App'

const app = new App()
beforeAll(async () => {
  await app.start()
})

afterAll(async () => {
  await app.stop()
})

describe('Application server', () => {
  it('start with empty routes', async () => {
    const response = await request(app.callback()).get('/')
    expect(response.status).toBe(404)
  })
})
