import { db } from '#db/dbConfig.js'
import handleQuery from '#handler/handleQuery.js'
const getAlls = async (limit, offset) => {
  return handleQuery(
    (params) => db.any('SELECT pet_id, name, birthdate, weight, weight_unit, color, gender, breed_id, owner_id, created_at, updated_at FROM pet LIMIT $1 OFFSET $2', params),
    [limit, offset])
}

const findById = async (petId) => {
  return handleQuery(
    (params) => db.any('SELECT pet_id, name, birthdate, weight, weight_unit, color, gender, breed_id, owner_id, created_at, updated_at FROM pet WHERE pet_id = $1', params),
    [petId]
  )
}

const create = async (petData) => {
  return handleQuery(
    (params) => db.one('INSERT INTO pet (name, birthdate, weight, weight_unit, color, gender, breed_id, owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING pet_id', params),
    [petData.name, petData.birthdate, petData.weight, petData.weight_unit, petData.color, petData.gender, petData.breed_id, petData.owner_id])
}

const modify = async (petData) => {
  return handleQuery(
    (params) => db.result('UPDATE pet SET name=$2, birthdate=$3, weight=$4, weight_unit=$5, color=$6, gender=$7, breed_id=$8, owner_id=$9, updated_at=$10, WHERE pet_id = $1', params),
    [petData.pet_id, petData.name, petData.breed, pet.weight, pet.weight_unit, pet.color, pet.gender, pet.breed_id, pet.owner_id, petData.updated_at]
  )
}

const remove = async (petId) => {
  return handleQuery(
    (params) => db.result('DELETE FROM pet WHERE pet_id = $1', params),
    [petId]
  )
}

export const pet = {
  getAlls,
  findById,
  create,
  modify,
  remove
}
