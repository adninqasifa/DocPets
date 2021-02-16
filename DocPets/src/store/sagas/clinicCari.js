import {takeLatest, put} from 'redux-saga/effects'
import {ToastAndroid} from 'react-native';
import { apiGetClinicByNameRoute } from '../../helpers/api/clinic';
import { getHeaders } from '../../helpers/function/auth';
import { GET_CLINIC_FAILED, GET_CLINIC_SUCCESS_SEARCH } from '../types';

function* getClinic(action) {
    try {
        const headers=yield getHeaders()
        const resClinic=yield apiGetClinicByNameRoute(action.payload,headers)
        console.log("ini habis ngesearch", resClinic);
        yield put({type:GET_CLINIC_SUCCESS_SEARCH, payload:resClinic.data.result})
    } catch(e){
        yield put({type:GET_CLINIC_FAILED})
        ToastAndroid.showWithGravity(
            'Gagal menampilkan data clinic 1',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        )
    }
}


function* clinicCariSaga() {
    console.info('authsaga()');
    yield takeLatest('GET_CLINIC_CARI', getClinic);

}
 export default clinicCariSaga;
