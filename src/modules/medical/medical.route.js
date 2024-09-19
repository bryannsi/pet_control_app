import { Router } from 'express'
import { MedicalController } from './medical.controller.js'

export function createMedicalRouter () {
  const medicalRouter = Router()
  // The end points start with= /pet
  medicalRouter.get('/:petId/medical-history', MedicalController.getAlls) // medical-history?limit=intValue&offset=intValue
  medicalRouter.get('/:petId/medical-history/:recordId', MedicalController.findById)
  medicalRouter.post('/:petId/medical-history', MedicalController.create)
  medicalRouter.put('/:petId/medical-history/:recordId', MedicalController.modify)
  medicalRouter.delete('/:petId/medical-history/:recordId', MedicalController.remove)

  return medicalRouter
}
