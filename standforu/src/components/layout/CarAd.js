import React from 'react'
import './CarAd.css'

function CarAd({closeAd, visible, carName}) {

    return (
        <div className='CarAd-bg'>
            <button onClick={() => {closeAd(false); visible('visible');}}>X</button>
            <div className='CarAd-container'>
                <div className='overview'>
                    <h1>{carName} overview</h1>
                </div>
                <div className='car-info'>
                    <p>Car Ad extra info</p>
                </div>
                <div className='car-location'>
                    <p>Car Ad location</p>
                </div>
            </div>
        </div>
    )
}

export default CarAd