import {GET_CLINIC_DETAIL,
GET_CLINIC_DETAIL_SUCCESS,
GET_CLINIC_DETAIL_FAILED} from '../types'

const initialState = {
    isLoading: false,
    data: [{
        userVetenaries: [{
            user: {}
        }]
    }]

}

const getClinicDetail = (state = initialState, action) => {
    switch(action.type) {
        case GET_CLINIC_DETAIL: {
            console.log('reducer get CLINIC_DETAIL')
            return{
                ...state,
                isLoading: true
            }
        }
        case GET_CLINIC_DETAIL_SUCCESS: {
            console.log('reducer get CLINIC_DETAIL success')
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        }
        case GET_CLINIC_DETAIL_FAILED: {
            console.log('reducer get CLINIC_DETAIL failed')
            return{
                ...state,
                isLoading: false
            }
        }
        default:
            return{
                ...state,
            }
    }
}

export default getClinicDetail
