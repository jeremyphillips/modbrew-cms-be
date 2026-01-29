import express from 'express'
import componentSchemasRouter from './componentSchemas.js'
import componentContentRouter from './componentContent.js'
import pagesRouter from './pages.js'

const router = express.Router()

// Define your routes in this file or import them from separate files.
router.use('/component-schemas', componentSchemasRouter)
router.use('/component-content', componentContentRouter)
router.use('/pages-content', pagesRouter)

export default router
