import { Router } from 'express'
import { PetController } from './pet.controller.js'

export function createPetRouter () {
  const petRouter = Router()
  // The end points start with= pet/
  petRouter.get('/', PetController.getPets) // get all pets
  petRouter.get('/:id', PetController.findPetById)
  petRouter.post('/', PetController.createPet)
  petRouter.put('/:id', PetController.modifyPet)
  petRouter.delete('/:id', PetController.deletePet)

  return petRouter
}
