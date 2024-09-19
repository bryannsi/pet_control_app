// errorCatalog.js
const errorCatalog = {
  23505: {
    clientMessage: 'Este valor ya está en uso.',
    fields: {
      email: 'El correo electrónico ya está registrado.'
    },
    logMessage: 'Violación de restricción de unicidad' // Mensaje técnico para el registro interno
  },
  23503: {
    clientMessage: 'Hay un problema con los datos relacionados.',
    logMessage: 'Violación de clave foránea'
  },
  23502: {
    clientMessage: 'Falta un valor requerido.',
    logMessage: 'Violación de restricción NOT NULL'
  },
  23514: {
    clientMessage: 'El valor proporcionado no cumple con los requisitos.',
    logMessage: 'Violación de una restricción CHECK'
  },
  42703: {
    clientMessage: 'Ocurrió un error en la solicitud.',
    logMessage: 'Columna no encontrada en la base de datos'
  },
  42883: {
    clientMessage: 'Ocurrió un error en la solicitud.',
    logMessage: 'Función no existe en la base de datos'
  }
}

export default errorCatalog
