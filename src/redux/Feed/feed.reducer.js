import feedTypes from "./feed.types";
const INITIAL_STATE = {
  user: auth.user,
  loading: false,
  error: null,
};

const feedReducer = (state = { INITIAL_STATE }, action = {}) => {
  switch (action.types) {
    case feedTypes.loadUser:
      return {
        ...state,
        loading: false,
        error: null,
        user: state.INITIAL_STATE.user,
      };

    default:
      return state;
  }
};

export default feedReducer;
