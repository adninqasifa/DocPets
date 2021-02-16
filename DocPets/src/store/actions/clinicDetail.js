import {GET_CLINIC_DETAIL} from '../types'

export const getClinicDetail = (payload) => {
  return {type: GET_CLINIC_DETAIL, payload};
};
