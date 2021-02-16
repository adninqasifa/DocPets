import {
    DELETE_ANIMAL,
    DELETE_ANIMAL_SUCCESS,
    DELETE_ANIMAL_FAILED} from '../types'

const initialState = {
    isLoading: false,
    isDeleted: false
}

const deleteAnimal = (state = initialState, action) => {
    switch (action.type){
        case DELETE_ANIMAL: {
            console.log('DELETE animal')
            return {
                ...state,
                isLoading: true,
            }
        }
        case DELETE_ANIMAL_SUCCESS: {
            console.log('reducer DELETE animal success')
            return{
                ...state,
                isLoading: false,
                isDeleted: true
            }
        }
        case DELETE_ANIMAL_FAILED: {
            console.log('reducer DELETE animal failed')
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


export default deleteAnimal
