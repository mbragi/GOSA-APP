import feedTypes from "./feed.types";
const INITIAL_STATE = {
  loading: false,
  error: null,
};

const feedReducer = (state = { ...INITIAL_STATE }, action = {}) => {
  switch (action.types) {
    default:
      return state;
  }
};

export default feedReducer;
