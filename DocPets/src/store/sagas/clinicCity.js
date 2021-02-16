import {takeLatest, put} from 'redux-saga/effects'
import {ToastAndroid} from 'react-native';
import { apiGetClinicByCityRoute} from '../../helpers/api/clinic';
import { getHeaders } from '../../helpers/function/auth';
import { GET_CLINIC_FAILED_CITY, GET_CLINIC_FAILED_SEARCH, GET_CLINIC_SUCCESS_CITY, GET_CLINIC_SUCCESS_SEARCH } from '../types';

function* getClinicCity(action) {
    try {
        console.log('sebelum header saga search city')
        const headers=yield getHeaders()
        const resClinic=yield apiGetClinicByCityRoute(action.payload,headers)
        console.log('sesudah search city saga',resClinic.data)
        yield put({type:GET_CLINIC_SUCCESS_SEARCH,payload:resClinic.data})
    } catch(e){
        yield put({type:GET_CLINIC_FAILED_SEARCH})
        ToastAndroid.showWithGravity(
            'Klinik belum tersedia di kota ini',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        )
    }
}


function* clinicCitySaga() {
    console.info('authsaga()');
    yield takeLatest('GET_CLINIC_CITY', getClinicCity);

}
 export default clinicCitySaga;
