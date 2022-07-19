import React from 'react';
import PropTypes from 'prop-types';

const Multifield = ({ multifield }) => {
    const array = multifield.split(',');

    return (
        <ul>
            {array.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

Multifield.propTypes = {
    multifield: PropTypes.string
};

Multifield.defaultProps = {
    multifield: 'Brasil,China,Japão,Marrocos,Índia'
};

export default Multifield;
