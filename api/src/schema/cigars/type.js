import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

const CigarType = new GraphQLObjectType({
  name: 'cigar',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    cigar: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default CigarType