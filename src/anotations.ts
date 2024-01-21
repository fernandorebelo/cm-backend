// app.get('/', (request: Request, response: Response) => {
//   response.json({ message: 'Hello World' })
// })

// app.get('/client', async (request: Request, response: Response) => {
//   const clients = await prisma.client.findMany()
//   response.json(clients)
// })

// app.get('/client/:id', async (request: Request, response: Response) => {
//   const { id } = request.params
//   const result = await prisma.client.findUnique({
//     where: {
//       id: Number(id)
//     }
//   })
//   response.json(result)
// })

// app.post('/client', async (request: Request, response: Response) => {
//   const { name, city, email } = request.body
//   try {
//     await prisma.client.create({
//       data: {
//         name,
//         city,
//         email
//       }
//     })
//     // response.json({ message: `Client created successfully.` })
//     response.status(200).json({ message: `Client created successfully.` })
//   } catch (error) {
//     response.status(400).send(error)
//   }
// })

// app.put('/client/:id', async (request: Request, response: Response) => {
//   const { id } = request.params
//   const { name, city, email } = request.body
//   try {
//     const result = await prisma.client.update({
//       where: {
//         id: Number(id)
//       },
//       data: {
//         name: name,
//         city: city,
//         email: email
//       }
//     })
//     response.json({ message: `Client ${name} updated successfully.` })
//   } catch (error) {
//     response.json(error)
//   }
// })

// app.delete('/client/:id', async (request: Request, response: Response) => {
//   const { id } = request.params
//   try {
//     await prisma.client.delete({
//       where: { id: Number(id) }
//     })
//     response.json({
//       message: `Client deleted successfully.`
//     })
//   } catch (error) {
//     response.json(error)
//   }
// })
