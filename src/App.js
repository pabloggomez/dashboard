import './App.css';
import BulletMedicion from './BulletMedicion';
import LineChartMedicion from './LineChartMedicion';
import Clock from './Clock';
import { useEffect, useState } from 'react';
import { get } from '@antv/util';
import LiquidMedicion from './LiquidMedicion';
import GaugeMedicionPresion from './GaugeMedicionPresion';
import GaugeMedVelViento from './GaugeMedVelViento';
import GaugeDireccionViento from './GaugeDireccionViento';
import LastMeasure from './LastMeasure';
import LineDataPointChartHSuelo from './LineDataPointChartHSuelo';
import MaxDataWind from './MaxDataWind';
import { useParams } from 'react-router';

const URL_API="https://cemsa-node-deploy.herokuapp.com/weather"
function App() {

    const {nroCentral}=useParams();
    const [lastTime,setLastTime]= useState([]);
    const [dataVientoPressure,setDataViento]= useState([]);
    const [dataTempHistory,setDataTempHistory]= useState([]);
    const [dataHSueloHistory,setDataHSueloHistory]= useState([]);
    const [dataHAmbHistory,setDataHAmbHistory]= useState([]);
    const [dataTempHum,setDataTempHum]= useState([]);
    const [dataTopWind,setDataTopWind]= useState([]);
    const [dataHSueloStats,setDataHSueloStats]= useState([]);
    //const [dataPressure,setDataPressure]= useState([]);``
    
    const getData= async() =>{

       const response= await fetch(`${URL_API}/${nroCentral}/now`);
       const values = await response.json();
        
       const dataTempHum = values[0].filter(item => item.descripcion.includes("Humedad")|| item.descripcion==="Temperatura");
       setDataTempHum(dataTempHum);
       const dataVientoPressure = values[0].filter(item => item.descripcion.includes("Viento")|| item.descripcion==="Presión");
       setDataViento(dataVientoPressure);
        const lastTime = dataTempHum[0].med_fechaHoraSMS;
        setLastTime(lastTime);

    };

    const getTempHistoryData= async() =>{

        const response= await fetch(`${URL_API}/${nroCentral}/tempHistory`);
        const values = await response.json();
        
        setDataTempHistory(values[0]);
        
     };

     const getHSueloHistoryData= async() =>{

        const response= await fetch(`${URL_API}/${nroCentral}/hSueloHistory`);
        const values = await response.json();
        setDataHSueloHistory(values[0]);
        
     };

     const getHAmbHistoryData= async() =>{

        const response= await fetch(`${URL_API}/${nroCentral}/hAmbHistory`);
        const values = await response.json();
        setDataHAmbHistory(values[0]);
        
     };

     const getDataTopWind= async() =>{

        const response= await fetch(`${URL_API}/${nroCentral}/topVientoStats`);
        const values = await response.json();
        const dataTopWind = values[0][0];
        setDataTopWind(dataTopWind);        
     };

     const getDataHSueloStats= async() =>{

        const response= await fetch(`${URL_API}/${nroCentral}/hSueloStats`);
        const values = await response.json();
        setDataHSueloStats(values[0]);
        
     };


    useEffect(() => {
        getData();
        getTempHistoryData();
        getHSueloHistoryData();
        getHAmbHistoryData();
        getDataHSueloStats();
        getDataTopWind();
        const interval= setInterval(()=> {
            getData();
            getTempHistoryData();
            getHSueloHistoryData();
        getHAmbHistoryData();
        getDataHSueloStats();
        getDataTopWind();
        },1800000)
        
        return () => {
            clearInterval(interval);
        
        }

    }, [])
   

return(
    <div className="App-header">
        <div style={{display: 'flex',justifyContent:'space-evenly'}}>
            <div><h1>Central Meteorológica {nroCentral}</h1></div>
            <div><Clock/></div>
            
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}> 
        
            {dataTempHum.length>0 && dataTempHum.map((item,index) =>(
                <div className="chartCell" key={index} style={{width:300, height:200}}>
               { item.descripcion === "Temperatura" ? <BulletMedicion temperatures={[item.med_valor]}/> : <LiquidMedicion title={item.descripcion} percent={item.med_valor}/>
            }</div>
            ))}
            
            
         
        {/* <div style={{width:300, height:200}}> 
            <GaugeMedicion title='Humedad Suelo' percent={50}/>
        </div>
        <div style={{width:300, height:200}}>
            <GaugeMedicion title='Humedad Ambiente' percent={70}/>
        </div> */}
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly', marginTop:50}}> 
        {dataVientoPressure.length>0 && dataVientoPressure.map((item,index) =>(
                <div className="chartCell" key={index} style={{width:300, height:200}}>
           { item.descripcion === "Direccion Viento" ? <GaugeDireccionViento title={item.descripcion} percent={item.med_valor}/> : (item.descripcion === "Velocidad Viento" ? <GaugeMedVelViento title={item.descripcion} percent={item.med_valor}/> : <GaugeMedicionPresion title={item.descripcion} percent={item.med_valor}/>) 
}           </div>
            ))}
            </div>
        <div style={{display:'flex',justifyContent:'space-evenly', marginTop:50}}>

        <div className="chartCell" style={{width:300, height:300}}>
            <h2 style={{color : '#4b535e'}}>T° ult. 24 hs</h2> 
             <LineChartMedicion data={dataTempHistory}/>
        </div> 
        <div className='chartCell' style={{width:300, height:300}}> 
        <h2 style={{color : '#4b535e'}}>H. Suelo[%] ult. 24 hs</h2> 
             <LineChartMedicion data={dataHSueloHistory}/> 
        </div>
        <div className="chartCell" style={{width:300, height:300}}>
        <h2 style={{color : '#4b535e'}}>H. Amb.[%] ult. 24 hs</h2> 
             <LineChartMedicion data={dataHAmbHistory}/> 
        </div>

        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', marginTop:50}}>

        <div className='chartCell' style={{width:500, height:300}}> 
        <h2 style={{color : '#4b535e'}}>Humedad Suelo Promedio Mensual</h2> 
             <LineDataPointChartHSuelo data={dataHSueloStats}/> 
        </div>
        <div className='chartCell' style={{width:500, height:300}}> 
        <h2 style={{color : '#4b535e'}}></h2> 
             <MaxDataWind data={dataTopWind}/> 
        </div>
        </div>

        
        <div style={{display:'flex',justifyContent:'space-evenly', marginTop:50}}>
        <div className="chartCell" style={{width:300, height:120 , display: 'flex', flexDirection: 'column',alignItems: 'center'}}>

            <LastMeasure lastMeasure={lastTime}/>

        </div> 
            
        </div>
    </div>
    
    

    );
    
}

export default App;