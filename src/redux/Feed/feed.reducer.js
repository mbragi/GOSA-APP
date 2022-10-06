import feedTypes from "./feed.types";


const INITIAL_STATE = {
  loading: false,
  error: null,
  feed: [],
};

const feedReducer = (state = { ...INITIAL_STATE }, action = {}) => {
  console.log(action)
  switch (action.type) {
    case feedTypes.GET_FEEDS_START || feedTypes.CREATE_NEW_FEED_START:
      return {
        ...state,
        loading: true,
        error: null
      }
      
      case feedTypes.CREATE_NEW_FEED_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          feed: action.payload
        }
        
        
      case feedTypes.GET_FEEDS_SUCCESS:
        console.log("Ready to update feeds: ", action);
        return {
          ...state,
          feed: action.payload,
          loading: false,
          error: null
        }

    case feedTypes.GET_FEEDS_FAILED || feedTypes.CREATE_NEW_FEED_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
g
    default:
      return state;
  }
};

export default feedReducer;
