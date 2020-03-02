import { combineReducers } from "redux";
import currencyReducers from "./currencyReducers.js";

export default combineReducers({
  currency: currencyReducers
});
