import React from 'react'

const ComponenteCheckbox = ({ text, checkbox }) => {
    return (
        <>
            <p>
                Meu texto é: <b>{text}</b>
            </p>
            <p>
                Meu checkbox está: <b>{checkbox ? 'ATIVO' : 'DESATIVO'}</b>
            </p>
        </>
    );
};

export default ComponenteCheckbox;
