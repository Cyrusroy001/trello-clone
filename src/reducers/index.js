import {combineReducers} from "redux";
import ListsReducer from "./ListsReducer";

export default combineReducers({
    lists: ListsReducer,
});