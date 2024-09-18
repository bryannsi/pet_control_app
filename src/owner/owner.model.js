import { db } from '../db/dbConfig.js'

const handleQuery = async (queryFunction, params) => {
  try {
    return await queryFunction(params)
  } catch (error) {
    console.error('Executed query:', error.query)
    console.error(error.name, [error.message, error.detail])
    throw new Error('Database query failed')
  }
}

const getAlls = async (limit, offset) => {
  return handleQuery(
    (params) => db.any('SELECT owner_id, first_name, last_name, email, phone_number, address, user_id FROM owner LIMIT $1 OFFSET $2', params),
    [limit, offset]
  )
}

const findById = async (ownerId) => {
  return handleQuery(
    (params) => db.any('SELECT owner_id, first_name, last_name, email, phone_number, address, user_id FROM owner WHERE owner_id = $1', params),
    [ownerId]
  )
}

const create = async (ownerData) => {
  return handleQuery(
    (params) => db.one('INSERT INTO owner(first_name, last_name, email, phone_number, address, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING owner_id', params),
    [ownerData.first_name, ownerData.last_name, ownerData.email, ownerData.phone_number, ownerData.address, ownerData.user_id]
  )
}

const modify = async (ownerData) => {
  return handleQuery(
    (params) => db.result('UPDATE owner SET first_name=$2, last_name=$3, email=$4, phone_number=$5, address=$6, user_id=$7, WHERE owner_id = $1', params),
    [ownerData.ownerId, ownerData.first_name, ownerData.last_name, ownerData.email, ownerData.phone_number, ownerData.address, ownerData.user_id]
  )
}

const remove = async (ownerId) => {
  return handleQuery(
    (params) => db.result('DELETE FROM owner WHERE owner_id = $1', params),
    [ownerId]
  )
}

export const owner = { getAlls, findById, create, modify, remove }
