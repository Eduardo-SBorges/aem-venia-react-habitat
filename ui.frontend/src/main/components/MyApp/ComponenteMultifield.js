import React from 'react';

const ComponenteMultifield = ({ array }) => {
    React.useEffect(()=> console.log(array),[array])

    return (
        <div>
            {array &&
                array.map(({item}) => {
                    <span>{item}</span>;
                })}
        </div>
    );
};

export default ComponenteMultifield;
