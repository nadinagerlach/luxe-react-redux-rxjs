import {GraphQLObjectType} from 'graphql'

import * as cigar from './cigars/fields/query';
import * as recipe from './recipes/fields/query';

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...cigar,
    ...recipe
  })
})

export default query