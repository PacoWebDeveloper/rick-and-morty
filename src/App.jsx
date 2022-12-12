import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import LocationFilter from './components/LocationFilter'
import ResidentCard from './components/ResidentCard'

function App() {
  const [location, setLocation] = useState()

  useEffect(() => { 
    const dimensionNumber = randomNumber();
    getDataDimension(dimensionNumber)
  }, [])
  
  const randomNumber = () => {
    return Math.floor(Math.random() * 100)
  }

  const getDataDimension = (dimensionNumber) => {
    const URL = `https://rickandmortyapi.com/api/location/${dimensionNumber}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => {
      console.log(err)
      alert('Dimension not found')
    })
  }

  const submit = (e) => {
    e.preventDefault()
    const dimensionNumber = e.target.userEnter.value
    e.target.userEnter.value = ''
    getDataDimension(dimensionNumber)
  }

  return (
    <div className="App">
      <div className="header">
        <form onSubmit={submit}>
          <input type="text" placeholder='Enter a dimension number' className='inputText' id="userEnter"/>
          <button type="submit">
          <span className="material-symbols-outlined">
            search
          </span>
          </button>
        </form>
      </div>
      <section className='location-containter'>
        {
          location ? <LocationFilter location={location}/> : <p>No data...</p> 
        }
        <div className="residents">
          <h2>Residents</h2>
          { 
            location?.residents.map(residentUrl => 
              <ResidentCard key={residentUrl} residentUrl={residentUrl}/>
            )
          }
        </div>
      </section>
    </div>
  )
}

export default App
