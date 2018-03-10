/**
 * @module Epics/userlogin
 * @desc User
 */

import { Observable } from 'rxjs/Observable';

import { ActionTypes } from 'constants/index';

export function fetchLatestPosts(action$) {
  return action$.ofType(ActionTypes.FETCH_LATEST_POSTS_REQUEST)
    .switchMap(() =>
      Observable.ajax.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token=230642980.857aba3.ec6367a366284c51844e04e3e7a429e4')
        .map(data => ({
          type: ActionTypes.FETCH_LATEST_POSTS_SUCCESS,
          payload: { data: data.data },
        }))
        .takeUntil(action$.ofType(ActionTypes.CANCEL_FETCH))
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
