import { combineReducers } from "redux";

import games from "./games";
import user from "./user";
import error from "./error";

export default combineReducers({
  games,
  user,
  error
});
