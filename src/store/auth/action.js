/**
 * @format
 * @flow
 */

import {
  FETCH_USER_REQUEST,
} from './constant';

import type { Form, Action } from './constant';

export const getUserRequest = ()=> ({
  type: FETCH_USER_REQUEST
});