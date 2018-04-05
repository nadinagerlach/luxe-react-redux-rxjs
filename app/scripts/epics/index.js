/**
 * @module Epics/Root
 * @desc Root Epics
 */

import { combineEpics } from 'redux-observable';
import { userLogin, userLogout, userUnderage } from './user';
import { fetchPopularRepos } from './github';
import { fetchLatestPosts } from './instagram';

export default combineEpics(
  userLogin,
  userLogout,
  userUnderage,
  fetchPopularRepos,
  fetchLatestPosts
);
