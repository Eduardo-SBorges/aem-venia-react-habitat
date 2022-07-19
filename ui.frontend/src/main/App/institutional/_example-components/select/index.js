import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ country }) => {
    return (
        <p>
            País selecionado: <b>{country}</b>
        </p>
    );
};

Select.propTypes = {
    country: PropTypes.string
};

export default Select;
