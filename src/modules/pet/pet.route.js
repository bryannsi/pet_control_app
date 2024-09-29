import { Router } from 'express'
import { PetController } from './pet.controller.js'

export function createPetRouter () {
  const petRouter = Router()
  // The end points start with= pet/
  petRouter.get('/', PetController.getAlls) // get all pets
  petRouter.get('/:petId', PetController.findById)
  petRouter.post('/', PetController.create)
  petRouter.put('/:petId', PetController.modify)
  petRouter.delete('/:petId', PetController.remove)

  return petRouter
}
