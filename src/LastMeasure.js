import React, { } from 'react';

const LastMeasure = ({lastMeasure}) => {
    const message1= lastMeasure.slice(0,10);
    const message2= lastMeasure.slice(11,19);
    
    return (
        <>
    <h2 style={{color : '#4b535e',fontSize : 24}}>Ult. Actualización:</h2>
    <h2 style={{color : '#4b535e',fontSize : 24}}>{message1} --- {message2}</h2>
    </>
    );
};

export default LastMeasure; 