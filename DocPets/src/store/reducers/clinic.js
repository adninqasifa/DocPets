import {
    GET_CLINIC,
    GET_CLINIC_SUCCESS,
    GET_CLINIC_FAILED,
  } from '../types';


const initialState = {
    isLoading: false,
    listClinic:[]
  };

  const clinic = (state = initialState, action) => {
    switch (action.type) {
      case GET_CLINIC: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case GET_CLINIC_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          listClinic: action.payload,
        };
      }
      case GET_CLINIC_FAILED: {
        return {
          ...state,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  };

  export default clinic;
