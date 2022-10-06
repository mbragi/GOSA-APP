import axios from "axios";
import feedTypes from "./feed.types";

export const httpPostFeed = (data) => async (dispatch) => {
  dispatch({ type: feedTypes.CREATE_NEW_FEED });
  try {
    const response = await axios.post(
      "https://rocky-scrubland-70378.herokuapp.com/feed",
      data
    );
    console.log("feed successfully created: ", response.data);
    dispatch({
      type: feedTypes.CREATE_NEW_FEED,
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
