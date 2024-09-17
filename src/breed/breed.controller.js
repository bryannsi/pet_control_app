import { breed } from './breed.model.js'

export class BreedController {
  static async getAlls (req, res) {
    try {
      let { limit, offset } = req.query

      limit = parseInt(limit, 10)
      offset = parseInt(offset, 10)

      const result = await breed.getAlls(limit, offset)
      res.status(200).json(result)
    } catch (error) {
      console.error('Error getting the breeds:', error)
      res.status(500).json({ error: 'Failed to retrieve breeds' })
    }
  }

  static async findById (req, res) {
    try {
      const { breedId } = req.params
      const result = await breed.findById(breedId)
      if (result && result.length > 0) {
        res.status(200).json(result)
      } else {
        res.status(404).json({ error: 'Record not found' })
      }
    } catch (error) {
      // console.error('Error getting the breed:', error)
      res.status(500).json({ error: 'Failed to retrieve the breed' })
    }
  }

  static async create (req, res) {
    try {
      const breedData = req.body
      const result = await breed.create(breedData)
      res.status(201).json(result)
    } catch (error) {
      console.error('Error adding breed record:', error)
      res.status(500).json({ error: 'Failed to add breed record' })
    }
  }

  static async modify (req, res) {
    try {
      const breedData = { breedId: req.params.breedId, ...req.body }
      const result = await breed.modify(breedData)
      result ? res.status(200).json(result) : res.status(404).json({ error: 'Record not found' })
    } catch (error) {
      console.error('Error updating breed record:', error)
    }
  }

  static async remove (req, res) {
    try {
      const { breedId } = req.params
      const result = await breed.remove(breedId)
      result ? res.status(200).json(result) : res.status(404).json({ error: 'Record not found' })
    } catch (error) {
      console.error('Error removing breed record:', error)
      res.status(500).json({ error: 'Failed to remove breed record' })
    }
  }
}
