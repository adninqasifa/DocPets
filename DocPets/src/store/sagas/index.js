import {all} from 'redux-saga/effects'
import animalSaga from './animal'
import authSaga from './auth'
import bookingSaga from './booking'
import clinicSaga from './clinic'
import clinicCariSaga from './clinicCari'
import clinicCitySaga from './clinicCity'
import clinicPetSaga from './clinicPet'
import clinicDetailSaga from './clinic_detail'
import profileSaga from './profile'

export default function* rootSaga() {
    yield all([
        authSaga(),
        profileSaga(),
        clinicSaga(),
        clinicCariSaga(),
        clinicCitySaga(),
        animalSaga(),
        clinicDetailSaga(),
        bookingSaga(),
        clinicPetSaga(),
    ])
}