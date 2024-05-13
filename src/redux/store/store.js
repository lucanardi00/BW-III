import { configureStore, combineReducers } from '@reduxjs/toolkit';
import getProfileFetchReducer from '../reducers/getProfileFetchReducer'

const rootReducer = combineReducers({
    getFetch: getProfileFetchReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store