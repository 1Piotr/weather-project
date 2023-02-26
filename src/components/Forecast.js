import { useState, useEffect, useRef } from 'react'
import axios from 'axios'


const Forecast = ({coordinates,APIkey, unit }) =>{
  
const optionsDay = {
  weekday: 'short',
  day: 'numeric',
};
const optionsHour = {
  hour:'numeric',
  minute: 'numeric'
}
const formatDay = (date) => new Date(date).toLocaleString('en-GB', optionsDay);
const formatHour = (date) => new Date(date).toLocaleString('en-GB', optionsHour)
  const [forecast, setForecast] =useState([])
    useEffect(() => {
    
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0]}&lon=${coordinates[1]}&cnt=40&appid=${APIkey}&units=${unit}`)
      .then(response => {
        console.log(response.data.list)
        setForecast(response.data.list)
      
      })
       }, [coordinates, unit])


       return (
        <div>
          <h2>Forecast 5 day</h2>
          <ul className="forcastList">
            {forecast.map((day,i) => <li key={i}>
              <p>{formatDay(day.dt_txt)}</p> 
              <p>{formatHour(day.dt_txt)}</p> 
              <p>{day.weather[0].main}</p>
              <p>{unit==='metric' ? `${day.main.temp}${'\u00B0C'}`:`${day.main.temp}${'\u00B0F'}`}</p>
              <p>Wind</p>
              <p>{unit==='metric' ? `${day.wind.speed} m/s`:`${day.wind.speed} mph`} </p>
              <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt=""/>
            </li>
       )}
          </ul>
      </div>
       )

       }
export default Forecast