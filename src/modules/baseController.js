import handleError from '#errorHandler/handleError.js'

class BaseController {
  static async handleRequest (req, res, next, handler) {
    try {
      const { data, statusCode } = await handler(req, res)
      BaseHandleSuccess(data, res, statusCode)
    } catch (error) {
      BaseHandleError(error, res, next)
    }
  }
}

function BaseHandleError (error, res, next) {
  handleError(error)
  const errorResponse = handleError(error)
  return res.status(errorResponse.status).json({ error: errorResponse.message })
}

function BaseHandleSuccess (result, res, statusCode) {
  res.status(statusCode).json(result)
}

export default BaseController
