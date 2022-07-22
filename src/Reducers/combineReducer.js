import movieReducer from './movieReducer';
// importing created Reducer

import { combineReducers } from 'redux';
// importing Package

/**
 *  Use to Combine Multiple Reducers
 */
const combineReducer = combineReducers({
    movieReducer,
});

export default combineReducer;
