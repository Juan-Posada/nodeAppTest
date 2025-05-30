// Creamos el Router para poder usar los verbos HTTP
const { Router } = require('express')
// Incluimos nuestro controlador de usuario
const categoryController = require('../../controllers/categoryController')
const router = Router(); // Llamamos al método Router de Express

// req => request => En request llegan los datos del body
// res => response => Se envían los datos hacia el cliente

router.get('/', categoryController.getAllCategories)

router.get('/:CategoryId', categoryController.getCategory)

router.post('/', categoryController.createCategory)

router.put('/:CategoryId', categoryController.updateCategory)

router.delete('/:CategoryId', categoryController.deleteCategory)

module.exports = router
