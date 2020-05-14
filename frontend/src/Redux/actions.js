import { STATE_UPDATE, ERROR } from "./actionTypes";
import axios from "axios";

export const reduxStateUpdate = (data) => {
  console.log("action reduxStateUpdate");
  return {
    type: STATE_UPDATE,
    payload: data,
  };
};
export const error = (err) => {
  return {
    type: ERROR,
    payload: err,
  };
};

export const reduxStateUpdateThunk = () => (dispatch) => {
  axios("https://api.thecatapi.com/v1/images/search").then(
    (res) => {
      dispatch(reduxStateUpdate(res.data));
    },
    (err) => {
      dispatch(error(err.message));
    }
  );
};
