import FETCH_DATA from "../actions";

export const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    case "*":
      return state;

    default:
      return state;
  }
};
export default reducer;
