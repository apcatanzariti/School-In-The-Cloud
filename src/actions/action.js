export const SET_ACTIVE_ADMIN = 'SET_ACTIVE_ADMIN';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// export const deleteTask = (id) => dispatch => {

//     axiosWithAuth()
//     .delete('/api/auth/delete/id')
//     .then((res) => {
//         dispatch(removeTask(res.data));
//     })
// };

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

const removeTask = (taskToDelete) => {
    return({
        type: DELETE_TASK,
        payload: taskToDelete
    });
};