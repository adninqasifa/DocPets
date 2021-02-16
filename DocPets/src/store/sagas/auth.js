import {takeLatest, put} from 'redux-saga/effects'
import {ToastAndroid} from 'react-native';

import {
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    REGISTER,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    LOGOUT,
} from '../types';

//import ACTION from '../types'

import {GET_PROFILE} from '../types'
import {
    removeToken,
    saveAccountId,
    saveToken,
} from '../../helpers/function/auth'
import {apiLogin, apiRegister} from '../../helpers/api/auth'
import { GET_ANIMAL } from '../types';



function* login(action) {
    try{
        //LOGIN
        const resLogin = yield apiLogin(action.payload);
        console.log('data resLogin :', resLogin.data);

        if (resLogin && resLogin.data) {
            // save token to local storage
            yield saveToken(resLogin.data.token);
            yield saveAccountId(resLogin.data.id);

            yield put ({type: LOGIN_SUCCESS});

            ToastAndroid.showWithGravity(
                'Welcome ' + resLogin.data.nama,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
            yield put({type: GET_PROFILE});
            yield put({type: GET_ANIMAL})
        } else {
            // show alert
            ToastAndroid.showWithGravity(
                'Login Gagal',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
            yield put ({ type: LOGIN_FAILED});
        }
    } catch {
        ToastAndroid.showWithGravity(
            'Gagal login',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
        yield put ({type: LOGIN_FAILED});
    }
}

function* register(action) {
    try{
        console.log('register saga: ', action)
        const resRegister = yield apiRegister(action.payload);
        console.log('data resRegister :', resRegister.data);

        if (resRegister && resRegister.data) {
            // save token to local storage
            yield saveToken(resRegister.data.token);
            yield saveAccountId(resRegister.data.id);

            yield put({type: GET_PROFILE, payload: resRegister.data});
            yield put ({type: REGISTER_SUCCESS});

            ToastAndroid.showWithGravity(
                'Welcome ' + resRegister.data.nama,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
        }else {
            ToastAndroid.showWithGravity(
                'Register gagal',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
            yield put({type: REGISTER_FAILED});
        }
    } catch(e) {
        ToastAndroid.showWithGravity(
            'Gagal register',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
    }
}

function* logout() {
    try {
        yield removeToken();
    } catch(e){
        ToastAndroid.showWithGravity(
            'Gagal logout',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        )
    }
}


function* authSaga() {
    yield takeLatest(LOGIN, login);
    yield takeLatest(REGISTER, register);
    yield takeLatest(LOGOUT, logout);
}
 export default authSaga;
