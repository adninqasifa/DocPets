import axios from 'axios'
import {baseUrl} from './index'

export function apiGetProfile(id, headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'profile/' + id,
        headers,
    });
}

export function apiUpdateProfile(id, headers, payload){
    return axios ({
        method: 'PATCH',
        url: baseUrl + 'profile/u/?id=' + id,
        headers,
        data: payload,
    });
}