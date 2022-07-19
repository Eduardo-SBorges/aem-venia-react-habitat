import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image }) => {
    return <img src={image} width="100px" height="100px" />;
};

Image.propTypes = {
    image: PropTypes.string
};

export default Image;
