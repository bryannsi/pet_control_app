import { handleError, handleSuccess } from '#handler/handleResponse.js'

class BaseController {
  static async handleRequest (req, res, next, handler) {
    try {
      const { statusCode, data, entity } = await handler(req, res)
      handleSuccess(res, data, entity, statusCode)
    } catch (error) {
      handleError(res, error)
    }
  }
}

export default BaseController
