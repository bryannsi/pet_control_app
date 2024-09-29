const offsetSchema = (z) => z.string()
  .optional()
  .default('0') // Valor por defecto si no se envía
  .transform((val) => Number(val))
  .refine((val) => val >= 0, {
    message: 'El valor de desplazamiento debe ser 0 o mayor'
  })

const limitSchema = (z) => z.string()
  .optional()
  .default('100') // Valor por defecto si no se envía
  .transform((val) => Number(val))
  .refine((val) => val >= 15, {
    message: 'El límite de filas a mostrar debe ser al menos 15'
  })

export { limitSchema, offsetSchema }
