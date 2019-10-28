import { put, call, takeLatest } from 'redux-saga/effects';

import { handleError } from '../helper';
import {
  POST_USER_BEGIN,
  POST_USER_FAILURE,
  POST_USER_SUCCESS,
  POST_USER_REQUEST,
} from './constant';

import { getUser } from '../../api/auth';

export function* postLogin({ payload }) {
  try {
    yield put({ type: POST_USER_BEGIN });

    const data = yield call(getUser, payload.form);
    console.log(data);
    // Once user authenticated
    yield put({
      type: POST_USER_SUCCESS,
      payload: {
        isNew: data.data.data.is_new,
        token: data.data.data.token
      }
    });
  } catch (error) {
    yield call(handleError, error, POST_USER_FAILURE);
  }
}

export default [
  takeLatest(POST_USER_REQUEST, postLogin)
];
