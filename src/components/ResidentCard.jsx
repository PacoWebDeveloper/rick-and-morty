import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ResidentCard = ({residentUrl}) => {

  const [resident, setResident] = useState()
    
  useEffect(() => {
    axios.get(residentUrl)
      .then(res => setResident(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='resident-card'>
      {console.log(resident)}
      <img src={resident?.image} alt={resident?.name} />
      <div className="res-data">
        <span className="res-status">{resident?.status}</span>
        <h2 className='res-name'>{resident?.name}</h2>
        <p>Specie</p>
        <span>{resident?.species}</span>
        <p>Origin</p>
        <span className='res-origin'>{resident?.origin.name}</span>
        <p>Episodes where appear</p>
        <span className="res-episodes">{resident?.episode.length}</span>
      </div>
    </div>
  )
}

export default ResidentCard