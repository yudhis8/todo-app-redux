/**
 * @format
 * @flow
 */

import {
  FETCH_USER_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './constant';

import type { State, Action } from './constant';

const initialState: State = {
  item: []
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state,
        loading: true,
        item: state.items
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        item: state.items
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        item: state.items
      };

    default:
      return state;
  }
};
