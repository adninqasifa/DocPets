import {ADD_ANIMAL, DELETE_ANIMAL, GET_ANIMAL} from '../types'

export const addAnimal = (payload) =>{
    return{ type: ADD_ANIMAL, payload}
};

export const deleteAnimal = (data) =>{
    return {type: DELETE_ANIMAL, data}
}

export const getAnimal = () => {
    return {type: GET_ANIMAL}
}
