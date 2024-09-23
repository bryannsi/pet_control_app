import HandleErrorStrategy from '#handler/handleError.js'

const errorHandler = new HandleErrorStrategy()

export const handleSuccess = (res, data, statusCode = 200) => {
  res.status(statusCode).json(data)
}

export const handleError = (res, error) => {
  const errorResponse = errorHandler.handleError(error)
  res.status(errorResponse.status).json({ error: errorResponse.message })
}
