import { Router } from 'express'
import { BreedController } from './breed.controller.js'
export function createBreedRouter () {
  const breedRouter = Router()
  // The end points start with= breed/
  breedRouter.get('/', BreedController.getAlls)
  breedRouter.get('/:breedId', BreedController.findById)
  breedRouter.post('/', BreedController.create)
  breedRouter.put('/:breedId', BreedController.modify)
  breedRouter.delete('/:breedId', BreedController.remove)

  return breedRouter
}
