const medicalIdSchema = (z) => z.string()
  .regex(/^\d+$/, 'Por favor, introduce un identificador de historial médico válido')
  .transform(Number)
  .refine((id) => id > 0, {
    message: 'El identificador de la mascota debe ser mayor a 0'
  })

export default medicalIdSchema
