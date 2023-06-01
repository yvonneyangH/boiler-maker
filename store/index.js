import {configureStore } from '@reduxjs/toolkit';
import dummyReducer from './dummySlice';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = configureStore({
    reducer:{
        dummy:dummyReducer,
    },
    middleware: [thunkMiddleware,loggerMiddleware],
    
});
export default store;