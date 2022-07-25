// imported packages
import React from 'react';
import PropTypes from 'prop-types';

// imported High Order Component
import HocComponent from '../../HOC/HocComponent';

// imported css file
import './CssFiles/showMovie.css';

/**
 * use to render every movie
 * @param {object}  Data Which need to dispay on the Dashboard
 * @returns A node
 */
const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="trending">
      {/* render evry movie using map method */}
      {data
                && data.map((item) => (
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
                ))}
    </div> // trending End
  );
};
// validating props
MovieCard.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};
/**
 *  Created Component using High Order Component
 */
const Card = HocComponent(MovieCard);
export default Card;
