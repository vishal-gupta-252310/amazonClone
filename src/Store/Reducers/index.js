// importing Package
import { combineReducers } from 'redux';

// importing created Reducer
import movieReducer from './MovieReducer';

/**
 *  Use to Combine Multiple Reducers
 */
const combineReducer = combineReducers({
  movieReducer,
});

export default combineReducer;
