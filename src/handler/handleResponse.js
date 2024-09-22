import handleErrorStrategy from '#handler/handleError.js'

export const handleSuccess = (res, data, statusCode = 200) => {
  res.status(statusCode).json(data)
}

export const handleError = (res, error) => {
  const errorResponse = handleErrorStrategy(error)
  res.status(errorResponse.status).json({ error: errorResponse.message })
}
