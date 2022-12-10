import { combineReducers } from "redux";
import { photosReduser } from "./photos";


export const rootReducer = combineReducers({
   photos: photosReduser
})