// imported Packages
import React from 'react';
import PropTypes from 'prop-types';

// imported Packeage of the Slidder
import { Carousel } from 'react-responsive-carousel';

// imported High Order Component
import HocComponent from '../../HOC/HocComponent';

// imported  css File
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CssFiles/Slidder.css';

/**
 * Add two numbers.
 * @param {object} props The Data ehich needs to display.
 * @returns {number} The sum of the two numbers.
 */
const Slidder = (props) => {
  const { data } = props;
  return (
    <Carousel showThumbs={false} infiniteLoop autoplay>
      {
                // display the data using map method
                data
                    && data.map((item) => (
                      <div className="mainDivOfSlidder" key={item.id}>
                        {/* displaying the data in Slidder */}
                        <img
                          className="posterOfSlidder"
                          src={item.posterUrl}
                          alt={item.title}
                        />
                        <h3 className="legend">{item.title}</h3>
                      </div> // mainDivOfSlidder end
                    ))
            }
    </Carousel>
  );
};
// validating props
Slidder.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};

/**
 *  use to create component using Hoc
 */
const HocSlidder = HocComponent(Slidder);
export default HocSlidder;
