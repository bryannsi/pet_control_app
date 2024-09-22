import { handleError, handleSuccess } from '#handler/handleResponse.js'

class BaseController {
  static async handleRequest (req, res, next, handler) {
    try {
      const { data, statusCode } = await handler(req, res)
      handleSuccess(data, res, statusCode)
    } catch (error) {
      handleError(error, res)
    }
  }
}

export default BaseController
