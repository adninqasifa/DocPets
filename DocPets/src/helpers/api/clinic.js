  import axios from 'axios'
import {baseUrl} from './index'

export function apiGetClinicAllRoute(headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'klinik/getAllKlinik',
        headers,
    });
}

export function apiGetClinicByCityRoute(city, headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'search/?city=' + city,
        headers,
    });
}

// export function apiGetClinicByNameRoute(name, headers) {
//     return axios ({
//         method: 'GET',
//         url: baseUrl + 'search/name/?name=' + name,
//         headers,
//     });
// }

export function apiGetClinicByNameRoute(headers) {
  return axios ({
    method: 'POST',
    url: baseUrl + 'klinik/search/',
    headers,
  })
}

// export function apiGetClinicByNameRoute(nama) {
//   return axios ({
//     method: 'POST',
//     url: baseUrl + 'klinik/search/',
//     data: {
//       nama: "",
//       lokasi: "",
//     }
//   })
//   .then(res => res)
//   .catch(err => err.message)
// }

export function apiGetClinicByPetRoute(patient, headers) {
    return axios ({
        method: 'GET',
        url: baseUrl + 'search/pet/?species=' + patient,
        headers,
    });
}
