import React, { useEffect, useState } from 'react';
import { Liquid, measureTextWidth } from '@ant-design/charts';

const LiquidMedicion= (props) => {
    
    var config = {
        statistic : {
            title: {
                formatter: function formatter() {
                  return props.title;
                },
                style: function style(_ref) {
                    //const percent = _ref.percent;
                    return { fill:/* percent > 65 ? 'white' : */'#525254'/*'rgba(44,53,66,0.85)'*/ };
                  },

            },
        content: {
        style: function style(_ref2) {
          var percent = _ref2.percent;
          return {
            fontSize: 30,
            lineHeight: 1,
            fill: '#525254' ,
          };
        },
    }},
        percent: props.percent/100,
        outline: {
          border: 2,
          distance: 0,
          
        },
        liquidStyle: function liquidStyle(_ref4) {
            var percent = _ref4.percent;
            return {
              fill: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
              stroke: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
            };
          },
          color: function color() {
            return '#5B8FF9';
          },
        wave: { length: 128 },
        //theme: { styleSheet: { brandColor: '#FAAD14' } },
    };
      return <Liquid {...config} />;
    }

export default LiquidMedicion;