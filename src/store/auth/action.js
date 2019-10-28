/**
 * @format
 * @flow
 */

import {
  POST_LOGIN_REQUEST,
  POST_LOGOUT_REQUEST,
  POST_LOGOUT_SUCCESS,
  SET_IS_NEW
} from './constant';

import type { Form, Action } from './constant';

export const postLoginRequest = (form: Form): Action => ({
  type: POST_LOGIN_REQUEST,
  payload: { form }
});
