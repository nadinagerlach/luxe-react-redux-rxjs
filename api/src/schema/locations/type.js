import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

const LocationType = new GraphQLObjectType({
  name: 'location',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    location: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default LocationType