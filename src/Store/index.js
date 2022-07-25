// imported Package
import { configureStore } from '@reduxjs/toolkit';

// imported Reducer for store
import combineReducer from './Reducers';

/**
 *  A Store to Hold the State of the App
 */
const Store = configureStore({
  reducer: combineReducer,
});

export default Store;
