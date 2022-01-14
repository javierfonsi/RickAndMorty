import React from 'react'
import './LocationInfo.css'

const LocationInfo = ({name, type, dimension, residents}) => {
    return (
        <div className='allView'>
            <h2>{name}</h2>
            <ul>
                <li>Type: {type}</li>
                <li>Dimension: {dimension}</li>
                <li>Resident: {residents?.length}</li>
            </ul>
        </div>
    )
}

export default LocationInfo

