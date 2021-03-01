export const SET_ACTIVE_ADMIN = 'SET_ACTIVE_ADMIN';
export const ADD_TASK = 'ADD_TASK';

export const setActiveAdmin = (user) => {
    return({
        type: SET_ACTIVE_ADMIN,
        payload: user.username
    });
};

export const addTask = (task) => {
    return ({
        type: ADD_TASK,
        payload: task
    });
};