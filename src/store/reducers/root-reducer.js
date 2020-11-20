import {combineReducers} from "redux";
import {citiesProcess} from "./cities-process/cities-process";
import {citiesData} from "./cities-data/cities-data";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: citiesData,
  [NameSpace.PROCESS]: citiesProcess,
});
