import {
  createRepository,
  getRepository
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
