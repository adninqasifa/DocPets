// API untuk mendapatkan Semua Listing Klinik
// apiGetClinicDetail

// import axios from 'axios'
// import {baseUrl} from './index'
//
// export function apiGetClinicDetail(headers) {
//     return axios ({
//       method: 'GET',
//       url: baseUrl + "klinik/getAllKlinik",
//       headers
//     })
// }

////////////////////////////////////////////////////////////////////////////////

import axios from 'axios'
import {baseUrl} from './index'

export function apiGetClinicDetail(headers, id) {
    return axios ({
        method: 'GET',
        url: baseUrl + "klinika/" + id,
        headers
    })
}

// export function apiGetClinicById(headers, id) {
//     return axios ({
//         method: 'GET',
//         url: baseUrl + "klinik/getKlinikById/" + id,
//         headers
//     })
// }
