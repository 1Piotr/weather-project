import { useState } from 'react'

const ToggleUnits = ({onStateChange}) => {
    const[unit, setUnit] = useState('metric')
    const label = unit === 'metric' ? 'Change to imperial units':
    'Change to metric units'
    const handleUnits = () => {
      const newUnit =  unit === 'metric' ? 'imperial' :'metric'
      setUnit(newUnit)
      onStateChange(newUnit);
    }

    return (
        <div>
            <button className="myButton" onClick={handleUnits}>{label}</button>
        </div>
    )
}

export default ToggleUnits