import axios from 'axios';

export const createAPI = () => {
  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};