import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer, authReducer} from "./slices";

const rootReducer = combineReducers({
    cartReducer,
    authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}
