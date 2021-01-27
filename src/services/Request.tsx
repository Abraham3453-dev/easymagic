import axios from 'axios';
import { API_BASE } from './APIConstants';

const client = axios.create({
  baseURL: API_BASE,
});

export interface RequestOptions { 
  url: string
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
  data?: any
}

const Request = (options: RequestOptions ) => {
  const onSuccess = (response: any) => {
    return response;
  };
  const onError = (error: any) => {
    // if (error.response) {
    // } else {
    // }
    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default Request;
