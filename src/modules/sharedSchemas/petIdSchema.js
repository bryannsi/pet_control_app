const petIdSchema = (z) => z.string()
  .regex(/^\d+$/, 'Por favor, introduce un identificador de mascota válido')
  .transform(Number)
  .refine((id) => id > 0, {
    message: 'El identificador de la mascota debe ser mayor a 0'
  })

export default petIdSchema
