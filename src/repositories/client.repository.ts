import { prisma } from '../services/prisma'

export const createRepository = async (data: any) => {
  const client = await prisma.client.create({
    data
  })
  return client
}

export const getRepository = async () => {
  const client = await prisma.client.findMany()
  return client
}
