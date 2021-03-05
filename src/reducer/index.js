import { FETCH_DATA, SET_ACTIVE_ADMIN, ADD_TASK, DELETE_TASK, FETCH_TASK_LOADING, FETCH_TASK_SUCCESS, FETCH_TASK_FAIL, FETCH_VOLUNTEERS_LOADING, FETCH_VOLUNTEERS_SUCCESS, FETCH_VOLUNTEERS_FAIL } from '../actions/index';

export const initialState = {
  data: [],
  isLoading: false,
  error: "",
  tasks: [],
  role: '',
  isFetching: false,
  fetchError: '',
  volunteers: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
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
        tasks: [ ...state.tasks, action.payload ]
      });

    case DELETE_TASK:
        return({
          ...state,
          // filter through and include only tasks with IDs that DO NOmatch the payload
        });

    case FETCH_TASK_LOADING:
      return ({
        ...state,
        isFetching: true
      });
  
    case FETCH_TASK_SUCCESS:
      return ({
        ...state,
        tasks: action.payload,
        isFetching: false
      });
  
    case FETCH_TASK_FAIL:
      return ({
        ...state,
        isFetching: false,
        fetchError: action.payload
      });

    case FETCH_VOLUNTEERS_LOADING:
        return ({
            ...state,
            isFetching: true
        });
  
    case FETCH_VOLUNTEERS_SUCCESS:
        return ({
            ...state,
            volunteers: action.payload,
            isFetching: false
          });
  
    case FETCH_VOLUNTEERS_FAIL:
        return ({
            ...state,
            isFetching: false,
            fetchError: action.payload
        });

    case "*":
      return state;

    default:
      return state;
  }
};

export default reducer;
