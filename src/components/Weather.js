import { useState, useEffect, useRef } from 'react'
import axios from 'axios'


const Weather = ({coordinates, APIkey, unit}) =>{
const [weather, setWeather] =useState({})
useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${APIkey}&units=${unit}`)
      .then(response => {
        console.log(response.data)
        setWeather(response.data)
      })
      .catch(error => {
        console.error(error)})
       }, [coordinates, unit])
      
       return (
        
        <div style={{width:'100%'}}> 
               
            {weather.weather &&
            
            <div style={{backgroundImage:`url(http://openweathermap.org/img/w/${weather.weather[0].icon}.png)`,
            backgroundRepeat: 'no-repeat', backgroundPosition:'center',  backgroundSize: '100px 100px',
            overflow:'visible'}}
             className="currentWeather">   
                <p>Humidity {weather.main.humidity} %</p>
                <p> {weather.weather[0].description} </p>
                <p>Temp min {unit==='metric' ? `${weather.main.temp_min}${'\u00B0C'}`:`${weather.main.temp_min}${'\u00B0F'}`}</p>
                <p>Temp max {unit==='metric' ? `${weather.main.temp_max}${'\u00B0C'}`:`${weather.main.temp_max}${'\u00B0F'}`}</p>
                <p>Wind {unit==='metric' ? `${weather.wind.speed} m/s`:`${weather.wind.speed} mph`} </p>
                <p>Pressure {weather.main.pressure} hPa</p>
                
            
            </div>}
        </div>
        
       )

    }

export default Weather