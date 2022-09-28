import { combineReducers } from "redux";
import authReducer from "./Auth/authReducer";

const rootReducers = combineReducers({
  auth: authReducer,
});

export default rootReducers;
