import { combineReducers } from "redux";

import AuthReducer from "./auth/reducers";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;
