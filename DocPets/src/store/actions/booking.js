import {BOOKING, GET_BOOKING, GET_HISTORY_BOOKING} from '../types'

export const bookingAction = (payload) => {
    return {type: BOOKING, payload};
};

export const getBooking = () => {
    return {type: GET_BOOKING}
}

export const getHistoryBooking = () => {
    return {type: GET_HISTORY_BOOKING}
}
