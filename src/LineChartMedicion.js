import React, { useState, useEffect } from 'react';
import { Line, G2 } from '@ant-design/charts';

const LineChartMedicion = ({data}) => {
  G2.registerShape('point', 'breath-point', {
    draw: function draw(cfg, container) {
      //let data = cfg.data;
      //let point = {
      //  x: cfg.x,
       // y: cfg.y,
     // };
      let group = container.addGroup();
      
      return group;
    },
  });
  /* const [data, setData] = useState([]);
   useEffect(() => {
     asyncFetch();
   }, []);*/
   /*const asyncFetch = () => {
     fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/cpu-data.json')
       .then((response) => response.json())
       .then((json) => setData(json))
       .catch((error) => {
         console.log('fetch data failed', error);
       });
     
   };*/
  //console.log(data);
  let config = {
    autoFit: false,
    height: 200,
    data: data,
    meta: {
      cpu: {
        time: { type: 'cat' },
        max: 100,
        min: 0,
      },
    },
    xField: 'med_fechaHoraRegistro',
    yField: 'med_valor',
    //seriesField: 'date',
    tooltip: { showMarkers: false },
    point: { shape: 'breath-point' },
  };
  return <Line {...config} />;
};

export default LineChartMedicion;