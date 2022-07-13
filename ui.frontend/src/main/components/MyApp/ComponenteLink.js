import React from 'react';

const ComponenteLink = ({ href, isBlank, isExternal }) => {
    return (
        <a href={isExternal ? href : `${href}.html`} target={isBlank && '_blank'}>
            LINK DE REDIRECIONAMENTO
        </a>
    );
};

export default ComponenteLink;
