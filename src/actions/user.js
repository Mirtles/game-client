import request from "superagent";
import url from "../constants";

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (name, password) => dispatch => {
  request
    .post(`${url}/login`)
    .send({ name, password })
    .then(response => {
      dispatch(jwt(response.body));
    });
};

export const LOG_OUT = "LOG_OUT";

export const logOut = () => dispatch => {
  dispatch({
    type: LOG_OUT
  });
};

export const ERROR = "ERROR";

export const errorMessage = payload => {
  return {
    type: ERROR,
    payload
  };
};
