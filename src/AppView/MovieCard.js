import React from 'react';
import PropTypes from 'prop-types';
// imported packages

import HocComponent from '../HOC/HocComponent';
//imported High Order Component

import './CssFiles/showMovie.css';
//imported css file

/**
 * use to render every movie
 * @param {props} param0 the Data Which have to dispay on the Dashboard
 * @returns
 */
const MovieCard = ({ data }) => {
    //destructure props
    return (
        <div className="trending">
            {data &&
                data.map((item) => {
                    // render evry movie using map method
                    return (
                        <div key={item.id} className="media">
                            {/* Displaying the Movie Data */}
                            <img
                                src={item.posterUrl}
                                alt={item.title}
                                style={{ width: '300px', height: '450px' }}
                                className="poster"
                            />
                            <b className="title">{item.title}</b>
                            <span className="subTitle">
                                {item.director}
                                <span className="subTitle">{item.year}</span>
                            </span>
                        </div>
                    );
                })}
        </div> // trending End
    );
};
// validating props
MovieCard.propTypes = {
    data: PropTypes.array.isRequired,
};
/**
 *  Created Component using High Order Component
 */

const Card = HocComponent(MovieCard);

export default Card;
