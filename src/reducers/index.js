import {combineReducers} from "redux";
import {todoReducers} from "./todos";
import {filterReducers} from "./filters";

export default combineReducers({
    todoReducers,
    filterReducers
});