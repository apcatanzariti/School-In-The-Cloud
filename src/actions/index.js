export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESSFUL = "DATA_SUCCESSFUL";
export const DATA_FAILURE = "DATA_FAILURE";

//actions creators
export const fetchData = (input) => {
  return { type: FETCH_DATA, payload: input };
};
