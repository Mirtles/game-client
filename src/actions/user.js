import request from "superagent";

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}
export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      dispatch(jwt(response.body.jwt));
    });
};
