/**
 * @format
 * @flow
 */

import {
  POST_LOGIN_BEGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_LOGOUT_BEGIN,
  POST_LOGOUT_SUCCESS,
  POST_LOGOUT_FAILURE,
  SET_IS_NEW
} from './constant';

import type { State, Action } from './constant';

const initialState: State = {
  token: '',
  isNew: false, // Detect if user is new member
  isLoggedIn: false,
  loading: false,
  error: null
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case POST_LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
        error: null
      };

    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isNew: action.payload.isNew,
        token: action.payload.token,
        isLoggedIn: true,
        error: null
      };

    case POST_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload.error
      };

    case POST_LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case POST_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        isNew: false,
        token: '',
        error: null
      };

    case POST_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case SET_IS_NEW:
      return {
        ...state,
        isNew: action.payload.isNew
      };

    default:
      return state;
  }
};
