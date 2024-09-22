import { createBreedRouter } from '#modules/breed/breed.route.js'
import { createMedicalRouter } from '#modules/medical/medical.route.js'
import { createOwnerRouter } from '#modules/owner/owner.route.js'
import { createPetRouter } from '#modules/pet/pet.route.js'
import { createUserRouter } from '#modules/user/user.route.js'

export default function setupRouter (app) {
  app.use('/user', createUserRouter())
  app.use('/pet', createPetRouter())
  app.use('/pet', createMedicalRouter())
  app.use('/breed', createBreedRouter())
  app.use('/owner', createOwnerRouter())
}
