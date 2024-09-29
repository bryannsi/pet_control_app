import BaseController from '#modules/baseController.js'
import { medical } from './medical.model.js'

export class MedicalController extends BaseController {
  static async getAlls (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { petId } = req.params
      const { limit, offset } = req.query

      const data = await medical.getAlls(petId, limit, offset)
      return data && data.length > 0 ? { statusCode: 200, data } : { statusCode: 404, data: null }
    })
  }

  static async findById (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { petId, medicalId } = req.params
      const data = await medical.findById(petId, medicalId)
      return data && data.length > 0 ? { statusCode: 200, data } : { statusCode: 404, data: null }
    })
  }

  static async create (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { petId } = req.params
      const medicalData = req.body
      const data = await medical.create(petId, medicalData)
      return { statusCode: 201, data }
    })
  }

  static async modify (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { medicalId } = req.params
      const medicalData = req.body
      const data = await medical.modify(medicalId, medicalData)
      return { statusCode: 200, data }
    })
  }

  static async remove (req, res, next) {
    BaseController.handleRequest(req, res, next, async () => {
      const { medicalId } = req.params
      const data = await medical.remove(medicalId)
      return { statusCode: 200, data }
    })
  }
}
