// imported FakeApi Data
import popularMovies from '../../FakeApi/PopularMovie';

// A constant for action
export const getMovieData = 'GETMOVIES';

// Creating A Variable for Action
const getMoviesFunc = () => ({
  type: getMovieData,
  payload: popularMovies,
});

export default getMoviesFunc;
