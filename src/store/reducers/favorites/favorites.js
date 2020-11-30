import {extend} from "../../../utils";
import ActionType from "../../constants";

const initialState = {
  favoriteIds: [],
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_FAVORITE:
      return extend(state, {
        favoriteIds: [...state.favoriteIds, action.payload],
      });
    case ActionType.DELETE_FAVORITE:
      return extend(state, {
        favoriteIds: state.favoriteIds.filter((id) => action.payload !== id),
      });
    case ActionType.UPDATE_FAVORITES:
      return extend(state, {
        favoriteIds: action.payload,
      });
  }

  return state;
};

export {favorites};
