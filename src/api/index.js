import axios from 'axios';
import { api_url } from '../const';

function get(url, config){
  if (config) {
    return axios.get(api_url + url, config);
  }
  return axios.get(api_url + url);
}

function post(url, payload, config){
  if (config) {
    return axios.post(api_url + url, payload, config);
  }
  return axios.post(api_url + url, payload);
}

function put(url, payload, config){
  if (config) {
    return axios.put(api_url + url, payload, config);
  }
  return axios.put(api_url + url, payload);
}

function patch(url, payload, config){
  if (config) {
    return axios.patch(api_url + url, payload, config);
  }
  return axios.patch(api_url + url, payload);
}

function _delete(url, payload, config){
  if (config) {
    return axios.post(api_url + url, payload, config);
  }
  return axios.post(api_url + url, payload);
}

export default {
  get,
  post,
  put,
  patch,
  _delete
}