const createCRUDController = (model) => {
  // GET: Fetch all items of a model
  const getAll = async (req, res) => {
    try {
      const {
        sortBy = 'createdAt',
        sortOrder = 'ASC',
        ...filters
      } = req.query

      // Allow only real schema fields as filters
      const allowedFilters = ['name', 'category', 'id']
      const mongoFilters = {}

      for (const key of allowedFilters) {
        if (filters[key] !== undefined) {
          mongoFilters[key] = filters[key]
        }
      }

      // Allow only sortable fields
      const allowedSortFields = ['name', 'createdAt', 'updatedAt']
      const sortField = allowedSortFields.includes(sortBy)
        ? sortBy
        : 'createdAt'

      const sortDirection = sortOrder === 'DESC' ? -1 : 1

      const items = await model
        .find(mongoFilters)
        .sort({ [sortField]: sortDirection })

      res.status(200).json(items)
    } catch (error) {
      console.error('Error fetching items:', error)
      res.status(500).json({ message: 'Server Error' })
    }
  }

  const getById = async (req, res) => {
    try {
      const { id } = req.params
  
      if (!id || id.length !== 24) {
        return res.status(400).json({ message: 'Invalid ID format' })
      }
  
      const item = await model.findById(id)
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' })
      }
  
      res.status(200).json(item)
    } catch (error) {
      console.error('Error fetching item by ID:', error)
      res.status(500).json({ message: 'Server Error' })
    }
  }
  
  // POST: Create a new item
  const create = async (req, res) => {
    // console.log("allowedChildren=>", req.body.allowedChildren)
    try {
      const newItem = new model(req.body) // Create a new instance of the model with the request body
      await newItem.save() // Save the item to the database
      res.status(201).json(newItem) // Return the saved item as the response
    } catch (error) {
      console.error('Error creating item:', error)
      res.status(500).json({ message: 'Server Error' })
    }
  }

  // PUT: Update an existing item by ID
  const update = async (req, res) => {
    try {
      const updatedItem = await model.findByIdAndUpdate(
        req.params.id, // Find the item by its ID
        req.body, // Update the item with the request body
        { new: true } // Return the updated item
      )

      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' })
      }

      res.status(200).json(updatedItem) // Return the updated item as the response
    } catch (error) {
      console.error('Error updating item:', error)
      res.status(500).json({ message: 'Server Error' })
    }
  }

  // DELETE: Delete an item by ID
  const remove = async (req, res) => {
    try {
      const deletedItem = await model.findByIdAndDelete(req.params.id) // Find and delete the item by ID

      if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' })
      }

      res.status(200).json({ message: 'Item deleted successfully' })
    } catch (error) {
      console.error('Error deleting item:', error)
      res.status(500).json({ message: 'Server Error' })
    }
  }

  const bulkUpdate = async (req, res) => {
    try {
      const updates = req.body // Expecting an array of { _id, ...fields }

      if (!Array.isArray(updates) || updates.length === 0) {
        return res.status(400).json({ message: 'Updates must be a non-empty array' })
      }

      const bulkOps = updates.map((u) => {
        if (!u._id) throw new Error('Missing _id in one of the updates')
        return {
          updateOne: {
            filter: { _id: u._id },
            update: { $set: { ...u } }
          }
        }
      })

      const result = await model.bulkWrite(bulkOps)

      res.status(200).json({ message: 'Bulk update successful', result })
    } catch (error) {
      console.error('Error in bulk update:', error)
      res.status(500).json({ message: 'Server Error', error: error.message })
    }
  }

  return { bulkUpdate, create, getAll, getById, remove, update }
}

export default createCRUDController
