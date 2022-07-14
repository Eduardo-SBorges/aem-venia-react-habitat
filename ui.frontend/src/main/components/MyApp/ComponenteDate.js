import React from 'react';

const ComponenteDate = ({ date }) => {
    const array = date.split(',');
   
  //console.log(array);

    return (
        <div >
            <h1>Calendário</h1>
            <h2>{`${array[13].slice(-4)}/${array[17].slice(-2)}/${array[14].slice(-2)}`}</h2>
            <h2>{array[13]}</h2>
            <h2>{array[14]}</h2>
            <h2>{array[17]}</h2>
        </div>
    );
};

export default ComponenteDate;
