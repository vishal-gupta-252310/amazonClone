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
 *
 * @param {props} param0 destructure Data Which have to dispay on the Dashboard
 * @returns
 */
function Slidder({ data }) {
    return (
        <Carousel showThumbs={false} infiniteLoop={true} autoplay>
            {
                // display the data using map method
                data &&
                    data.map((item) => {
                        return (
                            <div className="mainDivOfSlidder" key={item.id}>
                                {/* displaying the data in Slidder */}
                                <img
                                    className="posterOfSlidder"
                                    src={item.posterUrl}
                                />
                                <h3 className="legend">{item.title}</h3>
                            </div> // mainDivOfSlidder end
                        );
                    })
            }
        </Carousel>
    );
}
// validating props
Slidder.propTypes = {
    data: PropTypes.array.isRequired,
};

/**
 *  use to create component using Hoc
 */
const HocSlidder = HocComponent(Slidder);
export default HocSlidder;
