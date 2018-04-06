import {GraphQLObjectType} from 'graphql'

import * as cigar from './cigars/fields/query';
import * as recipe from './recipes/fields/query';
import * as location from './locations/fields/query';

const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...recipe
  })
})

export default query