import { createMedicalRouter } from '../medical/medical.route.js'
import { createPetRouter } from '../pet/pet.route.js'
import { createUserRouter } from '../user/user.route.js'

export function setupRoutes (app) {
  app.use('/user', createUserRouter())
  app.use('/pet', createPetRouter())
  app.use('/pet', createMedicalRouter())
}
