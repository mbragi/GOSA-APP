import feedTypes from "./feed.types";


const INITIAL_STATE = {
  loading: false,
  error: null,
  feed: [],
};

const feedReducer = (state = { ...INITIAL_STATE }, action = {}) => {

  switch (action.type) {
    case feedTypes.GET_FEEDS_START || 
    feedTypes.CREATE_NEW_FEED_START || 
    feedTypes.LIKE_POST_START:
      return {
        ...state,
        loading: true,
        error: null
      }

        
    case feedTypes.GET_FEEDS_SUCCESS || 
    feedTypes.CREATE_NEW_FEED_SUCCESS ||
    feedTypes.LIKE_POST_SUCCESS:
      return {
        ...state,
        feed: action.payload,
        loading: false,
        error: null
      }

    case feedTypes.LOAD_FEED: 
      return {
        ...state,
        feed: action.payload
      }

    case feedTypes.GET_FEEDS_FAILED || 
    feedTypes.CREATE_NEW_FEED_FAILED || 
    feedTypes.LIKE_POST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
        error: null
      }
g
    default:
      return state;
  }
};

export default feedReducer;
