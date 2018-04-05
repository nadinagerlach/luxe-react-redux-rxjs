/**
 * @module Reducers/Root
 * @desc Root Reducers
 */

import app from './app';
import github from './github';
import user from './user';
import instagram from './instagram';


export default {
  ...app,
  ...github,
  ...instagram,
  ...user,
};
