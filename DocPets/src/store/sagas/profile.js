import {takeLatest, put} from 'redux-saga/effects';
import {apiGetProfile, apiUpdateProfile} from '../../helpers/api/profile';
import {ToastAndroid} from 'react-native';
import {getAccountId, getHeaders} from '../../helpers/function/auth';
import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED
} from '../types';

function* getProfileDetail() {
  try {
      console.info('sebelum headers')
    const headers = yield getHeaders();
    const accountId = yield getAccountId();
    console.info('sesudah headers')

    const resProfile = yield apiGetProfile(accountId, headers);
    console.info('ini resprofile', resProfile.data);

    yield put({type: GET_PROFILE_SUCCESS, payload: resProfile.data});
    console.log('berhasil ambil data profile');

  } catch (e) {
    ToastAndroid.showWithGravity(
      'Gagal mengambil data profil',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );

    yield put({type: GET_PROFILE_FAILED});
  }
}

function* updateProfile(action) {
  try {
    console.log('sebelum headers update profile')
    const headers = yield getHeaders();
    console.log('sebelum account ID update', headers)
    const accountId = yield getAccountId();
    console.log(accountId)
    console.log('saga updateProfile :', action )
    // Update Profile
    const resProfileUpdate = yield apiUpdateProfile(
      accountId,
      headers,
      action.payload
    );
    if (resProfileUpdate && resProfileUpdate.data){
      console.info('yessss', resProfileUpdate.data)
    }
    // console.log('data resProfileUpdate: ', resProfileUpdate.data)
    // yield put ({type: UPDATE_PROFILE_SUCCESS, payload: resProfileUpdate.data});
    // console.log('berhasil edit profile')
    yield put ({type: GET_PROFILE})

    ToastAndroid.showWithGravity(
      'Sukses mengupdate data profil',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  } catch(e) {
    // show alert
    ToastAndroid.showWithGravity(
      'Gagal mengupdate profil',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
   yield put ({type: UPDATE_PROFILE_FAILED})
  }
}

function* profileSaga() {
  yield takeLatest(GET_PROFILE, getProfileDetail);
  yield takeLatest(UPDATE_PROFILE, updateProfile)
}

export default profileSaga;
