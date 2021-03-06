
import { axiosWithAuth } from './axiosWithAuth';

// Declare availability enums.
export const AVAILABILITY = {
  NONE_OF_THE_TIME: 'noneofthetime',
  ALL_THE_TIME: 'allthetime',
  EVEN_MORE_OF_THE_TIME: 'evenmoreofthetime'
}

export const availabilityDetails = {
  [AVAILABILITY.NONE_OF_THE_TIME]: { name: 'Not available' },
  [AVAILABILITY.ALL_THE_TIME]: { name: '10:00am - 3:00pm' },
  [AVAILABILITY.EVEN_MORE_OF_THE_TIME]: { name: '8:00am - 5:00pm' },
}

export const getVolunteers = () => {
  return axiosWithAuth().get('/api/student/volunteers');
}

export const getVolunteerById = (volunteerId) => {
  return axiosWithAuth().get(`/api/student/volunteers/${volunteerId}`);
}