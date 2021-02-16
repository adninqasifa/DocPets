import {takeLatest, put} from 'redux-saga/effects'
import {ToastAndroid} from 'react-native'
import {apiAddAnimal, apiDeleteAnimal, apiGetAnimal} from '../../helpers/api/animal'
import {
    ADD_ANIMAL,
    ADD_ANIMAL_FAILED,
    ADD_ANIMAL_SUCCESS,
    GET_ANIMAL,
    DELETE_ANIMAL,
    GET_ANIMAL_SUCCESS,
    GET_ANIMAL_FAILED, DELETE_ANIMAL_FAILED, DELETE_ANIMAL_SUCCESS
} from '../types'
import {
    getAccountId,
    getHeaders
} from  '../../helpers/function/auth'

function* addAnimal(action) {
    try{
        const headers = yield getHeaders()
        const accountId = yield getAccountId()
        console.log('headers saga animal')
        const resAddAnimal = yield apiAddAnimal(headers, action.payload)
        console.log(resAddAnimal.data)

        yield put ({type: ADD_ANIMAL_SUCCESS , payload: resAddAnimal.data})
        console.log('berhasil menambah hewan')
    } catch {
        ToastAndroid.showWithGravity(
            'Gagal Menambahkan Hewan',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
        yield put ({type: ADD_ANIMAL_FAILED})
    }
}

function* getAnimal(){
    try{
        const headers = yield getHeaders()
        const accountId = yield getAccountId()
        console.log('headers saga get animal')

        const resGetAnimal = yield apiGetAnimal(accountId, headers)
        console.log('ini res get animal', resGetAnimal.data)
        yield put ({type: GET_ANIMAL_SUCCESS, payload: resGetAnimal.data})
        console.log('berhasil mendapatkan hewan')

    } catch{
        ToastAndroid.showWithGravity(
            'Gagal Mendapatkan Hewan',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
        yield put ({type: GET_ANIMAL_FAILED})
    }
}

function* deleteAnimal(action){
    try {
        const headers = yield getHeaders()
        console.log('headers saga delete animal')

        const resDeleteAnimal = yield apiDeleteAnimal(headers, action.data)
        console.log('ini res delete animal', resDeleteAnimal)

        yield put ({type: DELETE_ANIMAL_SUCCESS})


    } catch{
        ToastAndroid.showWithGravity(
            'Gagal Menghapus Hewan',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
        yield put({type: DELETE_ANIMAL_FAILED})
    }
}

function* animalSaga(){
    yield takeLatest(ADD_ANIMAL, addAnimal)
    yield takeLatest(GET_ANIMAL, getAnimal)
    yield takeLatest(DELETE_ANIMAL, deleteAnimal)
}

export default animalSaga
