/**
 * @module Epics/userlogin
 * @desc User
 */

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import fetchJsonp from 'fetch-jsonp';

import { ActionTypes } from 'constants/index';

// get instagram data
const ACCESS_TOKEN = '285323378.8ad973f.5dd332e91f0043178e0e2693c3b80fc7';
const URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}&callback=?`

// TODO refactor to not use ajax
export function fetchLatestPosts(action$) {
  return action$.ofType(ActionTypes.FETCH_LATEST_POSTS_REQUEST)
    .switchMap(() =>
      Observable.fromPromise(fetchJsonp(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}&callback=?`)
        .then(res => res.json()))
        .map(res => ({
          type: ActionTypes.FETCH_LATEST_POSTS_SUCCESS,
          payload: { res: res.data },
        }))
        .defaultIfEmpty({ type: ActionTypes.FETCH_LATEST_POSTS_CANCEL })
        .catch(error => [
          {
            type: ActionTypes.FETCH_LATEST_POSTS_FAILURE,
            payload: { message: error.message, status: error.status },
            error: true,
          },
        ])
    );
}

