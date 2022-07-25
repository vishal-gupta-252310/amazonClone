// imported Packages
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// imported action from reducer
import getMoviesFunc from '../Store/Actions/index';

/**
 *  A High Order component to render diffrent component using HOC
 * @param {Node} WrappedComponent
 * @returns  Component
 */
const HocComponent = (WrappedComponent) => {
  // eslint-disable-next-line no-unused-vars
  const HocMovies = () => {
  // use useSelector hook to get the state value
    const movieData = useSelector((state) => state.movieReducer.value);

    // creating dispatch constant
    const dispatch = useDispatch();
    const actionDispatch = () => {
      dispatch(getMoviesFunc());
    };
    useEffect(() => {
    // dispatching a Action
      actionDispatch();
    // dispatch(getMoviesFunc());
    }, []);
    /**
         *  A function use to dispatch action
         */
    return (
      <div>
        <WrappedComponent data={movieData.movies} />
      </div>
    );
  };
};
export default HocComponent;
