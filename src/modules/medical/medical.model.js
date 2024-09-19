import { db } from '#db/dbConfig.js'
import handleQuery from '#db/handleQuery.js'

// Obtener múltiples registros médicos
const getAlls = async (idPet, limit, offset) => {
  return handleQuery(
    (params) => db.any('SELECT * FROM medical WHERE idPet = $1 LIMIT $2 OFFSET $3', params),
    [idPet, limit, offset]
  )
}

// Encontrar un registro médico por ID
const findById = async (petId, recordId) => {
  return handleQuery(
    (params) => db.one('SELECT * FROM medical WHERE idPet = $1 AND idRecord = $2', params),
    [petId, recordId]
  )
}

// Crear un nuevo registro médico
const create = async (pet) => {
  return handleQuery(
    (params) => db.one(
      'INSERT INTO medical (petId, name, breedId, observations, date) RETURNING idRecord', params),
    [pet.idPet, pet.name, pet.breedId, pet.observations, pet.date]
  )
}

// Modificar un registro médico
const modify = async (pet) => {
  return handleQuery(
    (params) => db.result(
      'UPDATE medical SET observations = $1 WHERE idRecord = $2', params),
    [pet.observations, pet.idRecord]
  )
}

// Eliminar un registro médico
const remove = async (recordId) => {
  return handleQuery(
    (params) => db.result('DELETE FROM medical WHERE idRecord = $1', params),
    [recordId]
  )
}

export const medical = {
  getAlls,
  findById,
  create,
  modify,
  remove
}
