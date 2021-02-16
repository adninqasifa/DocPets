import axios from 'axios'
import {baseUrl} from './index'

export function apiAddBooking(headers, payload) {
    console.log('ini api add booking')
    return axios ({
        method: 'POST',
        url: baseUrl + 'booking',
        data: payload,
        headers
    });
}

export function apiGetBooking(id, headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'booking/' + id,
        headers,
    });
}

export function apiHistoryBooking(id) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'booking/' + id,
    });
}