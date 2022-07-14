import React from 'react';

const ComponenteColorField = ({ color }) => {
    return (
        <p style={{ color: color }}>
            Cor Selecionada: <b>{color}</b>
        </p>
    );
};

export default ComponenteColorField;
