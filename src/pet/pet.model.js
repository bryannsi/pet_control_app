import { db } from '../db/dbConfig.js'

const getAlls = async (limit, offset) => {
  try {
    return db.any('SELECT * FROM PET LIMIT $1 OFFSET $2', [limit, offset])
  } catch (error) {
    console.error(error)
  }
}

const findById = async (id) => {
  try {
    return db.one('SELECT * FROM PET WHERE id = $1', [id])
  } catch (error) {
    console.error(error)
  }
}

const create = async (petData) => {
  try {
    return db.one('INSERT INTO PET (name, breed) VALUES ($1, $2) RETURNING id', [petData.name, petData.breed])
  } catch (error) {
    console.error(error)
  }
}

const modify = async (pet) => {
  try {
    const { rowCount } = db.result('UPDATE PET SET (name, breed) VALUES ($2, $3) WHERE id = $1', [pet.id, pet.name, pet.breed])
    console.log(`Rows affected: ${rowCount}`)
    return rowCount
  } catch (error) {
    console.error(error)
  }
}
const remove = async (id) => {
  try {
    const { rowCount } = db.result('DELETE pet WHERE id ($1)', [id])
    console.log(`Rows affected: ${rowCount}`)
    return rowCount
  } catch (error) {
    console.error(error)
  }
}

export const pet = {
  getAlls,
  findById,
  create,
  modify,
  remove
}
