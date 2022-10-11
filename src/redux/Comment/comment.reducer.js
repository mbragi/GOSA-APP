import commentTypes from "./comment.types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  comment: [],
};

const commentReducer = (state = { ...INITIAL_STATE }, action = {}) => {
  switch (action.type) {
    case commentTypes.GET_COMMENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case commentTypes.GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.payload,
        loading: false,
        error: null,
      };

    case commentTypes.GET_COMMENT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default commentReducer;
