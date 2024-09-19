import handleError from '../db/utils/handleError.js'
import { owner } from './owner.model.js'

export class OwnerController {
  static async getAlls (req, res) {
    try {
      let { limit, offset } = req.query

      limit = parseInt(limit, 10)
      offset = parseInt(offset, 10)

      const result = await owner.getAlls(limit, offset)
      res.status(200).json(result)
    } catch (error) {
      console.error('Error getting the owners:', error)
      res.status(500).json({ error: 'Failed to retrieve owners' })
    }
  }

  static async findById (req, res) {
    try {
      const { ownerId } = req.params
      const result = await owner.findById(ownerId)
      if (result && result.length > 0) {
        res.status(200).json(result)
      } else {
        res.status(404).json({ error: 'Record not found' })
      }
    } catch (error) {
      // console.error('Error getting the owner:', error)
      res.status(500).json({ error: 'Failed to retrieve the owner' })
    }
  }

  static async create (req, res) {
    try {
      const ownerData = req.body
      const result = await owner.create(ownerData)
      res.status(201).json({ message: 'successfully created', data: { id: result } })
    } catch (error) {
      const errorResponse = handleError(error)
      res.status(errorResponse.status).json({ error: errorResponse.message })
    }
  }

  static async modify (req, res) {
    try {
      const ownerData = { ownerId: req.params.ownerId, ...req.body }
      const result = await owner.modify(ownerData)
      result ? res.status(200).json({ message: 'successfully updated' }) : res.status(404).json({ error: 'Record not found' })
    } catch (error) {
      console.error('Error updating owner record:', error)
    }
  }

  static async remove (req, res) {
    try {
      const { ownerId } = req.params
      const result = await owner.remove(ownerId)
      result ? res.status(200).json({ message: 'successfully removed' }) : res.status(404).json({ error: 'Record not found' })
    } catch (error) {
      console.error('Error removing owner record:', error)
      res.status(500).json({ error: 'Failed to remove owner record' })
    }
  }
}
