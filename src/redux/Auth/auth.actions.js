import axios from "axios";
import AuthTypes from "./Auth.types";

export const httpLoginUser = (data) => async (dispatch) => {
  dispatch({ type: AuthTypes.LOGIN_USER_START });

  try {
    const response = await axios.post(
      `https://rocky-scrubland-70378.herokuapp.com/login`,
      data
    );
    console.log("Login successful: ", response.data);
    dispatch({
      type: AuthTypes.LOGIN_USER_SUCCESSFUL,
      payload: response.data.data,
    });
  } catch (error) {
    // console.log(error.response.data);
    dispatch({
      type: AuthTypes.LOGIN_USER_FAILED,
      payload: error.response.data,
    });
  }
};
