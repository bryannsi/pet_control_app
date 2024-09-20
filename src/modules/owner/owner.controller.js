import BaseController from '#modules/baseController.js'
import { owner } from './owner.model.js'

export class OwnerController extends BaseController {
  static async getAllsBase (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      let { limit, offset } = req.query

      limit = parseInt(limit, 10)
      offset = parseInt(offset, 10)

      const result = await owner.getAlls(limit, offset)
      return result
    })
  }

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

  static async findById (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { ownerId } = req.params
      const result = await owner.findById(ownerId)
      return result && result.length > 0 ? { statusCode: 200, data: result } : { statusCode: 404, data: null }
    })
  }

  static async create (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const ownerData = req.body
      const result = await owner.create(ownerData)
      // Devolver el resultado y el código de estado
      return { statusCode: 201, data: result } // Código 201 para creación exitosa
    })
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
