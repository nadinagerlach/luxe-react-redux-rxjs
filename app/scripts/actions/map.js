// @flow
/**
 * @module Actions/Map
 * @desc Actions for Map
 */

import { ActionTypes } from 'constants/index';

/**
  * fetchStoreLocations
  *
  * @returns {Object}
  */

export function fetchStoreLocations(): Object {
  return {
    type: ActionTypes.FETCH_STORE_LOCATIONS_REQUEST,
    payload: {},
  };
}
