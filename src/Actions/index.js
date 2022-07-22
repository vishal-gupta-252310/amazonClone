import popularMovies from '../FakeApi/PopularMovie';
// imported FakeApi Data

export const getMovieData = 'GETMOVIES';
// Creating A Variable for Action
export const getMoviesFunc = () => {
    return {
        type: getMovieData,
        payload: popularMovies,
    };
};
