import { errorCatalog } from './errorCatalog.js'

function handleError (error) {
  const errorResponse = {
    status: 500, // Estado por defecto
    message: 'Ocurrió un error interno. Inténtelo más tarde.'
  }

  // Verificar si error.detail está definido, si no, usar 'Sin detalles'
  const errorDetail = error.detail || 'Sin detalles'

  switch (error.code) {
    case '23505': {
      errorResponse.status = 400 // Bad Request
      const emailConflict = errorDetail.includes('email')
      errorResponse.message = emailConflict
        ? errorCatalog['23505'].fields.email
        : errorCatalog['23505'].clientMessage
      console.error(`${errorCatalog['23505'].logMessage}: ${errorDetail}`) // Registro técnico
      break
    }
    case '23503':
      errorResponse.status = 400
      errorResponse.message = errorCatalog['23503'].clientMessage
      console.error(`${errorCatalog['23503'].logMessage}: ${errorDetail}`)
      break
    case '23502':
      errorResponse.status = 400
      errorResponse.message = errorCatalog['23502'].clientMessage
      console.error(`${errorCatalog['23502'].logMessage}: ${errorDetail}`)
      break
    default:
      console.error(`Error no controlado: ${error.message}`)
      break
  }

  return errorResponse
}

export default handleError
