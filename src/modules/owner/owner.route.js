import { Router } from 'express'
import { validateSchema } from '../../middleware/validationMiddleware.js'
import { OwnerController } from './owner.controller.js'
import { ownerCreateSchema, ownerIdSchema } from './owner.schema.js'
export function createOwnerRouter () {
  const ownerRouter = Router()
  // The end points start with= owner/
  ownerRouter.get('/', OwnerController.getAlls)
  ownerRouter.get('/:ownerId', validateSchema(ownerIdSchema), OwnerController.findById)
  ownerRouter.post('/', validateSchema(ownerCreateSchema), OwnerController.create)
  ownerRouter.put('/:ownerId', validateSchema(ownerIdSchema), OwnerController.modify)
  ownerRouter.delete('/:ownerId', validateSchema(ownerIdSchema), OwnerController.remove)

  return ownerRouter
}
