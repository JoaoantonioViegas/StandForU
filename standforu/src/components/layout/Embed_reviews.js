import React from "react";
import { useState } from "react";
import "./Embed_reviews.css";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Embed_reviews(props) {
    const {icon,title, description, image} = props;
    console.log(image)
    const [iconStyle, setIconStyle] = React.useState('');
    const [revShow, setRevShow] = React.useState(true);
    const [value,setvalue] = React.useState(randomNumberInRange(10,300));
    React.useEffect(() => {
        if (icon === 'trash'){
            setIconStyle('trash');
        } else if (icon === 'heart'){
            setIconStyle('heart');
        } else if (icon === 'fav'){
            setIconStyle('fav');
        } else {
            setIconStyle('none');
        }
    }, [icon]);

    const trash = () => {
        setRevShow(!revShow);
        //toast warning are u sure?
        toast.warn("Do you want to delete this review?");
    }

    
    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
      // 👇️ get number between min (inclusive) and max (inclusive)
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <motion.div animate={{opacity : 1, y:-10}} initial={{opacity:0}} exit={{opacity:0, y:10}} transition={{ duration:0.3}} style={{cursor:'pointer', display : revShow? '' : 'none'}}>
            <div className="embed">
                <img className="fotocar" src={require('../../images/'+image)} alt="title"/>
                <a className="text">
                    <strong>
                        {title}
                    </strong>
                    <p>
                    {description}
                    </p>
                </a>
                <div className="review-icon">
                    {iconStyle==='trash' && <Icon icon="bi:trash" onClick={trash}/>}
                    {iconStyle==='heart' && <div className="divheart"><Icon  icon="akar-icons:heart" width="25px" onClick={() => setIconStyle('fav')} style={{cursor:'pointer'}}/><h4>{value}</h4></div>}
                    {iconStyle==='fav' && <div className="divheart"><Icon  icon="emojione:red-heart" width="25px" onClick={() => setIconStyle('heart')} style={{cursor:'pointer'}}/><h4>{value}</h4></div>}
                </div> 
            </div>
        </motion.div>
        
    );
}

export default Embed_reviews;
