import {GET_TOP_CONTRIB, REMOVE_TOP_CONTRIB} from "../actions";

export default function(state = null, action) {
  switch (action.type) {

    case GET_TOP_CONTRIB:
      return action.payload;

    case REMOVE_TOP_CONTRIB:
      return action.payload;

    default:
      return state;
  }
}
