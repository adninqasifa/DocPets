import {
    GET_CLINIC_SEARCH,
    GET_CLINIC_CITY,
    GET_CLINIC_PET,
    GET_CLINIC_SUCCESS_SEARCH,
    GET_CLINIC_FAILED_SEARCH,
  } from '../types';


const initialState = {
    isLoading: false,
    listClinicSearch:[
      {
        petSpeciesLists:[
          {clinic:{}}
        ]
      }
    ]
  };

  const clinicSearchPet = (state = initialState, action) => {
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

      default:
        return state;
    }
  };

  export default clinicSearchPet;
