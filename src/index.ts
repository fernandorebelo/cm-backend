import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import dotenv from 'dotenv'

const app = express()
const port = 3000

dotenv.config()

app.use(cors())
app.use(express.json())

routes(app)

app.listen(port)
console.log('servidor iniciou')
