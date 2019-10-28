import http from './http';

export const getUser = data => {
  // console.log(data)
  return http.post('/firebase-auth', data);
};
