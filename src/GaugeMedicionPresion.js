import React from 'react';
import { Gauge } from '@ant-design/charts';

const GaugeMedicion = ({title,percent}) => {
  const config = {
    percent,
    range: { color: 'l(0) 0:#B8E1FF 1:#3D76DD' },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '36px',
          color: '#4B535E',
        },
        formatter: function formatter(a) {
          return `${a.percent}hPa`;
        },
      },
      content: {
        style: {
          fontSize: '20px',
          lineHeight: '44px',
          color: '#4B535E',
        },
        formatter: function formatter() {
          return title;
        },
      },
    },
  };
  return <Gauge {...config} width={300} height={150}/>;
};

export default GaugeMedicion;