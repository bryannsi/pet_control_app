import { Router } from 'express'
import { MedicalController } from '../medical/medical.controller.js'

export function createMedicalRouter () {
  const medicalRouter = Router()
  // The end points start with= /pet
  medicalRouter.get('/:id/medical-history', MedicalController.getMedicalHistory)
  medicalRouter.post('/:id/medical-history', MedicalController.addMedicalRecord)
  medicalRouter.put('/:id/medical-history/:recordId', MedicalController.updateMedicalRecord)
  medicalRouter.delete('/:id/medical-history/:recordId', MedicalController.deleteMedicalRecord)

  return medicalRouter
}
