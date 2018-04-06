import models from '../../models'

// Get cigars by ID
export async function getById(parentValue, {id}) {
  return await models.cigar.findOne({where: {id}})
}

// Get all cigars
export async function getAll() {
  return await models.cigar.findAll()
}

// Create cigar
export async function create(parentValue, {name, cigar}) {
  return await models.cigar.create({
    name,
    cigar
  })
}

// Delete cigar
export async function remove(parentValue, {id}) {
  return await models.cigar.destroy({where: {id}})
}