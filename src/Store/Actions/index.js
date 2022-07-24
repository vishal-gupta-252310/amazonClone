// imported FakeApi Data
import popularMovies from '../../FakeApi/PopularMovie';

// A constant for action
export const getMovieData = 'GETMOVIES';

// Creating A Variable for Action
export const getMoviesFunc = () => {
    return {
        type: getMovieData,
        payload: popularMovies,
    };
};
