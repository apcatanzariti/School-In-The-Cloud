
import { axiosWithAuth } from './axiosWithAuth';

export const createTask = (task) => {
  return axiosWithAuth().post('/api/admin/tasks', task);
}

export const updateTask = (id, taskUpdates) => {
  return axiosWithAuth().put(`/api/admin/${id}/tasks`, taskUpdates);
}

export const deleteTask = (id) => {
  return  axiosWithAuth().delete(`/api/volunteers/tasks/${id}`);
}