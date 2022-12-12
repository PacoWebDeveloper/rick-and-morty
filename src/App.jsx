import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import LocationFilter from './components/LocationFilter'
import ResidentCard from './components/ResidentCard'

function App() {
  const [text, setText] = useState()
  const [location, setLocation] = useState()

  useEffect(() => { 
    const number = randomNumber();
    const URLforRandom = `https://rickandmortyapi.com/api/location/${number}`
    axios.get(URLforRandom)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [])
  
  useEffect(() => {
    if (text) {
      const URL = `https://rickandmortyapi.com/api/location?name=${text}`
      axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => console.error(err))
    }
  }, [text])  
  
  const randomNumber = () => {
    return Math.floor(Math.random() * 100)
  }

  const getText = (e) => {
    e.preventDefault()
    setText(e.target.userEnter.value)    
  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      {
        <form onSubmit={getText}>
          <input type="text" id="userEnter" />
          <button type="submit">Search</button>
        </form>
      }
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
    </div>
  )
}

export default App
