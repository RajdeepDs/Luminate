import { combineReducers } from "@reduxjs/toolkit";
import tabsReducer from "../actions/tabActions";

const rootReducer = combineReducers({
  tabs: tabsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
