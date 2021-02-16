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
    data: {}
};

const addBooking = (state = initialState, action) => {
    switch (action.type){
        case BOOKING: {
            console.log('booking')
            return {
                ...state,
                isLoading: true,
            }
        }
        case BOOKING_SUCCESS: {
            console.log('reducer booking success')
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        }
        case BOOKING_FAILED: {
            console.log('reducer booking failed')
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


export default addBooking
