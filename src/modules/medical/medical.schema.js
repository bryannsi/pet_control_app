import { limitSchema, offsetSchema } from '#modules/sharedSchemas/filterSchema.js'
import medicalIdSchema from '#modules/sharedSchemas/medicalIdSchema.js'
import petIdSchema from '#modules/sharedSchemas/petIdSchema.js'
import { z } from 'zod'

const bodySchema = z.object({
  visit_date: z.string({
    required_error: 'La fecha de visita es requerida.',
    invalid_type_error: 'La fecha de visita debe ser una cadena de texto.'
  }).refine(
    (date) => !isNaN(Date.parse(date)),
    { message: 'La fecha de visita es inválida. Debe estar en formato válido.' }
  ),
  symptoms: z.string({
    required_error: 'Los síntomas son requeridos.',
    invalid_type_error: 'Los síntomas deben ser una cadena de texto.'
  }).max(500, { message: 'Los síntomas no deben exceder los 500 caracteres.' }),
  diagnosis: z.string({
    required_error: 'El diagnóstico es requerido.',
    invalid_type_error: 'El diagnóstico debe ser una cadena de texto.'
  }).max(500, { message: 'El diagnóstico no debe exceder los 500 caracteres.' }),
  treatment: z.string({
    required_error: 'El tratamiento es requerido.',
    invalid_type_error: 'El tratamiento debe ser una cadena de texto.'
  }).max(500, { message: 'El tratamiento no debe exceder los 500 caracteres.' }),
  vet_name: z.string({
    required_error: 'El nombre del veterinario es requerido.',
    invalid_type_error: 'El nombre del veterinario debe ser una cadena de texto.'
  }).max(100, { message: 'El nombre del veterinario no debe exceder los 100 caracteres.' })
})

const getAllsSchema = z.object({
  params: z.object({
    petId: petIdSchema(z)
  }),
  query: z.object({
    offset: offsetSchema(z),
    limit: limitSchema(z)
  })
})

const findByIdSchema = z.object({
  params: z.object({
    petId: petIdSchema(z),
    medicalId: medicalIdSchema(z)
  })
})

const createSchema = z.object({
  params: z.object({
    petId: petIdSchema(z)
  }),
  body: bodySchema
})

const modifySchema = z.object({
  params: z.object({
    medicalId: medicalIdSchema(z)
  }),
  body: bodySchema
})

const removeSchema = z.object({
  medicalId: medicalIdSchema(z)
})

// Exportar los esquemas
export const schemas = {
  getAllsSchema,
  findByIdSchema,
  createSchema,
  modifySchema,
  removeSchema
}
