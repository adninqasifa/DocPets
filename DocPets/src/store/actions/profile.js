import {GET_PROFILE, UPDATE_PROFILE} from '../types'

export const getProfileDetail = () => {
  return {type: GET_PROFILE};
};

export const updateProfile = (payload) => {
    console.log('updateProfileDetail', payload);
    return {type: UPDATE_PROFILE, payload};
};
