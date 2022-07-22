import { getMovieData } from '../Actions';
// imported Actions

// Creating Initial Value for Reducer
const initialState = {
    value: { movies: [] },
};

/**
 *  A Reducer to get the movies
 * @param {object} state
 * @param {function} action
 * @returns
 */
const movieReducer = (state = initialState, action) => {
    // Handling Action using Switch
    switch (action.type) {
        case getMovieData:
            return {
                value: action.payload,
            };
        default:
            return state;
    }
};
export default movieReducer;
