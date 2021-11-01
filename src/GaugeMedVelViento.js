import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const GaugeMedVelViento= ({title,percent}) => {
  
  //const ticks = [0, 1 / 3, 3 / 4, 1];
  //const color = ['#30BF78', '#FAAD14', '#F4664A'];
  const config = {
    
    percent: percent/120,
    range: { ticks: [0,1],
      color: ['l(0) 0:#30BF78 0.3333:#FAAD14 1:#F4664A'],
    },
    type: 'meter',
    meter: {
      steps: 120,
      stepRatio: 0.99,
    },
    
    indicator: {
      pointer: { style: { stroke: '#30b272' } },
      pin: { style: { stroke: '#405f7c' } },
    },
    
    axis: {
      style:{color: '#282c34',},
      tickLine: {
        style: {
          stroke: "red"
        }
      },
    
      label: {

        formatter: function formatter(v) {
            
            return Number(v) * 120;
            
        },
      },
      subTickLine: { count: 3 },
    },
      
    
    statistic: {

      title: {
        offsetY: -30,
        style: {
          color: '#4d4e50',
          fontSize: 16,
        },
        formatter: function formatter(_ref) {
          return title;
        },
      },

      content: {
        offsetY: 0,
        formatter: function formatter() {
          
        
          return ''.concat((percent * 1).toFixed(0), ' Km/h');
        },
        style: {
          color: '#4d4e50',
          fontSize: 24,
        },
      },
    },
  };
  return <Gauge {...config} />;
};

export default GaugeMedVelViento;