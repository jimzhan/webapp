import test from 'ava'
import request from 'supertest'
import App from '@webapp/api/App'

const app = new App()

test.before(async () => {
  await app.start()
})

test.after(async () => {
  await app.stop()
})

test('Application server with empty routes', async (t) => {
  const response = await request(app.callback()).get('/')
  t.is(response.status, 404)
})
