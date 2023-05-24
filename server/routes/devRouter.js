const Router = require('express')
const router = new Router()
const devController = require('../controllers/devController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), devController.create)
router.get('/', devController.getAll)

module.exports = router