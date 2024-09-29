import { db } from '#db/dbConfig.js'
import handleQuery from '#handler/handleQuery.js'

// Obtener múltiples registros médicos
const getAlls = async (petId, limit, offset) => {
  return handleQuery(
    (params) => db.any('SELECT history_id, pet_id, visit_date, symptoms, diagnosis, treatment, vet_name FROM medical_history WHERE pet_id = $1 LIMIT $2 OFFSET $3', params),
    [petId, limit, offset]
  )
}

// Encontrar un registro médico por ID
const findById = async (petId, medicalId) => {
  return handleQuery(
    (params) => db.any('SELECT history_id, pet_id, visit_date, symptoms, diagnosis, treatment, vet_name FROM medical_history WHERE pet_id = $1 AND history_id = $2', params),
    [petId, medicalId]
  )
}

// Crear un nuevo registro médico
const create = async (petId, medicalHistory) => {
  return handleQuery(
    (params) => db.one(
      'INSERT INTO medical_history (pet_id, visit_date, symptoms, diagnosis, treatment, vet_name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING history_id', params),
    [petId, medicalHistory.visit_date, medicalHistory.symptoms, medicalHistory.diagnosis, medicalHistory.treatment, medicalHistory.treatment]
  )
}

// Modificar un registro médico
const modify = async (medicalId, medicalHistory) => {
  return handleQuery(
    (params) => db.result(
      'UPDATE medical_history SET visit_date=$2, symptoms=$3, diagnosis=$4, treatment=$5, vet_name=$6 WHERE history_id = $1', params),
    [medicalId, medicalHistory.visit_date, medicalHistory.symptoms, medicalHistory.diagnosis, medicalHistory.treatment, medicalHistory.vet_name]
  )
}

// Eliminar un registro médico
const remove = async (medicalId) => {
  return handleQuery(
    (params) => db.result('DELETE FROM medical_history WHERE history_id = $1', params),
    [medicalId]
  )
}

export const medical = {
  getAlls,
  findById,
  create,
  modify,
  remove
}
