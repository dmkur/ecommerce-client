import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./slices";

const rootReducer = combineReducers({
    cartReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}
