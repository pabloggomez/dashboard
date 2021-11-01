import React, { useState, useEffect } from 'react';
import { Line, G2 } from '@ant-design/charts';

const LineDataPointChartHSuelo= ({data}) => {
  //const data = data
  G2.registerShape('point', 'breath-point', {
    draw: function draw(cfg, container) {
      let group = container.addGroup();
      
      return group;
    },
  });
  let config = {
    autoFit: false,
    height: 200,
    title: {
      text:'H. Suelo[%] Promedio del mes',
    },
    showTitle:true,
    data: data,
    xField: 'Fecha',
    yField: 'ValorProm',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
  };
  return <Line {...config} />;
};

export default LineDataPointChartHSuelo;