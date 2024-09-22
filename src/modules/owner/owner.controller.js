import BaseController from '#modules/baseController.js'
import { owner } from './owner.model.js'

export class OwnerController extends BaseController {
  static async getAlls (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      let { limit, offset } = req.query

      limit = parseInt(limit, 10)
      offset = parseInt(offset, 10)

      const data = await owner.getAlls(limit, offset)
      return data && data.length > 0 ? { statusCode: 200, data } : { statusCode: 404, data: null }
    })
  }

  static async findById (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { ownerId } = req.params
      const data = await owner.findById(ownerId)
      return data && data.length > 0 ? { statusCode: 200, data } : { statusCode: 404, data: null }
    })
  }

  static async create (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const ownerData = req.body
      const data = await owner.create(ownerData)
      return { statusCode: 201, data }
    })
  }

  static async modify (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const ownerData = { ownerId: req.params.ownerId, ...req.body }
      const data = await owner.modify(ownerData)
      return { statusCode: 200, data }
    })
  }

  static async remove (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { ownerId } = req.params
      const data = await owner.remove(ownerId)
      return { statusCode: 200, data }
    })
  }
}
