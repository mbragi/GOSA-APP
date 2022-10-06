import feedTypes from "./feed.types";
const INITIAL_STATE = {
  loading: false,
  error: null,
  feed: null,
};

const feedReducer = (state = { ...INITIAL_STATE }, action = {}) => {
  switch (action.types) {
    case feedTypes.CREATE_NEW_FEED:
      return {
        ...state,
        loading: false,
        error: null,
        feed: action.payload,
      };
    case feedTypes.CREATE_FEED_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        feed: null,
      };
    default:
      return state;
  }
};

export default feedReducer;
