import { createBreedRouter } from '../breed/breed.route.js'
import { createMedicalRouter } from '../medical/medical.route.js'
import { createPetRouter } from '../pet/pet.route.js'
import { createUserRouter } from '../user/user.route.js'

export default function setupRoutes (app) {
  app.use('/user', createUserRouter())
  app.use('/pet', createPetRouter())
  app.use('/pet', createMedicalRouter())
  app.use('/breed', createBreedRouter())
}
