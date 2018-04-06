import models from '../../models'

export async function getById(parentValue, {id}) {
  return await models.location.findOne({where: {id}})
}

// Get all locations
export async function getAll() {
  return await models.location.findAll()
}

// Create location
export async function create(parentValue, {name, location}) {
  return await models.location.create({
    name,
    location
  })
}

// Delete location
export async function remove(parentValue, {id}) {
  return await models.location.destroy({where: {id}})
}