const SelectLocation = ( {onSearch, handleCity,handleChange, selectedValue,
    locations, value, selectRef, }) =>{

const dl = {
    display:'block'
    
}      


return (
    <form className="selectionForm" onSubmit={onSearch}>
        <div>
            <input className="myInput" value={value} onChange={handleChange} placeholder="Search for location..."
            required/>
            <button className="mySearchButton" type="submit">&gt;</button>
        </div>
        <div>
            {locations.length > 0 && <select className="noscrollBar" size={locations.length+1} onChange={handleCity} value={selectedValue} ref={selectRef} placeholder="Select Location">
                <option value="">Select location</option>
                {locations.map((location, i) =>
                <option style={dl} 
                key={i} value={`${location.lat} ${location.lon}`} > 
                {location.state ?
                `${location.name}, ${location.country}, ${location.state}` :
                `${location.name}, ${location.country}`
                }</option>
                )} 
            </select>} 
        </div>       
    </form>

)

}
export default SelectLocation