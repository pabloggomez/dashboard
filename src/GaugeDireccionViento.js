import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const GaugeDireccionViento = ({title,percent}) => {
//const pc =['N','NE','E','SE','S','SO','O','NO'];
// ticks = [0, 0.125, 0.25 , 0.375 ,  0.5, 0.625, 0.75, 0.875, 1];

  var config = {
    
    percent: percent/360,
    range: { ticks: [0,1],color: '#30b875',},
    startAngle: -Math.PI/2,
    endAngle: 2 * Math.PI -Math.PI/2 ,
    type: 'meter',
    meter: {
      steps: 36,
      stepRatio: 0.9,
    },
    radius: 1,
    innerRadius: 0.9,
    
    
    indicator: {
      pointer: { style: { stroke: '#30b272' } },
      pin: { style: { stroke: '#405f7c' } },
    },
    meta: {
      percent: {
        ticks: [0, 0.125, 0.25 , 0.375 ,  0.5, 0.625, 0.75, 0.875, 1],
      }
    },
    axis: {
      style:{color: '#30b875',},
      tickLine: {
        style: {
          stroke: "red"
        }
      },
    
      label: {

        formatter: function formatter(v) {
            
            if (Number(v) === 0) {
                return 'N';
              }
              if (Number(v) === 0.125) {
                return 'NE';
              }
              if (Number(v) === 0.25) {
                return 'E';
              }
              if (Number(v) === 0.375) {
                return 'SE';
              }
              if (Number(v) === 0.5) {
                return 'S';
              }
              if (Number(v) === 0.625) {
                return 'SO';
              }
              if (Number(v) === 0.75) {
                return 'O';
              }
              return 'NO';
            
        },
      },
      subTickLine: { count: 2 },
    },
      
    
    statistic: {

      title: {
        offsetY: 115,
        style: {
          color: '#4d4e50',
          fontSize: 16,
        },
        formatter: function formatter(_ref) {
          return title;
        },
      },

      content: {
        offsetY: 145,
        formatter: function formatter() {
          
        
          return ''.concat((percent * 1).toFixed(0), '°');
        },
        style: {
          color: '#4d4e50',
          fontSize: 24,
        },
      },
    },
  };
  return <Gauge {...config} width={300} height={200}/>;
};

export default GaugeDireccionViento;