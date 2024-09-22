import handleError from '#handler/handleError.js'
import handleSchema from '#handler/handleSchema.js'

export const validateSchema = (schema) => {
  return (req, res, next) => {
    try {
      const parsedData = handleSchema(schema, req)
      // Asignar solo si existen, conservando los prototipos originales
      Object.assign(req.body, parsedData.body)
      Object.assign(req.params, parsedData.params)
      Object.assign(req.query, parsedData.query)

      next() // Si la validación es exitosa, continuar al siguiente middleware/controlador
    } catch (error) {
      const errorResponse = handleError(error)
      return res.status(errorResponse.status).json({ error: errorResponse.message })
    }
  }
}
