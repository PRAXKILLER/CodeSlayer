import { GET_PROBLEMS_LIST, GET_PROBLEM_BY_ID } from "./problemsTypes.js";

const initialState = { problems: {} };

const problemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROBLEMS_LIST:
      return {
        ...state,
        problems: action.payload,
      };
    case GET_PROBLEM_BY_ID:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default problemsReducer;
