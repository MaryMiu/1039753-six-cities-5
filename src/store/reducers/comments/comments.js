import {extend} from "../../../utils";
import ActionType from "./../../constants";
import {commentAdaptToClient} from "../../../utils";

const initialState = {
  comments: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload.map(commentAdaptToClient),
      });
  }

  return state;
};

export {comments};
