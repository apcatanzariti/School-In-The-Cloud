import { FETCH_DATA, SET_ACTIVE_ADMIN, ADD_TASK, DELETE_TASK } from '../actions/index';

export const initialState = {
  data: [],
  isLoading: false,
  error: "",
  // the stuff below here will be changing
  activeAdmin: '',
    activeStudent: '',
    activeVolunteer: '',
    admin: {
        name: '',
        taskList: [
            {
                id: '1',
                title: 'task 1',
                description: 'Do something!'
            },
            {
                id: '2',
                title: 'task 2',
                description: 'Do something else!'
            },
            {
                id: '3',
                title: 'task 3',
                description: 'Do a third thing!'
            }
        ]
    }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

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

        case DELETE_TASK:
            return({
                ...state,
                // filter through and include only tasks with IDs that DO NOT match the payload
            });

    case "*":
      return state;

    default:
      return state;
  }
};

export default reducer;
