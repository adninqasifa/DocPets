import axios from 'axios'
import {baseUrl} from './index'

export function apiAddAnimal (headers, payload) {
    return axios ({
        method: 'POST',
        url: baseUrl + 'pet',
        data: payload,
        headers
    });
}

export function apiGetAnimal (id, headers){
    return axios ({
        method: 'GET',
        url: baseUrl + 'pet/' + id,
        headers
    })
}

export function apiDeleteAnimal (headers, data){
    return axios ({
        method: 'DELETE',
        url: baseUrl + 'pet',
        headers, 
        data
    })
}