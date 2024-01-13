const pool = require('../../db')
const queries = require('./queries')

const getClients = (request, response) => {
  pool.query(queries.getClients, (error, results) => {
    if (error) throw error
    response.status(200).json(results.rows)
    console.log('Get all clients')
  })
}

const getClientById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query(queries.getClientById, [id], (error, results) => {
    if (error) throw error
    response.status(200).json(results.rows)
    console.log('get client by id')
  })
}

const addClient = (request, response) => {
  const { first_name, last_name, city, email } = request.body

  //check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      response.send('Email already exists.')
    } else {
      //add student to database
      pool.query(
        queries.addClient,
        [first_name, last_name, city, email],
        (error, results) => {
          if (error) throw error
          response.status(201).send('Client created successfully.')
          console.log('Client created')
        }
      )
    }
  })
}

const deleteClient = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query(queries.getClientById, [id], (error, results) => {
    //check if the client exists
    const noClientFound = !results.rows.length
    if (noClientFound) {
      response.send('Client does not exist in the database.')
    } else {
      //if exists, delete the client
      pool.query(queries.deleteClient, [id], (error, resulta) => {
        if (error) throw error
        response.status(200).send('Client removed successfully.')
      })
    }
  })
}

const updateClient = (request, response) => {
  const id = parseInt(request.params.id)
  const { first_name, last_name, city, email } = request.body
  pool.query(queries.getClientById, [id], (error, results) => {
    //check if the client exists
    const noClientFound = !results.rows.length
    if (noClientFound) {
      response.send('Client does not exist in the database.')
    } else {
      pool.query(
        queries.updateClient,
        [first_name, last_name, city, id],
        (error, results) => {
          if (error) throw error
          response.status(200).send('Client updated successfully.')
        }
      )
    }
  })
}

module.exports = {
  getClients,
  getClientById,
  addClient,
  deleteClient,
  updateClient
}
