const getClients = 'SELECT * FROM clients'
const getClientById = 'SELECT * FROM clients WHERE id = $1'
const checkEmailExists = 'SELECT c FROM clients c WHERE c.email = $1'
const addClient =
  'INSERT INTO clients (first_name, last_name, city, email) VALUES ($1, $2, $3, $4)'
const deleteClient = 'DELETE FROM clients WHERE id=$1'
const updateClient =
  'UPDATE clients SET first_name = $1, last_name = $2, city = $3 WHERE id = $4'

module.exports = {
  getClients,
  getClientById,
  checkEmailExists,
  addClient,
  deleteClient,
  updateClient
}
