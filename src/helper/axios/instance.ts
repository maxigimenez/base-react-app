import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(request => {
  // eg. Include Authorization token
  return request;
});

instance.interceptors.response.use(response => {
  return response;
}, error => {
  // eg. Redirect to login if error.response.status is 401
  return Promise.reject(error);
});

export { instance as api };
