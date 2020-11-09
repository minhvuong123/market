import axios from 'axios';
import { api_url } from '../const';

function get(url){
  return axios.get(api_url + url);
}

function post(url, payload){
  return axios.post(api_url + url, payload);
}

function put(url, payload){
  return axios.put(api_url + url, payload);
}

function patch(url, payload){
  return axios.patch(api_url + url, payload);
}

function _delete(url, payload){
  return axios.post(api_url + url, payload);
}

export default {
  get,
  post,
  put,
  patch,
  _delete
}