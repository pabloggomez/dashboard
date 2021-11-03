(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{271:function(e,t,n){},273:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),a=n(152),i=n.n(a),s=(n(271),n(42)),o=n.n(s),l=n(94),u=n(63),d=(n(273),n(40)),j=n(293),h=n(10),f=function(e){var t={data:[{title:"Temperatura",ranges:[100],measures:e.temperatures,target:40}],measureField:"measures",rangeField:"ranges",targetField:"target",xField:"title",color:{range:"#f0efff",measure:"#5B8FF9",target:"#3D76DD"},xAxis:{line:null},yAxis:!1,layout:"vertical",label:{measure:{position:"middle",style:{fill:"#fff"}}},legend:{custom:!0,position:"right",items:[{value:"Medici\xf3n",name:"Medici\xf3n",marker:{symbol:"square",style:{fill:"#5B8FF9",r:5}}},{value:"Valor critico",name:"Valor Cr\xedtico",marker:{symbol:"line",style:{stroke:"#3D76DD",r:5}}}]}};return Object(h.jsx)(j.a,Object(d.a)({},t))},b=n(75),p=n(295),m=function(e){var t=e.data;b.G2.registerShape("point","breath-point",{draw:function(e,t){return t.addGroup()}});var n={autoFit:!1,height:200,data:t,meta:{cpu:{time:{type:"cat"},max:100,min:0}},xField:"med_fechaHoraRegistro",yField:"med_valor",tooltip:{showMarkers:!1},point:{shape:"breath-point"}};return Object(h.jsx)(p.a,Object(d.a)({},n))};var x=function(){var e=Object(r.useState)(new Date),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){return clearInterval(e)}})),Object(h.jsxs)("h2",{style:{color:"#4b535e"},children:["Reloj: ",n.toLocaleTimeString(),"."]})},O=(n(0),n(296)),y=function(e){var t={statistic:{title:{formatter:function(){return e.title},style:function(e){return{fill:"#525254"}}},content:{style:function(e){e.percent;return{fontSize:30,lineHeight:1,fill:"#525254"}}}},percent:e.percent/100,outline:{border:2,distance:0},liquidStyle:function(e){var t=e.percent;return{fill:t>.45?"#5B8FF9":"#FAAD14",stroke:t>.45?"#5B8FF9":"#FAAD14"}},color:function(){return"#5B8FF9"},wave:{length:128}};return Object(h.jsx)(O.a,Object(d.a)({},t))},v=n(297),g=function(e){var t=e.title,n={percent:e.percent,range:{color:"l(0) 0:#B8E1FF 1:#3D76DD"},startAngle:Math.PI,endAngle:2*Math.PI,indicator:null,statistic:{title:{offsetY:-36,style:{fontSize:"36px",color:"#4B535E"},formatter:function(e){return"".concat(e.percent,"hPa")}},content:{style:{fontSize:"20px",lineHeight:"44px",color:"#4B535E"},formatter:function(){return t}}}};return Object(h.jsx)(v.a,Object(d.a)(Object(d.a)({},n),{},{width:300,height:150}))},S=function(e){var t=e.title,n=e.percent,r={percent:n/120,range:{ticks:[0,1],color:["l(0) 0:#30BF78 0.3333:#FAAD14 1:#F4664A"]},type:"meter",meter:{steps:120,stepRatio:.99},indicator:{pointer:{style:{stroke:"#30b272"}},pin:{style:{stroke:"#405f7c"}}},axis:{style:{color:"#282c34"},tickLine:{style:{stroke:"red"}},label:{formatter:function(e){return 120*Number(e)}},subTickLine:{count:3}},statistic:{title:{offsetY:-30,style:{color:"#4d4e50",fontSize:16},formatter:function(e){return t}},content:{offsetY:0,formatter:function(){return"".concat((1*n).toFixed(0)," Km/h")},style:{color:"#4d4e50",fontSize:24}}}};return Object(h.jsx)(v.a,Object(d.a)({},r))},F=function(e){var t=e.title,n=e.percent,r={percent:n/360,range:{ticks:[0,1],color:"#30b875"},startAngle:-Math.PI/2,endAngle:2*Math.PI-Math.PI/2,type:"meter",meter:{steps:36,stepRatio:.9},radius:1,innerRadius:.9,indicator:{pointer:{style:{stroke:"#30b272"}},pin:{style:{stroke:"#405f7c"}}},meta:{percent:{ticks:[0,.125,.25,.375,.5,.625,.75,.875,1]}},axis:{style:{color:"#30b875"},tickLine:{style:{stroke:"red"}},label:{formatter:function(e){return 0===Number(e)?"N":.125===Number(e)?"NE":.25===Number(e)?"E":.375===Number(e)?"SE":.5===Number(e)?"S":.625===Number(e)?"SO":.75===Number(e)?"O":"NO"}},subTickLine:{count:2}},statistic:{title:{offsetY:115,style:{color:"#4d4e50",fontSize:16},formatter:function(e){return t}},content:{offsetY:145,formatter:function(){return"".concat((1*n).toFixed(0),"\xb0")},style:{color:"#4d4e50",fontSize:24}}}};return Object(h.jsx)(v.a,Object(d.a)(Object(d.a)({},r),{},{width:300,height:200}))},w=function(e){var t=e.lastMeasure,n=t.slice(0,10),r=t.slice(11,19);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{style:{color:"#4b535e",fontSize:24},children:"Ult. Actualizaci\xf3n:"}),Object(h.jsxs)("h2",{style:{color:"#4b535e",fontSize:24},children:[n," --- ",r]})]})},k=function(e){var t=e.data;b.G2.registerShape("point","breath-point",{draw:function(e,t){return t.addGroup()}});var n={autoFit:!1,height:200,title:{text:"H. Suelo[%] Promedio del mes"},showTitle:!0,data:t,xField:"Fecha",yField:"ValorProm",label:{},point:{size:5,shape:"diamond",style:{fill:"white",stroke:"#5B8FF9",lineWidth:2}},tooltip:{showMarkers:!1},state:{active:{style:{shadowBlur:4,stroke:"#000",fill:"red"}}},interactions:[{type:"marker-active"}]};return Object(h.jsx)(p.a,Object(d.a)({},n))},C=function(e){var t=e.data,n="".concat(t.valorVeloc," ").concat(t.unidadVeloc),r="".concat(t.PromDireccion," ").concat(t.unidadDirec),c=t.dia;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{style:{color:"#4b535e",fontSize:24},children:"Pico de viento de la semana:"}),Object(h.jsxs)("h2",{style:{color:"#4b535e",fontSize:24},children:[n," a ",r]}),Object(h.jsxs)("h2",{style:{color:"#4b535e",fontSize:24},children:[" el d\xeda ",c]})]})},N=n(34),D="https://cemsa-node-deploy.herokuapp.com/weather";var A=function(){var e=Object(N.f)().nroCentral,t=Object(r.useState)([]),n=Object(u.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)([]),s=Object(u.a)(i,2),d=s[0],j=s[1],b=Object(r.useState)([]),p=Object(u.a)(b,2),O=p[0],v=p[1],A=Object(r.useState)([]),M=Object(u.a)(A,2),z=M[0],P=M[1],T=Object(r.useState)([]),B=Object(u.a)(T,2),H=B[0],I=B[1],V=Object(r.useState)([]),E=Object(u.a)(V,2),_=E[0],L=E[1],R=Object(r.useState)([]),Y=Object(u.a)(R,2),G=Y[0],q=Y[1],J=Object(r.useState)([]),K=Object(u.a)(J,2),U=K[0],W=K[1],Q=function(){var t=Object(l.a)(o.a.mark((function t(){var n,r,c,i,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(D,"/").concat(e,"/now"));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,c=r[0].filter((function(e){return e.descripcion.includes("Humedad")||"Temperatura"===e.descripcion})),L(c),i=r[0].filter((function(e){return e.descripcion.includes("Viento")||"Presi\xf3n"===e.descripcion})),j(i),s=c[0].med_fechaHoraSMS,a(s);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(){var t=Object(l.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(D,"/").concat(e,"/tempHistory"));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,v(r[0]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z=function(){var t=Object(l.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(D,"/").concat(e,"/hSueloHistory"));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,P(r[0]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),$=function(){var t=Object(l.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(D,"/").concat(e,"/hAmbHistory"));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,I(r[0]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ee=function(){var t=Object(l.a)(o.a.mark((function t(){var n,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(D,"/").concat(e,"/topVientoStats"));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,c=r[0][0],q(c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),te=function(){var t=Object(l.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(D,"/").concat(e,"/hSueloStats"));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,W(r[0]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){Q(),X(),Z(),$(),te(),ee();var e=setInterval((function(){Q(),X(),Z(),$(),te(),ee()}),18e5);return function(){clearInterval(e)}}),[]),Object(h.jsxs)("div",{className:"App-header",children:[Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(h.jsx)("div",{children:Object(h.jsxs)("h1",{children:["Central Meteorol\xf3gica ",e]})}),Object(h.jsx)("div",{children:Object(h.jsx)(x,{})})]}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:_.length>0&&_.map((function(e,t){return Object(h.jsx)("div",{className:"chartCell",style:{width:300,height:200},children:"Temperatura"===e.descripcion?Object(h.jsx)(f,{temperatures:[e.med_valor]}):Object(h.jsx)(y,{title:e.descripcion,percent:e.med_valor})},t)}))}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:50},children:d.length>0&&d.map((function(e,t){return Object(h.jsxs)("div",{className:"chartCell",style:{width:300,height:200},children:["Direccion Viento"===e.descripcion?Object(h.jsx)(F,{title:e.descripcion,percent:e.med_valor}):"Velocidad Viento"===e.descripcion?Object(h.jsx)(S,{title:e.descripcion,percent:e.med_valor}):Object(h.jsx)(g,{title:e.descripcion,percent:e.med_valor}),"           "]},t)}))}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:50},children:[Object(h.jsxs)("div",{className:"chartCell",style:{width:300,height:300},children:[Object(h.jsx)("h2",{style:{color:"#4b535e"},children:"T\xb0 ult. 24 hs"}),Object(h.jsx)(m,{data:O})]}),Object(h.jsxs)("div",{className:"chartCell",style:{width:300,height:300},children:[Object(h.jsx)("h2",{style:{color:"#4b535e"},children:"H. Suelo[%] ult. 24 hs"}),Object(h.jsx)(m,{data:z})]}),Object(h.jsxs)("div",{className:"chartCell",style:{width:300,height:300},children:[Object(h.jsx)("h2",{style:{color:"#4b535e"},children:"H. Amb.[%] ult. 24 hs"}),Object(h.jsx)(m,{data:H})]})]}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:50},children:[Object(h.jsxs)("div",{className:"chartCell",style:{width:500,height:300},children:[Object(h.jsx)("h2",{style:{color:"#4b535e"},children:"Humedad Suelo Promedio Mensual"}),Object(h.jsx)(k,{data:U})]}),Object(h.jsxs)("div",{className:"chartCell",style:{width:500,height:300},children:[Object(h.jsx)("h2",{style:{color:"#4b535e"}}),Object(h.jsx)(C,{data:G})]})]}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:50},children:Object(h.jsx)("div",{className:"chartCell",style:{width:300,height:120,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(h.jsx)(w,{lastMeasure:c})})})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},z=n(256);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(z.a,{children:Object(h.jsx)(N.c,{children:Object(h.jsx)(N.a,{path:"/:nroCentral/dashboard",children:Object(h.jsx)(A,{})})})})}),document.getElementById("root")),M()}},[[291,1,2]]]);
//# sourceMappingURL=main.f6877cc0.chunk.js.map