import {takeLatest, put} from 'redux-saga/effects'
import {ToastAndroid} from 'react-native';
import { apiGetClinicAllRoute } from '../../helpers/api/clinic';
import { getHeaders } from '../../helpers/function/auth';
import { GET_CLINIC_FAILED, GET_CLINIC_SUCCESS } from '../types';

function* getClinic() {
    try {
        const headers=yield getHeaders()
        const resClinic=yield apiGetClinicAllRoute(headers)
        yield put({type:GET_CLINIC_SUCCESS,payload:resClinic.data.result})

        //console.log('Ini Listing Rumah sakit:', resClinic.data.result);

    } catch(e){
        yield put({type:GET_CLINIC_FAILED})
        ToastAndroid.showWithGravity(
            'Gagal menampilkan data clinic',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        )
    }
}


function* clinicSaga() {
    console.info('authsaga()');
    yield takeLatest('GET_CLINIC', getClinic);

}
 export default clinicSaga;
