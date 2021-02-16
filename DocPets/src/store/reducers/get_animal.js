import {
    GET_ANIMAL,
    GET_ANIMAL_SUCCESS,
    GET_ANIMAL_FAILED} from '../types'

const initialState = {
    isLoading: false,
    data: []
}

const getAnimal = (state = initialState, action) => {
    switch (action.type){
        case GET_ANIMAL: {
            console.log('reducer get animal')
            return{
                ...state,
                isLoading: true
            }
        }
        case GET_ANIMAL_SUCCESS: {
            console.log('reducer get animal success')
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        }
        case GET_ANIMAL_FAILED: {
            console.log('reducer get animal failed')
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


export default getAnimal
