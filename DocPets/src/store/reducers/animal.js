import {
    ADD_ANIMAL,
    ADD_ANIMAL_SUCCESS,
    ADD_ANIMAL_FAILED} from '../types'

const initialState = {
    isLoading: false,
    data: {}
}

const animal = (state = initialState, action) => {
    switch (action.type){
        case ADD_ANIMAL: {
            console.log('add animal')
            return {
                ...state,
                isLoading: true,
            }
        }
        case ADD_ANIMAL_SUCCESS: {
            console.log('reducer add animal success')
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        }
        case ADD_ANIMAL_FAILED: {
            console.log('reducer add animal failed')
            return{
                ...state,
                isLoading: false
            }
        }
        default:
            return{
                ...state,
            }
    }
}


export default animal
