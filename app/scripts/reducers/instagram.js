/**
 * @module Reducers/Instagram
 * @desc Instagram Reducer
 */

import immutable from 'immutability-helper';
import { createReducer } from 'modules/helpers';
import { parseError } from 'modules/client';

import { ActionTypes } from 'constants/index';

export const instagramState = {
  latestPosts: {
    res: [],
    message: '',
    status: 'idle',
  },
};

export default {
  instagram: createReducer(instagramState, {
    [ActionTypes.FETCH_LATEST_POSTS_REQUEST](state) {
      return immutable(state, {
        latestPosts: {
          status: { $set: 'running' },
        },
      });
    },
    [ActionTypes.FETCH_LATEST_POSTS_SUCCESS](state, { payload }) {
      return immutable(state, {
        latestPosts: {
          res: { $set: payload.res },
          status: { $set: 'loaded' },
        },
      });
    },
    [ActionTypes.FETCH_LATEST_POSTS_FAILURE](state, { payload }) {
      return immutable(state, {
        latestPosts: {
          message: { $set: parseError(payload.message) },
          status: { $set: 'error' },
        },
      });
    },
  }),
};
