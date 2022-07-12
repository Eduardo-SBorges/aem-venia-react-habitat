import React from 'react';

const ComponenteMultifield = ({ multifield }) => {
    const array = multifield.split(',');
    console.log(multifield)
    console.log(array)

    return (
        <div>
            <ul>
                {array.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComponenteMultifield;
