import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ option }) => {
    return (
        <p>
            Opção selecionada: <b>{option}</b>
        </p>
    );
};

Radio.propTypes = {
    option: PropTypes.any
};

Radio.defaultProps = {
    option: 'Júnior'
};

export default Radio;
