import BaseController from '#modules/baseController.js'
import { breed } from './breed.model.js'

export class BreedController extends BaseController {
  static async getAlls (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      let { limit, offset } = req.query

      limit = parseInt(limit, 10)
      offset = parseInt(offset, 10)

      const data = await breed.getAlls(limit, offset)
      return data && data.length > 0 ? { statusCode: 200, data } : { statusCode: 404, data: null }
    })
  }

  static async findById (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { breedId } = req.params
      const data = await breed.findById(breedId)
      return data && data.length > 0 ? { statusCode: 200, data } : { statusCode: 404, data: null }
    })
  }

  static async create (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const breedData = req.body
      const data = await breed.create(breedData)
      return { statusCode: 201, data }
    })
  }

  static async modify (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const breedData = { breedId: req.params.breedId, ...req.body }
      const data = await breed.modify(breedData)
      return { statusCode: 200, data }
    })
  }

  static async remove (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { breedId } = req.params
      const data = await breed.remove(breedId)
      return { statusCode: 200, data }
    })
  }
}
