/**
 * @format
 * @flow
 */

//  USER
export const FETCH_USER_BEGIN: string = 'auth/FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS: string = 'auth/FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE: string = 'auth/FETCH_USER_FAILURE';
export const FETCH_USER_REQUEST: string = 'auth/FETCH_USER_REQUEST';


type USERForm = {
  google_access_token?: string,
  phone?: string,
  code?: string // code is otp
};
export type Form = USERForm | null;

export type State = {
  loading: boolean,
  isLoggedIn: boolean,
  token: string,
  error: any
};

export type Action = {
  type: string,
  payload: {
    error?: any,
    token?: string,
    form?: Form,
    isNew?: boolean
  }
};
