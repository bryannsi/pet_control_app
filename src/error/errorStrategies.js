/* eslint-disable n/handle-callback-err */
import errorCatalog from './errorCatalog.js'

export const uniqueViolationStrategy = (error) => {
  const errorDetail = error.detail || 'Sin detalles'
  let message
  switch (true) {
    case errorDetail.includes('email'):
      message = errorCatalog['23505'].fields.email
      break
    default:
      message = errorCatalog['23505'].clientMessage
  }
  return {
    status: 400,
    message,
    logMessage: errorCatalog['23505'].logMessage
  }
}

export const foreignKeyViolationStrategy = (error) => ({
  status: 400,
  message: errorCatalog['23503'].clientMessage,
  logMessage: errorCatalog['23503'].logMessage
})

export const notNullViolationStrategy = (error) => ({
  status: 400,
  message: errorCatalog['23502'].clientMessage,
  logMessage: errorCatalog['23502'].logMessage
})

export const defaultErrorStrategy = (error) => ({
  status: 500,
  message: 'Ocurrió un error inesperado. Inténtelo más tarde.',
  logMessage: 'Error inesperado'
})
