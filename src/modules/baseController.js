import { handleError, handleSuccess } from '#handler/handleResponse.js'

class BaseController {
  static async handleRequest (req, res, next, handler) {
    try {
      const { data, statusCode } = await handler(req, res)
      handleSuccess(res, data, statusCode)
    } catch (error) {
      handleError(res, error)
    }
  }
}

export default BaseController
