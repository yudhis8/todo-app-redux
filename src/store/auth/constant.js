/**
 * @format
 * @flow
 */

//  USER
export const POST_USER_BEGIN: string = 'auth/POST_USER_BEGIN';
export const POST_USER_SUCCESS: string = 'auth/POST_USER_SUCCESS';
export const POST_USER_FAILURE: string = 'auth/POST_USER_FAILURE';
export const POST_USER_REQUEST: string = 'auth/POST_USER_REQUEST';


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
