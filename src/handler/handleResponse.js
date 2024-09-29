import HandleErrorStrategy from '#handler/handleError.js'
import handleMessage from './handleMessage.js'
const errorHandler = new HandleErrorStrategy()

export const handleSuccess = (res, data, entity, statusCode = 200) => {
  const message = handleMessage(data.rowCount, entity)
  res.status(statusCode).json(message)
}

export const handleError = (res, error) => {
  const errorResponse = errorHandler.handleError(error)
  res.status(errorResponse.status).json({ error: errorResponse.message })
}
