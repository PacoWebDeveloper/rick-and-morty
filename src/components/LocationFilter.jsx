import React from 'react'

const LocationFilter = ({location}) => {
  return (
    <div>
        <div className="locName"><h2>{location.name}</h2></div>
        <div className="locInfo">
            <p className="locType"><b>Type: </b>{location.type}</p>
            <p className="locDimension"><b>Dimension: </b>{location.dimension}</p>
            <p className="locPopulation"><b>Population: </b>{location.residents.length}</p>
        </div>
        {/* <div className="residents">
            {
              location[0].residents.map((resident) => { {console.log(resident)}
                <ResidentCard resident={resident}/>
              })
            }
        </div> */}
    </div>
  )
}

export default LocationFilter