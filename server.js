const express = require('express')
const clients = require('./src/client/routes')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (request, response) => {
  response.send('hello world')
})

app.use('/api/v1/clients', clients)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
