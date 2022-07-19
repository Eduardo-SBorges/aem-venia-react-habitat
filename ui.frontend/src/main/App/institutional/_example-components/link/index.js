import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, isBlank, isExternal }) => {
    return (
        <a href={isExternal ? href : `${href}.html`} target={isBlank && '_blank'}>
            LINK DE REDIRECIONAMENTO
        </a>
    );
};

Link.propTypes = {
    href: PropTypes.string,
    isBlank: PropTypes.bool,
    isExternal: PropTypes.bool
};

export default Link;
