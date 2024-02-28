import {
  createRepository,
  getRepository,
  getClientByIdRepository
} from '../repositories/client.repository'
import { Request, Response } from 'express'

export const createClient = async (request: Request, response: Response) => {
  try {
    const client = await createRepository(request.body)
    response.status(200).send(client)
  } catch (error) {
    response.status(400).send(error)
  }
}

export const getClient = async (request: Request, response: Response) => {
  const client = await getRepository()
  response.status(200).send(client)
}

export const getClientByIdController = async (
  request: Request,
  response: Response
) => {
  try {
    const clientId = parseInt(request.params.id)
    const client = await getClientByIdRepository(clientId)
    if (!client) {
      return response.status(404).send({ message: 'Client not found' })
    }
    response.status(200).send(client)
  } catch (error) {
    response.status(500).send(error)
  }
}
