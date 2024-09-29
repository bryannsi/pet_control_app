const MESSAGES = {
  NO_CHANGES: entity => `No se realizaron cambios en el ${entity}.`,
  UPDATE_SUCCESS: entity => `El ${entity} se ha actualizado correctamente.`,
  NOT_FOUND: entity => `No se encontró ningún ${entity} para actualizar.`,
  ERROR: entity => `Hubo un error al intentar actualizar el ${entity}.`
}

const STATUS = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
}

export { MESSAGES, STATUS }
