import { createClient, getClient } from '../controllers/client.controller'

const clientRoutes = (app: any) => {
  app.post('/client', createClient)
  app.get('/client', getClient)
}

export { clientRoutes }
