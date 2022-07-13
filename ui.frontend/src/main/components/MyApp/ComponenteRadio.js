import React from 'react';

const ComponenteRadio = ({ option }) => {
    return (
        <p>
            Opção selecionada: <b>{option}</b>
        </p>
    );
};

ComponenteRadio.defaultProps = {
  option: "Júnior",
};

export default ComponenteRadio;
