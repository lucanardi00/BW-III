import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getProfileFetchReducer from "../reducers/getProfileFetchReducer";
import expereinceReduce from "../reducers/experienceReduce";

const rootReducer = combineReducers({
  getFetch: getProfileFetchReducer,
  getExpereince: expereinceReduce,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
