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
      console.log('state begin', state)
      return {
        ...state,
        loading: true,
        item: state.items
      };

    case FETCH_USER_SUCCESS:
      console.log('state success', state)
      return {
        ...state,
        loading: false,
        item: state.items
      };

    case FETCH_USER_FAILURE:
      console.log('state gagal', state)
      return {
        ...state,
        loading: false,
        item: state
      };

    default:
      return state;
  }
};
