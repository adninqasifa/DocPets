import {LOGIN, REGISTER, LOGOUT} from '../types'

export const loginAction = (payload) => {
    return {type: LOGIN, payload};
};

export const registerAction = (payload) => {
    return {type: REGISTER, payload};
}

export const logoutAction = () => {
    return {type: LOGOUT};
}
