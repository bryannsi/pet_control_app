import { medical } from './medical.model.js'

export class MedicalController {
  // Método para obtener el historial médico
  static async getAlls (req, res) {
    try {
      const { petId } = req.params
      let { limit, offset } = req.query

      limit = parseInt(limit, 10)
      offset = parseInt(offset, 10)

      const result = await medical.getAlls(petId, limit, offset)
      res.status(200).json(result)
    } catch (error) {
      console.error('Error getting medical history:', error)
      res.status(500).json({ error: 'Failed to retrieve medical history' })
    }
  }

  // Método para obtener un registro médico específico
  static async findById (req, res) {
    try {
      const { petId, recordId } = req.params
      const result = await medical.findById(petId, recordId)

      if (result) {
        res.status(200).json(result)
      } else {
        res.status(404).json({ error: 'Record not found' })
      }
    } catch (error) {
      console.error('Error getting medical record:', error)
      res.status(500).json({ error: 'Failed to retrieve medical record' })
    }
  }

  // Método para agregar un nuevo registro médico
  static async create (req, res) {
    try {
      const pet = { petId: req.params.petId, ...req.body }
      const result = await medical.create(pet)
      res.status(201).json(result)
    } catch (error) {
      console.error('Error adding medical record:', error)
      res.status(500).json({ error: 'Failed to add medical record' })
    }
  }

  // Método para actualizar un registro médico
  static async modify (req, res) {
    try {
      const pet = { id: req.params.recordId, ...req.body }
      const result = await medical.modify(pet)

      if (result) {
        res.status(200).json(result)
      } else {
        res.status(404).json({ error: 'Record not found' })
      }
    } catch (error) {
      console.error('Error updating medical record:', error)
      res.status(500).json({ error: 'Failed to update medical record' })
    }
  }

  // Método para eliminar un registro médico
  static async remove (req, res) {
    try {
      const { recordId } = req.params
      const result = await medical.remove(recordId)

      if (result) {
        res.status(204).send() // No content
      } else {
        res.status(404).json({ error: 'Record not found' })
      }
    } catch (error) {
      console.error('Error deleting medical record:', error)
      res.status(500).json({ error: 'Failed to delete medical record' })
    }
  }
}
