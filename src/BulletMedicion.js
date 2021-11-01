import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const BulletMedicion = ({temperatures}) => {
    const data = [
    {
      title:'Temperatura',
      ranges: [100],
      measures: temperatures,
      target: 40,
    },
  ];
  const config = {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#5B8FF9',
      target: '#3D76DD',
    },
    xAxis: { line: null },
    yAxis: false,
    layout: 'vertical',
    label: {
      measure: {
        position: 'middle',
        style: { fill: '#fff' },
      },
    },
    legend: {
      custom: true,
      position: 'right',
      items: [
        {
          value: 'Medición',
          name: 'Medición',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: 'Valor critico',
          name: 'Valor Crítico',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#3D76DD',
              r: 5,
            },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default BulletMedicion;