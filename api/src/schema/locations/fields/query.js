import {GraphQLInt, GraphQLList} from 'graphql'

import LocationType from '../type'
import {getAll, getById} from '../resolvers'

// locations All
export const locations = {
  type: new GraphQLList(LocationType),
  resolve: getAll
}

// location By ID
export const location = {
  type: LocationType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: getById
}