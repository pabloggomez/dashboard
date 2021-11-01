import React, { useState, useEffect } from 'react';


function Clock(){
  
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      function tick() { 
        setDate(new Date());
      }
      
      const timerID = setInterval( 
        () => tick(), 
        1000 
      ); 
      
      return () => clearInterval(timerID);
      
    });
    
    return ( 
        
          <h2 style={{color : '#4b535e'}}>Reloj: {date.toLocaleTimeString()}.</h2> 
        
      ); 
    
  }

  export default Clock;