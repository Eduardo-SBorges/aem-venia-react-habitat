import React from 'react';
import PropTypes from 'prop-types';

const ColorField = ({ color }) => {
    return (
        <p style={{ color: color }}>
            Cor Selecionada: <b>{color}</b>
        </p>
    );
};

ColorField.propTypes = {
    color: PropTypes.string
};

export default ColorField;
