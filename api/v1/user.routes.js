const { Router } = require('express')
const router     = Router()

const user_controller = require('../../controllers/userController')

router.get('/testUserAPI', user_controller.testUserAPI)

router.get('/', user_controller.getAllUsers)
router.get('/:id', user_controller.getOneUser)
router.post('/', user_controller.saveUser)
router.put('/:id', user_controller.updateUser)
router.delete('/:id', user_controller.deleteUser)

// Exportar el módulo
module.exports = router