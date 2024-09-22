import { defaultErrorStrategy, foreignKeyViolationStrategy, notNullViolationStrategy, uniqueViolationStrategy } from '#error/errorStrategies.js'

const handleErrorStrategy = (error) => {
  let errorResponse

  // Seleccionar la estrategia de manejo de errores según el código de error
  switch (error.code) {
    case '23505':
      errorResponse = uniqueViolationStrategy(error)
      break
    case '23503':
      errorResponse = foreignKeyViolationStrategy(error)
      break
    case '23502':
      errorResponse = notNullViolationStrategy(error)
      break
    default:
      errorResponse = defaultErrorStrategy(error)
      break
  }

  // Registrar el error utilizando el mensaje proporcionado por la estrategia
  console.log(`${errorResponse.logMessage}: ${error.detail || 'Sin detalles'}`)

  return errorResponse
}

export default handleErrorStrategy
