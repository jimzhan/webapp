import { settings } from '@webapp/core'
import { GQLServer } from './http'

const app = new GQLServer()
const port = settings.get('port')

app.start(port)
