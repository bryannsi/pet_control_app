// ownerSchema.js
import { z } from 'zod'

// Esquema para validar la creación de un Owner
export const ownerCreateSchema = z.object({
  body: z.object({
    first_name: z.string().min(1, 'El nombre es obligatorio'),
    last_name: z.string().min(1, 'El apellido es obligatorio'),
    email: z.string().email('El correo electrónico no es válido'),
    phone_number: z.string().optional(),
    address: z.string().min(1, 'La dirección es obligatoria')
  })
})

// Esquema para validar el parámetro ownerId
export const ownerIdSchema = z.object({
  params: z.object({
    ownerId: z.string()
      .transform((val) => parseInt(val, 10)) // Convertir a número
      .refine((val) => !isNaN(val), { message: 'El identificador del propietario no es válido' }) // Validar que sea un número
      .refine((val) => val > 0, { message: 'El identificador debe ser un número positivo' }) // Validar que sea positivo
  })
})
