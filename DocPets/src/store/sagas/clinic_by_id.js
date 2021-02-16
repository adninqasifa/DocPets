// // Sagas untuk mendapatkan Semua Listing Klinik
//
// import {takeLatest, put} from 'redux-saga/effects'
// import {apiGetClinicDetail} from '../../helpers/api/clinic_detail'
// import {ToastAndroid} from 'react-native'
// import {GET_CLINIC_DETAIL,
// GET_CLINIC_DETAIL_SUCCESS,
// GET_CLINIC_DETAIL_FAILED} from '../types'
// import {
//     getAccountId,
//     getHeaders
// } from  '../../helpers/function/auth'
//
// function* getClinicById(action){
//     try{
//     const headers = yield getHeaders()
//     const accountId = yield getAccountId()
//     console.log('ini saga get clinic detail')
//
//     const resGetClinicById = yield apiGetClinicById(headers, action.payload)
//     console.log('Ini result GetClinicById adnin:', resGetClinicById.data.result);
//
//     yield put({type: GET_CLINIC_DETAIL_SUCCESS , payload: resGetClinicById.data.result})
//     console.log('berhasil menambahkan clinic')
//
//     } catch(err) {
//         console.log(JSON.stringify(err))
//         ToastAndroid.showWithGravity(
//             'Gagal Mengambil Data Klinik',
//             ToastAndroid.SHORT,
//             ToastAndroid.BOTTOM,
//         );
//         yield put ({type: GET_CLINIC_DETAIL_FAILED})
//     }
// }
//
// function* clinicDetailSaga(){
//   yield takeLatest(GET_CLINIC_DETAIL_BY_ID, getClinicById)
// }
//
// export default clinicByIdSaga
