import { JWT, LOG_OUT } from "../actions/user";

export default function (state = "", action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload;
    case LOG_OUT:
      return ""
    default:
      return state;
  }
}
