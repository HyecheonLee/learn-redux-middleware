import {combineReducers} from "redux";
import counter from "./counter";
import posts from "./posts";

let rootReducer = combineReducers({counter, posts});

export default rootReducer;
