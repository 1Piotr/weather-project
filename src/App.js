import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './components/Weather'
import Forecast from './components/Forecast'
import ToggleUnits from './components/ToggleUnits'
import SelectLocation from './components/SelectLocation'
import CurrentLocation from './components/CurrentLocation'
import PlaceName from './components/PlaceName'
import './App.css';


const App = () => {
  const [city, setCity]=useState('')
  const [coordinates, setCoordinates] =useState([])
  const [selectedValue, setSelectedValue] = useState("")
  const [locations, setLocations] = useState([])
  const [unit, setUnit] = useState('metric')
  const [value, setValue] = useState('')
  const [geoName, setGeoname] =useState([])
  const [isMounted, setIsmounted] =useState(false)

  const handleChange = (event) => {
        setValue(event.target.value)
      }
  const handleToggleStateChange = (newUnit) => {
    setUnit(newUnit);
  }
  const handleCoordinatesStateChange = (localCoordiantes) =>{
    setCoordinates(localCoordiantes)
  }

  const handleGeonameStateChange = (localName) => {
    setGeoname(localName)
  }

  const APIkey =process.env.REACT_APP_API_KEY;
  
  useEffect(() => {
   if (isMounted){
    axios
    .get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        setLocations(response.data)
        console.log(locations);
      })
      .catch(error => {
        console.error(error);
      });}
      else {
        setIsmounted(true)
      }
  } 
  , [city]);
// i want the list of options to automatically open
   
  
  
  const onSearch = (event) => {
    event.preventDefault()
    setCity(value)
    setValue('')
    
  }
  const handleCity = (event) => {
    setSelectedValue(event.target.value)
    if (event.target.value !==""){
      console.log(event.target.value)
      const myArray =(event.target.value).toString().split(" ")
      setCoordinates(myArray)
     const index= event.target.selectedIndex - 1
    setGeoname([locations[index].name, locations[index].country] )
    console.log([locations[index].name, locations[index].country])
      console.log(geoName)
  }
  setLocations([])
}
  return (
    <div className="app">
      <div className="main">
          <div className="headline">
            <h1>Check the weather</h1>
          </div>
          <div className="myButtons">
            <ToggleUnits onStateChange={handleToggleStateChange} />
            <CurrentLocation onCoordinatesChange={handleCoordinatesStateChange} 
            onLocalNameChange={handleGeonameStateChange} APIkey={APIkey}/>
          </div>
          <SelectLocation onSearch={onSearch} handleCity={handleCity}
          selectedValue={selectedValue} handleChange={handleChange} locations={locations} value={value}/>
          {geoName.length > 0  && <PlaceName geoName={geoName}/>}
        {coordinates.length === 2 && <Weather coordinates={coordinates} APIkey={APIkey} unit={unit}/>}
      </div>
      <div className="forcast">
        {coordinates.length === 2 && <Forecast coordinates={coordinates} APIkey={APIkey} unit={unit}/>}
      </div>
    </div>
  )
}
 
export default App;
