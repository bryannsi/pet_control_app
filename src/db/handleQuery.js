async function handleQuery (queryFunction, params) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await queryFunction(params)
  } catch (error) {
    throw error // Delegamos el manejo del error a un nivel superior
  }
}

export default handleQuery
