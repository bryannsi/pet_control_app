import { Router } from 'express'
import { OwnerController } from './owner.controller.js'
export function createOwnerRouter () {
  const ownerRouter = Router()
  // The end points start with= owner/
  ownerRouter.get('/', OwnerController.getAlls)
  ownerRouter.get('/:ownerId', OwnerController.findById)
  ownerRouter.post('/', OwnerController.create)
  ownerRouter.put('/:ownerId', OwnerController.modify)
  ownerRouter.delete('/:ownerId', OwnerController.remove)

  return ownerRouter
}
