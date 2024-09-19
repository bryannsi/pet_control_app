import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es obligatorio' }),
  username: z.string().min(5, { message: 'El nombre de usuario debe tener al menos 5 caracteres' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  email: z.string().email({ message: 'Correo electrónico no válido' }),
  country: z.string().min(5, { message: 'El país debe tener al menos 5 caracteres' }),
  city: z.string().min(5, { message: 'La ciudad debe tener al menos 5 caracteres' }),
  phone: z.string().min(8, { message: 'El teléfono debe tener al menos 8 caracteres' }),
  birthday: z.string().min(8, { message: 'La fecha de nacimiento debe tener al menos 8 caracteres' }),
  civilStatus: z.string().min(4, { message: 'El estado civil debe tener al menos 8 caracteres' }),
  gender: z.string().min(4, { message: 'El género debe tener al menos 8 caracteres' })
})
