import {  useEffect, useState } from 'react'
import axios from 'axios'

const CurrentLocation = ({onCoordinatesChange, onLocalNameChange, APIkey}) => {
    
        const [localCoordiantes, setLocalCoordinates] =useState([])
        const [localName, setLocalName] =useState([])
        const [isMounted, setIsmounted] =useState(false)
        useEffect(() => {
            if (isMounted) {
            axios
              .get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${localCoordiantes[0]}&lon=${localCoordiantes[1]}&limit=1&appid=${APIkey}`)
              .then(response => {
                setLocalName()
              console.log(response.data[0])
              onLocalNameChange([response.data[0].name ,response.data[0].country] )
              
            })}
            else {
                setIsmounted(true);
              }
        }, [localCoordiantes])

        const getLocal = () => navigator.geolocation.getCurrentPosition((position) => {
            const coordiantes =[position.coords.latitude,position.coords.longitude]
            setLocalCoordinates(coordiantes)
            onCoordinatesChange(coordiantes)
            
       
       })
        return (
        <div>
          <button className="myButton" onClick={getLocal}>Your location</button>
        </div>
        )
      }
      export default CurrentLocation ;
        
     
      
      
      
      
      

