import AuthTypes from "./auth.types";

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case AuthTypes.LOGIN_USER_START:
      return {
        ...state,
        loading: true,
        error: null,
        user: null,
      };

    case AuthTypes.LOGIN_USER_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };

    case AuthTypes.LOGIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };

    case AuthTypes.LOGOUT_USER: 
      return {
        ...state,
        loading: false,
        user: null, 
        error: null
      }

    default:
      return state;
  }
};

export default authReducer;
