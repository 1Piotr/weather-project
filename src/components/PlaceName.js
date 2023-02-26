

const PlaceName = ({geoName}) => {
    
        console.log(geoName)
    return (
        <div className="place">
            <h2>{geoName[0]}, {geoName[1]}</h2>
        </div>

    )
}

export default PlaceName