import { db } from '../db/dbConfig.js'

const getAlls = async (idPet, limit, offset) => {
  try {
    return db.any('SELECT * FROM medical WHERE idPet = $1 LIMIT $2 OFFSET $3', [idPet, limit, offset])
  } catch (error) {
    console.error(error)
  }
}

const findById = async (idPet) => {
  try {
    return db.one('SELECT * FROM pet WHERE id = $1', [idPet])
  } catch (error) {
    console.error(error)
  }
}

const create = async (pet) => {
  try {
    return db.one('INSERT INTO medical (idPet, observations, date) RETURNING idRecord', [pet.idPet, pet.observations, pet.date])
  } catch (error) {
    console.log(error)
  }
}

const modify = async (pet) => {
  try {
    const { rowCount } = db.result('UPDATE medical SET (observations) VALUES ($1) WHERE idRecord = $1', [pet.idRecord, pet.observations])
    console.log(`Rows affected: ${rowCount}`)
    return rowCount
  } catch (error) {
    console.error(error)
  }
}

const remove = async (idRecord) => {
  try {
    const { rowCount } = db.result('DELETE medical WHERE idRecord = $1', [idRecord])
    console.log(`Rows affected: ${rowCount}`)
    return rowCount
  } catch (error) {
    console.error(error)
  }
}

export const medical = {
  getAlls,
  findById,
  create,
  modify,
  remove
}
