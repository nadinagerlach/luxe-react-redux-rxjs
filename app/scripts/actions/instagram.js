// @flow
/**
 * @module Actions/Instagram
 * @desc Actions for Instgram
 */

import { ActionTypes } from 'constants/index';

/**
 * fetchLatestPosts
 *
 * @returns {Object}
 */

export function fetchLatestPosts(): Object {
  return {
    type: ActionTypes.FETCH_LATEST_POSTS_REQUEST,
    payload: {},
  };
}
