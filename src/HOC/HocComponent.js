// imported Packages
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// imported action from reducer
import { getMoviesFunc } from '../Actions';

/**
 *  A High Order component to render diffrent component using HOC
 * @param {Node} WrappedComponent
 * @returns  Component
 */
const HocComponent = (WrappedComponent) => {
    /**
     * return new Component using HOC
     */
    return function HocMovies() {
        // use useSelector hook to get the state value
        const movieData = useSelector((state) => state.movieReducer.value);

        // creating dispatch constant
        const dispatch = useDispatch();
        useEffect(() => {
            // dispatching a Action
            actionDispatch();
            // dispatch(getMoviesFunc());
        }, [movieData]);
        /**
         *  A function use to dispatch action
         */
        const actionDispatch = () => {
            dispatch(getMoviesFunc());
        };
        return (
            <div>
                <WrappedComponent data={movieData.movies}></WrappedComponent>
            </div>
        );
    };
};

export default HocComponent;
