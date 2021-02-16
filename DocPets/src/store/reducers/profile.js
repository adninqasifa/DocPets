import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILED
  } from '../types';

  // initial state = nilai awal data profile yang ada di store
  const initialState = {
    isLoading: false,
    data: [{
        id: null,
        username: null,
        fullname: null,
        email: null,
        foto: null,
        phoneNumber: null,
        gender: null
    }]
  };

  const profile = (state = initialState, action) => {
    switch (action.type) {
      case GET_PROFILE: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case GET_PROFILE_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      }
      case GET_PROFILE_FAILED: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case UPDATE_PROFILE: {
        return{
          ...state,
          isLoading: true
        }
      }
      case UPDATE_PROFILE_SUCCESS: {
        return{
          ...state,
          isLoading: false,
          data: action.payload
        }
      }
      case UPDATE_PROFILE_FAILED: {
        return{
          ...state,
          isLoading: false,
        }
      }
      default:
        return state;
    }
  };

  export default profile;
