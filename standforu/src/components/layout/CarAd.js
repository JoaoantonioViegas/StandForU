import React from 'react'
import './CarAd.css'

function CarAd({closeAd, carName}) {

    return (
        <div className='CarAd-bg' onClick={() => closeAd(false)}>
            <div className='CarAd-container'>
                <button onClick={() => closeAd(false)}>X</button>
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