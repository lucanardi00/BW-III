import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getProfileFetchReducer from "../reducers/getProfileFetchReducer";
import expereinceReduce from "../reducers/experienceReduce";
import experienceDetailsReducers from "../reducers/experienceDetailsReducers";

const rootReducer = combineReducers({
  getFetch: getProfileFetchReducer,
  getExpereince: expereinceReduce,
  getDetailsExperience: experienceDetailsReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
