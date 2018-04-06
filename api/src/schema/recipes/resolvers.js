import models from '../../models'

// Get recipes by ID
export async function getById(parentValue, {id}) {
  return await models.recipe.findOne({where: {id}})
}

// Get all recipes
export async function getAll() {
  return await models.recipe.findAll()
}

// Create recipe
export async function create(parentValue, {name, recipe}) {
  return await models.recipe.create({
    name,
    recipe
  })
}

// Delete recipe
export async function remove(parentValue, {id}) {
  return await models.recipe.destroy({where: {id}})
}