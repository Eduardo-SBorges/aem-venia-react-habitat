import React from 'react';
import PropTypes from 'prop-types';

const Number = ({ number }) => {
    return <h1>Number: {number}</h1>;
};

Number.propTypes = {
    number: PropTypes.number
};

export default Number;
