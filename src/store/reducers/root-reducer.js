import {combineReducers} from "redux";
import {citiesProcess} from "./cities-process/cities-process";
import {citiesData} from "./cities-data/cities-data";
import {user} from "./user/user";
import {favorites} from "./favorites/favorites";
import {comments} from "./comments/comments";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
  COMMENTS: `COMMENTS`,
  FAVORITES: `FAVORITES`,
};

export default combineReducers({
  [NameSpace.DATA]: citiesData,
  [NameSpace.PROCESS]: citiesProcess,
  [NameSpace.USER]: user,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.FAVORITES]: favorites,
});
