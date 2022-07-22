import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// imported Packages

import { getMoviesFunc } from '../Actions';
// imported action from reducer

/**
 *  creating High Order component to render diffrent component using HOC
 * @param {Node} WrappedComponent
 * @returns  Component
 */
const HocComponent = (WrappedComponent) => {
    /**
     * return new Component
     */
    return function HocMovies() {
        // use useSelector ook to get the state value
        const movieData = useSelector((state) => state.movieReducer.value);

        // creating dispatch variabe of useDispatch hook
        const dispatch = useDispatch();
        useEffect(() => {
            // dispatching a Action
            actionDispatch();
            // dispatch(getMoviesFunc());
        }, [movieData]);
        /**
         *  A function use to dispatch action after 5 sec
         */
        const actionDispatch = async () => {
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
