import {
    BOOKING,
    BOOKING_SUCCESS,
    BOOKING_FAILED,
    GET_BOOKING,
    GET_BOOKING_SUCCESS,
    GET_BOOKING_FAILED,
    GET_HISTORY_BOOKING,
    GET_HISTORY_BOOKING_FAILED,
    GET_HISTORY_BOOKING_SUCCESS} from '../types'

const initialState = {
    isLoading: false,
    data: []
};

const getBooking = (state = initialState, action) => {
    switch (action.type){
        case GET_BOOKING: {
            console.log('reducer GET_BOOKING')
            return{
                ...state,
                isLoading: true
            }
        }
        case GET_BOOKING_SUCCESS: {
            console.log('reducer GET_BOOKING success')
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        }
        case GET_BOOKING_FAILED: {
            console.log('reducer GET_BOOKING failed')
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

export default getBooking
