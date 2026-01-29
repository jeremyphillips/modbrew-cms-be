import express from 'express'
import ComponentContent from '../models/componentContent.js'
import createCRUDController from '../controllers/crudController.js'

const router = express.Router()
const componentContentController = createCRUDController(ComponentContent)

router.get('/', componentContentController.getAll)
router.get('/:id', componentContentController.getById)
router.post('/', componentContentController.create)
router.put('/:id', componentContentController.update)
router.delete('/:id', componentContentController.remove)

export default router
