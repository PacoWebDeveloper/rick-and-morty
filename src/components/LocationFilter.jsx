import React from 'react'

const LocationFilter = ({location}) => {
  return (
    <div className='location-data'>
        <div className="locName"><h2>{location.name}</h2></div>
        <div className="locInfo">
            <p className="locType"><b>Type: </b><br />{location.type}</p>
            <p className="locDimension"><b>Dimension: </b><br />{location.dimension}</p>
            <p className="locPopulation"><b>Population: </b><br />{location.residents.length}</p>
        </div>
    </div>
  )
}

export default LocationFilter