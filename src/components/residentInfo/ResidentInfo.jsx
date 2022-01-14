import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ResidentInfo.css'

const ResidentInfo = ({url}) => {
    const [characters, setCharacters] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))    
    }, [url])

    return (
        <div className='card'>
            <img src={characters.image} alt=""/>
            <h3>{characters?.name}</h3>
            <h3>{characters?.origin?.name}</h3>
            <div className='status'>
                <div className={characters?.status === 'Alive' ? 'greenButton' : 'redButton'}>
                </div>
                <h3>{characters?.status}</h3>
            </div>
            <h3>{characters?.episodios?.length}</h3>
        </div>
    )
}

export default ResidentInfo
