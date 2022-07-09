import React from 'react';

const ComponenteMultifield = ({ array }) => {
    return (
        <div>
            <span>Array: </span>
            {array &&
                array.map(({ continentName }) => {
                    <span>{continentName}</span>;
                })}
        </div>
    );
};

export default ComponenteMultifield;
