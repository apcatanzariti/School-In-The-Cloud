
import { axiosWithAuth } from './axiosWithAuth';

export const getVolunteers = () => {
  return axiosWithAuth().get('/api/student/volunteers');
}

export const getVolunteerById = (volunteerId) => {
  return axiosWithAuth().get(`/api/student/volunteers/${volunteerId}`);
}