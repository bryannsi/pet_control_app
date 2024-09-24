/* eslint-disable n/handle-callback-err */
import { ZodError } from 'zod'

class UniqueViolationStrategy {
  handle (error) {
    let message = error.detail || 'Sin detalles'
    if (message.includes('email')) {
      message = 'El correo ya está en uso.'
    } else {
      message = 'Violación de restricción única.'
    }
    return {
      status: 400,
      message,
      logMessage: 'Violación de restricción única detectada'
    }
  }
}

class ForeignKeyViolationStrategy {
  handle (error) {
    return {
      status: 400,
      message: 'Violación de clave foránea.',
      logMessage: 'Clave foránea inválida'
    }
  }
}

class NotNullViolationStrategy {
  handle (error) {
    return {
      status: 400,
      message: 'Un campo obligatorio no puede ser nulo.',
      logMessage: 'Violación de campo not null'
    }
  }
}

class SyntaxErrorStrategy {
  handle (error) {
    return {
      status: 400,
      message: 'Ocurrió un error inesperado. Inténtelo más tarde.',
      logMessage: 'La sentencia SQL usada no es válida y no puede ser ejecutada.'
    }
  }
}

class UndefinedColumnStrategy {
  handle (error) {
    return {
      status: 400,
      message: 'Ocurrió un error inesperado. Inténtelo más tarde.',
      logMessage: 'Se está itentenado acceder a una columna que no existe en la base de datos.'
    }
  }
}

class DefaultErrorStrategy {
  handle (error) {
    let message
    if (error instanceof ZodError) {
      message = error.errors.map(issue => issue.message)

      return {
        status: 400,
        message,
        logMessage: `Error inesperado: ${error.message}`
      }
    }
    // Handle other types of errors (optional)
    return {
      status: 500,
      message: 'Ocurrió un error inesperado. Inténtelo más tarde.',
      logMessage: 'Error desconocido. Consulte los registros para más detalles.'
    }
  }
}

export { DefaultErrorStrategy, ForeignKeyViolationStrategy, NotNullViolationStrategy, SyntaxErrorStrategy, UndefinedColumnStrategy, UniqueViolationStrategy }
