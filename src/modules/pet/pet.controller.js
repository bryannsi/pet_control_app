import BaseController from '#modules/baseController.js'
import { pet } from './pet.model.js'

export class PetController extends BaseController {
  static async getAlls (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      let { limit, offset } = req.query

      limit = parseInt(limit, 10)
      offset = parseInt(offset, 10)

      const data = await pet.getAlls(limit, offset)
      return data && data.length > 0 ? { statusCode: 200, data } : { statusCode: 404, data: null }
    })
  }

  static async findById (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { petId } = req.params
      const data = await pet.findById(petId)
      return data && data.length > 0 ? { statusCode: 200, data } : { statusCode: 404, data: null }
    })
  }

  static async create (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const petData = req.body
      const data = await pet.create(petData)
      return { statusCode: 201, data }
    })
  }

  static async modify (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const petData = { petId: req.params.petId, ...req.body }
      const data = await pet.modify(petData)
      return { statusCode: 200, data }
    })
  }

  static async remove (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { petId } = req.params
      const data = await pet.remove(petId)
      return { statusCode: 200, data }
    })
  }
}
