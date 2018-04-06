import {GraphQLObjectType} from 'graphql';

import * as cigar from './cigars/fields/mutations';
import * as recipe from './recipes/fields/mutations';

const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...cigar,
    ...recipe
  }
});

export default mutation;
