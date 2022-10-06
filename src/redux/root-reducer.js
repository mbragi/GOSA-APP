import { combineReducers } from "redux";
import authReducer from "./Auth/authReducer";
import feedReducer from "./Feed/feed.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  feed: feedReducer,
});

export default rootReducers;
