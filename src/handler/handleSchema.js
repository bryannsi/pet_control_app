const handleSchema = (schema, req) => {
  if (schema) {
    // Realiza la validación y retorna el resultado de parseo
    return schema.parse({
      body: req.body || {},
      params: req.params || {},
      query: req.query || {}
    })
  }
  return {} // Si no se proporciona un esquema, retorna un objeto vacío
}

export default handleSchema
