import {combineReducers} from "redux";
import {citiesProcess} from "./cities-process/cities-process";
import {citiesData} from "./cities-data/cities-data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: citiesData,
  [NameSpace.PROCESS]: citiesProcess,
  [NameSpace.USER]: user,
});
