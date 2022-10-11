import axios from "axios";
import commentTypes from "./comment.types";

export const httpGetComment = (postId) => async (dispatch) => {
  dispatch({ type: commentTypes.GET_COMMENT_START });

  try {
    const res = await axios.get(
      `https://rocky-scrubland-70378.herokuapp.com/comment/${postId}`
    );
    console.log(res?.data?.data);
    dispatch({
      type: commentTypes.GET_COMMENT_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error?.response?.data);
    dispatch({
      type: commentTypes.GET_COMMENT_FAILED,
      payload: error?.response?.data,
    });
  }
};
