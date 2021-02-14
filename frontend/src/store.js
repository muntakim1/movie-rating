import { combineReducers } from "redux";

import loginReducer from "./reducers";

const allReducers = combineReducers({
  login: loginReducer,
});

export default allReducers;
