import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import homeReducer from './home';

const reducer = combineReducers({
    home: homeReducer
});

const store = configureStore({
    reducer
});

export default store;