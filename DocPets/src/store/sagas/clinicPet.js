import {takeLatest, put} from 'redux-saga/effects'
import {ToastAndroid} from 'react-native';
import { apiGetClinicByPetRoute} from '../../helpers/api/clinic';
import { getHeaders } from '../../helpers/function/auth';
import { GET_CLINIC_FAILED_PET, GET_CLINIC_FAILED_SEARCH, GET_CLINIC_SUCCESS_PET, GET_CLINIC_SUCCESS_SEARCH } from '../types';

function* getClinicPet(action) {
    try {
        console.log('sebelum header saga search pet')
        const headers=yield getHeaders()
        const resClinic=yield apiGetClinicByPetRoute(action.payload,headers)
        let clinicsPet=[]
        if (resClinic.data.length>0){
            clinicsPet=resClinic.data[0].petSpeciesLists.map(item=>item.clinic)
        } else  {
            ToastAndroid.showWithGravity(
                'Data tidak tersedia',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            )
        }
        console.log('sesudah search pet saga',resClinic.data)
        yield put({type:GET_CLINIC_SUCCESS_SEARCH,payload:clinicsPet})
    } catch(e){
        yield put({type:GET_CLINIC_FAILED_SEARCH})
        ToastAndroid.showWithGravity(
            'Gagal menampilkan data clinic 3',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        )
    }
}


function* clinicPetSaga() {
    console.info('authsaga()');
    yield takeLatest('GET_CLINIC_PET', getClinicPet);

}
 export default clinicPetSaga;
