import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => {
    return <h1>MeuComponenteAEM: {text}</h1>;
};

Text.propTypes = {
    text: PropTypes.string
};

export default Text;
