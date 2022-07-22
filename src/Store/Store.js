import { configureStore } from '@reduxjs/toolkit';
// imported Packages

import combineReducer from '../Reducers/combineReducer';
// imported Reducer for store

/**
 *  ceating and exporing a store
 */
export const Store = configureStore({
    reducer: combineReducer,
});
