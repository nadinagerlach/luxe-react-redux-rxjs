import {GraphQLString, GraphQLInt} from 'graphql'

import LocationType from '../type'
import {create, remove} from '../resolvers'

// location create
export const locationCreate = {
  type: LocationType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    location: {
      name: 'location',
      type: GraphQLString
    }
  },
  resolve: create
}

// location remove
export const locationRemove = {
  type: LocationType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}