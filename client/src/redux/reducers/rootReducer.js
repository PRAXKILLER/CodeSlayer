import { combineReducers } from "redux";

import authReducer from "./auth/authReducer.js";
import userReducer from "./user/userReducer.js";
import problemsReducer from "./problems/problemsReducer.js";
import solutionsReducer from "./solutions/solutionReducres.js";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  problemsReducer,
  solutionsReducer,
});

export default rootReducer;
