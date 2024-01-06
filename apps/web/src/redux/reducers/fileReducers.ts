import { combineReducers } from "@reduxjs/toolkit";
import filesReducer from "@/redux/actions/fileActions";

const rootReducer = combineReducers({
  files: filesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
