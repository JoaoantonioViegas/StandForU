import React from 'react';
import './CarReview.css';
import { Icon } from '@iconify/react';


function CarReview({carobject, setopenreview}) {
  return (
    <div className='carReview'>
        <div className='closeButton-div'>
            <Icon icon="ep:close-bold" onClick={() => {setopenreview(false)}} />
        </div>
    </div>
  )
}

export default CarReview

