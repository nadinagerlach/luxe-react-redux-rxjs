/**
 * @module Reducers/Map
 * @desc Map Reducer
 */

import immutable from 'immutability-helper';
import { createReducer } from 'modules/helpers';
import { parseError } from 'modules/client';

import { ActionTypes } from 'constants/index';

// TODO - Google Map Specific payload information
// initial mapState as an object
export const mapState = {
  storeLocations: {
    data: [],
    message: '',
    status: 'idle',
  },
};

export default {
  map: createReducer(mapState, {
    [ActionTypes.FETCH_STORE_LOCATIONS_REQUEST](state) {
      return immutable(state, {
        storeLocations: {
          status: { $set: 'running' },
        },
      });
    },
    [ActionTypes.FETCH_STORE_LOCATIONS_SUCCESS](state, { payload }) {
      return immutable(state, {
        storeLocations: {
          data: { $set: payload.data },
          status: { $set: 'loaded' },
        },
      });
    },
    [ActionTypes.FETCH_STORE_LOCATIONS_FAILURE](state, { payload }) {
      return immutable(state, {
        storeLocations: {
          message: { $set: parseError(payload.message) },
          status: { $set: 'error' },
        },
      });
    },
  }),
};
