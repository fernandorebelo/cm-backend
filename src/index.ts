import express from 'express'
import { Request, Response, Router } from 'express'

const app = express()
const port = 3000

app.get('/', (request: Request, response: Response) => {
  response.json({ message: 'ambiente criado' })
})

app.listen(port)
