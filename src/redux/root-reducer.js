import { combineReducers } from "redux";
import authReducer from "./Auth/authReducer";
import commentReducer from "./Comment/comment.reducer";
import feedReducer from "./Feed/feed.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  feed: feedReducer,
  comment: commentReducer,
});

export default rootReducers;
