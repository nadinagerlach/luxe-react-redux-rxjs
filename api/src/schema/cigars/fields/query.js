import {GraphQLInt, GraphQLList} from 'graphql'

import CigarType from '../type'
import {getAll, getById} from '../resolvers'

// cigars All
export const cigars = {
  type: new GraphQLList(CigarType),
  resolve: getAll
}

// cigar By ID
export const cigar = {
  type: CigarType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: getById
}