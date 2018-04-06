import { GraphQLObjectType } from 'graphql';

import * as cigar from './cigars/fields/mutations';
import * as recipe from './recipes/fields/mutations';
import * as location from './locations/fields/mutations';


const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...recipe,
  },
});

export default mutation;
