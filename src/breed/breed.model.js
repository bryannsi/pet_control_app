import { db } from '../db/dbConfig.js'

const handleQuery = async (queryFunction, params) => {
  try {
    return await queryFunction(params)
  } catch (error) {
    console.log('_____________executed query_____________')
    console.log(queryFunction)
    console.error('Database query error:', error)
    throw new Error('Database query failed')
  }
}

const getAlls = async (limit, offset) => {
  return handleQuery(
    (params) => db.any('SELECT breed_id, name, description FROM breed LIMIT $1 OFFSET $2', params),
    [limit, offset]
  )
}

const findById = async (breedId) => {
  return handleQuery(
    (params) => db.any('SELECT breed_id, name, description FROM breed WHERE breed_id = $1', params),
    [breedId]
  )
}

const create = async (breedData) => {
  return handleQuery(
    (params) => db.one('INSERT INTO breed(name, description) VALUES ($1, $2)', params),
    [breedData.name, breedData.description]
  )
}

const modify = async (breedData) => {
  return handleQuery(
    (params) => db.result('UPDATE breed SET name=$2, description=$3 WHERE breed_id = $1', params),
    [breedData.breedId, breedData.name, breedData.description]
  )
}

const remove = async (breedId) => {
  return handleQuery(
    (params) => db.result('DELETE FROM breed WHERE breed_id = $1', params),
    [breedId]
  )
}

export const breed = { getAlls, findById, create, modify, remove }
