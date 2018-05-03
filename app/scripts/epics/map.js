/**
 * @module Epics/map
 * @desc Map
 */

import { Observable } from 'rxjs/Observable';
import { ActionTypes } from 'constants/index';

const ACCESS_TOKEN = '285323378.8ad973f.5dd332e91f0043178e0e2693c3b80fc7';
// TODO
const GOOGLE_URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}&callback=?`;

export function fetchStoreLocations(action$) {
  return action$.ofType(ActionTypes.FETCH_STORE_LOCATIONS_REQUEST)
    .switchMap(() =>
      Observable.ajax.getJSON(`${GOOGLE_URL}`)
        .map(data => ({
          type: ActionTypes.FETCH_STORE_LOCATIONS_SUCCESS,
          payload: { data: data.items },
        }))
        .takeUntil(action$.ofType(ActionTypes.CANCEL_FETCH))
        .defaultIfEmpty({ type: ActionTypes.FETCH_STORE_LOCATIONS_CANCEL })
        .catch(error => [
          {
            type: ActionTypes.FETCH_STORE_LOCATIONS_FAILURE,
            payload: { message: error.message, status: error.status },
            error: true,
          },
        ])
    );
}
