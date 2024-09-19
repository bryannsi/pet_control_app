import handleError from '#errorHandler/handleError.js'
import { pet } from './pet.model.js'
export class PetController {
  static async getAlls (req, res) {
    try {
      let { limit, offset } = req.query

      limit = parseInt(limit, 10)
      offset = parseInt(offset, 10)

      const result = await pet.getAlls(limit, offset)
      result && result.length > 0 ? res.status(200) : res.status(404)
      res.json(result)
    } catch (error) {
      const errorResponse = handleError(error)
      res.status(errorResponse.status).json({ error: errorResponse.message })
    }
  }

  static async findById (req, res) {
    try {
      const { petId } = req.params
      const result = await pet.findById(petId)
      result && result.length > 0 ? res.status(200) : res.status(404)
      res.json(result)
    } catch (error) {
      // console.error('Error getting the pet:', error)
      res.status(500).json({ error: 'Failed to retrieve the pet' })
    }
  }

  static async create (req, res) {
    try {
      const petData = req.body
      const result = await pet.create(petData)
      res.status(201).json({ message: 'successfully created', data: { result } })
    } catch (error) {
      const errorResponse = handleError(error)
      res.status(errorResponse.status).json({ error: errorResponse.message })
    }
  }

  static async modify (req, res) {
    try {
      const petData = { petId: req.params.petId, ...req.body }
      const result = await pet.modify(petData)
      result ? res.status(200).json({ message: 'successfully updated' }) : res.status(404).json({ error: 'Record not found' })
    } catch (error) {
      console.error('Error updating pet record:', error)
    }
  }

  static async remove (req, res) {
    try {
      const { petId } = req.params
      const result = await pet.remove(petId)
      result ? res.status(200).json({ message: 'successfully removed' }) : res.status(404).json({ error: 'Record not found' })
    } catch (error) {
      console.error('Error removing pet record:', error)
      res.status(500).json({ error: 'Failed to remove pet record' })
    }
  }
}
