const { Router } = require('express')
const controller = require('../controllers/clientController')

const router = Router()

router.get('/', controller.getClients)
router.get('/:id', controller.getClientById)
router.post('/', controller.addClient)
router.delete('/:id', controller.deleteClient)
router.put('/:id', controller.updateClient)

module.exports = router
