import axios from "axios";
import { GET_ERRORS } from "./types";

// Register
export const registerUser = userData => dispatch => {
  axios
    .post("api/user/", userData)
    .then(res => console.log(res.data))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
