import axios from 'axios'
import {baseUrl} from './index'

export function apiLogin(payload) {
  return axios ({
    method: 'POST',
    url: baseUrl + 'user/login',
    data: payload
  });
}

export function apiRegister(payload) {
  console.log('api register', payload)
  return axios ({
    method: 'POST',
    url: baseUrl + 'user/signup',
    data: payload
  });
}

// DONE
