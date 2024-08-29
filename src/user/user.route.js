import { Router } from 'express'
import { UserController } from './user.controller.js'

export function createUserRouter () {
  const userRouter = Router()
  // The end points start with= user/
  userRouter.get('/profile/:username', UserController.profile)
  userRouter.post('/login', UserController.login)
  userRouter.post('/register', UserController.register)
  userRouter.post('/logout', UserController.logout)
  // userRouter.post('/protected', UserController.protected)

  return userRouter
}
