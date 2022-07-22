import React from 'react';
import PropTypes from 'prop-types';
// imported Packages

import { Carousel } from 'react-responsive-carousel';
// imported Packeage of the Slidder

import HocComponent from '../HOC/HocComponent';
// imported High Order Component

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CssFiles/Slidder.css';
// imported  css File

/**
 *
 * @param {props} param0 the Data Which have to dispay on the Dashboard
 * @returns
 */
function Slidder({ data }) {
    // destructure the props
    return (
        <Carousel showThumbs={false} infiniteLoop={true} autoplay>
            {
                // eslint-disable-next-line react/prop-types
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
