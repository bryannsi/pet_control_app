import { Router } from 'express'
import { MedicalController } from './medical.controller.js'

export function createMedicalRouter () {
  const medicalRouter = Router()
  // The end points start with= /pet
  medicalRouter.get('/:petId/medical-history', MedicalController.getMedicalHistory) // medical-history?limit=intValue&offset=intValue
  medicalRouter.get('/:petId/medical-history/:recordId', MedicalController.getMedicalRecord)
  medicalRouter.post('/:petId/medical-history', MedicalController.addMedicalRecord)
  medicalRouter.put('/:petId/medical-history/:recordId', MedicalController.updateMedicalRecord)
  medicalRouter.delete('/:petId/medical-history/:recordId', MedicalController.deleteMedicalRecord)

  return medicalRouter
}
