
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESSFUL = "DATA_SUCCESSFUL";
export const DATA_FAILURE = "DATA_FAILURE";
export const SET_ACTIVE_ADMIN = 'SET_ACTIVE_ADMIN';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FETCH_TASK_LOADING = 'FETCH_TASK_LOADING';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_FAIL = 'FETCH_TASK_FAIL';
export const FETCH_VOLUNTEERS_LOADING = 'FETCH_VOLUNTEERS_LOADING';
export const FETCH_VOLUNTEERS_SUCCESS = 'FETCH_VOLUNTEERS_LOADING';
export const FETCH_VOLUNTEERS_FAIL = 'FETCH_VOLUNTEERS_LOADING';

//actions creators

// export const deleteTask = (id) => dispatch => {

//     axiosWithAuth()
//     .delete('/api/auth/delete/id')
//     .then((res) => {
//         dispatch(removeTask(res.data));
//     })
// };

/* --------------------fetching tasks for the volunteer dash------------------ */

export const fetchTasks = () => dispatch => {

    dispatch(fetchTaskLoading());

    axiosWithAuth()
    .get('/api/volunteers/tasks')
    .then((res) => {
        dispatch(fetchTaskSuccess(res.data));
    })
    .catch((err) => {
        dispatch(fetchTaskFail(err));
    })
};

export const fetchTaskLoading = () => {
    return ({ type: FETCH_TASK_LOADING });
};

export const fetchTaskSuccess = (task) => {
    return ({ type: FETCH_TASK_SUCCESS, payload: task });
};

export const fetchTaskFail = (error) => {
    return ({ type: FETCH_TASK_FAIL, payload: error });
};

/* ------------------------------------------------------------------------ */

/* -----------fetching volunteers for the student dash---------------------*/

export const fetchVolunteers = () => dispatch => {

    dispatch(fetchVolunteersLoading());

    axiosWithAuth()
    .get('/api/student/volunteers')
    .then((res) => {
        dispatch(fetchVolunteersSuccess(res.data));
    })
    .catch((err) => {
        dispatch(fetchVolunteersFail(err));
    })
};

const fetchVolunteersLoading = () => {
    return ({ type: FETCH_VOLUNTEERS_LOADING });
};

const fetchVolunteersSuccess = (volunteer) => {
    return ({ type: FETCH_VOLUNTEERS_SUCCESS, payload: volunteer });
};

const fetchVolunteersFail = (error) => {
    return ({ type: FETCH_VOLUNTEERS_FAIL, payload: error });
};

/* ------------------------------------------------------------------------ */

export const setActiveAdmin = (user) => {
    return({
        type: SET_ACTIVE_ADMIN,
        payload: user.username
    });
};

export const addTask = (task) => {
    return({
        type: ADD_TASK,
        payload: task
    });
};

export const removeTask = (taskToDelete) => {
    return({
        type: DELETE_TASK,
        payload: taskToDelete
    });
};

export const fetchData = (input) => {
  return { type: FETCH_DATA, payload: input };
};
