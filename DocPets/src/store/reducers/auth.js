import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGOUT,
} from '../types';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
};

const auth = (state= initialState, action) => {
    switch (action.type){
        case LOGIN: {
            console.info('reducer login');
            return {
               ...state,
               isLoading: true,
            };
        }
        case LOGIN_SUCCESS: {
            console.info('reducer login success');
            return {
                isLoggedIn: true,
                isLoading: false
            };
        }
        case LOGIN_FAILED: {
            console.info('reducer login_failed')
            return {
                ...state,
                isLoading: false
            };
        }
        case REGISTER: {
            console.info ('reducer register');
            return {
                ...state,
                isLoading: true,
            }
        }
        case REGISTER_SUCCESS: {
            console.info('reducer register_success')
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false
            }
        }
        case REGISTER_FAILED: {
            console.info('reducer register_failed')
            return {
                ...state,
                isLoading: false,
            };
        }
        case LOGOUT: {
            console.info('reducer logout');
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
            }
        }
        default:
            return{
                ...state,
            }
    }
};

export default auth;
