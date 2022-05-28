import React from 'react';
import './CarReview.css';
import { Icon } from '@iconify/react';
import {motion} from 'framer-motion';


function CarReview({carobject, setopenreview}) {
  return (
    <motion.div 
    animate={{y:0}}
    initial={{y:1000}} 
    exit={{scale:0.2, opacity:0}}
    transition={{ type: "spring", stiffness: 400, damping: 30}}
    className='carReview'>
        <div className='closeButton-div'>
            <Icon icon="ep:close-bold" onClick={() => {setopenreview(false)}} className='closeButton-btn'/>
        </div>
        <div className='carReview-container'>
          Car reviews...
        </div>
    </motion.div>
  )
}

export default CarReview

