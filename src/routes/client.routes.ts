import {
  createClient,
  getClient,
  getClientByIdController
} from '../controllers/client.controller'

const clientRoutes = (app: any) => {
  app.post('/client', createClient)
  app.get('/client', getClient)
  app.get('/client/:id', getClientByIdController)
}

export { clientRoutes }
