import axios from "axios";
import feedTypes from "./feed.types";

export const httpPostFeed = (data) => async (dispatch) => {
  dispatch({ type: feedTypes.CREATE_NEW_FEED_START});
  try {
    const response = await axios.post(
      "https://rocky-scrubland-70378.herokuapp.com/feed",
      data
    );
    console.log(response.data)
    dispatch({
      type: feedTypes.CREATE_NEW_FEED_SUCCESS,
      payload: response?.data?.allFeeds,
    });

  } catch (error) {
    console.log(error?.response?.data);
    dispatch({
      type: feedTypes.CREATE_NEW_FEED_FAILED,
      payload: error?.response?.data
    })
  }
};

export const httpGetFeed = () => async (dispatch) => {
  dispatch({ type: feedTypes.GET_FEEDS_START });
  try {
    const response = await axios.get("https://rocky-scrubland-70378.herokuapp.com/feeds");
    dispatch({
      type: feedTypes.GET_FEEDS_SUCCESS,
      payload: response.data.allFeeds,
    });
  } catch (error) {
    console.log(error?.response?.data);
    dispatch({
      type: feedTypes.GET_FEEDS_FAILED,
      payload: error?.response?.data
    })
  }
};
