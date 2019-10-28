import { put, call, takeLatest, all } from 'redux-saga/effects';

import { handleError } from '../helper';
import {
  FETCH_USER_BEGIN,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
} from './constant';

import { getUser } from '../../api/auth';

function* GetUser() {
  try {
    yield put({ type: FETCH_USER_BEGIN });
    const result = yield call(getUser);
    console.log(result, 'uaaaa')
    console.log('aaa')
    yield put({
      type: FETCH_USER_SUCCESS,
      payload: result
    });
  } catch (error) {
    yield call(handleError, error, FETCH_USER_FAILURE);
  }
}

export default function* authFetch() {
  yield all([
    takeLatest(FETCH_USER_REQUEST, GetUser),
  ])
}