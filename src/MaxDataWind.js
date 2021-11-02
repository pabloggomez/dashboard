import React, { } from 'react';

const MaxDataWind = ({data}) => {

    const message1= `${data.valorVeloc} ${data.unidadVeloc}`;
    const message2= `${data.PromDireccion} ${data.unidadDirec}`;
    const message3= data.dia;
    
    return (
        <>
    <h1 style={{color : '#4b535e',fontSize : 24}}>Pico de viento de la semana:</h1>
    <h2 style={{color : '#4b535e',fontSize : 24}}>{message1} a {message2}</h2>
    <h2 style={{color : '#4b535e',fontSize : 24}}> el día {message3}</h2>
    </>
    );
};

export default MaxDataWind; 