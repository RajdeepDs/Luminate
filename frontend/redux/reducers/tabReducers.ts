import { combineReducers } from "@reduxjs/toolkit";
import filesReducer from "../actions/tabActions";

const rootReducer = combineReducers({
  files: filesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
