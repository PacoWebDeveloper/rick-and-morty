import React from 'react'

const LocationFilter = ({location}) => {
  return (
    <div className='location-data'>
        <div className="locName bold"><h2>{location.name}</h2></div>
        <div className="locInfo">
            <div className="locSection">
              <p className="locType bold">Type:</p>
              <span>{location.type}</span>
            </div>
            <div className="locSection">
              <p className="locDimension bold">Dimension:</p>
              <span>{location.dimension}</span>
            </div>
            <div className="locSection">
              <p className="locPopulation bold">Population:</p>
              <span>{location.residents.length}</span>
            </div>
        </div>
    </div>
  )
}

export default LocationFilter