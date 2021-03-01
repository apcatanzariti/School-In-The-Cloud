import { SET_ACTIVE_ADMIN, ADD_TASK } from './../actions/action';

const initialState = {
    activeAdmin: '',
    activeStudent: '',
    activeVolunteer: '',
    admin: {
        name: '',
        taskList: [
            {
                title: 'task 1',
                description: 'Do something!'
            },
            {
                title: 'task 2',
                description: 'Do something else!'
            },
            {
                title: 'task 3',
                description: 'Do a third thing!'
            }
        ]
    }
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ACTIVE_ADMIN:
            return({
                ...state,
                activeAdmin: action.payload
            });

        case ADD_TASK:
            return({
                ...state,
                admin: {
                    taskList: [...state.admin.taskList, action.payload]
                }
            });

        default:
            return state;
    };
};