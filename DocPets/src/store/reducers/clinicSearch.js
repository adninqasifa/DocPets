import {
    GET_CLINIC_SEARCH,
    GET_CLINIC_CITY,
    GET_CLINIC_PET,
    GET_CLINIC_SUCCESS_SEARCH,
    GET_CLINIC_FAILED_SEARCH,
  } from '../types';


const initialState = {
    isLoading: false,
    listClinicSearch:[]
  };

  const clinicSearch = (state = initialState, action) => {
    switch (action.type) {
      case GET_CLINIC_SEARCH: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case GET_CLINIC_PET: {
        console.log('reducer get clinic pet')
        return {
          ...state,
          isLoading: true,
        };
      }
      case GET_CLINIC_CITY: {
        console.log('reducer get clinic city')
        return {
          ...state,
          isLoading: true,
        };
      }
      case GET_CLINIC_SUCCESS_SEARCH: {
        return {
          ...state,
          isLoading: false,
          listClinicSearch: action.payload,
        };
      }
      case GET_CLINIC_FAILED_SEARCH: {
        return {
          ...state,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  };

  export default clinicSearch;
