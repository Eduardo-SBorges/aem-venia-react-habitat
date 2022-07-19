import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ text, checkbox }) => {
    return (
        <>
            <p>
                Meu texto é: <b>{text}</b>
            </p>
            <p>
                Meu checkbox está: <b>{checkbox ? 'ATIVADO' : 'DESATIVADO'}</b>
            </p>
        </>
    );
};

Checkbox.propTypes = {
    text: PropTypes.string,
    checkbox: PropTypes.bool
};

export default Checkbox;
