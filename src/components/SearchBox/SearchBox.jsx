import React, { useEffect, useState } from 'react';
import LocationInfo from '../locationInfo/LocationInfo'
import axios from 'axios'
import ResidentList from '../residentList/ResidentList'
import './SearchBox.css'

const randomId = Math.floor(Math.random() * 126 + 1 )

function SearchBox () {
  const [dataApi, setDataApi] = useState({})
  const [id, setId] = useState(randomId)
  const [zero, setZero] = useState(0)
  const [ten, setTen] = useState(10)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(res => setDataApi(res.data))
      .catch(err => console.log(err))
  }, [])

  const handlerId = (e) => {
    e.preventDefault()
    
      axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(res => setDataApi(res.data))
      .catch(err => console.log(err))
      setZero(0)
      setTen(10)

  }

    return (
        <div className='main'>
          <LocationInfo 
            name={dataApi?.name}
            type={dataApi?.type}
            dimension={dataApi?.dimension}
            residents={dataApi?.residents}
          />
          <form onSubmit={(e)=>handlerId(e)}>
            <input type="number" onChange={(e)=> setId(e.target.value)}/>
            <button type='submit'>Search</button>
          </form>
          <ResidentList 
            residents={dataApi?.residents}
            zero={zero}
            setZero={setZero}
            ten={ten}
            setTen={setTen}
          />
        </div>
    )
}

export default SearchBox
