import { JWT } from "../actions/user";

export default function(state = [], action = {}) {
  switch (action.type) {
    case JWT:
      return [...state, action.payload];
    default:
      return state;
  }
}
