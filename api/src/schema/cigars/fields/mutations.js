import {GraphQLString, GraphQLInt} from 'graphql'

import CigarType from '../type'
import {create, remove} from '../resolvers'

// cigar create
export const cigarCreate = {
  type: CigarType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    cigar: {
      name: 'cigar',
      type: GraphQLString
    }
  },
  resolve: create
}

// cigar remove
export const cigarRemove = {
  type: CigarType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}