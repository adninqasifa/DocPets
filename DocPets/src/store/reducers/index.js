import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile'
import clinic from './clinic'
import clinicSearch from './clinicSearch'
import animal from './animal'
import getAnimal from './get_animal'
import getClinicDetail from './clinic_detail'
import deleteAnimal from './delete_animal'
import addBooking from './add_booking'
import getBooking from './get_booking'
import getHistoryBooking from './get_history_booking'
import clinicSearchPet from './clinicSearchPet'

export default combineReducers({
    auth,
    profile,
    clinic,
    clinicSearch,
    animal,
    getAnimal,
    deleteAnimal,
    getClinicDetail,
    addBooking,
    getBooking,
    getHistoryBooking,
    clinicSearchPet,
    
})