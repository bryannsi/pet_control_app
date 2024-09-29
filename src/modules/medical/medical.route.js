import { Router } from 'express'
import { validateSchema } from '../../middleware/validationMiddleware.js'
import { MedicalController } from './medical.controller.js'

import { schemas } from './medical.schema.js'

export function createMedicalRouter () {
  const medicalRouter = Router()
  // The end points start with= /pet
  medicalRouter.get('/:petId/medical-history', validateSchema(schemas.getAllsSchema), MedicalController.getAlls) // medical-history?limit=intValue&offset=intValue
  medicalRouter.get('/:petId/medical-history/:medicalId', validateSchema(schemas.findByIdSchema), MedicalController.findById)
  medicalRouter.post('/:petId/medical-history', validateSchema(schemas.createSchema), MedicalController.create)
  medicalRouter.put('/:petId/medical-history/:medicalId', validateSchema(schemas.modifySchema), MedicalController.modify)
  medicalRouter.delete('/:petId/medical-history/:medicalId', validateSchema(schemas.removeSchema), MedicalController.remove)

  return medicalRouter
}
