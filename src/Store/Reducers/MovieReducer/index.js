// imported Actions
import { getMovieData } from '../../Actions';

// Creating Initial Value for Reducer
const initialState = {
  value: {
    movies: [],
  },
};

/**
 *  A MovieReducer to get the movies
 * @param {object} state A initial state of the  reducer
 * @param {function} action A type of action
 * @returns
 */

const movieReducer = (state = initialState, action = {}) => {
  // Handling Action using Switch
  switch (action.type) {
    case getMovieData:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
export default movieReducer;
