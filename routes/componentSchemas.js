import express from 'express'
import ComponentSchemas from '../models/componentSchemas.js'
import createCRUDController from '../controllers/crudController.js'

const router = express.Router()
const componentSchemasController = createCRUDController(ComponentSchemas)

router.get('/', componentSchemasController.getAll)
router.get('/:id', componentSchemasController.getById)
router.post('/', componentSchemasController.create)
router.put('/:id', componentSchemasController.update)
router.delete('/:id', componentSchemasController.remove)

export default router
